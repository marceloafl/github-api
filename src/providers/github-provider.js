import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: []
})

const GithubProvider = ({children}) => {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            login: undefined,
            name: undefined,
            avatar: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            html_url: undefined,
            followers:0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: []
    });

    const getUser = (userName) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`users/${userName}`)
            .then(({ data }) => {
                setGithubState(prevState => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        login: data.login,
                        name: data.name,
                        avatar: data.avatar_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        html_url: data.html_url,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                }}));
            }).finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }))
            })
    }

    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`)
            .then(({ data }) => {
                setGithubState(prevState => ({
                    ...prevState,
                    repositories: data,
                }));
        })
    }

    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`)
            .then(({ data }) => {
                setGithubState(prevState => ({
                    ...prevState,
                    starred: data,
                }));
        })
    }


    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []), 
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };
    
    return (
        <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
    )
}

export default GithubProvider;