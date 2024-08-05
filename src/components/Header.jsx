import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #252537;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchBar = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar type="text" placeholder="Search..." />
      <Profile>
        <Avatar />
      </Profile>
    </HeaderContainer>
  );
};

export default Header;
