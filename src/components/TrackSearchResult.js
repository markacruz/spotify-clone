import React from 'react'

export default function TrackSearchResult({ track, chooseTrack }) {
    
    function handlePlay() {
        chooseTrack(track)
    }
    
    return (
        <div className='flex items-center mx-5 border-[1px]'>
            <img src={track.albumUrl} 
            className='ml-2 w-[50px] cursor-pointer'
            onClick={handlePlay}
            alt="Album"/>
            <div className='ml-3'>
                <div>
                    {track.title}
                </div>
                <div className='text-sm text-gray-500'>
                    {track.artist}
                </div>
            </div>
            
        </div>
    )
}
