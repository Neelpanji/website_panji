import React from 'react';
import { FlipHintContainer, FlipHintContainerMobile, FlipHintContentContainer, FlipHintImage, FlipHintLeftContainer, FlipHintRightContainer } from './ServicesElements';

export const MobileFlipHint = React.forwardRef((props, ref) => {
    return (
        <FlipHintContainerMobile hintLoadedMobile={props.hintLoadedMobile}>

            <FlipHintLeftContainer>
                Previous <br /> Page
                <FlipHintImage src="assets\images\logos\clicking_l_w.png" alt="Click Here" />
            </FlipHintLeftContainer>
            <FlipHintRightContainer>
                Next <br /> Page
                <FlipHintImage src="assets\images\logos\clicking_r_w.png" alt="Click Here" />
            </FlipHintRightContainer>
        </FlipHintContainerMobile>
    );
});

export const DesktopLeftFlipHint = React.forwardRef((props, ref) => {
    return (
        <FlipHintContainer hintLoaded={props.hintLoaded}>
            <FlipHintContentContainer>
                Previous <br /> Page
                <FlipHintImage src="assets\images\logos\clicking_l_w.png" alt="Click Here" />
            </FlipHintContentContainer>
        </FlipHintContainer>
    );
});
export const DesktopRightFlipHint = React.forwardRef((props, ref) => {

    if (props.id !== 1) {
        return (
            <span></span>
        );
    }
    else {
        return (
            <FlipHintContainer hintLoaded={props.hintLoaded}>
                <FlipHintContentContainer>
                    Next <br /> Page
                    <FlipHintImage src="assets\images\logos\clicking_r_w.png" alt="Click Here" />
                </FlipHintContentContainer>
            </FlipHintContainer>
        );
    }

});