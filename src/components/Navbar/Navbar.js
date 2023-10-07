import React from 'react'
import airbnblogo from '../../images/airbnblogo.png';
import search1 from '../../images/search.png';
import browser from '../../images/browser.png';
import pr from '../../images/pr.png';
import logo from '../../images/logo.png';
import menu1 from '../../images/menu.png';
import map from '../../images/map.png';
import './Navbar.css';
import { useState,useEffect} from 'react';
import Category from '../Categories/Category';
import Signup from '../Signup/Signup';
import Thankyoupage from '../Thankyoupage/Thankyoupage';


export default function Navbar() {
  const [screensize, setScreensize] = useState(window.innerWidth);
  const [search,setSearch]=useState({p1:'Anywhere',p2:'Any week',p3:'Add guest'});
  const [isSignupOpen,setSignupOpen] = useState(false);
  const [openPage,setopenPage] = useState(false)
  const isOpenPage =() => {
      setopenPage(true)
  }
  const isClosePage = () =>{
      setopenPage(false)
  }

  const SignupOpen =() => {
    console.log('open');
    setSignupOpen(true);
  }

  const SignupClose =() =>{
    setSignupOpen(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreensize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect( () =>{
    if(screensize<=500){
         setSearch({p1:'Anyw...',p2:'Any w...',p3:'Add g...'});
    }
    else if(screensize<=900){
      setSearch({p1:'Anywh...',p2:'Any we...',p3:'Add gue...'});
    }
    else{
      setSearch({p1:'Anywhere',p2:'Any week',p3:'Add guest'});
    }
    
  },[screensize]);
  
  function profile(){
    const btn = document.querySelector('.menu-card');
    if(btn.style.display==='block'){
      btn.style.display='none';
    }
    else{
      btn.style.display='block';
    }
  }
  window.onclick = function (event) {
    
    const menuCard = document.querySelector('.menu-card');
    
    if (!event.target.matches('.side')) {
      menuCard.style.display = 'none';
    }
  }
  
 window.onscroll= function(){
  const btn= document.querySelector('.showmap');
  if(window.scrollY<400){
    
    btn.style.display='block';
  }
  else{
    btn.style.display='none';
    
  }
 }

  return (
    <>
    <div className='Navbar'>
      <div  className="nav">
      
        {screensize >= 1100 ? (
            <img src={airbnblogo} alt="airbnb" className="airbnblogo" />
              ) : (
            <img src={logo} alt="airbnb" className="logo" />
        )}
        <div className="search">
          <p style={{ borderRight: '1px solid lightgray' }}>{search.p1}</p>
          <p style={{ borderRight: '1px solid lightgray' }}>{search.p2}</p>
          <p style={{color:'rgb(146, 144, 144)'}}>{search.p3}</p>
          <img src={search1} alt="search" className="search-side"/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <p style={{fontWeight: '500',fontSize:'15px',whiteSpace:'nowrap',overFlow: 'hidden'}}>Airbnb your home</p>
          <img src={browser} alt="browser" className="browser"/>
          <div onClick={profile} className="side">
            <img src={menu1} alt="menu" className="menu"/>
            <img src={pr} alt="pr" className="profile"/>
          </div>
        </div>  
        <div className='menu-card'>
        <div>
        <div onClick={SignupOpen} style={{fontWeight:'500',color:'black'}} className='menu-item'>Sign up</div>
        <div className='menu-item'> Log in </div>
        </div>
        <div style={{borderBottom:"1px solid lightgrey",padding:'8px 0px'}} ></div>
        <div>
        <div className='menu-item'>Airbnb your home</div>
        <div className='menu-item'>Help Center</div>
        </div>
        
      </div>  
      </div>
      
      <Category/>
    </div>
    <div className='showmap'>
      Show map <img src={map} alt="map" className='map'/>
    </div>
    <Signup isOpen={isSignupOpen} isClose={SignupClose} thanku={isOpenPage}/>
    <Thankyoupage isOpen={openPage} isClose={isClosePage}/>
    </>
  )
}
