import styled from "styled-components";

export const ItemContainer = styled.div`
    > div {
        background: ${(props) => props.theme.gradient};
        padding: 1rem;
        height: 22rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        transition: 0.5s;

        h1 {
            color: ${(props) => props.theme.primary};
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        hr {
            width: 10rem;
            border-radius: 15px;
            border: 2px solid ${(props) => props.theme.secondary};
            margin-bottom: 1.5rem;
        }

        p {
            color: ${(props) => props.theme.textLight};
            font-size: 0.9rem;
            font-weight: 300;
            max-width: 19rem;
        }
    }

    &:hover > div {
        filter: brightness(1.3);
        transform: translateY(-20px);
        cursor: pointer;
    }
    
    &:nth-child(even) > div {
        margin-top: 4rem;
    }

    @media(max-width: 1200px) {
        > div {
            height: 19rem;

            h1 {
                font-size: 1.6rem;
                margin-bottom: 0.8rem;
            }

            hr {
                width: 7rem;
                margin-bottom: 1rem;
            }

            p{
                font-size: 0.8rem;
            }
        }
    }

    @media(max-width: 1000px) {
        > div {
            height: 19.5rem;

            h1 {
                font-size: 1.2rem;
                margin-bottom: 0.7rem;
            }

            hr {
                width: 4rem;
                margin-bottom: 0.9rem;
            }

            p{
                font-size: 10px;
            }
        }
    }

    @media(max-width: 700px) {
       &:nth-child(even) > div {
           margin-top: 0;
       }

       &:hover > div {
        transform: translateY(0);
       }

        > div {
            height: auto;

            h1 {
                font-size: 2rem;
                margin-bottom: 1rem;
            }

            hr {
                width: 7rem;
                margin-bottom: 1rem;
            }

            p{
                font-size: 1rem;
                max-width: 100%;
            }
        }
    }

    @media(max-width: 500px) {
       &:nth-child(even) > div {
           margin-top: 0;
       }

       &:hover > div {
        transform: translateY(0);
       }

        > div {
            height: auto;

            h1 {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }

            p{
                font-size: 0.8rem;
                max-width: 100%;
            }
        }
    }
`