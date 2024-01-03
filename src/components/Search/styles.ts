import styled from "styled-components";

export const DivSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: pink; */


    .search-principal{
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */

        padding-top: 15px;
        padding-bottom: 15px;

        form{
            /* background-color: green; */
            display: flex;
            flex-direction: row;

            input{
                text-align: center;
                margin-right: 5px;
                padding-top: 5px;
                padding-bottom: 5px;

                background-color: #182E87;
                color: white;

                width: 320px;
                height: 38px;

                border-radius: 15px;
                border-style: none;
                outline: none;
            }

            button{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 5px;

                width: 50px;
                height: 35px;

                background-color: transparent;
                color: white;

                border-radius: 5px;
                border-style: none;

                transition: 0.5s all ease;

                cursor: pointer;

                *{
                    width: 50%;
                    height: 50%;
                }
            }

            button:hover{
                opacity: 0.85;
            }
        }
    }
`;