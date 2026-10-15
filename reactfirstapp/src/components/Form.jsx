import { useEffect, useState } from "react";
import axios from "axios"

const Form = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    id: 0,
    name: "",
    address: ""
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios("http://localhost:5000/users");
      setUsers(response.data);
    };

    fetchUsers();
  }, [userData]);

  const addUser = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const insertUser = () => {
    axios.post("http://localhost:5000/users", userData)
      .then((response) => setUserData(data))
      .catch(() => alert("Data not fetched"));
  };

  const updateUser = async () => {
    const response = await axios.put(`http://localhost:5000/users/${userData.id}`, userData);
    setUsers(await response.data)
    alert("User updated!");
  };

    const deleteUser = () => {
    axios.delete(`http://localhost:5000/users/${userData.id}`)
      .then((response) => setUserData(data))
      .catch(() => alert("Data not fetched"));
      alert("User deleted!");
  };
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center">
        <form className="w-50 text-center">
          <input type="text" value={userData.id} name="id" onChange={addUser} className="d-block mx-auto mb-2" />
          <input type="text" value={userData.name} name="name" onChange={addUser} className="d-block mx-auto mb-2" />
          <input type="text" value={userData.address} name="address" onChange={addUser} className="d-block mx-auto mb-2" />
          <div className="d-flex justify-content-center gap-2">
            <button type="button" className="btn btn-primary" onClick={insertUser}>Insert</button>
            <button type="button" className="btn btn-primary" onClick={updateUser}>Update</button>
            <button type="button" className="btn btn-primary" onClick={deleteUser}>Delete</button>
          </div>
        </form>
      </div>
      <table className="table table-dark mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className="table-warning">
          {users.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
