// import React, { useContext } from 'react';
// // import { InfoContext } from '../../Apps';

// const PatientDataTable = () => {
//     // const infoData = useContext(InfoContext);
//     let srNo = 1;
//     return (
//         <table className="table table-borderless">
//             <thead>
//                 <tr className="text-center">
//                     <th className="text-secondary" scope="col">Sr No</th>
//                     <th className="text-secondary" scope="col">Name</th>
//                     <th className="text-secondary" scope="col">Gender</th>
//                     <th className="text-secondary" scope="col">Age</th>
//                     <th className="text-secondary" scope="col">Weight</th>
//                     <th className="text-secondary" scope="col">Phone</th>
//                     <th className="text-secondary" scope="col">Email</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     infoData.allPatients.map(patient=>
//                         <tr className="text-center">
//                             <td>{srNo++}</td>
//                             <td>{patient.name}</td>
//                             <td>{patient.gender}</td>
//                             <td>{patient.age}</td>
//                             <td>{patient.weight}</td>
//                             <td>{patient.contactNo}</td>
//                             <td>{patient.email}</td>
//                         </tr>
//                     )
//                 }
//             </tbody>
//         </table>
//     );
// };

// export default PatientDataTable;