import { FaSearch } from "react-icons/fa";
import { IsLoggedNav, VideoCard } from "../components";
import { Flex, Grid } from "../styled-components";
import { RepoContainer } from "../styled-components/Container";
import { styled } from "styled-components";
import {frame1,frame2} from "../assets/images"


const VideoRepo = () => {
    const videos = [
        {
            thumbnail: frame1,
            title: "How to create a landing page with React",
            date:"SEPTEMER 12, 2021",
            url: "https://www.youtube.com/watch?v=7WwtzsSHdpI"
        },
        {
            thumbnail: frame2,
            title: "How To Create Facebook Ad Listing",
            date:"SEPTEMEMBER 12, 2021",
            url: "https://www.youtube.com/watch?v=7WwtzsSHdpI"
        }
    ]
  return (
    <RepoContainer>
      <div className="wrapper">
        <IsLoggedNav />
        <Flex justify="space-between" padding="1rem 0">
            <div className="left">
                <h1>Hello! Solomon Great</h1>
                <p style={{opacity:"0.5"}}>Here are your recorded videos</p>                
            </div>
            <Search className="right">
                <input type="text" placeholder="Search for a particular video"/>
                <button><FaSearch/></button>
            </Search>
        </Flex>
      </div>
      <hr />
      <div className="videos-wrapper">
        <h3 id="recent">Recent Files</h3>
        <div className="pane">
        <Grid gap="3rem">
            {videos.map((video, index) => {
                return (
                   <VideoCard key={index} {...video}/>
                )
            })}
        </Grid>
        </div>
        <h3>Files from last week</h3>
        <div className="pane">
        <Grid gap="3rem">
            {videos.map((video, index) => {
                return (
                   <VideoCard key={index} {...video}/>
                )
            })}
        </Grid>
        </div>
      </div>
    </RepoContainer>
  );
};

const Search= styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 4rem;
    position:relative;
    input{
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 1rem 0 4.5rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        background: #eee;
        font-weight: 500;
        color: #000;
        &::placeholder{
            color: #ccc;

        }
    }
    button{
        width: 4rem;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
        color: #ccc;
        font-size: 1.5rem;
        cursor: pointer;
        position:absolute;
        left:5%;
        top:0;
        transform:translateX(-1rem);

    }
`
export default VideoRepo;
