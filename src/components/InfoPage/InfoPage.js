import React, { useEffect, useState } from 'react';

const InfoPage = () => {
    const [informations, setInformations] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then(data => setInformations(data))
    } , [])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.searchInput.value;
        const filterData = informations.filter(
            (user) => 
            user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.email.toLowerCase().includes(searchValue.toLowerCase()) 
        );
        setInformations(filterData)
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
              <input type="text" name="searchInput" placeholder='search' id="" />
              <input type="submit" value="submit" />
          </form>
          
        <div className='table-responsive'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Company Name</th>
      <th scope="col">Zipcode</th>
    </tr>
  </thead>
  <tbody>


     
     {
        informations.map(singleUser => <tr>

            <td> {singleUser.id} </td>
            <td> {singleUser.name} </td>
            <td> {singleUser.email} </td>
            <td> {singleUser.company?.name} </td>
            <td> {singleUser.address?.zipcode} </td>
           
        </tr>)
     }

    
  </tbody>
</table>
        </div>

        </div>
    );
};

export default InfoPage;