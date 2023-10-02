import { Link } from "react-router-dom";
import { IsLoggedNav } from "../components";
import { VideoDetail } from "../styled-components";
import { TbEdit } from "react-icons/tb";
import styled from "styled-components";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";

const VideoView = () => {
  return (
    <VideoDetail>
      <div className="wrapper">
        <div className="top">
          <IsLoggedNav />
          <div className="routes">
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/video-repository#recent">Recent Videos</Link>
            {" / "}
            <Link to="/video-repository">Video Title generate</Link>
          </div>
          <div className="title">
            <h1>Video a Title</h1>
            <button>
              <TbEdit />
            </button>
          </div>
        </div>
        <div className="video-frame">
          <video src="" controls></video>
        </div>
        <div className="share">
          <form className="email-share" action="#">
            <input type="email" placeholder="enter email of receiver" />
            <button>Send</button>
          </form>
          <form className="link-copy">
            <input type="email" value="www.helpMeOut.com/my-vid" />
            <button>Copy URL</button>
          </form>
        </div>
        <div className="share_on_socials">
          <h4>Share your video</h4>
          <div className="social-cards">
            <div className="card">
              <FaFacebook style={{ color: "blue" }} />
              <h5>Facebook</h5>
            </div>
            <div className="card">
              <FaWhatsapp style={{ color: "green" }} />
              <h5>WhatsApp</h5>
            </div>
            <div className="card">
              <FaTelegram color="#2ca5e1" />
              <h5>Telegram</h5>
            </div>
          </div>
        </div>
        <TranscriptContainer mTOp="3rem">
          <h4>Transcript</h4>
          <select name="Language" id="language">
            <option selected value="English">
              English
            </option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
          <div className="transcript-window">
            <article className="timestamp">
              <p>0:00</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti praesentium nostrum rem accusantium impedit deserunt
                corporis ab aperiam, culpa molestiae?
              </p>
            </article>
          </div>
        </TranscriptContainer>
      </div>
    </VideoDetail>
  );
};
const TranscriptContainer = styled.div`
  width: 100%;
  margin-top: ${(props) => props.mTOp || "0px"};
  select {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
    outline: none;
  }
`;

export default VideoView;
