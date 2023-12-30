//import React, { useState, useEffect } from "react";
//const Table = () => {
//  const [data, setData] = useState(null);
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);

//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        const response = await fetch("http://localhost:8000/getdb");
//        const result = await response.json();
//        setData(result);
//      } catch (error) {
//        console.error("Error fetching data:", error);
//        setError("Error fetching data");
//      } finally {
//        setLoading(false);
//      }
//    };

//    fetchData();
//  }, []); // Empty dependency array means this effect runs once after the initial render

//  if (loading) {

//    return <p>Loading...</p>;
//  }

//  if (error) {
//    return <p>Error: {error}</p>;
//  }

//  if (!Array.isArray(data)) {
//    return <p>Data is not an array.</p>;
//  }

//  return (
//    <div>
//      <br />
//      <br />
//      <br />
//      <br />
//      <br />
//      <br />
//      <br />
//      <h1>Your MongoDB Data</h1>
//      <div>
//        <table className="table">
//              <thead>
//                <tr>
//                  <th scope="col">#</th>
//                  <th scope="col">reh.no</th>
//                  <th scope="col">phone.no</th>
//                  <th scope="col">report</th>
//                </tr>
//              </thead>
//              <tbody>
//              {data.map((item, index) => (
//  <tr key={item._id}>
//    <th scope="row">{index + 1}</th>
//    <td>{item.registration_number}</td>
//    <td>{item.Phone_number}</td>
//    <td>{item.label}</td>
//  </tr>
//))}
//              </tbody>
//            </table>
//      </div>
//    </div>
//  );
//};

//export default Table;












// Table.jsx
import React, { useState, useEffect } from "react";
import "./Table.css"; // Import your custom styles

const Table = () => {
  const [data, setData] = useState(null);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/getdb");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`table-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <br/>
    <br/><br/><br/><br/><br/>
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
      <h1>Your MongoDB Data</h1>
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
            {data &&
              data.map((item, index) => (
                <tr key={item._id}>
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
  );
};

export default Table;

