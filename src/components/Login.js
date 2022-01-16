import React, { Component } from 'react';
import SpotifyLogo from '../logo.png'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=https://markacruz.github.io/spotify-clone&scope=ugc-image-upload%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-read-private%20user-read-email%20user-follow-modify%20user-follow-read%20user-library-modify%20user-library-read%20streaming%20app-remote-control%20user-read-playback-position%20user-top-read%20user-read-recently-played%20playlist-modify-private%20playlist-read-collaborative%20playlist-read-private%20playlist-modify-public`

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
