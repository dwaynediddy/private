import React from 'react'
import Typical from 'react-typical'

export default function About() {
    return (
        <div className="About">
            <header className="App-header"></header>
            <h1>Hi I'm, Dwayne Burrows</h1>
            <p>
                I miss  
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    " cocaine",
                    1000,
                    " Poland",
                    1000,
                    " slaying bitches",
                    1000,
                ]}>

                </Typical>
            </p>
        </div>
    )
}
