
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png'; // Import the image
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="logo" style={{ height: "30px", width: "90px" ,borderRadius: "3px" }}  />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader =  styled.header`
 padding : 0 4.4.8rem;
 height : 5rem;
 background-color : ${({theme}) => theme.colors.bg};
 display: flex;
 justify-content : space-between;
 align-items: center;
`;
export default Header;
