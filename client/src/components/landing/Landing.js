import React from 'react'

import doctor from '../../images/sideimg.jpg'
export default function Landing() {
    return (
            <div>
                
           <img src={doctor} alt="..." style={{width: "100%" }}/>
        </div>
    )
}

// export default class Landing extends Component {
//     constructor() {
//         super();
//         this.state = {
//           array: []
//         };
//       }
//     //  componentDidMount() {
//     //     console.log("hey");
//     //     axios.get('/api/doctors')
//     //     .then((response) => {
//     //         console.log(response.data)
//     //         this.setState({array : response.data});
//     //     });
//     //    }
  
//     //    fetch_doctor() {
//     //      return this.state.array.map(arr =>{
//     //       return (
//     //              <div class="row">
//     //                  <br />
//     //              <div class="card container col-lg-4" style={{backgroundColor : "azure"}}>
//     //                      <br />
//     //                      <b> Name : {arr.name} </b>
//     //                      <br />
//     //                      <p> Contact No: {arr.contactNo}</p>
//     //                      <p> Address: {arr.address}</p>       
//     //                      <p> Specialisation : { arr.specialisation} </p> 
//     //                      <p> Qualifiaction: {arr.qualification}</p>
//     //                      <p> Gender: {arr.sex} </p>  
//     //                      <p> Fee : 250  </p>                      
//     //                         <br />
//     //              </div>
//     //              </div>
//     //       )});
//     //    }
//     render() {
//         return (
//             <div style={{ marginTop: "0px"}}>
//                   <div class="row">
//                       <div  class="col-lg-12 "> 
//                       <img src={doctor} alt="..." style={{width: "100%" }}/>
                     
                      
//                       </div>
                    
//                   </div>
//             </div>
//         )
//     }
// }
