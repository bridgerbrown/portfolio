import React from 'react'

function WorkItem(props) {
    const { title, subtitle, description, details, image1, image2, alt1, alt2 } = props.itemData
    
    return(
        <div className='Work-Item'>
            <div className='Work-Item-Main'>
                <img src={image1} alt={alt1} />
                <div className='Item-Description'>
                    <h1>{title}</h1>
                    <h4>{subtitle}</h4>
                    <img src='./src/assets/link_icon.png' alt='external link icon' className='Link-Icons' />
                    <p>{description}</p>
                </div>
            </div>
            <div className='Work-Item-Details'>
                <p>{details}</p>
                <img src={image2} alt={alt2} />
            </div>
            <button>More</button>
        </div>
    )
}

export default WorkItem