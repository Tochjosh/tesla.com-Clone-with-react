import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'
// import Menu from '@material-ui/icons/Menu'


function Header() {
const [showBurger, setShowburger] = useState(false);

  return (
    <Container>
        <a>
            <img src="Tesla Images/images/logo.svg" alt="tesla logo" />
        </a>
        <MainMenu>
            <a href='#'>Model 3</a>
            <a href='#'>Model s</a>
            <a href='#'>Model x</a>
            <a href='#'>Model y</a>
            <a href='#'>Solar Roofs</a>
            <a href='#'>Solar Panels</a>
        </MainMenu>
        <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <a onClick={() => setShowburger(true)}>Menu</a>
        </RightMenu>
        <BurgerNav status={showBurger}>
            <CloseWrap>
                <CustomClose onClick={() => setShowburger(false)}/>
            </CloseWrap>
            <li href='#'>Existing Inventory</li>
            <li href='#'>Used Inventory</li>
            <li href='#'>Existing Inventory</li>
            <li href='#'>Trade-In</li>
            <li href='#'>Cyber Truck</li>
            <li href='#'>Roadstar</li>
            <li href='#'>Semi</li>
            <li href='#'>Utilities</li>
            <li href='#'>Test Drive</li>
        </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 40px;
top: 0;
left: 0;
right: 0;
z-index: 1;

`

const MainMenu = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex: 1;

a {
    padding: 0 20px;
    font-weight: 600;
    flex-wrap: nowrap;
    font-size: 14px;
    font-style: "Gotham Medium", sans-serif;
}

@media (max-width: 768px) {
    {
        display: none;
    }
}

`

const RightMenu = styled.div`

display: flex;
align-items: center;

a {
    font-weight: 600;
    margin-right: 10px;
    font-size: 14px;
    padding: 0 10px;
}
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 310px;
height: 100vh;
list-style: none;
display: flex;
transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s;
flex-direction: column;
padding: 30px 40px ;
text-align: left;
li {
    padding: 15px 0;
    font-size: 15px;
    font-weight: 500;
}
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrap = styled.div`
display: flex;
justify-content: flex-end;
padding-bottom: 20px;
`