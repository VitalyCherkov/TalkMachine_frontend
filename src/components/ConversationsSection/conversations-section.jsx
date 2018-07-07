'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ButtonTypes from '../../constants/UsualButton/button-types';
import ButtonModes from '../../constants/UsualButton/button-modes';
import DialogCard from '../DialogCard/dialog-card';
import { ConversationsLoadNextPageAction } from '../../actions/ConversactionsActions/action-creators';

import './style.css';


class ConversationsSection extends React.Component {
    render() {
        const { has_next, results, loadNextPage, pages } = this.props;
        return (
            <section className='conversations-section'>
                { results.map(result => <DialogCard
                    title={ result.partner.username }
                    lastUpdateDateTime={ result.last_msg_date }
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
    loadNextPage: ConversationsLoadNextPageAction
}, diapatch);

const putStatesToProps = (state) => ({
    ...state.conversations
});

export const WrappedConversationsSection = connect(putStatesToProps, putActionsToProps)(ConversationsSection);

