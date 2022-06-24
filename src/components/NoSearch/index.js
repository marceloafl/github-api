import React from "react";
import * as S from './styled';
import icon from '../../person_search.svg';

const NoSearch = () => {
    return (
        <S.Wrapper>
            <h1>Nenhum usuário pesquisado</h1>
            <img src={icon} alt="Nenhum usuário pesquisado"></img>
        </S.Wrapper>
    )
}

export default NoSearch;