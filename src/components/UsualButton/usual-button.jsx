import React from 'react';
import PropTypes from 'react-proptypes';
import { Link } from 'react-router-dom';

import noop from '../../utils/noop';

import ButtonTypes from '../../constants/UsualButton/button-types';
import ButtonModes from '../../constants/UsualButton/button-modes';

import './style.css';


export default class UsualButton extends React.Component {

    get to() {
        return this.props.to;
    }

    get text() {
        return this.props.text;
    }

    get buttonTypeClassName(){
        switch (this.props.type) {
            case ButtonTypes.PRIMARY:
                return 'button_primary';
            case ButtonTypes.SECONDARY:
                return 'button_secondary';
            case ButtonTypes.LOAD_MORE:
                return 'button_load-more';
        }

        return 'button_secondary';
    }

    get extraClassNames() {
        return this.props.extraClassNames.join(' ');
    }

    get clickHandler() {
        return this.props.clickHandler;
    }

    get classNames() {
        return `${ this.extraClassNames } button ${ this.buttonTypeClassName }`;
    }

    get submitView() {
        return <button
            type="submit"
            className={ this.classNames }
        >
            { this.text }
        </button>;
    }

    get buttonView() {
        return <button
            onClick={ this.clickHandler }
            className={ this.classNames }
        >
            { this.text }
        </button>
    }

    get linkView() {
        return <Link
            to={ this.to }
            className={ this.classNames }
            onClick={ this.clickHandler }
        >
            { this.text }
        </Link>;
    }

    render() {
        switch (this.props.mode) {
            case ButtonModes.BUTTON: return this.buttonView;
            case ButtonModes.LINK: return this.linkView;
            case ButtonModes.SUBMIT: return this.submitView;
        }
    }
}

UsualButton.propTypes = {
    clickHandler: PropTypes.func,
    to: PropTypes.string,
    type: PropTypes.oneOf(Object.values(ButtonTypes)),
    text: PropTypes.string,
    extraClassNames: PropTypes.arrayOf(PropTypes.string),
    mode: PropTypes.oneOf(Object.values(ButtonModes)),
};

UsualButton.defaultProps = {
    to: '#',
    clickHandler: noop,
    mode: ButtonModes.LINK
};
