import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="signin">Contact</FooterLink>
                                <FooterLink to="signin">Careers</FooterLink>
                                <FooterLink to="signin">Investors</FooterLink>
                                <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Partners</FooterLinkTitle>
                                <FooterLink to="signin">Banking</FooterLink>
                                <FooterLink to="signin">Lenders</FooterLink>
                                <FooterLink to="signin">Irish Credit Bureau</FooterLink>
                                <FooterLink to="signin">Neo Blockchain</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Integration</FooterLinkTitle>
                                <FooterLink to="signin">Open API</FooterLink>
                                <FooterLink to="signin">Connect to you Platform</FooterLink>
                                <FooterLink to="signin">How to Docs</FooterLink>
                                <FooterLink to="signin">Video Tutorials</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>

    )
}

export default Footer
