import React from 'react';
import PropTypes from 'prop-types';

const NewComponent = ({currentNew}) => {

    //Destructuring
    const { urlToImage, url, title, description, source } = currentNew;

    //Load the image if it's available
    const image = urlToImage ? 
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div> 
    : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {image}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a className="waves-effect waves-light btn" href={url} target="_blank" rel="noopener noreferrer">
                        See full new
                    </a>
                </div>
            </div>
        </div>
    );
};

NewComponent.propTypes = {
    currentNew: PropTypes.object.isRequired,
};

export default NewComponent;