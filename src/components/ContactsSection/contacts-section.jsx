'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DialogCard from '../DialogCard/dialog-card';
import './style.css';
import UsualButton from '../UsualButton/usual-button';
import ButtonModes from '../../constants/UsualButton/button-modes';
import ButtonTypes from '../../constants/UsualButton/button-types';
import {ContactsLoadNextPageAction} from '../../actions/ContactsActions/action-creators';


class ContactsSection extends React.Component {
    render() {
        const { has_next, results, loadNextPage, pages } = this.props;
        return (
            <section className='contacts-section'>
                { results.map(result => <DialogCard
                    title={ `${ result.username }` }
                />) }
                { has_next ? <UsualButton
                    text='Load more'
                    mode={ ButtonModes.BUTTON }
                    type={ ButtonTypes.LOAD_MORE }
                    extraClassNames={ ['room__in-section-button'] }
                    clickHandler={ () => loadNextPage({ page: pages }) }
                /> : null }
            </section>
        );
    }
}

const putActionsToProps = (diapatch) => bindActionCreators({
    loadNextPage: ContactsLoadNextPageAction
}, diapatch);

const putStatesToProps = (state) => ({
    ...state.contacts
});

export const WrappedContactsSection = connect(putStatesToProps, putActionsToProps)(ContactsSection);

