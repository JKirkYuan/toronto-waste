import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import styled from 'styled-components';
import { WasteData, addToFavorites } from '../actions/index';
import ResultsListItem from './ResultsListItem';

const StyledFavoritesContainer = styled.div`
    margin-top: 2em;
    background-color: #f5fef9;
    height: 100%;
`;

const FavoritesTitle = styled.div`
    font-weight: 700;
    color: green;
    font-size: 1.5em;
    padding: 1em;
`;

export type StateProps = {
    favoritesList: WasteData[];
};

export type Props = StateProps;

class FavoritesList extends Component<Props> {
    renderList() {
        return this.props.favoritesList.map(waste => 
            <ResultsListItem 
                key={waste.title}
                waste={waste}
            /> 
        );
    }
    render() {
        if (this.props.favoritesList.length === 0 || !this.props.favoritesList) {
            return <></>;
        }
        return(
            <StyledFavoritesContainer>
                <FavoritesTitle>Favourites</FavoritesTitle>
                {this.renderList()}
            </StyledFavoritesContainer>
        );
    }
}

function mapStateToProps(state: StateProps) {
    return {
        favoritesList: state.favoritesList,
    }
}

export default connect(mapStateToProps, null)(FavoritesList);
