import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import colors from "./constants";
import './App.css';
import Avatar, { genConfig } from 'react-nice-avatar'

function AuthorPartition({ name, date }) {
    var mydate = new Date(date);
    const outputDate = mydate.toDateString();
    const config = genConfig({ sex: "man", hairStyle: "thick", shirtStyle: "hoody", faceColor: "#d39972", glassesStyle: "none", mouthStyle: "smile" }) 

    return (
        <div className="container" style={{ backgroundColor: colors.timberwolf, padding: '20px', borderRadius: '8px', marginTop: '10px' }}>
            <p>Author: {name}</p>
            <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
            <p>I'm a student at The University of Texas at Austin pursuing a Master's in Artificial Intelligence.</p>
            <p>Published on: {outputDate}</p>
        </div>
    );
}

export default AuthorPartition;
