import React, { useContext, useState } from 'react';
import { InfoContext } from '../../Apps';
import PrescriptionModal from '../Prescription/PrescriptionModal';

const PrecriptionDataTable = () => {
    const infoData = useContext(InfoContext);
    const [selectedAppointment,setSelectedAppointment] = useState(null);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const openPrescriptionModal = (appId) =>{
        setIsModalOpen(true);
        const selectedApp = infoData.allBookedAppointments.find(app=>app._id===appId)
        setSelectedAppointment(selectedApp);
    }
    const prescriptedAppointments = infoData.allBookedAppointments.filter(app=>app.prescription);
    let srNo =1;

    return (
        <React.Fragment>
            <table className="table table-borderless">
                <thead>
                    <tr className="text-center">
                        <th className="text-secondary" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Date</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Contact</th>
                        <th className="text-secondary text-center" scope="col">Prescription</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prescriptedAppointments.map(app=>
                            <tr className="text-center">
                                <td>{srNo++}</td>
                                <td>{app.date}</td>
                                <td>{app.patientInfo.name}</td>
                                <td>{app.patientInfo.contactNo}</td>
                                <td>
                                    <button onClick={()=>openPrescriptionModal(app._id)} className="btn btn-primary">
                                        View
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

export default PrecriptionDataTable;