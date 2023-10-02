import styled from "styled-components";
import { Footer, Navbar } from "../components";
import { TbEdit } from "react-icons/tb";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReadyRecord = () => {
  return (
    <>
      <Navbar />
      <Recording>
        <div className="wrapper">
          <div className="left">
            <h1>Your Video Is Ready</h1>

            <div className="title">
              <h3>Video a Title</h3>
              <button>
                <TbEdit />
              </button>
            </div>
            <form className="email-share" action="#">
              <input type="email" placeholder="enter email of receiver" />
              <button>Send</button>
            </form>
            <form className="link-copy">
              <h5>Video Url</h5>
              <input type="url" value="www.helpMeOut.com/my-vid" />
              <button>Copy URL</button>
            </form>
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
          </div>
          <div className="right">
            <div className="video-frame">
              <video src="" controls></video>
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
                    Corrupti praesentium nostrum rem accusantium impedit
                    deserunt corporis ab aperiam, culpa molestiae?
                  </p>
                </article>
              </div>
            </TranscriptContainer>
          </div>
        </div>
        <div className="save-to-account-banner">
          <div className="stab-wrapper">
            <h4>
              To ensure the availability and privacy of your video, we recommend
              saving it to your account.
            </h4>
            <button>Save Video</button>
            <p>
              Don’t have account yet? <Link to="/auth">Create Account</Link>
            </p>
          </div>
        </div>
      </Recording>
      <Footer />
    </>
  );
};

const Recording = styled.div`
  width: 100%;
  height: 100%;
  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    padding-top: 3rem;
    justify-content: center;
    @media screen and (max-width: 960px) {
      flex-direction: column;
      gap: 3rem;
      max-width: 80%;
      .left {
        border-right: none !important;
        padding-right: 0 !important;
      }
      .right {
        padding-left: 0 !important;
      }
    }
    .left {
      display: grid;
      gap: 2rem;
      width: 100%;
      padding-right: 2rem;
      border-right: 1px solid #ddd;
      .title {
        margin-top: 1.5rem;
        display: flex;
        align-items: flex-end;
        gap: 5px;
        h1 {
          font-size: 1.5rem;
        }
        button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
      }
      .email-share {
        display: flex;
        flex-direction: column;
        position: relative;
        font-family: "Work Sans";
        gap: 1rem;
        width: 100%;
        input {
          width: 100%;
          font-family: "Work Sans";
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 0.9rem;
          outline: none;
          background: #eee;
        }
        button {
          position: absolute;
          right: 2%;
          font-family: "Work Sans";
          top: 50%;
          padding: 0.5rem 1rem;
          color: #fff;
          border-radius: 10px;
          background: #bfbece;
          transform: translateY(-50%);
          border: none;
          font-size: 0.9rem;
        }
      }
      .link-copy {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        position: relative;
        width: 100%;

        input {
          font-family: "Work Sans" !important;
          width: 100%;

          padding: 1rem;
          border-radius: 10px;
          border: 1px solid #bbb;
          font-size: 0.9rem;
          outline: none;
          background: #f9f9f9;
        }
        button {
          font-family: "Work Sans";
          position: absolute;
          right: 2%;
          top: 50%;
          transform: translateY(-50%);
          padding: 0.5rem;
          color: #000;
          border-radius: 10px;
          background: none;
          border: 1px solid #000;
          font-size: 0.9rem;
        }
      }
      .share_on_socials {
        margin-top: 2rem;
        h4 {
          font-family: "Work Sans";
          font-weight: 500;
          font-size: 1.2rem;
        }
        .social-cards {
          margin-top: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          .card {
            display: flex;
            align-items: center;
            gap: 10px;
            width: fit-content;
            border: 1px solid #000;
            border-radius: 5px;
            h5 {
              font-family: "Inter";
              font-weight: 500;
              font-size: 1rem;
            }
          }
        }
      }
    }
    .right {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 2rem;
      .video-frame {
        width: 100%;
        height: 21rem;
        display: flex;
        justify-content: center;
        align-items: center;

        video {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
  }
  .save-to-account-banner {
    width: 100%;
    padding: 5rem;
    background: #f9f9ff;
    margin-top: 3rem;
    .stab-wrapper {
      text-align: center;
      display: grid;
      gap: 1.5rem;
      justify-items: center;
      max-width: 510px;
      margin: 0 auto;
      h4 {
        font-size: 1.2rem;
      }
      button {
        font-size: 1rem;
        padding: 1rem 2rem;
        border: none;
        outline: none;
        border-radius: 10px;
        background: var(--accent-color);
        color: #fff;
        cursor: pointer;
      }
      p {
        color: #7e7e7e;
        a {
          color: var(--accent-color);
          text-decoration: underline;
        }
      }
    }
  }
`;

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
export default ReadyRecord;
