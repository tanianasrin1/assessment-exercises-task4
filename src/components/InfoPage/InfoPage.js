import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./InfoPage.css";

const InfoPage = () => {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.searchInput.value;

    const filterData = information.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    setInformation(filterData);
    e.target.reset();
  };

  return (
    <div className="mt-4 pt-3">
      
      <form onSubmit={handleSearch}>
        <input className="input-style" type="text" name="searchInput" placeholder="Type Name Or Email" id="" />
        <input className="submit" type="submit" value="Submit" />
      </form>


<Table className="mt-5" responsive>
      <thead>
        <tr>
         
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
          <th>Zipcode</th>
          
        </tr>
      </thead>
      <tbody>
          {information.map((singleUser) => (
            <tr>
              <td> {singleUser.id} </td>
              <td> {singleUser.name} </td>
              <td> {singleUser.email} </td>
              <td> {singleUser.company?.name} </td>
              <td> {singleUser.address?.zipcode} </td>
            </tr>
          ))}
        </tbody>
    </Table>
    
    </div>
  );
};

export default InfoPage;
