import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allapi'
import { Link } from 'react-router-dom'
import {  ArrowLeft } from 'react-feather'
import Table from 'react-bootstrap/Table';



function Watchhistory() {

  const[history,setHistory]=useState([])

  const getwatchHistory=async()=>{

    // api call
    const {data}= await getHistory()

    setHistory(data)
    
  }

  console.log(history);

  // automatic reload
  useEffect(() => {
    getwatchHistory()
  }, [])

  return (
    <div className='container-fluid'>

  <div className='d-flex justify-content-center align-items-center'>
      <h1 className='wh'>Watch History</h1>
      <Link to='/home' style={{textDecoration:"none",marginLeft:"45px",fontSize:"20px",fontFamily:"monospace"}} >
        <span><ArrowLeft/></span> Back</Link>
  </div>

   

    <Table striped bordered hover >
      <thead>
        <tr>
        <th>No</th>
          <th>Name</th>
          {/* <th>Url</th> */}
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {
            history?.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item.cardName}</td>
              {/* <td>{item.url}</td> */}
              <td>{item.date}</td>
              </tr>
            ))
          }
      
      </tbody>
    </Table>
    
    </div>
  )
}

export default Watchhistory