import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layouts/header/Header.js";
import Footer from "./layouts/footer/Footer.js";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <div className="App">
      <Header title="My header" subtitle="subtitle2" />

    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Control size="lg" type="text" placeholder="Large text" />
      <br />
      <Form.Control type="text" placeholder="Normal text" />
      <br />
      <Form.Control size="sm" type="text" placeholder="Small text" />
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Footer note="Footer Note" />
  </div>
  )
}

export default App
