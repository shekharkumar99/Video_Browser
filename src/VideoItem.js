import React from 'react';
import './video.css';
import Moment from 'react-moment';
import moment from 'moment';

const VideoItem = ({video , handleVideoSelect}) => {
    console.log(video);
    console.log(video.snippet);
    // videotimestamp =(time) =>{

    // }
    const start = moment();
    
    return (
        <div  className=' ui link cards'>
        <div className="card">
            <div className="image">
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            </div>
            <div className='content'>
                
                <div className='header '>{video.snippet.title}</div>
                <div className = "description">
                    {video.snippet.channelTitle}
                </div>
            </div>
            <div class="extra content">
                <span class="right floated">
                   <Moment date={start} format="DD-MM-YYYY" > Date: {video.snippet.publishedAt}</Moment>
                </span>
                {/* <span>
                <i class="user icon"></i>
                </span> */}
                </div>
        </div>
            
        </div>
    )
};
export default VideoItem;