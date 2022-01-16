import React, { Component } from 'react';
import SpotifyLogo from '../logo.png'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/callback&scope=ugc-image-upload%20user-read-private%20user-read-email%20user-follow-read%20user-library-read%20user-top-read%20user-read-recently-played%20playlist-read-collaborative%20playlist-read-private`

export default class Login extends Component {

    render() {
        return (
            <div className='flex justify-center items-center h-screen gap-x-2'>
                <div>
                    <a className='text-white text-2xl font-bold bg-[#1DB954] px-8 py-4 rounded-[400px]' 
                    href={AUTH_URL}>
                        Login with Spotify
                    </a>
                </div>
                <div>
                    <img className='w-[50px]' 
                    src={SpotifyLogo}
                    alt="SpotifyLogo" />
                </div>
                
            </div>
        )
    }
}
