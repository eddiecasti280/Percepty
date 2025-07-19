import React from 'react';
import colors from "../utils/constants";
import '../styles/App.css';
import Avatar, { genConfig } from 'react-nice-avatar';

function AuthorPartition({ name, description, date }) {
    let mydate = new Date(date);
    const outputDate = mydate.toDateString();
    const config = genConfig({ sex: "man", hairStyle: "thick", shirtStyle: "hoody", faceColor: "#d39972", glassesStyle: "none", mouthStyle: "smile", eyeStyle: "circle" });
    const isURL = typeof description === 'string' && description.startsWith('http'); // Checks URL text to see if string is eligible to redirect to page

    return (
        <div className="container" style={{ backgroundColor: colors.timberwolf, padding: '20px', borderRadius: '8px', marginTop: '10px', boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)'}}>
            <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
                </div>
                <div className="col-md-8" style={{backgroundColor:colors.floral_white, borderRadius: '8px'}}>
                    <p><strong>Author:</strong> {name}</p>
                    <p>{isURL ? (<a href={description} target="_blank" rel="noopener noreferrer">{description}</a>) : (description)}</p>
                    <p><strong>Published on:</strong> {outputDate}</p>
                </div>
            </div>
        </div>
    );
}

export default AuthorPartition;
