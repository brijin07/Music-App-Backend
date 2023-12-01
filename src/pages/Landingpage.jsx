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
<div className='container-fluid'>

<Row className='align-items-center'>

  <Col xs={12} lg={4} className='mb-4 mb-lg-0'>
    <div className=''>
      <img  className='img1' style={{ width: "100%", marginBottom: "25px" }} src="https://www.oasisacademytemple.org/uploaded/Temple/Page_Photographs/music-colour-splash.jpg" alt="" />
    </div>
  </Col>

  <Col xs={12} lg={6} className='hii'>
    <h1 className='kk mb-3'>Welcome to Video.upload</h1>
    <p style={{ textAlign: "justify" }} className='mb-3'>Where users can use their favorite videos. Users can upload any YouTube videos by copying and pasting their URL. Video.com allows adding and removing uploaded videos and also arranging them in different categories by drag and drop. It is free. Try it now!!!!!
    </p>
    <button onClick={handleNavigate} className='btn btn-success'>Click here to know more !!!</button>
  </Col>

</Row>

</div>

  )
}

export default Landingpage