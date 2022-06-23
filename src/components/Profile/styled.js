import styled from "styled-components";

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 36px);
    position: fixed;
    width: 30%;
`;

export const WrapperInfoUser = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;
    width: 100%;

    h1 {
        font-size: 32px;
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
`;

export const WrapperStatusCount = styled.div`
    align-items: center;   
    display: flex;
    justify-content: space-between;
    margin: 16px 0;

    div {
        margin: 8px;
        text-align: center;
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
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    height: 200px;
    margin: 8px;
    width: 200px;
`;

