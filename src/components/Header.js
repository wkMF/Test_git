import React from 'react'
import logo from '../assets/logo.svg'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopBar = styled.div`
  background-color: #222;
  color: #fff;
  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`

function Header() {
  return (
    <TopBar>
      <h2>Welcome React</h2>
    </TopBar>
  )
}

export default Header
