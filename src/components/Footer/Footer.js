import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Linkedin</LinkTitle>
          <LinkItem
            href="https://www.linkedin.com/in/bryan-ebert-37458356/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find me on Linkedin
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem
            href="mailto:Bryan@bryanebert.com" //site email goes here
            target="_blank"
            rel="noopener noreferrer"
          >
            Bryan@bryanebert.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Thanks for stopping by!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/ebssgd?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/bryan-ebert-37458356/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
