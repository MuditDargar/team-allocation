import React from "react";
import Teams from "./Teams";
import Female from "./images/Female.jpg";
import Male from "./images/Male.jpg";

const Employees = ({
  employees,
  selectedteam,
  handleemployeecardclick,
  handleteamselectionchange,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <Teams
          selectedteam={selectedteam}
          handleteamselectionchange={handleteamselectionchange}
        />
        <div className="col-8"></div>
      </div>
      <div className="card-collection row">
        {employees.map((employee) => (
          <div
            key={employee.id}
            id={employee.id}
            className={`col-md-4 ${
              employee.teamName === selectedteam ? "standout" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={handleemployeecardclick}
          >
            <div className="card m-2">
              {employee.gender === "male" ? (
                <img src={Male} className="card-img-top" alt="Male Avatar" />
              ) : (
                <img
                  src={Female}
                  className="card-img-top"
                  alt="Female Avatar"
                />
              )}
              <div className="card-body">
                <div className="card-title">Full Name: {employee.fullName}</div>
                <p className="card-text">
                  <b>Designation:</b> {employee.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Employees;
