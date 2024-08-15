import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ModuleCard({ imageSrc, title, text, link }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={imageSrc} alt={title} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: 'auto' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">Enter Module</a>
                </div>
            </div>
        </div>
    );
}

export default ModuleCard;
