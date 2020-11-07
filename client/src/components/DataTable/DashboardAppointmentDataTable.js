import React, { useContext, useState } from 'react';
import { InfoContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PrescriptionModal from '../Prescription/PrescriptionModal';

const DashboardAppointmentDataTable = () => {
    const infoData = useContext(InfoContext);
    let srNo = 1;
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const handleStatusChange = (status)=>{
        //context update
        const bookedApp = Array.from(infoData.allBookedAppointments);
        const selectedApp = {...selectedAppointment};
        selectedApp.status = status;

        const selectedIndex = bookedApp.indexOf(selectedAppointment);
        bookedApp.splice(selectedIndex,1,selectedApp);
        infoData.setAllBookedAppointments(bookedApp);

        //db update
        const data = {id:selectedAppointment._id, status};
        fetch('https://doctors-portal-sabbir.herokuapp.com/updateBookingStatus',{
            method:"POST",
            body:JSON.stringify(data),
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    }
    const handleOpenPrescriptionModal =(appId)=>{
        setIsModalOpen(true);
        const selectApp = infoData.allBookedAppointments.find(app=>app._id===appId)
        setSelectedAppointment(selectApp);
        //console.log(selectApp);
    }
    const btnColor = (status)=>{
        let value;
        if(status==="Approved")
        {
            value="btn btn-success";
        }
        else if(status==="Rejected")
        {
            value="btn btn-danger";
        }
        else
        {
            value="btn btn-info";
        }
        return value;
    }
    return (
        <React.Fragment>
            <table className="table table-borderless">
                <thead>
                    <tr className="text-center">
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Date</th>
                    <th className="text-secondary" scope="col">Time</th>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Contact</th>
                    <th className="text-secondary" scope="col">Prescription</th>
                    <th className="text-secondary" scope="col">Status</th>
                    <th className="text-secondary" scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        infoData.allBookedAppointments.map(appointment=>
                            <tr className="text-center">
                                <td>{srNo++}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.patientInfo.name}</td>
                                <td>{appointment.patientInfo.contactNo}</td>
                                <td>
                                    {
                                        appointment.prescription?
                                            <button onClick={()=>handleOpenPrescriptionModal(appointment._id)} className="btn btn-success">View</button>
                                        :
                                            <span>
                                                <span>Not Added </span>
                                                <FontAwesomeIcon
                                                    icon={faPlusCircle} 
                                                    style={{cursor:"pointer"}}
                                                    className="text-success ml-2"
                                                    onClick={()=>handleOpenPrescriptionModal(appointment._id)}
                                                    ></FontAwesomeIcon>
                                            </span>
                                    }
                                </td>
                                <td>
                                    <select 
                                        onClick={()=>setSelectedAppointment(appointment)}
                                        onChange={event=>handleStatusChange(event.target.value)}
                                        className={btnColor(appointment.status)}
                                    >
                                        <option selected={appointment.status==="Pending"} className="bg-white text-secondary">
                                            Pending
                                        </option>
                                        <option selected={appointment.status==="Approved"} className="bg-white text-secondary">
                                            Approved
                                        </option>
                                        <option selected={appointment.status==="Rejected"} className="bg-white text-secondary">
                                            Rejected
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <button className="btn ml-1 btn-warning text-white">
                                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <PrescriptionModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedAppointment={selectedAppointment}
                setSelectedAppointment={setSelectedAppointment}
            >
            </PrescriptionModal>
        </React.Fragment>
    );
};

export default DashboardAppointmentDataTable;