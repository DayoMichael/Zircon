import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WasabiLogo} from "../assets/wasabi-logo.svg"

function Header() {
    const navigation = [
        {
            title: "Home"
        },
        {
            title: "About"
        },
        {
            title: "Solutions"
        },
        {
            title: "Pricing"
        },
        {
            title: "Contact"
        },
    ]
  return (
    <StyledHeader>
        <div className='header-section'>
            <div className='left-section'>
                <WasabiLogo/>
                {navigation.map((item) => (
                    <p className='nav-text'>{item.title}</p>
                ))}
            </div>
            <div className='right-section'>

            </div>
        </div>

    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #ffffff;
    .header-section{
        width: 80%;
    }
    .left-section {
        display: flex;
        justify-content: space-between;
    }
    .nav-text{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.005em;
        color: #062A54;
    }

`