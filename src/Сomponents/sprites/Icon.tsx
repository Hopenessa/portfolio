import sprite from "../../assets/images/IconSprite.svg";
import styled from "styled-components";


type IconProps = {
    id: string;
    width: number;
    height: number;
    viewBox: string;

    iconColor: string;
    iconHover: string;
};

type IconStyledProps = {
    $iconColor: string;
    $iconHover: string;
}

export const Icon = ({id, width = 150, height = 150, viewBox, iconColor, iconHover}: IconProps) => {
    return (
        <StyledSvg width={width} height={height} viewBox={viewBox} $iconColor={iconColor} $iconHover={iconHover}>
            <use href={`${sprite}#${id}`}/>  {/*на старых браузерах все равно потребуется xlinkHref*/}
        </StyledSvg>
    );
};


const StyledSvg = styled.svg<IconStyledProps>`
    ${({ $iconColor }) => `color: ${$iconColor || "#FFFFFF3F"};`}

    transition: color 0.2s ease, transform 0.3s ease;

    &:hover {
        ${({ $iconHover }) => `pointer-events: ${$iconHover || "visible"};`}
        color: #ff9200;
        transform: scale(1.3);
        transform-origin: center;
    }
;`
