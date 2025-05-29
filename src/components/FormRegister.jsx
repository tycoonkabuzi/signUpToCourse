import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
function FormRegister({ registrantForm, singleRegistrant }) {
  const [dataToBeSent, setDataToBeSent] = useState({});

  const [dataToUpdate, setDataToUpdate] = useState({});
  useEffect(() => {
    setDataToUpdate({
      name: singleRegistrant?.name || "",
      course: singleRegistrant?.course || "",
      town: singleRegistrant?.town || "",
    });
  }, [singleRegistrant]);
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
  const handleEditForm = (e) => {
    const name = e.target.name;
    setDataToUpdate((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const updateRegistrant = (id) => {
    try {
      axios.put(`http://localhost:3000/registrants/${id}`, dataToUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dataToUpdate);
  return (
    <>
      {registrantForm ? (
        <>
          <Form.Label htmlFor="username">Name and Surname</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="username"
            aria-describedby="passwordHelpBlock"
            onChange={handleFormData}
          />
          <Form.Label htmlFor="course">Courses</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="course"
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
          <Form.Label htmlFor="town">Town</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="town"
            id="town"
            onChange={handleFormData}
          >
            <option>Select a town</option>
            <option value="Krakow">Krakow</option>
            <option value="Poznan">Poznan</option>
            <option value="Warsaw">Warsaw</option>
          </Form.Select>
          <br />
          <Button onClick={sendDataToDataBase}>Add</Button>
          <br /> <br />
        </>
      ) : (
        <>
          <Form.Label htmlFor="username">Name and Surname</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="username"
            value={dataToUpdate.name}
            aria-describedby="passwordHelpBlock"
            onChange={handleEditForm}
          />
          <Form.Label htmlFor="course">Courses</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="course"
            name="course"
            onChange={handleEditForm}
            value={dataToUpdate.course}
          >
            <option disabled selected>
              Select a course
            </option>
            <option value="Front-End">Front-End</option>
            <option value="Back-end">Back-end</option>
            <option value="Fundamentals">Fundamentals</option>
          </Form.Select>
          <Form.Label htmlFor="town">Town</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="town"
            id="town"
            onChange={handleEditForm}
            value={dataToUpdate.town}
          >
            <option>Select a town</option>
            <option value="Krakow">Krakow</option>
            <option value="Poznan">Poznan</option>
            <option value="Warsaw">Warsaw</option>
          </Form.Select>
          <br />
          <Button onClick={() => updateRegistrant(singleRegistrant.id)}>
            save
          </Button>
          <br /> <br />
        </>
      )}
    </>
  );
}

export default FormRegister;
