import React, {useState} from 'react'
import Video from '../../videos/neo-zapit.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent,
HeroH1, HeroBtnWrapper, HeroP, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Neo-Zapit
                </HeroH1>
                <HeroP>
                    Peer to Peer Finance
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/wallet"
                    onMouseEnter={onHover}
                    onMpouseLeave={onHover}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact="true" 
                    offset={-80}>
                        Connect Wallet {hover ?
                         <ArrowForward /> :
                          <ArrowRight />}
                          </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
