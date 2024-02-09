import React from 'react'
import { Login } from './components/Login/Login'

export default function Navigation() {
  return (
    <>
    <nav className="navbar">
        <div id="Logo">SmartVillage.GENAI</div>
        <div id="prj"><a href="/">Home</a></div>
        <div id="gc"><a href="/grand-challenges">Grand Challenges</a></div>
        <div id="prj"><a href="/projects">Projects</a></div>
        <div id="tech"><a href="/technologies">Technologies</a></div>
        <div id="collab"><a href="/collaborate">Collaborate</a></div>
        <div id="dash"><a href="/dashboard">Dashboard</a></div>
        <div id="post"><a href="/post-challenges">Post a Challenge</a></div>
        <div id="search">
        <div class="group">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
            <g>
             <path
               d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
             ></path>
           </g>
         </svg>
         <input class="input" type="search" placeholder="Search" />
       </div>
      </div>      
        
      <div>
        <Login/>
      </div>
      
        
    </nav>
    </>
  )
}
