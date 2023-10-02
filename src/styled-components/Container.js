import styled from "styled-components";

const Container = styled.div`

  width: 100%;
  margin: 0 auto;
  /* padding:  15px 10%; */
`;

const NavContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  position:relative;
  @media screen and (max-width: 960px) {
    padding: 20px;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    
    .user{
      background:transparent;
      border:none;
      font-family:"Work Sans",sans-serif !important;
      .profile{                
        display: flex;
        align-items: center;
        gap: 10px;
        overflow: hidden;
        padding:        0.5rem;
        img{
          width: 40px;
        }
      }
      .name{
        font-weight: 500;
        font-size:0.9rem;
        color: var(--text-dark);
      }
      @media screen and (max-width: 960px) {
        .name{
          display:none;
        }
      }
    }
    .logo {
      width: 150px;
      img{
        width:150px;
      }
    }
    .mobile-toggle {
      display: none;
      background:none;
      border:none;
      font-size:1.5rem;
      @media (max-width: 768px) {
        display: block;
      }
    }
    .nav-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-grow: 1;
      z-index: 100;
      position:relative;
      transition: 0.3s ease-in-out;

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        .nav-item {
          list-style: none;
          padding: 0 20px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: var(--accent-color);
          }
          .nav-link {
            text-decoration: none;
            color: var(--text-dark);
          }
        }
      }
      @media (max-width: 768px) {
        max-height:${({ isOpen }) => (isOpen ? "15rem": "0px"  )};
        padding-top: ${({ isOpen }) => (isOpen ? "2.5rem" : "0")};
        overflow:hidden;
        flex-direction:column;
        align-items:center;
        flex-basis: 100%;
        gap: 20px;
        ul{
          flex-direction: column;
          gap: 20px;
          .nav-item{
            padding:1rem
          }
        }
    }
    }
    .nav-btn {
      a {
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;

        color: var(--accent-color);
        &:hover {
          color: var(--text-light);
          background-color: var(--accent-color);
        }
      }
      @media (max-width: 768px) {
        padding:1rem;
      }
    }
  }
`;

const NavLoggedIn = styled.div`
   width: 100%;
  padding: 20px 0;
  position:relative; 
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    
    .user{
      background:transparent;
      border:none;
      font-family:"Work Sans",sans-serif !important;
      .profile{                
        display: flex;
        align-items: center;
        gap: 10px;
        overflow: hidden;
        padding:        0.5rem;
        img{
          width: 40px;
        }
      }
      .name{
        font-weight: 500;
        font-size:0.9rem;
        color: var(--text-dark);
      }
      @media screen and (max-width: 960px) {
        .name{
          display:none;
        }
      }
    }
    .logo {
      width: 150px;
      img{
        width:150px;
      }
    }
    }
`

const HeroContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
  .wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 40px 0;
    align-items: center;

    .hero-content {
      h1 {
        font-size: 3.5rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 20px;
      }
      p {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--accent-color);
        margin-bottom: 20px;
        opacity: 0.9;
      }
      .btn {
        padding: 1rem;
        border-radius: 5px;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: var(--accent-color);
        color: var(--text-light);
        &:hover {
          box-shadow: 0 0 10px var(--accent-color);
        }
      }
    }
    .hero-img {
      img {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      .hero-content {
        text-align: center;
        display:grid;
        justify-items:center;
        h1{
          font-size:2rem;
        }
        p{
          font-size:1rem;
        }
      }
    }
  }
`;

const FeatureContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
  .wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 40px 0;
    justify-items: center;

    .feature-heading {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
      p {
        opacity: 0.7;
      }
    }
    .feature-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 40px 0;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
     .list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      .item {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        img {
          width: 45px;
          height: 45px;
        }
        .right {
          h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--accent-color);
          }
          p {
            font-size: 1.1rem;
            font-weight: 400;
            color: var(--accent-color);
            opacity: 0.6;
          }
        }
      }
    }
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-dark);
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--accent-color);
      margin-bottom: 20px;
      opacity: 0.9;
    }
    .btn {
      padding: 1rem;
      border-radius: 5px;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: var(--accent-color);
      color: var(--text-light);
      &:hover {
        box-shadow: 0 0 10px var(--accent-color);
      }
    }
  }
  .feature-img {
    img {
      width: 100%;
    }
  }
`;
const HowContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
  .wrapper {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    padding: 40px 0;
    max-width: 1200px;
    @media (max-width: 768px) {
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px;
      @media (max-width: 960px) {
        grid-template-columns: 1fr;
      }
      .item {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr;
        justify-items: center;
        .number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--accent-color);
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--text-light);
          font-size: 1.5rem;
          font-weight: 700;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent-color);
          text-align: center;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--accent-color);
          opacity: 0.6;
          text-align: center;
        }
        img{
          width:100%;
        }
      }
    }
  }
`;
const Title = styled.h3`
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--text-dark);
`;
const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  p {
    opacity: 0.7;
  }
`;

const FooterBox = styled.footer`
  width: 100%;
  padding: 4rem 0;
  background-color: var(--accent-color);
  .wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2.5rem;
      align-items: center;
      text-align: center;
    }
    .footer-menu {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h4 {
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--text-light);
        margin-bottom: 20px;
      }
      ul {
        list-style: none;
        font-size: 1rem;
        font-weight: 300;
        color: var(--text-light);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: var(--text-dark);
        }
        li {
          margin-bottom: 20px;
          a {
            text-decoration: none;
            color: var(--text-light);
          }
        }
      }
    }
  }
`;
const RepoContainer = styled.div`
  width:100%;
  padding: 1rem 0;
  height:100vh;
  overflow: hidden;
  .wrapper{
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 960px) {
      max-width:90%;
      padding:0;      
      .left{
      text-align:center;
      margin-bottom: 10px;
    }
    .right{
      width:90%;
      margin:0 auto;
      input{
        width:100%;
        height:50px;
      }
    }
    }
  }
  hr{
    margin-top:2rem;
    border:1px solid #eee;
  }
  .videos-wrapper{
    max-width: 1200px;
    width: 100%;
    margin: 2rem auto 0;
    height: 50vh;
    overflow-y: scroll;
    padding-right:4rem;
    padding-bottom:1rem;
    &::-webkit-scrollbar-button {
    }
    &::-webkit-scrollbar {
      background-color: none;
      width:6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ddd;
      border-radius: 10px;
    }
    h3{
      font-size:1rem;
      font-weight:500;
      opacity:0.8;
      margin-bottom:1rem;
    }
    .pane{
      padding: 0rem 0 2rem;
    }
    @media screen and (max-width: 960px) {
      padding-right:0;
      padding: 0 1rem;
    }
  }

`
export {
  Container,
  NavContainer,
  HeroContainer,
  FeatureContainer,
  Title,
  HowContainer,
  Heading,
  FooterBox,
  RepoContainer,
  NavLoggedIn
};
