import React from 'react';
import { Button } from '../ButtonElements';

import { AboutContainer, AboutWrapper, AboutRow, Column1, 
Column2, Img, ImgWrap, TextWrapper, TopLine, Heading, SubTitle, BtnWrap }
from './AboutElements';

const AboutSection = ({lightBg, id, imgStart, img, darkText, topLine, description, headline, buttonLabel, alt, lightText, primary, dark, dark2 }) => {
    return (
        <div>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrap>
                                <Button to="home" 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact="true" 
                                offset={-80} 
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </div>
    )
}

export default AboutSection
