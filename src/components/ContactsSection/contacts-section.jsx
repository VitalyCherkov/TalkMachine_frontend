'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonTypes from '../../constants/UsualButton/button-types';
import ButtonModes from '../../constants/UsualButton/button-modes';
import DialogCard from '../DialogCard/dialog-card';
import UsualButton from '../UsualButton/usual-button';
import { ContactsLoadNextPageAction } from '../../actions/ContactsActions/action-creators';

import './style.css';
import { dialogCardDelegate } from '../ListModelDelegates/dialog-card-delegate';
import { ListView } from '../ListView/list-view';
import { contactCardDelegate } from '../ListModelDelegates/contact-card-delegate';


class ContactsSection extends React.Component {

    get loadMoreBtn() {
        const { has_next, loadNextPage, pages } = this.props;
        if (has_next) {
            return (<UsualButton
                text='Load more'
                mode={ ButtonModes.BUTTON }
                type={ ButtonTypes.LOAD_MORE }
                extraClassNames={ ['room__in-section-button'] }
                clickHandler={ () => loadNextPage({ page: pages }) }
            />);
        }
        else {
            return null;
        }
    }

    render() {
        const { results } = this.props;
        return (
            <section className='contacts-section'>
                <ListView listModel={ results } delegate={ contactCardDelegate } />
                { this.loadMoreBtn }
            </section>
        );
    }
}

const putActionsToProps = (dispatch) => bindActionCreators({
    loadNextPage: ContactsLoadNextPageAction
}, dispatch);

const putStatesToProps = (state) => ({
    ...state.contacts
});

export const WrappedContactsSection = connect(putStatesToProps, putActionsToProps)(ContactsSection);

