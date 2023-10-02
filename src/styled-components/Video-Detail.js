import styled from 'styled-components'

const VideoDetail = styled.div`
    width:100%;
    padding:10px;
    .wrapper{
        max-width:1200px;
        margin:0 auto;
        .top{
            width:100%;
            .routes{
                display:flex;
                align-items: center;
                gap:5px;
                font-family:"Work Sans";
                a{
                    color:#000;
                }
                a:not(:last-child){
                    opacity:0.5;
                }
                a:last-child{
                    opacity:0.6;
                }
            }
            .title{
                margin-top:1.5rem;
                display: flex;
                align-items:flex-end;
                gap:5px;
                h1{
                    font-size:1.5rem;
                }
                button{
                    background:none;
                    border:none;
                    font-size:1.5rem;
                    cursor:pointer;
                }
            }
        }
        .video-frame{
            width:100%;
            margin-top:1.5rem;
            border:1px solid #ddd;
            border-radius:10px;
            padding:10px;
            height:500px;
            video{
                width:100%;
                height:100%;
                border-radius:5px;
            }
        }
        .share{
            margin-top:1.5rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:5rem;
            .email-share{
                display:flex;
                align-items:center;
                position:relative;
                font-family:"Work Sans";

                width:100%;
                input{    
                width:100%;

                    font-family:"Work Sans";
                    padding: 1rem;
                    border-radius:10px;
                    border:1px solid #ddd;
                    font-size:0.9rem;
                    outline:none;
                    background: #eee;
                }
                button{
                    position:absolute;
                    right:2%;
                    font-family:"Work Sans";
                    top:50%;
                    padding: 0.5rem 1rem;
                    color:#fff;
                    border-radius:10px;
                    background: #bfbece;
                    transform:translateY(-50%);
                    border:none;
                    font-size:0.9rem;
                }
            }
            .link-copy{
                display:flex;
                align-items:center;
                gap:1rem;
                position:relative;
                width:100%;

                input{
                    font-family:"Work Sans" !important;
                    width:100%;

                    padding: 1rem;
                    border-radius:10px;
                    border:1px solid #bbb;
                    font-size:0.9rem;
                    outline:none;
                    background: #f9f9f9;
                }
                button{
                    font-family:"Work Sans";
                    position:absolute;
                    right:2%;
                    top:50%;
                    transform:translateY(-50%);
                    padding: 0.5rem;
                    color:#000;
                    border-radius:10px;
                    background: none;
                    border:1px solid #000;
                    font-size:0.9rem;
                }
            }
        }
        .share_on_socials{
            margin-top:2rem;
            h4{
                font-family: "Work Sans";
                font-weight: 500;font-size:1.2rem;
            }
            .social-cards{
                margin-top:1rem;
                font-weight: 500;
                display:flex;
                align-items:center;
                gap:10px;
                .card{
                    display:flex;
                    align-items:center;
                    gap:10px;
                    width:fit-content;
                    border:1px solid #000;
                    border-radius: 5px;
                    h5{
                        font-family:"Inter";
                        font-weight: 500;
                        font-size:1rem;
                    }
                }
            }
        }
    }
`
export {VideoDetail}