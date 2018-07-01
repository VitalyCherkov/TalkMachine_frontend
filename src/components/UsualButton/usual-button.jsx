import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';

import noop from "../../utils/noop";

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

    get clickHandler() {
        return this.props.clickHandler;
    }

    get buttonView() {
        return <button
            type="submit"
            className={ `${ this.extraClassNames } button ${ this.buttonTypeClassName }` }
        >
            { this.text }
        </button>
    }

    render() {

        if ( this.props.isSubmit ) {
            return this.buttonView;
        }

        return (
            <Link
                to={ this.to }
                className={ `${ this.extraClassNames } button ${ this.buttonTypeClassName }` }
                onClick={ this.clickHandler }
            >
                { this.text }
            </Link>
        );
    }
}

UsualButton.propTypes = {
    clickHandler: PropTypes.func,
    to: PropTypes.string,
    type: PropTypes.oneOf(Object.values(ButtonTypes)),
    text: PropTypes.string,
    extraClassNames: PropTypes.arrayOf(PropTypes.string),
    isSubmit: PropTypes.bool,
};

UsualButton.defaultProps = {
    to: '#',
    clickHandler: noop,
    isSubmit: false
};
