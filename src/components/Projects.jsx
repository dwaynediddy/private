import React from 'react'
import projectcards from './projectcards'

export default function Projects() {
    return (
            <div>
                <div className='container-fluid.d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <projectcards />
                        </div>
                        <div className='col-md-4'>
                            <projectcards />
                        </div>
                        <div className='col-md-4'>
                            <projectcards />
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
