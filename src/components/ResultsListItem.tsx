import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { WasteData, addToFavorites, AddToFavoritesParams } from '../actions/index';
import styled from 'styled-components';
import { IoIosStar } from 'react-icons/io';

const StyledResult = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledStarIcon = styled(IoIosStar)`
    fill: grey;
    height: 1.2em;
    width: 1.2em;
    margin: 1em;
`;

const StyledFavoritedIcon = styled(IoIosStar)`
    fill: green;
    height: 1.2em;
    width: 1.2em;
    margin: 1em;
`;

const ResultTitle = styled.div`
    margin-block-start: 1em;
    margin-block-end: 1em;
    width: 35%;
`;

const ResultDesc = styled.div`
    width: 65%;
    li {
        padding-bottom: 10px;
    }
`;

export type StateProps = {
    favoritesList: WasteData[];
}

export type DispatchProps = {
    addToFavorites: (waste: WasteData) => void;
}

export type OwnProps = {
    waste: WasteData;
};

type Props = OwnProps & DispatchProps & StateProps;

class ResultsListItem extends React.PureComponent<Props> {
    decodeHTML = (html: string) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    handleFavoritesClick = (waste: WasteData) =>{
        this.props.addToFavorites(waste);
    }
    render() {
        const { waste } = this.props;
        const decodedBody = this.decodeHTML(waste.body);
        if (this.props.favoritesList.includes(waste)) {
            return (
                <StyledResult>
                    <StyledFavoritedIcon onClick={() => this.handleFavoritesClick(waste)} />
                    <ResultTitle>{waste.title}</ResultTitle>
                    <ResultDesc dangerouslySetInnerHTML={ {__html: `${decodedBody}`} } />
                </StyledResult>
            )
        }
        return (
            <StyledResult>
                <StyledStarIcon onClick={() => this.handleFavoritesClick(waste)} />
                <ResultTitle>{waste.title}</ResultTitle>
                <ResultDesc dangerouslySetInnerHTML={ {__html: `${decodedBody}`} } />
            </StyledResult>
        );
    }
}

function mapStateToProps(state: StateProps) {
    return {
        favoritesList: state.favoritesList,
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => {
    return bindActionCreators({ addToFavorites }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsListItem);
