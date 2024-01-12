import React from 'react'
import SmallCard from '../common/SmallCard'
import { ContactDetails } from '../../../constants/consts';

const ContactCard = () => {
    
    return (
        <SmallCard styles={{alignItem:"flex-start",justifyContent:"flex-start",height:"fit-content",minHeight:"auto"}} >
            <h2 id="contact">Contact</h2>
            {
                ContactDetails.map((info,indx)=>{
                    return (
                        <React.Fragment key={indx}>
                        <div className="flexBox flex_gap_1 contactDetails">
                            {info?.contactIcon}
                            <a href={info?.link} target='_blank' className='smallFlexBox'>{info?.name}</a>
                        </div>
                        </React.Fragment>
                    )
                })
            }
        </SmallCard>
    )
}

export default ContactCard