import { useState } from "react";
import FormRegister from "../components/FormRegister";
import TableRegister from "../components/TableRegister";

const Home = () => {
  const [refreshData, setRefreshData] = useState(false);
  const [registrantForm, setRegistrantForm] = useState(true);
  const [singleRegistrant, setSingleRegistrant] = useState({
    name: "",
    course: "",
    town: "",
  });

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
      />
    </>
  );
};

export default Home;
