import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from './useAuth';
import PlaylistModal from './PlaylistModal';

const SpotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
})

export default function Dashboard({ token }) {
    
    const [getMe, setGetMe] = useState(null);
    const [userPlaylists, setUserPlayLists] = useState(null);
    const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState(null);
    const [playlistId, setPlaylistId] = useState(null);
    const [country, setCountry] = useState(null);
    const [userTopTracks, setUserTopTracks] = useState(null);
    const [userTopArtists, setUserTopArtists] = useState(null);

    const accessToken = token;

    useEffect(() => {
        window.history.pushState({}, null, "/spotify-clone")
        if (!accessToken) return
        SpotifyApi.setAccessToken(accessToken)

        SpotifyApi.getMe()
        .then((data) => {
            setGetMe(data.body);
            setCountry(`https://flagcdn.com/16x12/${data.body.country.toLowerCase()}.png`);

            SpotifyApi.getUserPlaylists(data.body.id)
            .then((data) => {
                setUserPlayLists(data.body.items);
            }).catch((err) => {
            console.log('Something went wrong!', err);
            });
        }).catch((err) => {
            console.log('Something went wrong!', err);
        });

        SpotifyApi.getMyRecentlyPlayedTracks({
            limit : 20
          }).then((data) => {
              setRecentlyPlayedTracks(data.body.items)
            }).catch((err) => {
              console.log('Something went wrong!', err);
            });

        SpotifyApi.getMyTopTracks()
        .then((data) => {
            let topTracks = data.body.items;
            setUserTopTracks(topTracks);
        }).catch(err => {
            console.log('Something went wrong!', err);
        });

        SpotifyApi.getMyTopArtists()
        .then((data) => {
            let topArtists = data.body.items;
            setUserTopArtists(topArtists);
            console.log(topArtists);
        }).catch((err) => {
        console.log('Something went wrong!', err);
        });

    }, [accessToken])

    return (
        getMe !== null && userPlaylists !== null && recentlyPlayedTracks !== null && country !== null
        && userTopArtists !== null && userTopTracks !== null ? 
        <div className='ml-[70px]'>
            <div className=''>
                <div className='h-[40vh] flex justify-center items-center'>
                    <div className='mr-10'>
                        <img alt="Profile" 
                        src={getMe.images[0].url} 
                        className='object-none h-[225px] w-[225px] rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-[80px] font-bold'>
                            {getMe.display_name}
                        </div>
                        <div className='text-sm text-gray-500 ml-[3px]'>
                            {getMe.email}
                        </div>
                        <div className='ml-[3px]'>
                            {getMe.followers.total} Followers
                        </div>
                    </div>

                    
                </div>
            </div>

            <div>
                <hr className='mx-[15%] mb-8'/>
            </div>
            

            <div className='flex justify-center gap-x-[1.5%]'>
                    
                    <div>
                        <div className='font-semibold text-xl mb-4'>
                            Your Playlists
                        </div> 

                        {/* <div className='flex gap-x-2 mb-4'>
                            <button className='bg-[#1DB954] px-3 rounded-2xl text-center'>
                                All
                            </button>
                            <button className='bg-[#1DB954] px-3 rounded-2xl text-center'>
                                By You
                            </button>
                            <button className='bg-[#1DB954] px-3 rounded-2xl text-center'>
                                By Other User
                            </button>
                        </div>  */}

                        {playlistId !== null ? <PlaylistModal accessToken={accessToken} 
                        playlistId={playlistId}
                        setPlaylistId={setPlaylistId} /> : null}

                        <div className='max-h-[400px] overflow-y-scroll w-[400px] scroll-smooth	'>
                            <div className='ml-4'>
                                {userPlaylists.map((playlist, index) => (
                                    <div key={playlist.id} 
                                    className='flex gap-x-3 mb-2 items-center'>
                                        <div className=''>
                                            <img alt="Playlist" 
                                            src={playlist.images[0].url}
                                            className='w-[75px]' />
                                        </div>
                                        
                                        <div>
                                            <div>
                                                <button onClick={() => setPlaylistId(playlist.id)}
                                                className=''>
                                                    {playlist.name}
                                                </button>
                                            </div>
                                            <div className='text-gray-500 text-sm'>
                                                By {playlist.owner.id === getMe.id ? 
                                                    "You" : playlist.owner.display_name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col gap-y-2'>
                        <div className=''>
                            <div className=' font-semibold text-xl mb-4'>
                                Your Top Tracks
                            </div>

                            <div className='max-h-[175px] overflow-y-scroll w-[400px] scroll-smooth	'>
                                <div className='ml-4'>
                                    {userTopTracks.map(track => (
                                        <div key={track.id}
                                        className='flex gap-x-3 mb-2 items-center'>
                                            <div className=''>
                                                <img alt="Recently Played" 
                                                src={track.album.images[0].url} 
                                                className='w-[75px]'/>
                                            </div>
                                            <div>
                                                <div className=''>
                                                    {track.name}
                                                </div>
                                                <div className='text-gray-500 text-sm'>
                                                    {track.artists[0].name}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold text-xl mb-4'>
                                Your Top Artists
                            </div>
                            
                            <div className='max-h-[175px] overflow-y-scroll w-[400px] scroll-smooth	'>
                                <div className='ml-4'>
                                    {userTopArtists.map(artist => (
                                        <div key={artist.id}
                                        className='flex gap-x-3 mb-2 items-center'>
                                            <div className=''>
                                                <img alt="Recently Played" 
                                                src={artist.images[0].url} 
                                                className='w-[75px]'/>
                                            </div>
                                            <div>
                                                <div className=''>
                                                    {artist.name}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='font-semibold text-xl mb-4'>
                            Your Recently Played
                        </div>

                        <div className='max-h-[400px] overflow-y-scroll w-[400px] scroll-smooth	'>
                            <div className='ml-4'>
                                {recentlyPlayedTracks.map(playedTrack => (
                                    <div key={playedTrack.track.id}
                                    className='flex gap-x-3 mb-2 items-center'>
                                        <div className=''>
                                            <img alt="Recently Played" 
                                            src={playedTrack.track.album.images[0].url} 
                                            className='w-[75px]'/>
                                        </div>
                                        <div>
                                            <div className=''>
                                                {playedTrack.track.name}
                                            </div>
                                            <div className='text-gray-500 text-sm'>
                                                {playedTrack.track.artists[0].name}
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div> :
        
        null

    )
}
