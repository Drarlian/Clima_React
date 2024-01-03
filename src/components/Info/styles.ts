import styled from "styled-components";
import climaImage from '../../assets/clima.jpg';

export const DivInfo = styled.div`
    display: flex;
    /* display: none; */
    justify-content: center;
    overflow-wrap: break-word;
    /* align-items: center; */
    /* background-color: orange; */

    .info-principal{
        display: flex;
        flex-direction: column;
        /* background-color: pink; */

        width: 500px;

        margin-top: 20px;
        /* border-radius: 5px; */
        /* border: 1px solid rgba(0, 0, 0, 0.05); */
        border-radius: 15px;

        /* border: 3px solid #000; */
        box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.6), 
                -5px -5px 10px rgba(0, 0, 0, 0.5);
        /* background-color: #fff; */

        color: white;


        .info-temperatura{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            justify-content: center;

            background-image: url(${climaImage});
            background-size: cover;
            border-radius: 15px 15px 0px 0px;

            height: 300px;

            h1{
                font-size: 2.5em;
            }
        }

        .info-extras{
            display: flex;
            flex-direction: column;

            height: 400px;
            padding: 15px;

            background-color: #0368EC;
            border-radius: 0px 0px 15px 15px;

            .info-titulo{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 7px;
            }
            .info-quadrados{
                display: grid;
                grid-template-columns: 1fr 1fr;
                flex: 1;
                gap: 2rem;

                background-color: #0249A5;
                border-radius: 15px;
                padding: 15px;

                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    .icone-clima{
        width: 40px;
        height: 40px;
    }

    @media (max-width: 600px){
        .info-principal{
            .info-temperatura{
                /* border-radius: 0px 0px 0px 0px; */
            }

            .info-extras{
                /* border-radius: 0px 0px 0px 0px; */
            }
        }
    }
`;