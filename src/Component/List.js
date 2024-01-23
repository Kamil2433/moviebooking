import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Outlet, Link } from "react-router-dom";
import { useData } from "../Context/MovieContext";

export default function List({ data }) {
  const { setsum,setlang,setmovie,seturl,selectedmoviename } = useData();

  const setsumdata = (s) => {
    setsum("");
    setsum(s);
  };


    function setdetails(d){
    
      setmovie(d.name)

      seturl(d.url)
      setlang(d.language)
console.log("here is the movie name--")
console.log(selectedmoviename);

    }


  return (
    <>
      Top movies of the day
      {data ? (
        data.map((data, idx) => {
          return (
            <Card className="row m-2 container">
              <Card.Header>
                <h2>{data.show.name}</h2>
              </Card.Header>
              <Card.Body>
                {data.show.image!==null ?      
              <Card.Img variant="top" src={data.show.image.medium} class="img-fluid" />:
              <>no image</>}
                <Card.Title>Score:{data.score}</Card.Title>
                <Card.Text>Language: {data.show.language}</Card.Text>
                <Card.Text>
                  {/* ${encodeURIComponent('Hello from MyComponent')}` */}
                  Rating:
                  {data.show.rating.average ? data.show.rating.average : `null`}
                </Card.Text>
                {/* <Link to={`/summary/${encodeURIComponent()}`>See summary</Link> */}{" "}
                <Link to={`/summary/${encodeURIComponent(data.show.summary)}`}>
                  {" "}
                  <Button variant="primary" className="float-end" onClick={()=>setdetails(data.show)}>See Summary </Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <>no data available</>
      )}
    </>
  );
}
