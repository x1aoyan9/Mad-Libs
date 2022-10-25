// DISPLAY ALL
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MadLibsDisplayAll = () => {

    const navigate = useNavigate();
    const [allMadLibs, setAllMadLibs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/madlibs')
        .then((res) => {
            console.log(res.data);
            setAllMadLibs(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/madlibs/${idFromBelow}`)
        .then((res) => {
            console.log("Successfully deleting Mad Lib");
            console.log(res.data);
            const filteredMadLibs = allMadLibs.filter((madLib) => {
                return madLib._id !== idFromBelow;
            });
            setAllMadLibs(filteredMadLibs);
        })
        .catch((err) => {
            console.log("An error has occured when attempting to delete the Mad Lib");
            console.log(err.res);
        });
    };

    return (
        <div className="container">
            <h1>Mad Libs</h1>
            <Link to={`/madlibs`} className="link-btn">Create</Link>
            <hr /> <br />
            <div>
                { allMadLibs.map((madLib, index) => (
                    <div key={index}>
                        <div>
                            <p>By: {madLib.yourName}</p>
                            <p>A vacation is when you take a trip to some {madLib.adjective} place</p>
                            <p>with your {madLib.adjective2} family. Usually you go to some place...</p>
                            <div className="actions">
                                <button onClick={ () => navigate(`/madlibs/${madLib._id}`) }>
                                    Expand
                                </button>
                                <button onClick={ () => navigate(`/madlibs/edit/${madLib._id}`) }>
                                    Edit
                                </button>
                                <button onClick={ () => deleteFilter(madLib._id) }>
                                    Delete
                                </button>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MadLibsDisplayAll;