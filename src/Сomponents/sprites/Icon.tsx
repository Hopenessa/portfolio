import sprite from "../../assets/images/IconSprite.svg";
import styled from "styled-components";


type IconProps = {
    id: string;
    width: number;
    height: number;
    viewBox: string;
};

export const Icon = ({id, width = 150, height = 150, viewBox,}: IconProps) => {
    return (
        <StyledSvg width={width} height={height} viewBox={viewBox}>
            <use href={`${sprite}#${id}`}/>  {/*на старых браузерах все равно потребуется xlinkHref*/}
        </StyledSvg>
    );
};


const StyledSvg = styled.svg`
    color: #FFFFFF3F;

    transition: color 0.2s ease, transform 0.3s ease;

    &:hover {
        color: #e5f8f1;
        transform: scale(1.3);
        transform-origin: center;
    }
;`


