import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import View from './View'
import Add from './Add'
import Category from './Category'
import { Link } from 'react-router-dom'


function Homepage() {

  // to store add.jsx data responce
  const[serverRes,setserverResponse]=useState({})

  // add.jsx le responce store cheyyan
  const handleResponse=(res)=>{
    setserverResponse(res)
  }
  console.log(serverRes);

  return (


   <>
    <div>
      
      <h1 style={{fontSize:"40px",fontFamily:"serif"}} className='text-dark ms-5 mb-5 '>All Video Cards</h1>

      <Link to={'/watchhistory'} className='me-auto d-flex justify-content-end mb-5' style={{textDecoration:"none",fontSize:"20px",color:"blue"}}>Watch history</Link>

      <Row>

        <Col lg={1}>
          <Add handleRes={handleResponse} />
        </Col>

        <Col lg={7}>
         <View serverRes={serverRes}/>
        </Col>

        <Col lg={4}>
          <Category/>
        </Col>
        
      </Row>
      
    </div>
      
  </>


  )
}

export default Homepage