import sprite from "../../assets/images/FrameSprite.svg"
import styled from "styled-components";

type FrameProps =
    {
        id: string;
        viewBox: string;
        svgColor: string;
        isLookUp: boolean;
        flippedHorizontal: boolean;
    };

export const Frame = ({
                          id,
                          viewBox,
                          svgColor,
                          isLookUp,
                          flippedHorizontal
                      }: FrameProps) => {
    const [, , width, height] = viewBox.split(' ').map(Number);

    const transforms = [];

    if (flippedHorizontal) {
        transforms.push(`translate(${width}, 0) scale(-1, 1)`);
    }

    if (isLookUp) {
        transforms.push(`translate(0, ${height}) scale(1, -1)`);
    }

    return (
        <FrameSvg viewBox={viewBox} fill={svgColor} preserveAspectRatio="xMidYMid meet">
            <g transform={transforms.join(' ')}>
                <use href={`${sprite}#${id}`}/>
            </g>
        </FrameSvg>
    );
};

export const FrameSvg = styled.svg`
    width: 100%;
    height: auto;
    display: block;;`