// UPDATE
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MadLibsUpdate = (props) => {

    const {id} = useParams();

    const [yourName, setYourName] = useState("");
    const [adjective, setAdjective] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [noun, setNoun] = useState("");
    const [noun2, setNoun2] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [game, setGame] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [verbEnding_ING, setVerbEnding_ING] = useState("");
    const [verbEnding_ING2, setVerbEnding_ING2] = useState("");
    const [pluralNoun3, setPluralNoun3] = useState("");
    const [verbEnding_ING3, setVerbEnding_ING3] = useState("");
    const [noun3, setNoun3] = useState("");
    const [plant, setPlant] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [place, setPlace] = useState("");
    const [verbEnding_ING4, setVerbEnding_ING4] = useState("");
    const [adjective3, setAdjective3] = useState("");
    const [number, setNumber] = useState("");
    const [pluralNoun4, setPluralNoun4] = useState("");

    const navigate = useNavigate();
    const [writer, setWriter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/madlibs/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);

            setYourName(res.data.yourName);
            setAdjective(res.data.adjective);
            setAdjective2(res.data.adjective2);
            setNoun(res.data.noun);
            setNoun2(res.data.noun2);
            setPluralNoun(res.data.pluralNoun);
            setGame(res.data.game);
            setPluralNoun2(res.data.pluralNoun2);
            setVerbEnding_ING(res.data.verbEnding_ING);
            setVerbEnding_ING2(res.data.verbEnding_ING2);
            setPluralNoun3(res.data.pluralNoun3);
            setVerbEnding_ING3(res.data.verbEnding_ING3);
            setNoun3(res.data.noun3);
            setPlant(res.data.plant);
            setBodyPart(res.data.bodyPart);
            setPlace(res.data.place);
            setVerbEnding_ING4(res.data.verbEnding_ING4);
            setAdjective3(res.data.adjective3);
            setNumber(res.data.number);
            setPluralNoun4(res.data.pluralNoun4);
            setWriter(res.data.yourName);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/madlibs/${id}`, {
            yourName,
            adjective,
            adjective2,
            noun,
            noun2,
            pluralNoun,
            game,
            pluralNoun2,
            verbEnding_ING,
            verbEnding_ING2,
            pluralNoun3,
            verbEnding_ING3,
            noun3,
            plant,
            bodyPart,
            place,
            verbEnding_ING4,
            adjective3,
            number,
            pluralNoun4,
            writer,
    })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return(
        <div className="container">
            <h1>Mad Libs</h1>
            <Link to={`/`} className="link-btn">Home</Link>
            <hr /> <br />
            <div className="form">
                <h2>Edit</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label>Your Name: </label>
                        <input type="text" name="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun" value={noun} onChange={(e) => setNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun2" value={noun2} onChange={(e) => setNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun" value={pluralNoun} onChange={(e) => setPluralNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Game: </label>
                        <input type="text" name="game" value={game} onChange={(e) => setGame(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Verb Ending in "-ING": </label>
                        <input type="text" name="verbEnding_ING" value={verbEnding_ING} onChange={(e) => setVerbEnding_ING(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Verb Ending in "-ING": </label>
                        <input type="text" name="verbEnding_ING2" value={verbEnding_ING2} onChange={(e) => setVerbEnding_ING2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun3" value={pluralNoun3} onChange={(e) => setPluralNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Verb Ending in "-ING": </label>
                        <input type="text" name="verbEnding_ING3" value={verbEnding_ING3} onChange={(e) => setVerbEnding_ING3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun3" value={noun3} onChange={(e) => setNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plant: </label>
                        <input type="text" name="plant" value={plant} onChange={(e) => setPlant(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Place: </label>
                        <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Verb Ending in "-ING": </label>
                        <input type="text" name="verbEnding_ING4" value={verbEnding_ING4} onChange={(e) => setVerbEnding_ING4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Number: </label>
                        <input type="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun4" value={pluralNoun4} onChange={(e) => setPluralNoun4(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value="Update Mad Lib" />
                </form>
            </div>
        </div>
    );
};

export default MadLibsUpdate;