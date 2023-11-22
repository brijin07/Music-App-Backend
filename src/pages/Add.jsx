import React from 'react'
import { FilePlus, PlusCircle, PlusSquare, Smile } from 'react-feather'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../services/allapi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({handleRes}) {

  const[uploadData,setuploadData]=useState({
    id:"",caption:"",thumnail:"",url:""
  })

  // input feild function
  const setInput=(e)=>{
    // console.log(e.target.value);
    const{name,value}=e.target

    // ... - spread operator -- showind all details (object value)
    setuploadData({...uploadData,[name]:value})
  }
  console.log(uploadData);

  // og youtube url :https://www.youtube.com/watch?v=AZeU5_YpqsA --- V=
  // embeded url :https://www.youtube.com/embed/AZeU5_YpqsA


  // -extract og youtube link to embeded url - for autoplaying videoo
  const extractUrl=(e)=>{
    let youtubeUrl=e.target.value

    // check the  position of "v=" in og link (.include mthd)
    if(youtubeUrl.includes("v=")){

      // check and take position of "v="  -- (index position -indexOf mthd)
      let index=youtubeUrl.indexOf("v=")
      console.log(index);

        // using substring function to take 13 index postion and avoiding index+2(v=)
      let videoUrl=youtubeUrl.substring(index+2,index+13)
      console.log(videoUrl);

      // state stored in a variable
      let videoData=uploadData

      videoData.url=`https://www.youtube.com/embed/${videoUrl}`
      // upload variable data in state function
      setuploadData(videoData)

    }
    console.log(uploadData);
  }

  
  // submitt bttn fnctn
  const handleAdd=async()=>{

    // destructure upload data state
    const {id,caption,thumnail,url}=uploadData

    // check condition to complete fill the form
    if(!id || !caption || !thumnail || !url){
      toast.warn('Please the form completly',{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    else{
      // make an api call - add api
      const response= await addVideo(uploadData)

      
        // add butten responce alert
      if(response.status>=200&&response.status<300){
        // console.log(response);
        handleRes(response.data)

        toast.success('New video uploaded successfully',{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

        // automatically close the form
        setShow(false)
      }
      else{
        toast.warn('Provide a unique ID!!!',{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    }

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

   <>
   
   <div onClick={handleShow}>

    <PlusCircle color='black' size={45}/>

   </div>


   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>

          <FloatingLabel className='mb-2' controlId="floatingId" label="Uploading Video ID">
          <Form.Control type="text" placeholder="Video Id" name="id" onChange={setInput}/>
          </FloatingLabel>

          <FloatingLabel className='mb-2' controlId="floatingCaption" label="Uploading Video Caption">
          <Form.Control type="text" placeholder="Video Caption" name="caption"  onChange={setInput}/>
          </FloatingLabel>

          <FloatingLabel className='mb-2' controlId="floatingImage" label="Uploading Video Cover Image Url">
          <Form.Control type="text" placeholder="Video Cover Image Url" name="thumnail"  onChange={setInput}/>
          </FloatingLabel>

          <FloatingLabel className='mb-2' controlId="floatingLink" label="Uploading Video Link">
          <Form.Control type="text" placeholder="Video Link" name="url"  onChange={extractUrl}/>
          </FloatingLabel>

          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
      <ToastContainer/>
   
   </>

  )
}

export default Add