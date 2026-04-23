import sprite from "../../assets/images/FrameSprite.svg"
import styled from "styled-components";

type FrameProps = {
    id: string;
    viewBox: string;
    svgColor: string;
    isLookUp: boolean;
    flippedHorizontal: boolean;

    Top?: string;
    Bottom?: string;
    marginTop?: string;
};

type FramePositionProps = {
    $Top?: string;
    $Bottom?: string;
    $marginTop?: string;
};

export const Frame = ({
                          id,
                          viewBox,
                          svgColor,
                          isLookUp,
                          flippedHorizontal,
                          Top,
                          Bottom,
                          marginTop
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
        <FrameSvg
            viewBox={viewBox}
            fill={svgColor}
            preserveAspectRatio="xMidYMid meet"
            $Top={Top}
            $Bottom={Bottom}
            $marginTop={marginTop}
        >
            <g transform={transforms.join(' ')}>
                <use href={`${sprite}#${id}`}/>
            </g>
        </FrameSvg>
    );
};

export const FrameSvg = styled.svg<FramePositionProps>`
    width: 100%;
    height: auto;
    display: block;

    position: absolute;
    left: 0;

    ${({$Top}) => $Top && `top: ${$Top};`}
    ${({$Bottom}) => $Bottom && `bottom: ${$Bottom};`}
    ${({$marginTop}) => $marginTop && `margin-top: ${$marginTop};`}
`;
