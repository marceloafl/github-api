import styled from "styled-components";

export const Wrapper = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 36px);
    position: sticky;
    top: 20px;
    width: 45%;

    @media(max-width: 640px){
        height: auto;
        position: static;
        width: 100%;
    }
`;

export const WrapperInfoUser = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 100%;

    h1 {
        align-self: flex-start;
        font-size: 24px;
        font-weight: bold;
        margin-top: 16px;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
    }

    @media(max-width: 640px){
        height: inherit;

        h1 {
            font-size: 24px;
            font-weight: bold;
            margin-top: 16px;
        }

        h3 {
            font-size: 16px;
        }
    }
`;

export const WrapperStatusCount = styled.div`
    align-items: flex-start;   
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 16px 0;
    width: 100%;

    div {
        display: flex;
        margin: 8px 0;
        width: calc(100% / 2);

        h4 {
            margin-right: 8px;
        }
    }

    @media(max-width: 640px){

        div {
            width: calc(100% / 3);
        }
    }        
`;

export const WrapperUserGeneric = styled.div`
    align-items: center;    
    display: flex;
    margin-top: 16px;
    width: 100%;

    h3 {
        margin-right: 8px;
    }

    a {
        font-size: 16px;
        font-weigth: bold;
        width: 100%;
        word-break: break-word;
    }

    @media(max-width: 640px){
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    height: 180px;
    margin: 8px;
    width: 180px;

    @media(max-width: 640px){
        height: 80px;
        width: 80px;
    }
`;

