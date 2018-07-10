'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ButtonTypes from '../../constants/UsualButton/button-types';
import ButtonModes from '../../constants/UsualButton/button-modes';
import DialogCard from '../DialogCard/dialog-card';
import { ConversationsLoadNextPageAction } from '../../actions/ConversactionsActions/action-creators';

import './style.css';
import { MainTabbarChangeActiveAction } from '../../actions/MainTabbarActions/action-creators';
import { ListView } from '../ListView/list-view';
import { dialogCardDelegate } from '../ListModelDelegates/dialog-card-delegate';


class ConversationsSection extends React.Component {
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
            <section className='conversations-section'>
                <ListView listModel={ results } delegate={ dialogCardDelegate } />
                { this.loadMoreBtn }
            </section>
        );
    }
}

const putActionsToProps = (diapatch) => bindActionCreators({
    loadNextPage: ConversationsLoadNextPageAction,
    setActiveCurrentTab: MainTabbarChangeActiveAction,
}, diapatch);

const putStatesToProps = (state) => ({
    ...state.conversations,
});

export const WrappedConversationsSection = connect(putStatesToProps, putActionsToProps)(ConversationsSection);

