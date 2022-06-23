import styled from "styled-components";

export const WrapperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px;
    min-width: 100%;

    input {
        border: 1px solid #CCC;
        border-radius: 8px;        
        height: 36px;
        padding: 8px;
        width: 100%;
    }

    button {
        background-color: #225ED8;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        margin: 0 16px;
        padding: 8px 16px;

        &:hover {
            background-color: #2C5282;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }

        span {
            color: #FFF;
            font-weigth: 700;
        }
    }
`