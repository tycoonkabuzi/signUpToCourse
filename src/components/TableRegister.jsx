import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
function TableRegister({
  setRegistrantForm,
  setSingleRegistrant,
  refreshData,
  setRefreshData,
  setShow,
  setToBeDeleted,
  toBeDeleted,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRegistrants = async () => {
      try {
        const response = await axios.get("http://localhost:3000/registrants");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRegistrants();
  }, [refreshData]);
  console.log(toBeDeleted);

  return (
    <div>
      <Table striped bordered responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name and Surname</th>
            <th>Course</th>
            <th>Town</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((registrant) => (
            <tr key={registrant._id}>
              <td>{data.indexOf(registrant) + 1}</td>
              <td>{registrant.name}</td>
              <td>{registrant.course}</td>
              <td>{registrant.town}</td>
              <td>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    onClick={async () => {
                      await setToBeDeleted(registrant._id);
                      setShow(true);
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => {
                      setRegistrantForm(false);
                      setSingleRegistrant({
                        id: registrant._id,
                        name: registrant.name,
                        course: registrant.course,
                        town: registrant.town,
                      });
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableRegister;
