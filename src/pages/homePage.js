import React from 'react';
import Section from 'components/section/section';
import Title from 'components/title/title';
import Container from 'components/container/container';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Title title="Welcome to the test room project" />
        <p>
          the project implements the display of tweets and the ability to
          subscribe to a person
        </p>
      </Container>
    </Section>
  );
};

export default HomePage;
