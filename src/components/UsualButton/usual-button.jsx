import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';

import ButtonTypes from '../../constants/UsualButton/button-types';

import './style.css';


export default class UsualButton extends React.Component {

    get to() {
        return this.props.to;
    }

    get text() {
        return this.props.text;
    }

    get buttonTypeClassName(){
        if (this.props.type === ButtonTypes.PRIMARY) {
            return 'button_primary';
        }
        else {
            return'button_secondary';
        }
    }

    get extraClassNames() {
        return this.props.extraClassNames.join(' ');
    }

    render() {
        return (
            <Link
                to={ this.to }
                className={ `${ this.extraClassNames } button ${ this.buttonTypeClassName }` }
            >
                { this.text }
            </Link>
        );
    }
}

UsualButton.propTypes = {
    to: PropTypes.string,
    type: PropTypes.oneOf(Object.values(ButtonTypes)),
    text: PropTypes.string,
    extraClassNames: PropTypes.arrayOf(PropTypes.string),
};

UsualButton.defaultProps = {
    to: '/'
};
