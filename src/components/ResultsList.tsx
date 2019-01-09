import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WasteData } from '../actions/index';
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

const ResultTitle = styled.div`
    margin-block-start: 1em;
    margin-block-end: 1em;
    width: 35%;
`;

const ResultDesc = styled.div`
    width: 65%;
    li {
        padding-top: 10px;
    }
`;

export type StateProps = {
    wasteList: WasteData[];
};

export type Props = {
} & StateProps;

class ResultsList extends Component<Props> {
    renderList(waste: WasteData) {
        const { title, body } = waste;
        const decodeHTML = (html: string) => {
            const txt = document.createElement('textarea');
            txt.innerHTML = html;
            return txt.value;
        };
        const decodedBody = decodeHTML(body);
        return (
            <StyledResult key={title}>
                <StyledStarIcon />
                <ResultTitle>{title}</ResultTitle>
                <ResultDesc dangerouslySetInnerHTML={ {__html: `${decodedBody}`} } />
            </StyledResult>
        )
    }
    render() {
        if (!this.props.wasteList) {
            return <></>;
        }
        return(
            <div>
                {this.props.wasteList.map(this.renderList)}
            </div>
        )
    }
}

function mapStateToProps(state: StateProps) {
    return {
        wasteList: state.wasteList,
    }
}

export default connect(mapStateToProps, null)(ResultsList);
