import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos }) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}  />
        
    });

    return (
        <div className ="ui grid">
    {renderedVideos}
    </div>
    )
};
export default VideoList;