import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import AboutUs from "./AboutUs/AboutUs";
const Navbarx = ({ filter, setFilter }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Cocktails</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            className="mr-sm-2"
          />
        </Form>
      </Navbar>
    </div>
  );
};

export default Navbarx;
