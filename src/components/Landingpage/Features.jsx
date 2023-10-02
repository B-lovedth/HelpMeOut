import { ico1, ico2, ico3, vidImg } from "../../assets/images";
import { FeatureContainer, Heading, Title } from "../../styled-components/Container";

const Features = () => {
  return (
    <FeatureContainer>
      <div className="wrapper">
      <Heading>
        <Title>Features</Title>
        <p>Key Highlights Of Our Extension.</p>
      </Heading>
      <div className="feature-content">
        <div className="list">
          <div className="item">
            <img src={ico1} alt="" />
            <div className="right">
              <h3>Simple Screen Recording</h3>
              <p>
              Effortless screen recording for everyone. Record with ease, no tech expertise required.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={ico2} alt="" />
            <div className="right">
              <h3>Easy-to-Share URL</h3>
              <p>
              Share your recordings instantly with a single link. No attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={ico3} alt="" />
            <div className="right">
              <h3>Revisit Recordings</h3>
              <p>
              Access and review your past content effortlessly. Your recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-img">
          <img src={vidImg} alt="" />
        </div>
      </div>
      </div>
    </FeatureContainer>
  );
};

export default Features;
