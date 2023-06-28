import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { employeesData } from '../../data';
import { FilterContext } from '../../contexts/FilterContext';

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState(employeesData);
  const [allEmployees,setAllEmployees] = useState(employeesData)
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { filterValue, setFilterValue } = useContext(FilterContext);

  useEffect(()=>{
    console.log(filterValue,"out")
    if(filterValue.company.length >0 && filterValue.status.length >0){
      setEmployees(allEmployees?.filter(o=> filterValue.company.includes(o.company) && filterValue.status.includes(o.status)))
    }else if(filterValue.company.length > 0){
      setEmployees(allEmployees?.filter(o=> filterValue.company.includes(o.company)))
    }else if(filterValue.status.length > 0){
      setEmployees(allEmployees?.filter(o=> filterValue.status.includes(o.status)))
    }else{
      setEmployees(allEmployees)
    }
  },[filterValue])

  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const employeesCopy = employees.filter(employee => employee.id !== id);
        localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
        setEmployees(employeesCopy);
        setAllEmployees(employeesCopy)
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            allEmployees={allEmployees}
          />
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
          setAllEmployees={setAllEmployees}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          setAllEmployees={setAllEmployees}
        />
      )}
    </div>
  );
};

export default Dashboard;
