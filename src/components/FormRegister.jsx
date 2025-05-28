import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
function FormRegister() {
  const [dataToBeSent, setDataToBeSent] = useState({});

  const handleFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataToBeSent((prev) => ({ ...prev, [name]: value }));
  };

  const sendDataToDataBase = () => {
    try {
      axios.post("http://localhost:3000/registrants", dataToBeSent);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dataToBeSent);
  return (
    <>
      <Form.Label htmlFor="">Name and Surname</Form.Label>
      <Form.Control
        type="text"
        name="name"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={handleFormData}
      />
      <Form.Label htmlFor="">Courses</Form.Label>
      <Form.Select
        aria-label="Default select example"
        name="course"
        onChange={handleFormData}
      >
        <option disabled selected>
          Select a course
        </option>
        <option value="Front-End">Front-End</option>
        <option value="Back-end">Back-end</option>
        <option value="Fundamentals">Fundamentals</option>
      </Form.Select>
      <Form.Label htmlFor="">Town</Form.Label>
      <Form.Select
        aria-label="Default select example"
        name="town"
        onChange={handleFormData}
      >
        <option>Select a town</option>
        <option value="Krakow">Krakow</option>
        <option value="Poznan">Poznan</option>
        <option value="Warsaw">Warsaw</option>
      </Form.Select>
      <br />
      <Button onClick={sendDataToDataBase}>Register</Button>
      <br /> <br />
    </>
  );
}

export default FormRegister;
