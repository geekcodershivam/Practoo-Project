import React, { useContext } from 'react';
import { InfoContext } from '../../../App';
import SingleOutcome from './SingleOutcome';
const Outcome = () => {
    const infoData = useContext(InfoContext);
    const allBookedApp = infoData.allBookedAppointments;
    const totalAppointments = allBookedApp.length;
    
    const pendingAppointment = allBookedApp.reduce((total,current)=>{
        if(current.status === "Pending")
        {
            total++;
        }
        return total;
    },0);

    const date = new Date();
    const today = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    const todayAppointments= allBookedApp.reduce((total,curr)=>{
        if(curr.date===today)
        {
            total++;
        }
        return total;
    },0);

    return (
        <div className="row my-5">
            <SingleOutcome bgColor="bg-danger" value={{title:"Pending Appointments", count:pendingAppointment}}></SingleOutcome>
            <SingleOutcome bgColor="bg-info" value={{title:"Today's Appointments", count:todayAppointments}}></SingleOutcome>
            <SingleOutcome bgColor="bg-success" value={{title:"Total Appointments", count:totalAppointments}}></SingleOutcome>
            <SingleOutcome bgColor="bg-warning" value={{title:"Total Patients", count:infoData.allPatients.length}}></SingleOutcome>
        </div>
    );
};

export default Outcome;