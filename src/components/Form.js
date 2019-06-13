import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormComponent extends Component {
    state = {
        category: '',
    };

    componentDidMount() {
        this.setState({
            category: 'general',
        });
    };

    handleSelectChange = e => {
        this.setState({
            category: e.target.value,
        }, () => {
            this.props.setApiNews(this.state.category);
        });
    };

    render() { 
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Filter news by category</h2>
                        <div className="input-field col s12 ">
                            <select
                                onChange={
                                    this.handleSelectChange
                                }
                            >
                                <option value="general">All</option>
                                <option value="business">Business</option>
                                <option value="entertaiment">Entertaiment</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

FormComponent.propTypes = {
    setApiNews: PropTypes.func.isRequired,
};

export default FormComponent;