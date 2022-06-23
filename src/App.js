import React, { useState } from 'react';
import Profile from './components/Profile';
import Layout from './components/Layout';
import Repositories from './components/Repositories';
import useGithub from './hooks/github-hooks';
import NoSearch from './components/NoSearch';

const App = () => {
  const { githubState } = useGithub();
  return (
        <Layout>
          {githubState.hasUser ? (
            <>
            {githubState.loading ? (
              <p>Loading</p>
              ) : (
                <>
                <Profile />
                <Repositories />
              </>
            )}
            </>
          ) : (
            <NoSearch />
          )}
        </Layout>        
  );
}

export default App;
