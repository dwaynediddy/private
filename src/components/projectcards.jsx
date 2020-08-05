//this mother fucker wouldnt import into project as <projectcards />

import React from 'react'
import burger1 from '../images/burger1.jpeg'

export default function projectcards() {
    return (
        <div>
            <div className="card text-center">
            <div className="overflow">
                <img src={burger1} alt="image1" />
            </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">Neon Wedding Pair Application</h4>
                    <p className="card-text text-secondary">This application is a full stack application built with using the Full M.E.R.N stack.
                    built as a pair assignment with Adam Chambost, Whom you can find on LinkedIn. This was built as an Assignment for CoderAcademy 2020 over
                    a 2 week period.</p>
                    <a href="https://design.argon.wedding/" className="btn btn-outline-success"> Checkout Neon</a>
                </div>
            </div>
        </div>
    )
}
