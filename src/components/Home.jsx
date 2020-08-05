import React from 'react'
import Typical from 'react-typical'

export default function Projects() {
    return (
        <div className="Home">
        <header className="App-header"></header>
        <h1>Hi I'm, Dwayne Burrows </h1>
        <p>
            I am a  
            <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
                " Gamer",
                1000,
                " Coder",
                1000,
                " Rugby player",
                1000,
            ]}>

            </Typical>
        </p>
    </div>
    )
}
