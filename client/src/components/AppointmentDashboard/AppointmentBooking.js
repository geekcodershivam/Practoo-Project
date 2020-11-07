import React from 'react';
import { useContext } from 'react';
import { CalenderContext, InfoContext } from '../../App';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AppointmentCard from './AppointmentCard';
import Preloader from '../Preloader/Preloader';

const AppointmentBooking = () => {
    
    const useStyles = makeStyles((theme) => ({
        modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            boxShadow: "0 0 10px white",
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();

    const infoData = useContext(InfoContext);
    const calenderData = useContext(CalenderContext);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBooked,setIsBooked] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const date = `${calenderData.date.getDate()}-${calenderData.date.getMonth()+1}-${calenderData.date.getFullYear()}`;

    const modalController=(appointmentId)=>{
        setIsModalOpen(true);
        const appmnt = infoData.allAppointments.find(app=>app.id===appointmentId)
        if(appmnt){setSelectedAppointment(appmnt);}
    }
    const placeBooking = (patientInfo)=>{
        const appointmentId = selectedAppointment.id;
        const time = selectedAppointment.visitingHour;
        const storeDB = {appointmentId,time,date,patientInfo,status:"Pending"}
        fetch("https://doctors-portal-sabbir.herokuapp.com/placeBooking",{
            method:"POST",
            body:JSON.stringify(storeDB),
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then(res=>res.json)
        .then(data=>{
            setIsBooked(true);
            const allBookedApp =[...infoData.allBookedAppointments];
            allBookedApp.push(data);
            infoData.setAllBookedAppointments(allBookedApp); 
        })
        .catch(err=>console.log(err))
    }
    const onSubmit = data => {
        console.log(data);
        placeBooking(data)
    }
    return (
        <div className="container mt-5 py-5">
            <h3 className="text-primary text-center my-5">Available Appointment On {date}</h3>
            <div className="row">
                {
                    infoData.preloaderVisibility &&
                    <Preloader></Preloader>
                }
                {
                    infoData &&
                    infoData.allAppointments.map(appointment=><AppointmentCard key={appointment.id} appointment={appointment} modalController={modalController}></AppointmentCard>)
                }
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isModalOpen}
                onClose={()=>setIsModalOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <div className={classes.paper}>
                        {
                            isBooked ?
                                    <div className="text-center  py-5 my-5">
                                        <FontAwesomeIcon className="text-success" style={{fontSize:"5em"}} icon={faCheckCircle}></FontAwesomeIcon>
                                        <h4 className="mt-5 lead">Appointment Request Sent!</h4>
                                    </div>
                                :
                                selectedAppointment&&
                                <div className="px-4">
                                    <h4 className="text-primary text-center">{selectedAppointment.subject}</h4>
                                    <p className="text-secondary text-center mb-3"><small>On {date}</small></p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control"/>
                                            {errors.name && <span className="text-danger">Your Name is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input name="contactNo" className="form-control" ref={register({ required: true, pattern:/^(?:\+88|01)?(?:\d{11}|\d{13})$/})} placeholder="Contact No."/>
                                            {errors.contactNo && errors.contactNo.type==='required' && <span className="text-danger">Contact No. is required</span>}
                                            {errors.contactNo && errors.contactNo.type==='pattern' && <span className="text-danger">Contact No. must be a Bangladeshi Number.(eg.+880..|01..)</span>}
                                        </div>
                                        <div className="form-group">
                                            <input name="email" className="form-control" ref={register({ required: true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} placeholder="Email"/>
                                            {errors.email && errors.email.type === 'required' && <span className="text-danger">Email is required</span>}
                                            {errors.email && errors.email.type === 'pattern' && <span className="text-danger">>Email Format Invalidate. eg.developer@gmai.com </span> }
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-4 mb-3">
                                                <select className="form-control" name="gender"ref={register({required:true})}>
                                                    <option disabled={true} value="Not Set">No Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Not Set">Other</option>
                                                </select>
                                                {errors.gender && <span className="text-danger">Choose Your Gender</span>}
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input ref={register({ required: true, pattern:/^[0-9]+$/ })} className="form-control" name="age" min="0" placeholder="Your Age" type="number" />
                                                {errors.age && errors.age.type === 'required' && <span className="text-danger">Patient Age is required</span>}
                                                {errors.age && errors.age.type === 'pattern' && <span className="text-danger">Age must be Positive and Real Numbers</span> }
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <input ref={register({ required: true, pattern:/^[0-9.]+$/ })} className="form-control" name="weight" min="0" placeholder="Weight" type="number" />
                                                {errors.weight && errors.weight.type === 'required' && <span className="text-danger">Patient Weight is required</span>}
                                                {errors.weight && errors.weight.type === 'pattern' && <span className="text-danger">Weight must be Positive Numbers</span> }
                                            </div>
                                        </div>
                                        <div className="form-group text-right">
                                            <button type="submit" className="btn btn-primary">Send</button>
                                        </div>
                                    </form>
                                </div>
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default AppointmentBooking;