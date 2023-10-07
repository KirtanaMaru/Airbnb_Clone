import React from 'react'
import {importAllImages} from '../../imageImporter';
import './Category.css';
import { Link } from "react-router-dom";





function Category() {

  const images = importAllImages(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
  
  function leftScroll() {
    const left = document.querySelector(".wrapper");
    left.scrollBy(-200, 0);
    left.onscroll=myFunction1(left);
  }
  function rightScroll() {
    const right = document.querySelector(".wrapper");
    right.scrollBy(200,0)
    right.onscroll=myFunction(right);
  }
  function myFunction(right){
    const left = document.querySelector(".left-arrow");
    const right1 = document.querySelector(".arrow");
    if(right.scrollLeft>200){
      left.style.display="flex";
    }
    else{
      left.style.display="none";
    }
    if(right.scrollLeft>700){
      right1.style.display="none";
    }
  }

  function myFunction1(left){
    const right = document.querySelector(".arrow");
    const left1 = document.querySelector(".left-arrow");
    if(left.scrollLeft>800){
      right.style.display="none";
    }
    else{
      right.style.display="flex";
      
    }
    if(left.scrollLeft<(200)){
      left1.style.display="none";
    }
  }
  function switchbtn(){
    const btn = document.querySelector(".switch-ball1");
    const leftvalue= parseFloat(getComputedStyle(btn).marginLeft);
    if(leftvalue===14){
      btn.style.marginLeft='1px';
    }
    else{
      btn.style.marginLeft='14px';
    }
    

  }


  return (
    
    
    < div className="content-icons">
      
       <div><img onClick={leftScroll} src={images["skip-track.png"]}  alt='image1' className="left-arrow"/></div>
       <div className="wrapper">
       <Link to='/' className="icon1">
         <img src={images['amazing-pols.jpeg']} alt='image1' className="img-content"/>
         <p className="contents">Amazing pools</p>
       </Link> 
       <Link to='/lakefront' className="icon1">
          <img src={images['room.jpeg']} alt='image1' className="img-content"/>
          <p className="contents">Rooms</p>
        </Link> 
        <Link to='/amazingview' className="icon1">
          <img src={images['amazing-views.jpeg']} alt='image1' className="img-content"/>
          <p className="contents">Amazing views</p>
        </Link> 
        <Link to='/amazingview'className="icon1">
          <img src={images['trending-topic.png']} alt='image1' className="img-content"/>
          <p className="contents">Trending</p>
        </Link> 
        <Link to='/' className="icon1">
          <img src={images['grid.png']} alt='image1' className="img-content"/>
          <p className="contents">Off-the-grid</p>
        </Link> 
        <Link to='/farms' className="icon1">
          <img src={images["farm.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">Farms</p>
        </Link> 
        <Link to='/beach' className="icon1">
          <img src={images["beach.png"]} alt='image1' className="img-content"/>
          <p className="contents">Beach</p>
        </Link> 
        <Link to='/farms' className="icon1">
          <img src={images["OMG.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">OMG!</p>
        </Link> 
        <Link to='/' className="icon1">
          <img src={images["tiny-house.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">Tiny homes</p>
        </Link> 
        <Link to='/lakefront' className="icon1">
          <img src={images["lakefront.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">Lakefront</p>
        </Link> 
        <Link  to='/amazingview' className="icon1">
          <img src={images["countryside.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">Countryside</p>
        </Link> 
        <Link to='/' className="icon1">
          <img src={images["cabin.png"]} alt='image1' className="img-content"/>
          <p className="contents">Cabins</p>
        </Link> 
        <Link  to='/lakefront' className="icon1">
          <img src={images["farm.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">Farms</p>
        </Link> 
        <Link to='/amazingview' className="icon1">
          <img src={images["beach.png"]} alt='image1' className="img-content"/>
          <p className="contents">Beach</p>
        </Link> 
        <Link to='/farms' className="icon1">
          <img src={images["OMG.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">OMG!</p>
        </Link> 
        <Link  to='/beach' className="icon1">
          <img src={images["tiny-house.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">Tiny homes</p>
        </Link> 
        <Link to='/' className="icon1">
          <img src={images["lakefront.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">Lakefront</p>
        </Link> 
        <Link  to='/lakefront' className="icon1">
          <img src={images["countryside.jpeg"]} alt='image1' className="img-content"/>
          <p className="contents">Countryside</p>
        </Link>
      </div>
      <div><img onClick={rightScroll} src={images["skip-track.png"]}  alt='image1' className="arrow"/></div>
      
      <div className="filter">
          <img src={images["filter.png"]} alt='image1' height="12px" weight="12px"/>
          <p style={{fontSize:'12px',fontWeight:'600'}}>Filters</p>
      </div>
      <div className="display-tax">
        <div>
          <p>Display total before taxes</p>
        </div>
        <div className="switch">
          <div onClick={switchbtn} className="switch-ball1"></div>
        </div>
      </div>
      
    </div>

  )
}

export default Category
