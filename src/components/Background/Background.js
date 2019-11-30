import React, { Component } from 'react';
import './Background.css';
import wallpaper from '../../imgs/wallpaper.jpg';

const Background = () => {
    return (
        <div className="backgroundContainer">
            <img src={wallpaper} />
        </div>
    )
}

export default Background