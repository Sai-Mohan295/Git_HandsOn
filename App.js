import React from "react";
import "./style.css";
import {Routes,Route} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import UserTable from './UserTable'
import UserCard from './UserCard'

export default function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/usertable' element={<UserTable />}/>
        <Route path='/usercard' element={<UserCard />}/>
      </Routes>
    </div>
  );
}