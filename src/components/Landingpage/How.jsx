import { screen } from "../../assets/images";
import {
  Heading,
  HowContainer,
  Title,
} from "../../styled-components/Container";

const How = () => {
  return (
    <HowContainer>
      <div className="wrapper">
        <Heading>
          <Title>How it works</Title>
        </Heading>
        <div className="grid">
          <div className="item">
            <div className="number">1</div>
            <h3>Record Screen</h3>
            <p>
              Click the “Start Recording” button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src={screen} alt="" />
          </div>
          <div className="item">
            <div className="number">2</div>
            <h3>Share Your Recording</h3>
            <p>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img src={screen} alt="" />
          </div>
          <div className="item">
            <div className="number">3</div>
            <h3>Learn Effortlessly</h3>
            <p>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img src={screen} alt="" />
          </div>
        </div>
      </div>
    </HowContainer>
  );
};

export default How;
