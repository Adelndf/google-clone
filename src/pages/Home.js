import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import GoogleLogo from '../images/Google-Logo.png'
import Search from './Search';

function Home() {
    return (
        <div className='home'>

            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='about'>About</Link>
                    <Link to='store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='gmail'>Gamil</Link>
                    <Link to='images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className='home__body'>
                <img src={GoogleLogo}/>
                <div className='inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
