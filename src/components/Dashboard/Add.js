import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding, setAllEmployees }) => {
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const handleAdd = e => {
    e.preventDefault();

    if (!firstName || !company ||!status || !date || !note) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      company,
      status,
      date,
      note,
    };

    employees.push(newEmployee);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setAllEmployees(employees)
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${company}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Member</h1>
        <label htmlFor="firstName">Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
          {/* <label>Company</label>
            <select value={company} onChange={e => setCompany(e.target.value)}>
              <option value="">Select...</option>
              <option value="option1">Dc United</option>
              <option value="option2">Manchester U</option>
              <option value="option3">LA Galaxy</option>
            </select> */}
            {/* <p>Selected option: {company}</p> */}

        <label htmlFor="status">Status</label>
        <input
          id="status"
          type="text"
          name="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
        /> 
        {/* <label> Status</label>
            <select value={status} onChange={e => setStatus(e.target.value)}>
              <option value="">Select...</option>
              <option value="option1">Active</option>
              <option value="option2">Close</option>
            </select> */}

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          placeholder=''
          onChange={e => setDate(e.target.value)}
        />
        <label htmlFor="note">Note</label>
        <input
          id="note"
          type="text"
          name="note"
          value={note}
          placeholder=''
          onChange={e => setNote(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
