import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DataTable from '../DataTable/DataTable';
import PrecriptionDataTable from '../DataTable/PrecriptionDataTable';

const Prescription = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-10 p-4 pr-5" style={{position:"absolute",right:0,backgroundColor: "#F4FDFB"}}>
                <h5 className="mb-5">Prescriptions</h5>
                <DataTable tableName="All Prescriptions">
                    <PrecriptionDataTable></PrecriptionDataTable>
                </DataTable>
            </div>
            </div>
        </div>
    );
};

export default Prescription;