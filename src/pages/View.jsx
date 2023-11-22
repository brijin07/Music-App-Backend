import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideo } from '../services/allapi'



function View({serverRes}) {

  // to store all videos data
  const [allVideos,setallVideos]=useState([])



  // to store after delete status
  const[deleteStatus,setdeleteStatus]=useState(false)




  // get all videos
  const getallVideos=async()=>{

    // get video api call fn
    let responce= await getVideo()

    // api responce in data
    // console.log(responce.data);

    // api responce stored in state
    setallVideos(responce.data)
  }

  // console.log(allVideos);

  // using useEffect Sneffect - when realod page automatically and view page -- in case there is no button to try this method
  useEffect(() => {

    // what to show
    getallVideos()

    // page reaload tym - null array reaload page in one tym  
  }, [serverRes,deleteStatus])


  // handle delete status
  const handleDeleteStatus=(res)=>{
    setdeleteStatus(res)
  }
  


  return (

    <div className='border p-3 rounded'>

    <Row>
      {
        // conver data to individual data - using .map mthd
        allVideos.map(video=>(

          <Col className='ps-3 mb-3' sm={12} md={6}>

            {/* data pass to parent to child using probs */}
          <Videocard card={video} handleDeleteStatus={handleDeleteStatus}/>     
          </Col>
      ))      
      }
    </Row>  

    </div>
  )
}

export default View