import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Nform() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridContact">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="Contact" placeholder="xxxxxxxxxx" />
        </Form.Group>
      </Row>
        
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Full Address" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPincode">
          <Form.Label>Pincode</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Nform;