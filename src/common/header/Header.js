import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Button from "@material-ui/core/Button";
import Modal from 'react-modal';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to appElement
  Modal.setAppElement(document.getElementById('login'));

const Header =() =>{
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
   //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
        <div className='header'>
        <img className='header-logo' src={logo} alt='header-logo'/>
        <Button className='btn' id="login" name='login' variant="contained" color="default" onClick={openModal}>Login</Button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <FormControl required>
                <InputLabel htmlFor="username"> Username </InputLabel>
                <Input
                  id="username"
                  type="text"
                        />
                <FormHelperText >
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="password"> Password </InputLabel>
                <Input
                  id="password"
                  type="password"
                      />
                <FormHelperText >
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={closeModal}
              >
                LOGIN
              </Button>

      </Modal>
        </div>
        );
}

export default Header;