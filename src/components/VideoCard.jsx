import { Video } from "../styled-components";
import { FiLink2 } from "react-icons/fi";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const VideoCard = ({ ...video }) => {
  return (
    <Video >
      <div className="card-wrapper">
        <Link to="/video-detail" className="thumbnail">
          <img src={video.thumbnail} alt="" />
        </Link>
        <div className="details">
          <div className="video-title">
            <h3>{video.title}</h3>
            <p>{video.date}</p>
          </div>
          <div className="video-options">
           <button> <FiLink2 /></button>
            <button><PiDotsThreeOutlineVerticalDuotone /></button>
          </div>
        </div>
      </div>
    </Video>
  );
};

export default VideoCard;
