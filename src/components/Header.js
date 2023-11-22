import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

  <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand href="#home">

            <Upload/>

            <Link style={{textDecoration:"none"}} to={''}>
            <span style={{color:"white"}} className='ms-3'>Video Upload</span>
            </Link>
           
            
           
          </Navbar.Brand>
        </Container>
      </Navbar>



    </div>
  )
}

export default Header