import React from 'react'
import "@/styles/cards.scss"

const SmallCard = ({children,styles}) => {
    const customStyle = {
        alignItems: styles?.alignItem || "center",
        width: styles?.width || "100%",
        height: styles?.height || "auto",
        minHeight: styles?.minHeight || "auto",
        padding: styles?.padding || "2rem",
        justifyContent: styles?.justifyContent || "center",
    }
    return (
        <div className='smallCardContainer' style={customStyle}>
            {children}
        </div>
    )
}

export default SmallCard