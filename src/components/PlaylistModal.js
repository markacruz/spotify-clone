import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';

const SpotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
})

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#191414',
    width: '650px',
    height: '700px',
    zIndex: 1000,
    borderRadius: '8px',
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function PlaylistModal( {accessToken, playlistId, setPlaylistId} ) {

    const [playlist, setPlaylist] = useState(null)

    useEffect(() => {
        if (!accessToken) return
        SpotifyApi.setAccessToken(accessToken)

        SpotifyApi.getPlaylist(playlistId)
        .then((data) => {
            setPlaylist(data.body);
            console.log('Some information about this playlist', data.body);
        }).catch((err) =>  {
            console.log('Something went wrong!', err);
        });
    }, [accessToken, playlistId])

    return (
        playlist !== null ? 
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}
            className='border-[1px] border-[#6b7280]'>
                <div>

                    <div className='h-[30px]'>
                        <div className='ml-[580px] mt-3'>
                            <button className='text-sm bg-green-500 px-2 py-1 rounded-2xl'
                            onClick={() => setPlaylistId(null)} >
                                Close
                            </button>
                        </div>
                    </div>

                    <div className='flex items-end mx-6 mb-8 h-[180px]'>
                       <div className='mr-4'>
                            <img alt="Playlist"
                            src={playlist.images[0].url}
                            className='w-[175px]' />
                        </div>
                        <div>
                            <div className='font-semibold'>
                                {playlist.type.toUpperCase()}
                            </div>
                            <div className='font-extrabold text-[250%]'>
                                {playlist.name}
                            </div>
                            <div className='text-sm opacity-[0.8] mt-2'>
                                {playlist.description}
                            </div>
                            <div className='flex mt-[1px]'>
                                <span className='font-bold'>
                                    {playlist.owner.display_name} 
                                </span>
                                <span className='ml-1 opacity-[0.8]'>
                                · {playlist.tracks.total} songs
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center bg-gray-700 bg-opacity-30 h-[444.1px]'>
                        <div className='w-[625px] max-h-fit overflow-y-scroll m-4 bg-opacity-30'>
                            {playlist.tracks.items.map(track => (
                                    <div className='flex items-center bg-gray-700 bg-opacity-30'>
                                        <div className='mr-3 bg-gray-700 bg-opacity-30'>
                                            <img alt="Album" 
                                            src={track.track.album.images[0].url} 
                                            className='w-[100px] mb-2'/>
                                        </div>
                                        <div>
                                            <div className='font-semibold bg-gray-700 bg-opacity-30'>
                                                {track.track.name}
                                            </div>
                                            <div className='bg-gray-700 bg-opacity-30'>
                                                {track.track.artists.map((artist, index) => (
                                                    index < track.track.artists.length - 1 ? (
                                                        <span className='bg-gray-700 bg-opacity-10 text-gray-400'>{artist.name},<span> </span></span>
                                                    ) : 
                                                    ( <span className='bg-gray-700 bg-opacity-10 text-gray-400'>
                                                        {artist.name}
                                                    </span> )
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div> : null
    )
}
