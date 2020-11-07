import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DataTable from '../DataTable/DataTable';
import PatientDataTable from '../DataTable/PatientDataTable';

const Patients = () => {
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-10 p-4 pr-5" style={{position:"absolute",right:0,backgroundColor: "#F4FDFB"}}>
                <h5 className="mb-5">Patients</h5>
                <DataTable tableName="All Patients">
                    <PatientDataTable></PatientDataTable>
                </DataTable>
            </div>
        </div>
    );
};

export default Patients;