import styled from 'styled-components';

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 64px 0;
    width: 100%;

    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    @media(max-width: 640px){
        margin: 16px 0;

        h1 {
            font-size: 18px;
            font-weight: bold;
        }
    }
`;