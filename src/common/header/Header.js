import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";



class Header extends React.Component {
    state = {  } 
    render() { 
        return (
        <div className='header'>
        <img className='header-logo' src={logo} alt='header-logo'/>
        <Button className='btn' variant="contained" color="default">Login</Button>
        </div>
        );
    }
}
 
export default Header;