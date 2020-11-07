import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Outcome from './Outcome/Outcome';
import DataTable from '../DataTable/DataTable';
import DashboardAppointmentDataTable from '../DataTable/DashboardAppointmentDataTable';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-10 p-5 pr-5" style={{position:"fixed",right:0, backgroundColor:"#F4FDFB"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Dashboard</h5>
                            <Outcome></Outcome>
                            <DataTable tableName="Recent Appointments">
                                <DashboardAppointmentDataTable></DashboardAppointmentDataTable>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;