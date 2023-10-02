import { styled } from "styled-components";

export const AuthContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding:1rem;
    .wrapper{
        img{
            width:150px;
        }
        max-width:1200px;
        width:100%;
        margin:0 auto;
        display:grid;
        grid-template-columns:1fr;
        grid-gap:2rem;
        padding:2rem 0;
        .formbox{
            max-width:500px;
            width:100%;
            margin:0 auto;
            padding:2rem;
            .top{
                width:100%;
                text-align:center;
                margin-bottom:2rem;
                display:grid;
                justify-items:center;
                gap:1rem;
                h1{
                    font-size:2rem;
                    margin:0;
                    font-family: "Inter";
                }
                p{
                    font-size:1rem;
                    opacity:0.6;
                }
                button{
                    width:100%;
                    padding:1rem;
                    border:1px solid #000;
                    outline:none;
                    background-color:transparent;
                    cursor:pointer;
                    font-size:1rem;
                    color:#000;
                    display:flex;
                    border-radius:10px ;
                    align-items:center;
                    justify-content: center;
                    gap:10px;
                }
            }
            .divider{
                line{
                    height:1px;
                    background-color:#000;
                    display:block;
                    opacity:0.6;
                }
                position:relative;
                p{
                    span{                      
                        position:relative;
                        top:-15px;
                        padding:1rem;
                        background-color:#fff;
                    }
                    font-size:1rem;
                    margin:0;
                    text-align:center;
                    background-color:#fff;
                }
            }
            .form-control{
                width:100%;
                margin-bottom:1rem;
                display:grid;
                gap:1rem;

                label{
                    font-size:1rem;
                    color:#000;
                }
                input{
                    width:100%;
                    padding:1rem;
                    outline:none;
                    border:1px solid #ddd;
                    border-radius:10px;
                    font-size:1rem;
                }
                button{
                    width: 100%;
                    margin-top:10px;
                    padding:1rem;
                    outline:none;
                    border-radius:10px;
                    color:var(--text-light);
                    border:1px solid var(--accent-color);
                    background: var(--accent-color);
                }
            }
        }
    }
    
`