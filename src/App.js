import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hasil from "./components/Hasil";
import ListCategories from "./components/ListCategories";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong>Daftar Products</strong></h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
