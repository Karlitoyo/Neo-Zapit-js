import React from 'react';
import { Button } from 'react-scroll';

import { AboutContainer, AboutWrapper, AboutRow, Column1, 
Column2, Img, ImgWrap, TextWrapper, TopLine, Heading, SubTitle, BtnWrap }
from './AboutElements';

const AboutSection = () => {
    return (
        <div>
            <AboutContainer>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Topline</TopLine>
                            <Heading>Heading</Heading>
                            <SubTitle>Subtitle</SubTitle>
                            <BtnWrap>
                                <Button to="home" />
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img />
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </div>
    )
}

export default AboutSection
