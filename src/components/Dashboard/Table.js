// import React, { useContext, useEffect, useState } from "react";
// import { FilterContext } from "../../contexts/FilterContext";
//import { FilterContext } from './FilterContext';

// const Table = ({ employees, handleEdit, handleDelete, allEmployees }) => {
//   const { filterValue, setFilterValue } = useContext(FilterContext);
//   const [openDropdown, setOpenDropdown] = useState({company:false,status:false});
//   const [selectedVal, setSelectedVal] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState([])
//   const [filterOptions,setFilterOptions] = useState({company:[],status:[]})

//   const handleValues = (event) => {
//     const value = event.target.dataset.value;
//     if (value) {
//       if (value == "all") {
//         if (selectedVal.length == allEmployees.length) {
//           setSelectedVal([]);
//         } else {
//           setSelectedVal(allEmployees.map((o) => {return o.company}))
//         }
//       } else {
//           if (selectedVal.includes(value)) {
//             setSelectedVal(selectedVal.filter((o) => o !== value));
//           } else setSelectedVal([...selectedVal, value]);
//       }
//     setFilterValue({...filterValue,company:[...selectedVal]})
//     }
//   }

//   const handleStatus =(event) => {
//     const value = event.target.dataset.value;
//     if (value) {
//       if (value == "all") {
//         if (selectedStatus.length == allEmployees.length) {
//           setSelectedStatus([]);
//         } else {
//           setSelectedStatus(allEmployees.map((o) => {return o.status}))
//         }
//       } else {
//           if (selectedStatus.includes(value)) {
//             setSelectedStatus(selectedStatus.filter((o) => o !== value));
//           } else setSelectedStatus([...selectedStatus, value]);
//       }
//     setFilterValue({...filterValue,status:[...selectedStatus]})
//     }
//   }


//   const handleDropdown = (event) => {
//     console.log(event.target.value,'target')
//     const elementSelected = event.target.nextElementSibling.classList
//     if(elementSelected.contains('open-dropdown')){
//       elementSelected.remove('open-dropdown')
//     }
//     else{
//       elementSelected.add('open-dropdown')
//     }
//     setOpenDropdown(!openDropdown);
//     const data1 = new Set([...allEmployees.map(o=>{return o.company})])
//     const data2 = new Set([...allEmployees.map(o=>{return o.status})])
//     setFilterOptions({company:new Array(...data1),status:new Array(...data2)})
//   };

//   return (
//     <div className="contain-table">
//       <div className="dropdown-container">
//         <div class="dropdown" data-control="checkbox-dropdown">
//           <label onClick={handleDropdown} class="dropdown-label">
//             Company({selectedVal.length})
//           </label>
//           <div
//             class={"dropdown-list"}
//             onClick={handleValues}
//           >
//             <label class="dropdown-option" data-value={"all"}>
//               <input
//                 type="checkbox"
//                 name="dropdown-group"
//                 value="all"
//                 checked={selectedVal.length == allEmployees.length}
//               />
//               All
//             </label>
//             {filterOptions?.company?.map((o, i) => (
//               <label class="dropdown-option" key={i} data-value={o}>
//                 <input
//                   type="checkbox"
//                   name="dropdown-group"
//                   value={o}
//                   checked={selectedVal.includes(o)}
//                 />
//                 {o}
//               </label>
//             ))}
//           </div>
//         </div>
//         <div class="dropdown" data-control="checkbox-dropdown">
//           <label onClick={handleDropdown} class="dropdown-label">
//             Status
//           </label>
//           <div
//             class="dropdown-list"
//             onClick={handleStatus}
//           >
//             <label class="dropdown-option" data-value={"all"}>
//               <input
//                 type="checkbox"
//                 name="dropdown-group"
//                 value="all"
//                 checked={selectedStatus.length == allEmployees.length}
//               />
//               All
//             </label>
//             {filterOptions?.status?.map((o, i) => (
//               <label class="dropdown-option" key={i} data-value={o}>
//                 <input
//                   type="checkbox"
//                   name="dropdown-group"
//                   value={o}
//                   checked={selectedStatus.includes(o)}
//                 />
//                 {o}
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>
//       <table className="striped-table">
//         <thead>
//           <tr>
//             <th>
//               <input type="checkbox" />
//             </th>
//             <th>NAME</th>
//             <th>COMPANY</th>
//             <th>STATUS</th>
//             <th>LAST UPDATED</th>
//             <th>NOTES</th>
//             <th colSpan={2}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees?.length > 0 ? (
//             employees.map((employee, i) => (
//               <tr key={employee?.id}>
//                 <td>
//                   <input type="checkbox" value={i} />
//                 </td>
//                 <td>{employee?.firstName}</td>
//                 <td>{employee?.company}</td>
//                 <td>{employee?.status}</td>
//                 <td>{employee?.date} </td>
//                 <td>{employee?.note} </td>
//                 <td className="text-right">
//                   <button
//                     onClick={() => handleEdit(employee?.id)}
//                     className="button muted-button"
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td className="text-left">
//                   <button
//                     onClick={() => handleDelete(employee?.id)}
//                     className="button muted-button"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={7}>Sorry!No Members </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;


