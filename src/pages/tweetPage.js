import Section from 'components/section/section';
import Container from 'components/container/container';

import Tweets from 'components/tweets/tweets';

const TweetPage = () => {
  return (
    <Section>
      <Container>
        <Tweets />
      </Container>
    </Section>
  );
};

export default TweetPage;
