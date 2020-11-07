import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import { InfoContext } from '../../Apps';

const PrescriptionModal = (props) => {
    const useStyles = makeStyles((theme) => ({
        modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            boxShadow: "0 0 10px white",
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const infoValue = useContext(InfoContext);
    const viewApp={...props.selectedAppointment};
    // const {name,gender,age} = viewApp.patientInfo;
    //console.log(viewApp.patientInfo);

    const onSubmit=(newPrescription,e)=>{
        // Context Value Update
        const allBookedApp = (infoValue.allBookedAppointments);
        const selectedIndex = allBookedApp.indexOf(props.selectedAppointment);
        const selectedApp = {...props.selectedAppointment};
        const updatePrescription = selectedApp.prescription? [...selectedApp.prescription] : [];
        updatePrescription.push(newPrescription);
        //console.log(updatePrescription);

        selectedApp.prescription = updatePrescription;
        props.setSelectedAppointment(selectedApp);
        allBookedApp.splice(selectedIndex,1,selectedApp);
        infoValue.setAllBookedAppointments(allBookedApp);
        console.log(infoValue.allBookedAppointments);
        //Database Update
        const data ={id:props.selectedAppointment._id, prescription:updatePrescription} 
        fetch('https://doctors-portal-sabbir.herokuapp.com/updatePrescription',{
            method:"POST",
            body:JSON.stringify(data),
            headers : {
                "Content-type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            // window.location.reload();
            e.target.reset();
        })
        .catch(error=>console.log(error))
    }
    return (
        <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.isModalOpen}
                onClose={()=>props.setIsModalOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                {/* "px-5 py-3"+ */}
                <Fade in={props.isModalOpen}>
                    <div className={classes.paper}>
                        {
                            props.selectedAppointment &&
                            <div>
                                <div className="d-flex justify-content-between mb-5">
                                    <span className="text-primary">{viewApp.patientInfo.name}</span>
                                    <span>Gender: {viewApp.patientInfo.gender}</span>
                                    <span>Age: {viewApp.patientInfo.age}</span>
                                 </div>  
                                 <form className="row" onSubmit={handleSubmit(onSubmit)}>
                                     <div className="col-12">
                                        {errors.medicine && <span className="bg-danger text-white">Medicine Name must not empty</span>}
                                        {errors.bld && <span className="bg-danger text-white">Medicine Time must not empty</span>}
                                        {errors.days && errors.days.type==="required" && <span className="bg-danger text-white">Medicine Days must not empty</span>}
                                        {errors.days && errors.days.type==="pattern" && <span className="bg-warning text-white">Medicine Days must be positive number</span>}
                                     </div>
                                    <input className="form-control col-6" ref={register({ required: true })} name="medicine" placeholder="Medicine Name" type="text"/>
                                    <select ref={register({ required: true })}  className="form-control col-3" name="bld">
                                        <option value="1 - 1 - 1">1 - 1 - 1</option>
                                        <option value="1 - 0 - 1">1 - 0 - 1</option>
                                        <option value="1 - 0 - 0">1 - 0 - 0</option>
                                        <option value="1 - 1 - 0">1 - 1 - 0</option>
                                        <option value="1 - 1 - 0">1 - 1 - 0</option>
                                        <option value="0 - 1 - 1">0 - 1 - 1</option>
                                        <option value="1 - 0 - 0">1 - 0 - 0</option>
                                        <option value="0 - 0 - 1">0 - 0 - 1</option>
                                    </select>
                                    <input ref={register({ required: true,pattern:/^[0-9]+$/ })} name="days" className="form-control col-2" type="number" min="1" placeholder="Days"/>
                                    <button type="submit" className="btn btn-primary col-1"><FontAwesomeIcon icon={faPlus}/></button>
                                </form> 
                                <div className="mt-5" style={{height:"300px", overflow:"auto"}}>
                                    {
                                        viewApp.prescription &&
                                        <table className="table table-borderless">
                                        {
                                            viewApp.prescription.length &&
                                            viewApp.prescription.map((pres,index)=>
                                                <tr>
                                                    <td>{index+1}.</td>
                                                    <td>{pres.medicine}</td>
                                                    <td>{pres.bld}</td>
                                                    <td>{pres.days}</td>
                                                </tr>
                                            )
                                        }
                                        </table>
                                    }
                                </div>   
                            </div>
                        }

                    </div>
                </Fade>
        </Modal>
    );
};

export default PrescriptionModal;