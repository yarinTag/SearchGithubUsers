import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

//Invoke the method, and now we have the context.

const GithubContext=React.createContext();

//We have access to the provider as well as the consumer.

//we'll render all our application
const GithubProvider=({children})=>{
    const [GithubUser,setGithubUser]=useState(mockUser);
    const [repos,setRepos]=useState(mockRepos);
    const [followers,setFollowers]=useState(mockFollowers);
    return(
        <GithubContext.Provider value={{GithubUser,repos,followers}}>
            {children}
        </GithubContext.Provider>
    );
}

export{GithubProvider,GithubContext};