import React, { Component } from 'react'
import SpotifyLogo from '../logo.png'
import GithubLogo from '../github.png'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='absolute h-screen w-[70px] border-r-[1px] border-gray-500 bg-[#121212]'>
                <div className='flex flex-col justify-center'>
                    <div className='mx-auto'>
                        <a href="https://www.spotify.com/ca-en/">
                            <img src={SpotifyLogo} 
                            className='w-[40px] mt-2 mb-2'
                            alt="Spotify Logo"/>
                        </a>
                    
                        <hr />  

                    </div>
                    <div className='mx-auto mt-[87vh]'>

                        <hr />

                        <a href="https://github.com/markacruz">
                        <img src={GithubLogo} 
                        className='w-[40px] mt-2'
                        alt="GitHub Logo"
                        />
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}
