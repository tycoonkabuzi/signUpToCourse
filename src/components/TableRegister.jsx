import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
function TableRegister() {
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
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableRegister;
