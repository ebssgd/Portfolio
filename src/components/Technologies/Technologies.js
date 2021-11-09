import React from "react";
import { DiReact, DiStackoverflow, DiMongodb } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js <br />
            JavaScript <br />
            HTML / CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Node <br />
            Express <br />
            Mongoose / MongoDB <br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiStackoverflow size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Handlebars.js <br />
            Mocha / Chai <br />
            bcrypt <br />
            REST APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
