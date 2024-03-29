import React from "react";
import useGithub from "../../hooks/github-hooks"
import * as S from "./styled"

const Profile = () => {

  const { githubState } = useGithub()

    return (
        <S.Wrapper>
          <S.WrapperImage
            src={githubState.user.avatar}
            alt="Avatar of user"
          />
          <S.WrapperInfoUser>
            
              <h1>{githubState.user.name}</h1>
              <a href={githubState.user.html_url} target="_blank" rel="noopener noreferrer">{githubState.user.login}</a>
              <S.WrapperUserGeneric>
                <h3>Company: </h3>
                <span>{githubState.user.company}</span>
              </S.WrapperUserGeneric>
              <S.WrapperUserGeneric>
                <h3>Location: </h3>
                <span>{githubState.user.location}</span>
              </S.WrapperUserGeneric>
              <S.WrapperUserGeneric>
                <h3>Blog: </h3>
                <a href={githubState.user.blog} target="_blank" rel="noopener noreferrer">{githubState.user.blog}</a>
              </S.WrapperUserGeneric>
            
            <S.WrapperStatusCount>
              <div>
                <h4>Followers:</h4>
                <span>{githubState.user.followers}</span> 
              </div>
              <div>
                <h4>Following:</h4>
                <span>{githubState.user.following}</span> 
              </div>
            </S.WrapperStatusCount>
          </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile;