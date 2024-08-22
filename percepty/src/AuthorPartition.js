import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import colors from "./constants";
import './App.css';
import Avatar, { genConfig } from 'react-nice-avatar';

function AuthorPartition({ name, date }) {
    let mydate = new Date(date);
    const outputDate = mydate.toDateString();
    const config = genConfig({ sex: "man", hairStyle: "thick", shirtStyle: "hoody", faceColor: "#d39972", glassesStyle: "none", mouthStyle: "smile", eyeStyle: "circle" });

    return (
        <div className="container" style={{ backgroundColor: colors.timberwolf, padding: '20px', borderRadius: '8px', marginTop: '10px', boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)'}}>
            <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
                </div>
                <div className="col-md-8" style={{backgroundColor:colors.floral_white, borderRadius: '8px'}}>
                    <p><strong>Author:</strong> {name}</p>
                    <p>I'm a student at The University of Texas at Austin pursuing a Master's in Artificial Intelligence.</p>
                    <p><strong>Published on:</strong> {outputDate}</p>
                </div>
            </div>
        </div>
    );
}

export default AuthorPartition;
