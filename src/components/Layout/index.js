import React from 'react';
import useGithub from '../../hooks/github-hooks';
import Header from '../Header';
import * as S from './styled';

const Layout = ({children}) => {
    return(
        <S.WrapperLayout>
            <Header />
            <S.WrapperMain>
                {children}
            </S.WrapperMain>
        </S.WrapperLayout>
    );
};

export default Layout;