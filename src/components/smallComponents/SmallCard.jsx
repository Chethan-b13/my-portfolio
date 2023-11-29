import React from 'react'
import "../../../styles/cards.scss"

const SmallCard = ({children,alignItem}) => {
    const customStyle = {
        alignItems: alignItem || "center"
    }
    return (
        <div className='smallCardContainer' style={customStyle}>
            {children}
        </div>
    )
}

export default SmallCard