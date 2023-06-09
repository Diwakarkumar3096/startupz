import React from 'react'
import "./home.css"
import profile from "../../Assets/profile.png"
const Home = () => {
  return (
    
      <div className='container home'> 
          <div className='home_container_box'>
                <h1 id='heading'>Discover</h1>
                <h2 id='subheading'>amazing startups</h2>
                <p>Find great startups curated by our experts for investing.</p>

          </div>
          <div className='profile'>
             <img src={profile} alt=''/>
          </div>
       
       
       </div>
    
  )
}

export default Home