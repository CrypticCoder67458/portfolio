import React from 'react'
import './about-me.css'


export const Highlight = ({element,title,text}) => {
    
    return (
        <div className='highlight-container '  >
            <div className='about-me-highlight '>
                <div className='highlight '>
                    {element}
                    <b>{title}:</b> 
                </div>
                <p>- {text}</p>
            </div>

        </div>
    )
}
