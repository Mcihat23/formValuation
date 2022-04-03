import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search, { checkValidity } from "./Components/Search";
import Error from "./Components/Error";
import { STUDENTS } from "./studentList";

function App() {
  const [name, setName] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);

  const isValidName = () => {
    let nameList = [];
    STUDENTS.map((student) => {
      return nameList.push(student.name.toLocaleLowerCase());
    });
    return nameList.includes(name.toLocaleLowerCase());
  };

  const isValidDate = () => {
    for (let student = 0; student < STUDENTS.length; student++) {
      const element = STUDENTS[student];
      let myStudentIndex = STUDENTS.indexOf(element);
      if (element.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        return checkValidity(joinDate, STUDENTS[myStudentIndex].validityDate);
      }
    }
  };

  const handleClick = () => {
    if (isValidName() && !isValidDate()) {
      setError(`Sorry, ${name}'s validity has expired.`);
    } else if (!isValidName() && isValidDate()) {
      setError(`Sorry, ${name}' is not a verified student.`);
    } else if (!isValidName() && !isValidDate()) {
      setError(`Sorry, ${name}' is not a verified student.`);
    } else {
      setCart([...cart, name]);
    }
    setName("");
    setJoinDate("");
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          name={name}
          setName={setName}
          joinDate={joinDate}
          setJoinDate={setJoinDate}
          handleClick={handleClick}
        />
        <Error error={error === "" ? "" : error} />
        <ResidentsList cart={cart} />
      </div>
    </div>
  );
}

export default App;
