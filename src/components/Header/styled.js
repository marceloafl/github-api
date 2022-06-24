import styled from "styled-components";

export const WrapperHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 32px;
    padding: 4px;
    min-width: 100%;
`
export const WrapperTitle = styled.h2`
    font-size: 30px;
    text-align: center;

    @media(max-width: 640px){
        font-size: 20px;
    }
`;

export const WrapperInput = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 16px 0 64px;
    width: 100%;

    input {
        border: 1px solid #006400;
        border-radius: 24px;
        box-sizing: border-box;
        font-size: 24px;
        height: 48px;
        margin: 16px 0;
        padding: 0 16px;
        width: 100%;
    }

    button {
        background-color: #008000;
        border: none;
        border-radius: 24px;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 16px;
        height: 48px;
        padding: 8px 16px;
        width: 360px;

        &:hover {
            background-color: #006400;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }

        span {
            color: #FFF;
            font-weigth: 700;
        }
    }

    @media(max-width: 640px){

        input {
            font-size: 18px;
            margin: 16px 0 32px;
            width: 95%;
        }

        button {
            width: 95%;
        }
    }
`;