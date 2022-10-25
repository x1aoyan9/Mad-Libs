// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MadLibsDisplayOne = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMadLib, setOneMadLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/madlibs/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMadLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/madlibs/${id}`)
        .then((res) => {
            console.log(res);
            console.log("Successfully deleting Mad Lib");
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log("An error has occured when attempting to delete the Mad Lib");
            console.log(err);
        });
    };

    return (
        <div>
            <h1>Mad Libs</h1>
            <Link to={`/`} className="link-btn">Home</Link> | <Link to={`/madlibs`} className="link-btn">Create</Link>
            <hr /> <br />
            <div>
                <p>By: {oneMadLib.yourName}</p>
                <p>A vacation is when you take a trip to some {oneMadLib.adjective} place</p>
                <p>with your {oneMadLib.adjective2} family. Usually you go to some place</p>
                <p>that is near a/an {oneMadLib.noun} or up on a/an {oneMadLib.noun2}.</p>
                <p>A good vacation place is one where you can ride {oneMadLib.pluralNoun}</p>
                <p>or play {oneMadLib.game} or go hunting for {oneMadLib.pluralNoun2}. I like</p>
                <p>to spend my time {oneMadLib.verbEnding_ING} or {oneMadLib.verbEnding_ING2}.</p>
                <p>When parents go on a vacation, they spend their time eating</p>
                <p>three {oneMadLib.pluralNoun3} a day, and fathers play golf, and mothers</p>
                <p>sit around {oneMadLib.verbEnding_ING3}. Last summer, my little brother</p>
                <p>fell in a/an {oneMadLib.noun3} and got poison {oneMadLib.plant} all</p>
                <p>over his {oneMadLib.bodyPart}. My family is going to go to [the]</p>
                <p>{oneMadLib.place}, and I will practice {oneMadLib.verbEnding_ING4}. Parents</p>
                <p>need vacations more than kids because parents are always very</p>
                <p>{oneMadLib.adjective3} and because they have to work {oneMadLib.number}</p>
                <p>hours every day all year making enough {oneMadLib.pluralNoun4} to pay</p>
                <p>for the vacation.</p>
            </div>
            <div className="actions">
                <button onClick={ () => navigate(`/madlibs/edit/${oneMadLib._id}`) }>
                    Edit
                </button>
                <button onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default MadLibsDisplayOne;