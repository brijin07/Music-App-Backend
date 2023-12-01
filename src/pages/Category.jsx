import React from 'react'
import { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getallCategories, getsingleVideo, updateCategory } from '../services/allapi';
import { useEffect } from 'react';
import { Trash2 } from 'react-feather';
import Videocard from './Videocard';


function Category() {

  // store category details from api
  const[allCategory,setallCategory]=useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // store inputbox values
  const[categoryItem,setcategoryItem]=useState({

    id:"",
    name:"",
    allVideos:[]

  })

  // get value from input field
  const addcategoryForm=(e)=>{
    const {name,value}=e.target
    setcategoryItem({...categoryItem,[name]:value})
  }
  console.log(categoryItem);

  const handleaddCategory=async(e)=>{

    // avoid automatic refresh
    e.preventDefault()

    // destrecture the object
    const{id,name}=categoryItem

    // check id and category
    if(!id || !name){
      toast.warn('please fill the form completely')
    }
    else{
      // api call
      let responce=await addCategory(categoryItem)
      console.log(responce);
      toast.success('success')

      // auto close
      getcategoryList()
      setShow(false)
    }
  }

  // get all categories
  const getcategoryList=async ()=>{
    const responce = await getallCategories()
    console.log(responce.data);
    setallCategory(responce.data)
  }
  console.log(allCategory);

  // show details not realoding
  useEffect(() => {

    getcategoryList()

  }, [])

  // category delete function
  const handleDeleteCategory=async(e,id)=>{

    e.preventDefault()
    console.log(id);

    // api call
    await deleteCategory(id)

    // show other datas
    getcategoryList()
  }

    // drag here (category) fn
  const dragOver=e=>{

    // stop auto realod
    e.preventDefault()
    console.log("dragging over the category board!!!!");
  }

  // get category id
  const dropped=async(e,categoryId)=>{
    console.log(categoryId);

    // card id get from vdocard
    let sourceCardId=e.dataTransfer.getData("cardId")
    console.log("source card id",sourceCardId);

    // logic to implement adding in the given category
    let {data} =await getsingleVideo(sourceCardId)
    console.log('source video data',data);

    // insert to array(category)
    let selectedCategory=allCategory.find((item)=>item.id==categoryId)
    console.log("target category details",selectedCategory);

    // data push to array
    selectedCategory.allVideos.push(data)

    console.log("update category detaild",selectedCategory)

    await updateCategory(categoryId,selectedCategory)

    getcategoryList();
  }


  
  return (

    <> 
    <div className='d-grid mt-5'>
    <div  onClick={handleShow} className='btn btn-success m-2'>
     Add catogory
     </div>


     {
      allCategory?.map(item=>(

        <div droppable onDragOver={e=>dragOver(e)}

        // getting category id
        onDrop={e=>dropped(e,item?.id)}

         className='d-flex justify-content-between border rounded mt-1 p-2'>
          <h4>{item.name}</h4>
          <span onClick={e=>handleDeleteCategory(e,item?.id)}><Trash2 color='red'/> </span>

          
            <Row>
              {
                item?.allVideos.map((card)=>(
                  <Col className='p-3 mb-1 sm={12}'>
                      <Videocard card={card} insideCategory={true}/>
                  </Col>
                ))
              }

            </Row>



         
        </div>
      ))
    }

    

    </div>
    <Modal
         show={show}
         onHide={handleClose}
         backdrop="static"
         keyboard={false}
       >
         <Modal.Header closeButton>
           <Modal.Title>Add catogory</Modal.Title>
         </Modal.Header>
         <Modal.Body>
 
         <FloatingLabel className='mb-3' controlId="floatingid" label="id">
         <Form.Control onChange={addcategoryForm} name='id' type="text" placeholder="id" />
       </FloatingLabel>
 
       <FloatingLabel className='mb-3' controlId="floatingid" label="catogory">
         <Form.Control onChange={addcategoryForm} name='name'  type="text" placeholder="catogory" />
       </FloatingLabel>
 
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={handleaddCategory}>Add</Button>
         </Modal.Footer>
       </Modal>

       <ToastContainer
      position="top-center"
      autoClose={5000}
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

export default Category