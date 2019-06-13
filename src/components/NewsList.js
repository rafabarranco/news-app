import React from 'react';
import PropTypes from 'prop-types';
import NewComponent from './New';

const NewsListComponent = ({news}) => (
    <div className="row">
        {
            news.map( currentNew => (
                <NewComponent
                    key={currentNew.url}
                    currentNew = {currentNew}
                />
            ))
        }
    </div>
);
 
NewsListComponent.propTypes = {
    news: PropTypes.array.isRequired,
};

export default NewsListComponent;