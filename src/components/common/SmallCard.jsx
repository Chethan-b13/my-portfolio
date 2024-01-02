import React from 'react'
import "@/styles/cards.scss"

const SmallCard = ({children,styles}) => {
    const customStyle = {
        alignItems: styles?.alignItem || "center",
        width: styles?.width || "100%",
        minHeight: styles?.minHeight || "100%",
        padding: styles?.padding || "2rem",
    }
    return (
        <div className='smallCardContainer' style={customStyle}>
            {children}
        </div>
    )
}

export default SmallCard