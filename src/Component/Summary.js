import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useData } from "../Context/MovieContext";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import Bookmodal from "./Bookmodal";

export default function Summary() {
  const { myProp } = useParams();
  const [modal,setmodal]=useState(false);

  const {selectedmoviename,selectedmovielang,url,usercard,userdata,setcard,setuserdata}=useData()

  const ht = decodeURIComponent(myProp);


  const closethemodal = () => {
    setmodal(false);
  };

    const modalon=(e)=>{
        setmodal(true);
    }



  return (
    <>  
    <Card>
      <Card.Body>
        <Card.Title>Show Summary</Card.Title>
        <div dangerouslySetInnerHTML={{ __html: ht }} />
      </Card.Body>
      

    </Card>

    

<Button variant="primary" className=" w-20"  onClick={()=>setmodal(true)}>Book Now </Button>

    <Modal show={modal} onHide={closethemodal}>
      <Bookmodal onHide={closethemodal} moviename={selectedmoviename} url={url} lang={selectedmovielang} usrname={userdata}  card={usercard} setcard={setcard} setuserdata={setuserdata}/>
    </Modal>





</>
  );
}
