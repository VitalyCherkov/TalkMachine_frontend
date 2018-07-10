'use strict';

import React from 'react';
import PropTypes from 'react-proptypes';

import './style.css';


export class ListView extends React.Component {

    get classNamesString() {
        const isReverse = this.props.isReverse;
        const isReverceClassName = isReverse ? 'list-view_reverse' : '';
        return `list_view ${isReverceClassName}`;
    }

    render() {
        const { delegate, listModel, isReverse } = this.props;
        return (
            <div className={ this.classNamesString }>
                { listModel.map((listItem, key) => delegate({listItem, key})) }
            </div>
        );
    }
}
//
// ListView.propTypes = {
//     delegate: PropTypes.function,
//     listModel: PropTypes.arrayOf(PropTypes.object),
//     isReverse: PropTypes.bool
// };
//
// ListView.defaultProps = {
//     isReverse: false
// };
