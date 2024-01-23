import React, { useState } from 'react';
import { Modal, Button, Form, ModalHeader, ModalBody} from 'react-bootstrap';
import Col from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useRef,useEffect } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import { useData } from '../Context/MovieContext';
import useLocalStoragehook from '../hooks/useLocalstorage';



export default function Bookmodal({onHide,moviename,url,lang}) {


// const {setuserdata,setcard}=useData()

const [name,setname]=useState(moviename)
const [language,setlang]=useState(lang)
const [link,setlink]=useState(url)
const [username,setusername]=useLocalStoragehook("usrname",' ')
const [cardno,setcardno]=useLocalStoragehook("card",' ')





   const handlesubmit=(e)=>{
    e.preventDefault()
    
 
    
    onHide();

   }
        


  return (
    <>
    {/* <Modal.Header>Create New Note < closeButton></closeButton></Modal.Header> */}
    <ModalHeader >
          <Modal.Title>Create New Note</Modal.Title>
          {/* <button className="btn-close">  */}
          {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
          <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true" onClick={()=>onHide()}>&times;</span>
</button>
        </ModalHeader>
   
    <ModalBody>
    <Form onSubmit={handlesubmit}>
    <Form.Group controlId="formName">
        <Form.Label>Show Name</Form.Label>
        <Form.Control
          type="text"
         value={name}
         
        />
      </Form.Group>
      <Form.Group controlId="formName">
        <Form.Label>language</Form.Label>
        <Form.Control
          type="text"
         value={lang}
      
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>User ID</Form.Label>
        <Form.Control
          type="text"
        value= { username?username : null} 
        // onChange={(e)=>{setuserdata(e)}}
        onChange={(event) =>
          setusername(event.target.value)
        }
        id='usrname'
        />
      </Form.Group>
      <Form.Group >
        <Form.Label>Card Details</Form.Label>
        <Form.Control
          type="text"
       value={cardno}
       id='card'
       onChange={(e)=>{setcardno(e.target.value)}}

        />
      </Form.Group>


{/* 
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
             Summary
              </Form.Label>
              <Col sm="10">
                {/* <Form.Control type="text" placeholder="Description " ref={description} /> */}
                {/* <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description "  ></textarea>
              </Col>
            </Form.Group> */}


<Button type="button" className="btn btn-primary m-2" href={url}>Visit Site</Button>

            <Button type="submit" variant="primary" >
              Complete Transaction
            </Button>{" "}
           
          </Form>
          </ModalBody>
          </>
  )
}
