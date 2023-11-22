import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';



function Landingpage() {

  // usenavigate() is a hook

  const navigate=useNavigate()

  const handleNavigate=()=>{

    // navigate to homr page
    navigate('/home')
  }

  return (
    <div>

      <Row className='align-items-center'>

        <Col></Col>

        <Col lg={6}>
          <h1>Welcome to Video.com</h1>
          <p style={{textAlign:"justify"}}>Where user can use their favorite videos user can upload any youtube videos by coppy
            and paste their url. video.com will allow to add and remove their uploaded videos
            and also arrange them in diffrent categories by drag and drop. it is free. try it.
            now!!!!!
          </p>
          <button onClick={handleNavigate} className='btn btn-success'>Click here to know more !!!</button>
        </Col>

        <Col lg={4}>
          <img style={{height:"350px",width:"380px",marginLeft:"25px"}} src="https://www.oasisacademytemple.org/uploaded/Temple/Page_Photographs/music-colour-splash.jpg" alt="" />
        </Col>

        <Col></Col>

      </Row>



    </div>
  )
}

export default Landingpage