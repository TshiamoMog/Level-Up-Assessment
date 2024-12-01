import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar";

import '../App.css';
import { useNavigate } from "react-router-dom";


const UpdateGraduate = () => {

    const graduateData = [{
        id: '',
        firstName: 'John',  
        lastName: 'Doe',   
        emailAddress: 'doe.j@gmail.com', 
        dateOfBirth: null, 
        age: 24,
    },
    {
        id: '',
        firstName: 'Jane',  
        lastName: 'Doe',   
        emailAddress: 'j.doe@gmail.com', 
        dateOfBirth: null, 
        age: 24,
    }]
    
    const[editfirstName, setEditFirstName] = useState('')
    const[editlastName, setEditLastName] = useState('')
    const[editemailAddress, setEditEmailAddress] = useState('')
    const[editdateOfBirth, setEditDateOfBirth] = useState('')
    const[editPhoneNumber, setEditPhoneNumber] = useState(0)
    
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(graduateData);
    },[])
    return (
        <div>
            <Navbar />

            <section>
                <h3>LEVEL UP 2024</h3>
                <p>UPDATE GRADUATE</p>
                <div className="banner">
                    <input type="text" className="line l1" disabled/><br />
                    <input type="text" className="line l2" disabled/><br />
                    <input type="text" className="line l3" disabled/><br />
                    <input type="text" className="line l4" disabled/><br />
                </div>
                <form action="">
                    <fieldset>
                        <div class="form-container">
                            <div class="form-column">
                                <label htmlFor="firstName">Name</label>
                                <input type="text" name="firstName" id="firstName" value={editfirstName} onChange={(e) => setEditFirstName(e.target.valueAsNumber)}/><br />
                                
                                <label htmlFor="phoneNumber">PhoneNumber</label>
                                <input type="text" name="phoneNumber" id="phoneNumber" value={editPhoneNumber} onChange={(e) => setEditPhoneNumber(e.target.valueAsNumber)}/><br />
                                
                                <label htmlFor="DoB">DateOfBirth</label>
                                <input type="text" name="DoB" id="DoB" value={editdateOfBirth} onChange={(e) => setEditDateOfBirth(e.target.valueAsNumber)}/><br />
                            </div>

                            <div class="form-column">
                                <label htmlFor="lastName">Surname</label>
                                <input type="text" name="lastName" id="lastName" value={editlastName} onChange={(e) => setEditLastName(e.target.valueAsNumber)}/><br />

                                <label htmlFor="email">EmailAddress</label>
                                <input type="text" name="email" id="email" value={editemailAddress} onChange={(e) => setEditEmailAddress(e.target.valueAsNumber)}/><br />
                                
                                <div class="button">
                                    <h6>Update Graduates</h6>
                                    <img class="btnImg" src="../assets/icons/rocket_white.webp"/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default UpdateGraduate;