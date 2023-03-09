import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styled from "styled-components";
// import twitter from "./src/twitter.png";

const FooterContainer = styled.div`
  background-color: #2d2d32;
  margin-top: 200px;
`;

const FooterWrapper = styled.div`
  padding: 4rem 4rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  margin-bottom: 2rem;
`;

const FooterLinkDiv = styled.div`
  width: 200px;
  margin: 3rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  button {
    border-radius: 15px;
    margin-right: -30px;
    margin-left: 30px;
    padding: 9px;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border: 2px solid white;
    background: transparent;
    transition: 0.5s;
  }
  button:hover {
    background-color: white;
    color: black;
  }
`;

const FooterLink = styled.a`
  color: rgb(175, 175, 179);
  text-decoration: none;
  font-size: 14px;
  line-height: 15px;
  margin: 0.5rem 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  a {
    margin: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    transition: transform 0.4s;
  }
  a:hover {
    transform: scale(1.2);
  }
`;

const Input = styled.input`
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
`;

const BelowFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
`;

const BelowFooterLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

const BelowFooterLink = styled.a`
  font-size: 13px;
  line-height: 15px;
  margin-left: 2rem;
  color: white;
  font-weight: 600;
`;

const Copyright = styled.div`
  font-size: 13px;
  line-height: 15px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  margin-bottom: 3rem;
`;
export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          <FooterLinkDiv>
            <h4>For Business</h4>
            <FooterLink href="/employer">Employer</FooterLink>
            <FooterLink href="/healthplan">Health Plan</FooterLink>
            <FooterLink href="/individual">Individual</FooterLink>
          </FooterLinkDiv>
          <FooterLinkDiv>
            <h4>Resources</h4>
            <FooterLink href="/resource">Resource Center</FooterLink>
            <FooterLink href="/resource">Testimonials</FooterLink>
            <FooterLink href="/resource">STV</FooterLink>
          </FooterLinkDiv>
          <FooterLinkDiv>
            <h4>Company</h4>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/press">Press</FooterLink>
            <FooterLink href="/career">Career</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterLinkDiv>
          <FooterLinkDiv>
            <h4>Connect With Us</h4>
            <SocialMedia>
              <a href="www.facebook.com">
                <FaFacebook />
              </a>
              <a href="www.instagram.com">
                <FaInstagram />
              </a>
              <a href="www.twitter.com">
                <FaTwitter />
              </a>
              <a href="www.github.com">
                <FaGithub />
              </a>
              <a href="www.linkedinIn.com">
                <FaLinkedinIn />
              </a>
              <a href="www.youtube.com">
                <FaYoutube />
              </a>
            </SocialMedia>
            <Input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </FooterLinkDiv>
        </FooterLinks>
        <BelowFooter>
          <BelowFooterLinks>
            <BelowFooterLink href="/terms">Terms of Use</BelowFooterLink>
            <BelowFooterLink href="/privacy">Privacy Policy</BelowFooterLink>
          </BelowFooterLinks>
          <div>
            <p>© 2023 House Rent. All rights reserved.</p>
          </div>
        </BelowFooter>
        <Copyright>
          <p>Made by AAPS.</p>
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}
