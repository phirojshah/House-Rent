import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'

function Home() {
  return (
    <Container>
      <ImageSlider/>
    </Container>
  )
}

export default Home

const Container=styled.main`
min-height: calc(100vh-70px);
padding:o calc(3.5vw+ 5px) ;`