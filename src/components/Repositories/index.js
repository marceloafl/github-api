import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../RepositoryItem";
import * as S from './styled';

const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        sethasUserForSearchRepos(!!githubState.repositories)
    }, [githubState.user.login])

    return (
        <>
            {hasUserForSearchRepos ?
            <S.WrapperTabs
                selectedTabClassName="is-selected"
                selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTablist>
                        <S.WrapperTab>Repositories<span> ({githubState.user.public_repos})</span></S.WrapperTab>
                        <S.WrapperTab>Starred<span> ({githubState.starred.length})</span></S.WrapperTab>
                    </S.WrapperTablist>
                    <S.WrapperTabPanel>
                        <S.WrapperList> 
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                key={item.id}
                                name={item.name}
                                linkToRepo={item.full_name}
                                fullName={item.full_name}
                                description={item.description}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                key={item.id}
                                name={item.id}
                                linkToRepo={item.full_name}
                                fullName={item.full_name}
                                />
                        ))}
                        </S.WrapperList> 
                    </S.WrapperTabPanel>
            </S.WrapperTabs>
       : <></>}
       </>
    )
}

export default Repositories;