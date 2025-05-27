import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
function FormRegister() {
  return (
    <>
      <Form.Label htmlFor="">Name and Surname</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Label htmlFor="">Courses</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Select a course</option>
        <option value="1">Front-End</option>
        <option value="2">Back-end</option>
        <option value="3">Fundamentals</option>
      </Form.Select>
      <Form.Label htmlFor="">Town</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Select a town</option>
        <option value="1">Krakow</option>
        <option value="2">Poznan</option>
        <option value="3">Warsaw</option>
      </Form.Select>
      <br />
      <Button>Register</Button>
      <br /> <br />
    </>
  );
}

export default FormRegister;
