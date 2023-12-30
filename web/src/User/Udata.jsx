import React, { useState} from "react";
import axios from "axios";

function Udata() {
  const [data, setData] = useState([]);  // Initialize with an empty array
  const [registrationNumber, setRegistrationNumber] = useState("");
  // const [registrations, setRegistrations] = useState([]);

  const handleSearch = () => {
    if (!registrationNumber) {
      console.error("Registration number is required");
      return;
    }

    // Fetch data from the server for the specific registration number
    axios
      .get("http://localhost:8000/search", {
        params: {
          registrationNumber: registrationNumber,
        },
      })
      .then((response) => {
        const result = response.data;  // Use response.data instead of response.json()
        console.log("Data from the server:", result);
        // setRegistrations(result);
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Other code...

  return (
    <>
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Registration App</h1>
        <label>
          Registration Number:
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>

        {/* <h2>Registrations</h2> */}
        {/* <table>
          <thead>
            <tr>
              <th>Registration Number</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration) => (
              <tr key={registration._id}>
                <td>{registration.registration_number}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
      {/* table */}
      <div>
      <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">reh.no</th>
                <th scope="col">phone.no</th>
                <th scope="col">report</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.registration_number}</td>
                  <td>{item.Phone_number}</td>
                  <td>{item.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Udata;

