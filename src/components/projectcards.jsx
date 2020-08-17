import React from 'react'
import './Projects.css'

const projectcards = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt='' className="card-img-top"/>

            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">{props.paragraph}</p>
                <a href="" class="btn btn-outline-success">
                    button
                </a>
            </div>
        </div>
    )
}

export default projectcards