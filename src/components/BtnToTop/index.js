import React, { useEffect } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: none;
  width:40px;
  height:40px;
  border:none;
  border-radius: 50%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
`

const BackTop = () => {
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  useEffect(() => {
    const onScroll = () => {
      const mybutton = document.getElementById("myBtn");
      if (!mybutton) {
        return;
      }

      if (window.pageYOffset > 30) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])


  return (
    <Btn onClick={topFunction} id="myBtn" title="Go to top" className="btn btn-light btn-lg back-to-top" role="button"><i className="fas fa-chevron-up" style={{color: "black"}}></i></Btn>
  )
}

export default BackTop;