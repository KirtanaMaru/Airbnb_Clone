import React from 'react'
import { importAllImages } from '../../imageImporter';
import './Amazingviews.css';
export default function Beach() {
  //const images = importAllImages(require.context('../images/amazingviewsimg/nashik', false, /\.(png|jpe?g|svg)$/));
  const skiptrack = importAllImages(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
  /*const imageArray = Object.keys(images);*/

  const cardData = [
    { 
      id:"id1",
      images:importAllImages(require.context('../../images/lakefront/a', false, /\.(png|jpe?g|svg)$/)),
      imagearray1: Object.keys(importAllImages(require.context('../../images/lakefront/a', false, /\.(png|jpe?g|svg)$/))),
      location: 'Bodhawla , India',
      view:'Mountain view',
      date:'2-7 Oct',
      rupees:'22,304 ',
      night:'night',
  

    },
    { 
      id:"id2",
      images:importAllImages(require.context('../../images/lakefront/banglore', false, /\.(png|jpe?g|svg)$/)),
      imagearray1: Object.keys(importAllImages(require.context('../../images/lakefront/banglore', false, /\.(png|jpe?g|svg)$/))),
      location: 'Mashabor , India',
      view:'Mountain view',
      date:'3-8 Oct',
      rupees:'21,304 ',
      night:'night',
    },
    { 
      id:"id3",
      images:importAllImages(require.context('../../images/lakefront/bhimatal', false, /\.(png|jpe?g|svg)$/)),
      imagearray1: Object.keys(importAllImages(require.context('../../images/lakefront/bhimatal', false, /\.(png|jpe?g|svg)$/))),
      location: 'Rishikesh , India',
      view:'Beach and Mountain view',
      date:'4-10 Oct',
      rupees:'8,305 ',
      night:'night',
    },
    { 
      id:"id4",
      images:importAllImages(require.context('../../images/lakefront/bhopal', false, /\.(png|jpe?g|svg)$/)),
      imagearray1: Object.keys(importAllImages(require.context('../../images/lakefront/bhopal', false, /\.(png|jpe?g|svg)$/))),
      location: 'Cheog , India',
      view:'Mountain and Valley view',
      date:'5-14 Oct',
      rupees:'2,304 ',
      night:'night',
    },
    { 
      id:"id5",
      images:importAllImages(require.context('../../images/lakefront/khuruptal', false, /\.(png|jpe?g|svg)$/)),
      imagearray1: Object.keys(importAllImages(require.context('../../images/lakefront/khuruptal', false, /\.(png|jpe?g|svg)$/))),
      location: 'Bhowali , India',
      view:'Mountain and Garden view',
      date:'3-10 Oct',
      rupees:'2,964 ',
      night:'night',
    },
    { 
      id:"id6",
      images:importAllImages(require.context('../../images/lakefront/kurukam', false, /\.(png|jpe?g|svg)$/)),
      imagearray1: Object.keys(importAllImages(require.context('../../images/lakefront/kurukam', false, /\.(png|jpe?g|svg)$/))),
      location: 'Kasauli , India',
      view:'Mountain view',
      date:'4-17 Oct',
      rupees:'4,304 ',
      night:'night',
    },
    { 
      id:"id7",
      images:importAllImages(require.context('../../images/lakefront/London', false, /\.(png|jpe?g|svg)$/)),
      imagearray1: Object.keys(importAllImages(require.context('../../images/lakefront/London', false, /\.(png|jpe?g|svg)$/))),
      location: 'Sainj , India',
      view:'Mountain and River view',
      date:'5-10 Oct',
      rupees:'2,304 ',
      night:'night',
    },
    { 
      id:"id8",
      images:importAllImages(require.context('../../images/lakefront/nanital', false, /\.(png|jpe?g|svg)$/)),
      imagearray1: Object.keys(importAllImages(require.context('../../images/lakefront/nanital', false, /\.(png|jpe?g|svg)$/))),
      location: 'Theog , India',
      view:'Mountain view',
      date:'9-14 Oct',
      rupees:'7,934',
      night:'night',
    },


  ];
  
  function rScroll(id) {
    
    const right = document.getElementById(id);
    
    if (right) {
      right.scrollBy(300, 0);
      right.onscroll = () => myFunction(right);
    }
  }
  function lScroll(id) {
    const left = document.getElementById(id);
    
    if (left) {
      left.scrollBy(-300, 0);
      left.onscroll = () => myFunction1(left);
    }
  }
  
  function myFunction(right){
    const left = document.querySelector(".larrow");
    const right1 = document.querySelector(".rarrow");
    if(right.scrollLeft>200){
      left.style.display="flex";
    }
    else{
      left.style.display="none";
    }
    if(right.scrollLeft>2000){
      right1.style.display="none";
    }
  }

  function myFunction1(left){
    const right = document.querySelector(".rarrow");
    const left1 = document.querySelector(".larrow");
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
  

  
  
  return (
    <>
    <div className="amazingview">
     { cardData.map((data,index) => (
    <div key={index} className='card'>
    <div className="imgcard">
      <img src={skiptrack["skip-track.png"]}  onClick={() => lScroll(data.id)} alt="airbnb" className="larrow" />
      <div className='imgcontainer' id={data.id}>
      {data.imagearray1.map((image,index) => ( <img src={data.images[image]} key={index} alt="default" className="images"/>)) }
      </div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width='24px'
      height='24px'
      fill='rgb(0,0,0,0.5)'
      stroke='white'
      strokeWidth='2px'
      className='heart'
    >
      <path d="M12 21.35l-1.45-1.32C5.4 16.14 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.64-8.55 11.54L12 21.35z" />
    </svg>
    <img src={skiptrack["skip-track.png"]}  onClick={() => rScroll(data.id)} alt="airbnb" className="rarrow" />
    </div>
    <div className="desc">
    <p className="heading">{data.location}</p>
    <p className="view">{data.view}</p>
    <p className="date">{data.date}</p>
    <p className='rs'>&#8377;{data.rupees}<span className='night'>{data.night}</span></p>
    </div>
    
    </div>))
}
    </div>
    <div className='view-bottom'>
       <p>Continue exploring amazing views</p>
       <div className="showmore">
        Show more
       </div>
    </div>
    </>
  )
}