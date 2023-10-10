import React from 'react'
import LeftSide from '../../Components/LeftSide/LeftSide'
import Posts from '../../Components/Posts/Posts'
import RightSide from '../../Components/RightSide/RightSide'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='leftside'>
                <LeftSide />
            </div>
            <div className='posts'>
                <Posts />
            </div>
            <div className='rightsid'>
                <RightSide />
            </div>
        </div>
    )
}

export default Home