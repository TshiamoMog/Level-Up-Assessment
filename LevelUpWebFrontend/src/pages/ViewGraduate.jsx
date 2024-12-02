import React from "react";
import Navbar from "../components/navbar";

import '../App.css';

const ViewGraduate = () => {
    return (
        <div>
            <Navbar />

            <section>
                <h3>LEVEL UP 2024</h3>
                <p>VIEW GRADUATE DETAILS</p>
                <div className="banner">
                    <input type="text" className="line l1" disabled/><br />
                    <input type="text" className="line l2" disabled/><br />
                    <input type="text" className="line l3" disabled/><br />
                    <input type="text" className="line l4" disabled/><br />
                </div>
            </section>
        </div>
    )
}

export default ViewGraduate;