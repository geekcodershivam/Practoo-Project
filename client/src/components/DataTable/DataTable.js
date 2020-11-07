// import React, {useContext} from 'react';
// import './DataTable.css';
// // import { InfoContext } from '../../Apps';
// import Preloader from '../Preloader/Preloader';

// const DataTable = (props) => {
//     const infoData = useContext(InfoContext);
//     return (
//         <div className="bg-white rounded shadow-sm p-3">
//             <div className="d-flex align-items-center justify-content-between py-3">
//                 <h6 className="text-primary">{props.tableName}</h6>                
//             </div>
//             {
//                 props.children
//             }
//             {
//                 infoData.preloaderVisibility &&
//                     <Preloader></Preloader>
//             }
//         </div>
//     );
// };

// export default DataTable;