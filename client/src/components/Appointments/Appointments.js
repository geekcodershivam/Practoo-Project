import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ReactCalender from '../Calender/Calender';
import AppointmentDataTable from '../DataTable/AppointmentDataTable';


const AppointmentDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB",height:"100%"}}>
                    <h5 className="mb-5 pt-3 pl-3">Appointments</h5>
                    <div className="row">    
                        <div className="col-md-6">
                            <ReactCalender></ReactCalender>
                        </div>
                        <div className="col-md-6">
                            <AppointmentDataTable></AppointmentDataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDashboard;