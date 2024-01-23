import React, { useEffect } from "react";
import "./App.css";
import MovieContext from "./Context/MovieContext";
import Displaymovie from "./Component/Displaymovie";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./Component/Summary";

function App() {
  return (
    <>
      <MovieContext>
        <BrowserRouter>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Movie finder</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"></Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* <Displaymovie /> */}

          <Routes>
            <Route path="/" element={<Displaymovie />} />
            <Route path="/summary/:myProp" element={<Summary />} />
            {/* <Route path="/summary" element={<Summary  authed={true} />} /> */}
          </Routes>
        </BrowserRouter>
      </MovieContext>
    </>
  );
}

export default App;
