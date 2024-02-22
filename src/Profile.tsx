import React from 'react'
import './style.css';
import './index.css';

export default function Profile() {
  return (
    <div className="Profile">
         <div className="header">
            <h1>Foodies</h1>
            <div className="settings"></div>
        </div>
        <section className='profileInfo'>
            <div className="imgMain"></div>
            <div className="profileImg"></div>
            <div className="textFollowing">
                <p>200 Following</p>
                <p>144k Followers</p>
            </div>
            <div className="infoPerso">
                <h2>Nom</h2>
                <h3>Titre</h3>
                <p>description</p>
            </div>
        </section>
        <button className='follow'>Follow</button>
        <div className="posts">
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
        </div>
    </div>
  )
}
