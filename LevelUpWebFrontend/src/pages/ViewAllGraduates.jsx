import React, {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "../components/navbar";

import '../App.css';
import { useNavigate } from "react-router-dom";

const ViewAllGraduates = () => {
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

    const [data, setData] = useState([]);

    useEffect(() => {
        getGraduateData();
    }, [])

    const getGraduateData = () => {
        axios.get('https://localhost:7140/api/Graduate').then((result) => {
            setData(result.data)
        }).catch((error) => {
            console.log(error)
        });

    }

    const navigate = useNavigate();

    const handleView = (id) => {
        navigate(`../customer/:${id}`)
    }

    const handleEdit = (id) => {
        navigate(`../update/:${id}`)
    }

    const handleDelete = (id) => {
        if(window.confirm("Are you sure that you'd like to delete this graduate?") == true){
            alert(id);
        }
    }

    return (
        <div>
            <Navbar />

            <section className="md:px-12 px-4 mt-6">
                <h3>LEVEL UP 2024</h3>
                <p>CREATE GRADUATE</p>
                <div className="banner">
                    <input type="text" className="line l1" disabled/><br />
                    <input type="text" className="line l2" disabled/><br />
                    <input type="text" className="line l3" disabled/><br />
                    <input type="text" className="line l4" disabled/><br />
                </div>
                <table className="w-full border border-white md:rounded-t-xl rounded-t-lg overflow-hidden">
                    <thead className="bg-white uppercase micro-5 text-3xl">
                        <tr>
                            <th className="md:rounded-s-xl rounded-s-lg md:py-2 py-1 md:px-8 px-4">
                                <div className="relative flex justify-start items-center">
                                    Full Name
                                    <img src="../assets/icons/rocket_black.webp" className="absolute right-0 h-2/3 md:block hidden" />
                                </div>
                            </th>
                            <th className="md:py-2 py-1 md:px-8 px-4 md:block hidden">
                                <div className="relative flex justify-start items-center">
                                    Contact Details
                                    <img src="../assets/icons/rocket_black.webp" className="absolute right-0 h-2/3" />
                                </div>
                            </th>
                            <th className="md:rounded-e-xl rounded-e-lg md:py-2 py-1 md:px-8 px-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {
                            data && data.length > 0 ? 
                            data.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td className="md:py-4 py-2 md:px-8 px-4">{item.firstName} {item.lastName}</td>
                                        <td className="md:py-4 py-2 md:px-8 px-4 md:block hidden">{item.emailAddress}</td>
                                        <td className="md:py-4 py-2 md:px-8 px-4">
                                            <div className="buttons">
                                                <div onClick={() => handleView(item.id)} class="button viewbtn">
                                                    <h6>View Mode</h6>
                                                </div>
                                                <div onClick={() => handleEdit(item.id)} class="button updbtn">
                                                    <h6>Update</h6>
                                                </div>
                                                <div onClick={() => handleDelete(item.id)} class="button delbtn">
                                                    <h6>Delete</h6>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }) : 
                            "Loading..."
                        } 
                    </tbody>
                </table>
            </section>

            <section className="delete-modal">

            </section>
        </div>
    )
}

export default ViewAllGraduates;