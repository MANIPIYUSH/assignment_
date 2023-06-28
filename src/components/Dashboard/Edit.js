import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing,setAllEmployees }) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [company, setCompany] = useState(selectedEmployee.company);
  // const [email, setEmail] = useState(selectedEmployee.email);
  const [status, setStatus] = useState(selectedEmployee.status);
  const [date, setDate] = useState(selectedEmployee.date);
  const [note , setNote] = useState(selectedEmployee.note)
  const handleUpdate = e => {
    e.preventDefault();

    if (!firstName || !company|| !status || !date || !note) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      company,
      status,
      date,
      note,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setAllEmployees(employees)
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.company}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Members</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        {/* <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
        /> */}
        <label>Company</label>
            <select value={company} onChange={e => setCompany(e.target.value)}>
              <option value="">Select...</option>
              <option value="option1">Dc United</option>
              <option value="option2">Manchester U</option>
              <option value="option3">LA Galaxy</option>
            </select>
        {/* <label htmlFor="status">Status</label>
        <input
          id="status"
          type="text"
          name="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
        /> */}
        <label>Status</label>
            <select value={status} onChange={e => setStatus(e.target.value)}>
              <option value="">Select...</option>
              <option value="option1">Active</option>
              <option value="option2">Close</option>
              {/* <option value="option3">LA Galaxy</option> */}
            </select>
       {/* <select id="status" name="status" onChange={e => setStatus(e.target.value)}>
           <option value="acive">Active</option>
           <option value="close">Closed</option>
         </select> */}

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
       <label htmlFor="note">Note</label>
        <input
          id="note"
          type="text"
          name="note"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
        
        
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
