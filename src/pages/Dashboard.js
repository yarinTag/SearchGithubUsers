import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import './Dashboard.css';

const Dashboard = () => {
  const{isLoading}=React.useContext(GithubContext);
  if(isLoading){
    return <main className="color-background">
      <Navbar/>
      <Search/>
      <img src={loadingImage} className="loading-img" alt="loading"/>
    </main>
  }
  return (
    <main className="color-background">
      <Navbar></Navbar> 
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </main>
  );
};

export default Dashboard;