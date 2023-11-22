import React from 'react'
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../services/allapi';
import {v4 as uuidv4} from 'uuid';


// de-structure to card
function Videocard({card,handleDeleteStatus,insideCategory}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async() =>{
         setShow(true); 

        //  automatic id generation
        const uid=uuidv4()

        // to generate system date and timeh
        let cardTime=new Date()

        // to get caption and url from card
        const{caption,url}=card


        if(uid!="",caption!="",url!="",cardTime!=""){

            // posting body and assighn to backend data
            const body={
                id:uid,
                cardName:caption,
                url,
                date:cardTime
            }
              // api call
              const response = await addHistory(body)

              console.log(response);
        }

        console.log(uid);
        console.log(cardTime);
    }

    // function definition
    const removeItem=async(id)=>{
        // api call to delete specific card (using id)
        let responce = await deleteVideo(id)
        console.log(responce);
        if(responce.status>=200&&responce.status<300){
            handleDeleteStatus(true)
        }
    }

    // drag fn
    const dragStarted=(e,id)=>{
    
        console.log("drag started & source card id"+id);

        // trasnfer data pre mthd-using id
        e.dataTransfer.setData("cardId",id)
    }

  return (

  <>
        <div>
            {/* draggable - drag cheyyumnbo ull event ll fn use cheith event nte*/}
            <Card className='shadow' draggable onDragStart={e=>dragStarted(e,card?.id)}>

            <Card.Img  onClick={handleShow} variant="top" height={"170px"} src={card?.thumnail} />
            <Card.Body>
            <Card.Title>
                 <span>

                 {card?.caption}
                 
                    {
                     insideCategory?"":
                        <Trash2 onClick={()=>removeItem(card?.id)} color='red' style={{float:'right'}} />
                    }
                </span> 
            </Card.Title>
            </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Video Caption</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <iframe width="590" style={{height:"300px",width:"463px"}} src={`${card.url}?autoplay=1`} title="One Punch Man - SuperMan [AMV/EDIT]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </Modal.Body>
            </Modal>       
        </div>
  </>

  )
}

export default Videocard