import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  name:"DowooKim",
  birthday: 921124,
  gender: "Male",
  job: "Student"
}

function App() {
  return (
    <Customer 
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job} />
  );
}

export default App;
