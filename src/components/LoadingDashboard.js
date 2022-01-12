import React from 'react';

export default class LoadingDashboard extends React.Component {
    render() {
        return (
            <div className='ml-[70px]'>
            <div className='flex justify-center items-center text-center h-[40vh] inline-block'>
                <div className='mt-5'>   
                    <div className='bg-gray-500 p-[125px] rounded-full'>
                    </div>
                    <div className='bg-gray-500 w-[200px] py-[30px] rounded-full mt-2'>
                    </div>
                    <div className=''>
                        <div className='bg-gray-500 w-[px] px-[50px] py-[15px] rounded-full mt-2'>
                            
                        </div>
                    </div>
                    <div className=''> 
                        
                    </div>
                    <div className='font-semibold'> 
                        
                    </div>
                </div>
            </div>

            <div>
                <hr className='mx-[15%] mb-8 mt-8'/>
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

                        {/* {playlistId !== null ? <PlaylistModal accessToken={accessToken} 
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
                        </div> */}
                    </div> 
                </div> 
        </div>
        )
    }
}