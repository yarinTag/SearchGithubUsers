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

    //request loading
    const [requests,setRequest] = useState(0);
    const [isLoading,setIsLoading] = useState(false);

    //error
    const [error,setError]=useState({show: false, msg: ""});

    const searchGithubUsers=async(user)=>{
        toggleError();
        setIsLoading(true);

        const response = await axios(`${rootUrl}/users/${user}`).
        catch(err=>console.log(err));
        if(response){
            setGithubUser(response.data);
            const {login, followers_url}=response.data;
            // //repos
            // axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(response=>
            //     setRepos(response.data)
            // );
            // //followers
            // axios(`${followers_url}?per_page=100`).then(response=>
            //     setFollowers(response.data)
            // );
            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios(`${followers_url}?per_page=100`),]).then((results)=>{
                    const [repos,followers]=results;
                    if(repos.status === 'fulfilled'){
                        setRepos(repos.value.data);
                    }
                    if(followers.status === 'fulfilled'){
                        setFollowers(followers.value.data);
                    }
                    
                }).catch(err=>console.log());
        }
        else {
            toggleError(true,'There is no user with that userName!')
        }
        checkRequests();
        setIsLoading(false);
    };

    //check rate
    const checkRequests= ()=>{
        axios(`${rootUrl}/rate_limit`).then(({data})=>{
            let {rate:{remaining},
        }=data;
        setRequest(remaining);
        if(remaining === 0){
            //throw an error
            toggleError(true,'Sorry, you have exeeded your hourly rate limit!');    
        }
        })
        .catch((err)=>console.log(err));
    }

    function toggleError(show = false,msg=''){
        setError({show,msg});
    }


    //error
    useEffect(checkRequests,[]);

    return(
        <GithubContext.Provider value={{
            GithubUser,
            repos,
            followers,
            requests,
            error,
            searchGithubUsers,
            isLoading,

            }}>
            {children}
        </GithubContext.Provider>
    );
}

export{GithubProvider,GithubContext};