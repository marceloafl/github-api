import styled from "styled-components";

export const Wrapper = styled.div`
    align-content: center;
    border: 1px solid #CCC;
    border-radius: 8px;
    height: 180px;
    margin: 8px;
    overflow: hidden;
    padding: 8px;
    width: 40%;

    @media(max-width: 640px){
        width: 100%;
    }
`;

export const WrapperTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const WrapperLink = styled.a`
    color: #3182CE;
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
`;

export const WrapperDescription = styled.p`
    font-size: 14px;
    margin-top: 8px;    
`;