import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeart, FaCompass, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  p{
    font-size: 1.75rem;
    font-family: 'Oleo Script', cursive;
    margin: 0;
    svg{
      margin-bottom: 5px;
    }
  }
`

const SearchContainer = styled.div`
  background: #fafafa;
  border: 1px solid #dbdbdb;
  width: 25%;
  padding: 7px;
  border-radius: 3px;
  color: #999;
  svg{
    margin-bottom: 5px;
  }
  input{
    border: none;
    font-weight: 300;
    background: transparent;
    text-align: center;
  }
`;

const IconsContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
`;

class Navbar extends Component{
  render(){
    return (
      <Nav>
        <p><FaInstagram /> | Instaclone</p>
        <SearchContainer>
          <FaSearch/><input type="text" placeholder="Search"/>
        </SearchContainer>
        <IconsContainer>
          <FaCompass size={28} />
          <FaHeart size={28} />
          <FaUser size={28} />
        </IconsContainer>
      </Nav>
    );
  }
}

export default Navbar;
