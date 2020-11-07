import React from 'react';
const AppointmentCard = (props) => {
    const {id,subject,visitingHour,totalSpace} = props.appointment;    
    return (
        <div className="col-md-4 mb-5">
            <div onClick={()=>props.modalController(id)} className="appointment-card card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-primary">{subject}</h5>
                    <h6>{visitingHour}</h6>
                    <p>{totalSpace} SPACES AVAILABLE</p>
                    <button onClick={()=>props.modalController(id)} className="btn btn-primary">Book Appointment</button>
                </div>
            </div>
            
        </div>
    );
};

export default AppointmentCard;