import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";

function FormRegister({ registrantForm, singleRegistrant, setRefreshData }) {
  const [dataToBeSent, setDataToBeSent] = useState({
    name: "",
    course: "",
    town: "",
  });
  const [errorMessageToDisplay, setErrorMessageToDisplay] = useState({
    status: "",
    message: "",
  });
  const [dataToUpdate, setDataToUpdate] = useState({});

  const removeMessage = () => {
    setTimeout(() => {
      setErrorMessageToDisplay((prev) => ({
        ...prev,
        status: "",
        message: "",
      }));
    }, 3000);
  };

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

  const sendDataToDataBase = async () => {
    try {
      await axios.post("http://localhost:3000/registrants", dataToBeSent);
      setRefreshData((prev) => !prev);
      setDataToBeSent([]);

      setErrorMessageToDisplay((prev) => ({
        ...prev,
        status: "primary",
        message: "Registered successfully to the course",
      }));

      removeMessage();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditForm = (e) => {
    const name = e.target.name;
    setDataToUpdate((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const updateRegistrant = async (id) => {
    try {
      await axios.put(`http://localhost:3000/registrants/${id}`, dataToUpdate);
      setRefreshData((prev) => !prev);
      setDataToUpdate([]);
    } catch (error) {
      console.log(error);
    }
  };

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
            value={dataToBeSent.name || ""}
          />
          <Form.Label htmlFor="course">Courses</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="course"
            name="course"
            onChange={handleFormData}
            value={dataToBeSent.course || ""}
          >
            <option>Select a course</option>
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
            value={dataToBeSent.town || ""}
          >
            <option>Select a town</option>
            <option value="Krakow">Krakow</option>
            <option value="Poznan">Poznan</option>
            <option value="Warsaw">Warsaw</option>
          </Form.Select>
          <br />
          <Button
            onClick={() => {
              switch (true) {
                case dataToBeSent.name === "" &&
                  dataToBeSent.course === "" &&
                  dataToBeSent.town === "":
                  setErrorMessageToDisplay((prev) => ({
                    ...prev,
                    status: "danger",
                    message: "None of the field is filled, kindly fill them",
                  }));
                  break;
                case dataToBeSent.name === "":
                  setErrorMessageToDisplay((prev) => ({
                    ...prev,
                    status: "danger",
                    message: "The name field should not be empty",
                  }));

                  break;
                case dataToBeSent.course === "":
                  setErrorMessageToDisplay((prev) => ({
                    ...prev,
                    status: "danger",
                    message: "You have to select a course",
                  }));

                  break;
                case dataToBeSent.town === "":
                  setErrorMessageToDisplay((prev) => ({
                    ...prev,
                    status: "danger",
                    message: "You did not select a town",
                  }));

                  break;
                default:
                  sendDataToDataBase();
                  break;
              }
            }}
          >
            Add
          </Button>
          <br /> <br />
        </>
      ) : (
        <>
          <Form.Label htmlFor="username">Name and Surname</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="username"
            value={dataToUpdate.name || ""}
            aria-describedby="passwordHelpBlock"
            onChange={handleEditForm}
          />
          <Form.Label htmlFor="course">Courses</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="course"
            name="course"
            onChange={handleEditForm}
            value={dataToUpdate.course || ""}
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
            value={dataToUpdate.town || ""}
          >
            <option>Select a town</option>
            <option value="Krakow">Krakow</option>
            <option value="Poznan">Poznan</option>
            <option value="Warsaw">Warsaw</option>
          </Form.Select>
          <br />
          <Button
            onClick={() => {
              updateRegistrant(singleRegistrant.id);
            }}
          >
            save
          </Button>
          <br /> <br />
        </>
      )}

      <>
        {errorMessageToDisplay ? (
          <Alert variant={errorMessageToDisplay.status}>
            {errorMessageToDisplay.message}
          </Alert>
        ) : (
          ""
        )}
      </>
    </>
  );
}

export default FormRegister;
