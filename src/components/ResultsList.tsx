import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { WasteData, addToFavorites } from '../actions/index';
import ResultsListItem from './ResultsListItem';

export type StateProps = {
    wasteList: WasteData[];
};

export type Props = StateProps;

class ResultsList extends Component<Props> {
    renderList() {
        return this.props.wasteList.map(waste => 
            <ResultsListItem 
                key={waste.title}
                waste={waste}
            /> 
        );
    }
    render() {
        if (!this.props.wasteList) {
            return <></>;
        }
        return(
            <>
                {this.renderList()}
            </>
        );
    }
}

function mapStateToProps(state: StateProps) {
    return {
        wasteList: state.wasteList,
    }
}

export default connect(mapStateToProps, null)(ResultsList);
