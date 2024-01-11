import React from 'react'
import SmallCard from '../common/SmallCard'
import { certificatesInfo } from '../../../constants/consts'

const Certificates = () => {
  return (
    <SmallCard styles={{alignItem:"flex-start",justifyContent:"flex-start",height:"fit-content",minHeight:"auto"}}>
        <h2 id="certificates">Certificates</h2>
        {
          certificatesInfo.map((certificate,indx)=>{
            return(
              <div key={indx} className="flexBox flex_gap_1">
                •
                <div className='certificateName'>
                  <h4>{certificate?.name}</h4>
                  <div className="flexBox flex_gap_half">
                      <p>{certificate?.date}</p>
                      <a href={certificate?.creds} target='_blank'>Credentials</a>
                  </div>
                </div>
              </div>
            )
          })
        }
    </SmallCard>
  )
}

export default Certificates