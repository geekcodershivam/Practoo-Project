import React, { useContext, useState } from 'react';
import { CalenderContext, InfoContext } from '../../App';

const AppointmentDataTable = () => {
    const calenderData = useContext(CalenderContext);
    const infoData = useContext(InfoContext);
    const [selectedAppointment,setSelectedAppointment] = useState(null);
    const dateFormatted = `${calenderData.date.getDate()}-${calenderData.date.getMonth()+1}-${calenderData.date.getFullYear()}`
    const appointmentsOfTheDay = infoData.allBookedAppointments.filter(app=>app.date===dateFormatted && app.status==="Approved")
    let srNo=1;

    const handleChangeVisitingStatus =(visitingStatus)=>{
        const allBookedApp = infoData.allBookedAppointments;
        const selectedApp = {...selectedAppointment}
        selectedApp.visitingStatus = visitingStatus;
        
        const selectedIndex = allBookedApp.indexOf(selectedAppointment)
        allBookedApp.slice(selectedIndex,1,selectedApp)
        infoData.setAllBookedAppointments(allBookedApp);

        const data = {id:selectedAppointment._id,visitingStatus}
        fetch('https://doctors-portal-sabbir.herokuapp.com/updateVisitingStatus',{
            method:"POST",
            body: JSON.stringify(data),
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    }

    return (
        <div className="bg-white shadow-sm rounded p-3" style={{height:"442px",overflow:"auto"}}>
            <div className="d-flex justify-content-between py-3">
                <h5 className="text-primary">Appointment List</h5>
                <h6>{calenderData.date.getDate()} {calenderData.date.toLocaleString('default',{month:'short'})},{calenderData.date.getFullYear()}</h6>
            </div>
            {
                appointmentsOfTheDay.length?
                    <table className="table table-borderless">
                        <thead>
                            <tr className="text-center text-secondary">
                                <th>Index</th>
                                <th>Name</th>
                                <th>Schedule</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointmentsOfTheDay.map(app=>
                                    <tr className="text-center">
                                        <td>{srNo++}</td>
                                        <td>{app.patientInfo.name}</td>
                                        <td>{app.date}</td>
                                        <td>
                                            <select
                                                onClick={()=>setSelectedAppointment(app)}
                                                onChange={e=>handleChangeVisitingStatus(e.target.value)}
                                                className="btn btn-primary"
                                            >
                                                <option selected={app.visitingStatus==="Not Visited"} className="bg-white text-secondary">Not Visited</option>
                                                <option selected={app.visitingStatus==="Visited"} className="bg-white text-secondary">Visited</option>
                                                
                                            </select>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointment for this date</h4>
                </div>

            }
        </div>
    );
};

export default AppointmentDataTable;