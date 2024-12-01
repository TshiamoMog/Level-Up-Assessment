import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import axios from "axios";

import '../App.css';


const CreateGraduate = () => {
    const [data, setData] = useState([]);
    
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[emailAddress, setEmailAddress] = useState('')
    const[dateOfBirth, setDateOfBirth] = useState('')
    const[phoneNumber, setPhoneNumber] = useState(0)
    
    const handleCreate = () => {
        const url = 'https://localhost:7140/api/Graduate';
        const data = {
            firstName: firstName,  
            lastName: lastName,   
            emailAddress: emailAddress, 
            dateOfBirth: dateOfBirth, 
            phoneNumber: phoneNumber,
        }
        axios.post(url, data).then((result) => {
            getGraduateData();
        })
    }


    const clear = () => {
        setFirstName('');
        setLastName('');
        setEmailAddress('');
        setDateOfBirth('');
        setPhoneNumber(0);

    }

    return (
        <div>
            <Navbar />

            <section>
                <h3>LEVEL UP 2024</h3>
                <p>CREATE GRADUATE</p>
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
                                <input type="text" name="firstName" id="firstName" /><br />
                                
                                <label htmlFor="phoneNumber">PhoneNumber</label>
                                <input type="text" name="phoneNumber" id="phoneNumber" /><br />
                                
                                <label htmlFor="DoB">DateOfBirth</label>
                                <input type="text" name="DoB" id="DoB" /><br />
                            </div>

                            <div class="form-column">
                                <label htmlFor="lastName">Surname</label>
                                <input type="text" name="lastName" id="lastName" /><br />

                                <label htmlFor="email">EmailAddress</label>
                                <input type="text" name="email" id="email" /><br />
                                
                                <div class="button">
                                    <h6>Add New Graduates</h6>
                                    <img class="btnImg" src="../assets/icons/rocket_white.webp" onClick={() => handleCreate()}/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default CreateGraduate;