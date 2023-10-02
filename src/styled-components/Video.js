import styled from 'styled-components'

const Video = styled.div`
    border:1px solid #ddd;
    width:100%;
    background:#fefefe;
    padding:10px;
    border-radius:20px;
    .card-wrapper{      
        padding-bottom:5px;  
        .thumbnail{
            width:100%;
            border-radius:10px;
            overflow:hidden;
            img{
                height:100%;
                width:100%;
                object-fit:cover;
            }
        }
        .details{
            display:flex;
            justify-content: space-between;
            .video-title{
                h3{
                    font-weight:600;
                    font-size:1.2rem;
                font-family:"Work Sans";
                margin-bottom:5px;
                color:#000;
                } 
                p{
                    font-size:0.8rem;
                    opacity:0.5;
                }
            }
            .video-options{
                display:flex;
                align-items:center;
                gap: 1.5rem;
                button{
                    background:none;
                    border:none;
                font-size:1.5rem;
                }
            }
        }
    }
`
export {Video}