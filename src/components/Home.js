import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section 
        title="Model s"
        description="order Online for Touchless delivery"
        backgroundImage="model-s.jpg"
        leftButton="Custom order"
        rightButton="existing inventory"
        />
         <Section 
        title="Model x"
        description="order Online for Touchless delivery"
        backgroundImage="model-x.jpg"
        leftButton="Custom order"
        rightButton="existing inventory"
        />
         <Section 
        title="Model y"
        description="order Online for Touchless delivery"
        backgroundImage="model-y.jpg"
        leftButton="Custom order"
        rightButton="existing inventory"
        />
         <Section 
        title="Model 3"
        description="order Online for Touchless delivery"
        backgroundImage="model-3.jpg"
        leftButton="Custom order"
        rightButton="existing inventory"
        />
        <Section 
        title="Lowest Cost Solar Panel in America"
        description="Money-back guarantee"
        backgroundImage="solar-panel.jpg"
        leftButton="Order now"
        rightButton="Learn more"
        />
        <Section 
        title="Solar for new Roofs"
        description="Solar Roof Costs Less Than a New Roof"
        backgroundImage="solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
        />
        <Section 
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftButton="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
 
`