import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";

const Table = ({ employees, handleEdit, handleDelete, allEmployees }) => {
  const { filterValue, setFilterValue } = useContext(FilterContext);
  const [openDropdown, setOpenDropdown] = useState({ company: false, status: false });
  const [selectedVal, setSelectedVal] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ company: [], status: [] });

  const handleValues = (event) => {
    const value = event.target.dataset.value;
    if (value) {
      if (value === "all") {
        if (selectedVal.length === allEmployees.length) {
          setSelectedVal([]);
        } else {
          setSelectedVal(allEmployees.map((o) => o.company));
        }
      } else {
        if (selectedVal.includes(value)) {
          setSelectedVal(selectedVal.filter((o) => o !== value));
        } else {
          setSelectedVal([...selectedVal, value]);
        }
      }
      setFilterValue({ ...filterValue, company: [...selectedVal] });
    }
  };

  const handleStatus = (event) => {
    const value = event.target.dataset.value;
    if (value) {
      if (value === "all") {
        if (selectedStatus.length === allEmployees.length) {
          setSelectedStatus([]);
        } else {
          setSelectedStatus(allEmployees.map((o) => o.status));
        }
      } else {
        if (selectedStatus.includes(value)) {
          setSelectedStatus(selectedStatus.filter((o) => o !== value));
        } else {
          setSelectedStatus([...selectedStatus, value]);
        }
      }
      setFilterValue({ ...filterValue, status: [...selectedStatus] });
    }
  };

  const handleDropdown = (event) => {
    const elementSelected = event.target.nextElementSibling.classList;
    if (elementSelected.contains("open-dropdown")) {
      elementSelected.remove("open-dropdown");
    } else {
      elementSelected.add("open-dropdown");
    }
    setOpenDropdown(!openDropdown);
    const data1 = new Set([...allEmployees.map((o) => o.company)]);
    const data2 = new Set([...allEmployees.map((o) => o.status)]);
    setFilterOptions({ company: Array.from(data1), status: Array.from(data2) });
  };

  useEffect(() => {
    setFilterOptions({
      company: Array.from(new Set(allEmployees.map((o) => o.company))),
      status: Array.from(new Set(allEmployees.map((o) => o.status))),
    });
  }, [allEmployees]);

  return (
    <div className="contain-table">
      <div className="dropdown-container">
        <div className="dropdown" data-control="checkbox-dropdown">
          <label onClick={handleDropdown} className="dropdown-label">
            Company ({selectedVal.length})
          </label>
          <div className={`dropdown-list ${openDropdown.company ? "open-dropdown" : ""}`} onClick={handleValues}>
            <label className="dropdown-option" data-value={"all"}>
              <input
                type="checkbox"
                name="dropdown-group"
                value="all"
                checked={selectedVal.length === allEmployees.length}
              />
              All
            </label>
            {filterOptions.company.map((o, i) => (
              <label className="dropdown-option" key={i} data-value={o}>
                <input
                  type="checkbox"
                  name="dropdown-group"
                  value={o}
                  checked={selectedVal.includes(o)}
                />
                {o}
              </label>
            ))}
          </div>
        </div>
        <div className="dropdown" data-control="checkbox-dropdown">
          <label onClick={handleDropdown} className="dropdown-label">
            Status ({selectedStatus.length})
          </label>
          <div className={`dropdown-list ${openDropdown.status ? "open-dropdown" : ""}`} onClick={handleStatus}>
            <label className="dropdown-option" data-value={"all"}>
              <input
                type="checkbox"
                name="dropdown-group"
                value="all"
                checked={selectedStatus.length === allEmployees.length}
              />
              All
            </label>
            {filterOptions.status.map((o, i) => (
              <label className="dropdown-option" key={i} data-value={o}>
                <input
                  type="checkbox"
                  name="dropdown-group"
                  value={o}
                  checked={selectedStatus.includes(o)}
                />
                {o}
              </label>
            ))}
          </div>
        </div>
      </div>
      <table className="striped-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>NAME</th>
            <th>COMPANY</th>
            <th>STATUS</th>
            <th>LAST UPDATED</th>
            <th>NOTES</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>
                  <input type="checkbox" value={i} />
                </td>
                <td>{employee.firstName}</td>
                <td>{employee.company}</td>
                <td>{employee.status}</td>
                <td>{employee.date} </td>
                <td>{employee.note} </td>
                <td className="text-right">
                  <button onClick={() => handleEdit(employee.id)} className="button muted-button">
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button onClick={() => handleDelete(employee.id)} className="button muted-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>Sorry! No Members</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
