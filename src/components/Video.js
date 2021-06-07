import React from 'react';
import videoSrcURL from '../images/page05/video1.mp4';

const Video = ({ videoTitle, section, ...props }) => (
  <div className="embed-responsive embed-responsive-1by1">
    <iframe className="embed-responsive-item" src={section} />
  </div>
);
export default Video;
