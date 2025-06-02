import { useState } from "react";
import FormRegister from "../components/FormRegister";
import TableRegister from "../components/TableRegister";
import ConfirmationMessage from "../components/ConfirmationMessage";
import axios from "axios";

const Home = () => {
  const [refreshData, setRefreshData] = useState(false);
  const [registrantForm, setRegistrantForm] = useState(true);
  const [toBeDeleted, setToBeDeleted] = useState("");

  const [show, setShow] = useState(false);
  const [singleRegistrant, setSingleRegistrant] = useState({
    name: "",
    course: "",
    town: "",
  });

  const deleteRegistrant = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/registrants/${id}`);
      setRefreshData((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="title">Registration Platform</h1>
      <FormRegister
        registrantForm={registrantForm}
        setRegistrantForm={setRegistrantForm}
        singleRegistrant={singleRegistrant}
        refreshData={refreshData}
        setRefreshData={setRefreshData}
      />
      <TableRegister
        setRegistrantForm={setRegistrantForm}
        refreshData={refreshData}
        setRefreshData={setRefreshData}
        setSingleRegistrant={setSingleRegistrant}
        setShow={setShow}
        toBeDeleted={toBeDeleted}
        setToBeDeleted={setToBeDeleted}
      />
      <ConfirmationMessage
        show={show}
        setShow={setShow}
        deleteRegistrant={deleteRegistrant}
        toBeDeleted={toBeDeleted}
      />
    </>
  );
};

export default Home;
