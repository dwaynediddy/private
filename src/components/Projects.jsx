import React, { Component } from 'react'
import Projectscards from './projectcards.jsx'
import img1 from './images/burger1.jpeg'
import img2 from './images/burger2.jpeg'
import img3 from './images/burger3.jpeg'

export default function Cards() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Projectscards imgsrc={img1} title='project one' paragraph='lorem epsum i build this  '/>
                </div>
                <div className="col-md-4">
                    <Projectscards imgsrc={img2} title='project two' paragraph='this is a project i did '/>
                </div>
                <div className="col-md-4">
                    <Projectscards imgsrc={img3} title='project three' paragraph='another one etc etc'/>
                </div>
            </div>
        </div>
    )
}