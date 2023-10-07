import React  from 'react'
import './Thankyoupage.css';

function Thankyoupage({isOpen,isClose}) {
    if(!isOpen){
        return null
    }
   

  return (
    <div className='thanku-overlay'>
        <div className='thanku-card'>
            <div className='thanku-heading'>Thank you for Sign up !!</div>
            <div onClick={isClose} className='exit'>Exit</div>
        </div>

      
    </div>
  )
}

export default Thankyoupage
