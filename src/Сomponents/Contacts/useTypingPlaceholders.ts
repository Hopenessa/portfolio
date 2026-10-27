import {useEffect, useRef, useState, type RefObject} from "react";

const hints = {
    email: "example@gmail.com",
    name: "Your name",
    message: "Let’s work together!",
};
type Field = keyof typeof hints;
const fields = Object.keys(hints) as Field[];

export function useTypingPlaceholders(form: RefObject<HTMLFormElement>) {
    const [placeholders, setPlaceholders] = useState({email: '', name: '', message: ''});
    const completed = useRef(new Set<Field>());

    const finishField = (field: Field) => {
        completed.current.add(field);
        setPlaceholders(previous => ({...previous, [field]: hints[field]}));
    };

    useEffect(() => {
        const element = form.current;
        if (!element) return;

        const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
        let timer: ReturnType<typeof setTimeout> | undefined;
        let started = false;
        let stopped = false;

        const showAll = () => {
            stopped = true;
            clearTimeout(timer);
            fields.forEach(field => completed.current.add(field));
            setPlaceholders({...hints});
        };

        const typeField = (index: number, length = 0) => {
            if (stopped || index >= fields.length) return;
            const field = fields[index];
            const input = element.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
            if (completed.current.has(field) || input.value || document.activeElement === input) {
                completed.current.add(field);
                setPlaceholders(previous => ({...previous, [field]: hints[field]}));
                timer = setTimeout(() => typeField(index + 1), 150);
                return;
            }
            setPlaceholders(previous => ({...previous, [field]: hints[field].slice(0, length)}));
            if (length < hints[field].length) {
                timer = setTimeout(() => typeField(index, length + 1), 65);
            } else {
                completed.current.add(field);
                timer = setTimeout(() => typeField(index + 1), 300);
            }
        };

        const observer = new IntersectionObserver(entries => {
            if (!started && entries.some(entry => entry.isIntersecting)) {
                started = true;
                observer.disconnect();
                if (!stopped) typeField(0);
            }
        }, {threshold: 0.2});

        const onPreferenceChange = () => {
            if (preference.matches) showAll();
        };
        if (preference.matches) showAll();
        else observer.observe(element);
        preference.addEventListener('change', onPreferenceChange);

        return () => {
            stopped = true;
            clearTimeout(timer);
            observer.disconnect();
            preference.removeEventListener('change', onPreferenceChange);
        };
    }, [form]);

    return {placeholders, finishField};
}
