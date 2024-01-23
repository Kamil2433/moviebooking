import React, { useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import { useData } from '../Context/MovieContext'; 
import Card from 'react-bootstrap/Card';
import List from './List';



export default function Displaymovie() {

    const {getdata,data,filteredmovie}=useData()
    const searchval=useRef("Search Movie")


    const handlesubmit = (e) => {
      e.preventDefault();

      filteredmovie(searchval.current.value);
    
    };
    
    useEffect(() => {
   
    getdata()

     
    },[List])
    



  return (
    <>
 <div className="container"  style={{width:"500px"}}>
        <form className=" my-2 my-lg-0 mw-20" onSubmit={handlesubmit}>
          <input
            className="form-control mr-sm-2 mw-20"
            ref={searchval}
            type="search"
            placeholder="Search Movie"
            aria-label="Search"
            id="username"

          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
           type='submit'
          >
            Search
          </button>
        </form>
      </div>




<List   data={data}/>


  
    </>
  )
}
