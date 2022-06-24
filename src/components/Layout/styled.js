import styled from 'styled-components';

export const WrapperLayout = styled.section`
    margin: 16px 64px;

    @media(max-width: 640px){
        box-sizing: border-box;
        margin: 16px;
        width: 100%;
    }
`;
    
export const WrapperMain = styled.div`
    display: flex;

    @media(max-width: 640px){
        flex-direction: column;
    }
`;