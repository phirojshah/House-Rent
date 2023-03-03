import React from 'react'
import styled from 'styled-components'

function Nav() {
  return (
    <Container>
      <Logo src="/images/logo.jpg "/>
      <NavMenu>
            <a>
                <span> HOME</span>
            </a>

            <a>
                <span> PROPERTIES</span>
            </a>
            <a>
                <span> CONTACT</span>
            </a>
            <a>
                <span> ABOUT US</span>
            </a>
            <a>
                <span> BLOG</span>
            </a>
            
      </NavMenu>
      <UsrImg  src="/images/profile.jpg "/>
    </Container>
  )
}

export default Nav

const Container=styled.nav`
//width:100%;
height:80px;
//background-color: #fff;
//background-color:#d1e8d1;
background: transparent;
margin-left: 0px;
  margin-right: 0px;
display:flex;
align-items:center;
padding:0 36px;
cursor:pointer;
`

const Logo=styled.img`
height:80px;
width: 80px;;
`

const NavMenu=styled.div`
justify-content:center;
display:flex;
flex:1;
margin-left:25px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding:0 10px;
    height:20px;
   
    span{
        font-size:15px;
        letter-spacing:1.42px;
        padding:0 12px;
        position:relative;
        //&:after => work as a div
        &:after{  
            content:"";
             height:2px;
             background-color:black;
             position:absolute;
             left:0;
             right:0;
             bottom:-6px;
             opacity:0;
             transform-origin:left center;
             transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
             transform:scaleX(0);
             
        }
    }
    &:hover{
        span:after{
            transform: scaleX(1);
            opacity:1;
        }
    }
}

`

const UsrImg=styled.img`
height:48px;
width:48px;
border-radius:50%;
`