import sprite from "../../assets/images/code.svg";

type IconProps = {
    id: string;
    width: number;
    height: number;
    viewBox: string;
};

export const Icon = ({id, width = 150, height = 150,viewBox}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox={viewBox}>
            <use href={`${sprite}#${id}`}/>  {/*на старых браузерах все равно потребуется xlinkHref*/}
        </svg>
    );
};
