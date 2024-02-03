import React, { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedteam, setteam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA",
    );
    var TeamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedteam === "TeamA" ? false : true,
    };
    var teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB",
    );
    var TeamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedteam === "TeamB" ? false : true,
    };
    var teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC",
    );
    var TeamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedteam === "TeamC" ? false : true,
    };
    var teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD",
    );
    var TeamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedteam === "TeamD" ? false : true,
    };

    return [TeamA, TeamB, TeamC, TeamD];
  }

  function handleteamclick(event) {
    var newGroupedData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : { ...groupedData },
    );
    setGroupedData(newGroupedData);
    setteam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer", border: "1px solid #ccc" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleteamclick}
            >
              {item.team}
            </h4>
            <div
              id={"collapse" + item.team}
              className={item.collapsed ? "collapse" : ""}
            >
              {item.members.map((member) => {
                return (
                  <div className="mt-2" key={member.id}>
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}{" "}
                      </span>
                      <p className="text-dark">
                        Designation: {member.designation}{" "}
                      </p>
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
