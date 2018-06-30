import React from 'react';
import PropTypes from 'react-proptypes';

import ButtonTypes from '../../constants/UsualButton/button-types';

import './style.css';


export default class UsualButton extends React.Component {

    get href() {
        return this.props.href;
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
            <a
                href={ this.href }
                className={ `${ this.extraClassNames } button ${ this.buttonTypeClassName }` }
            >
                { this.text }
            </a>
        );
    }
}

UsualButton.PropTypes = {
    href: PropTypes.string,
    type: PropTypes.oneOf(Object.values(ButtonTypes)),
    text: PropTypes.string,
    extraClassNames: PropTypes.arrayOf(PropTypes.string),
};
