import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { wasteRequest, clearWasteResults, WasteRequestParams, ClearWasteResultsParams } from '../actions/index';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

const StyledInputContainer = styled.div`
    margin: 1em;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const StyledInput = styled.input`
    font-size: 0.9em;
    padding: 0.8em 1.4em 0.8em 1.4em;
    box-sizing: border-box;
    width: 100%;
    border-radius: 2px;
    border: 1px solid grey;
`;

const StyledButton = styled.button`
    margin-left: 1em;
    width: 4%;
    height: 4em;
    background-color: #1f824f;
    border-radius: 2px;
    border: none;
`;

const StyledSearchIcon = styled(IoIosSearch)`
    fill: white;
    padding-top: 2px;
    height: 2em;
    width: 2em;
    transform: scale(-2,2);
`;

type DispatchProps = {
    wasteRequest(input: string): WasteRequestParams;
    clearWasteResults(): ClearWasteResultsParams;
};

type State = {
    term: string;
};

type Props = DispatchProps;

class SearchBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event: React.FormEvent<HTMLInputElement>) {
        if (event.currentTarget.value === '') {
            this.props.clearWasteResults();
        }
        this.setState({term: event.currentTarget.value});
    }
    onFormSubmit(event: React.FormEvent) {
        event.preventDefault();
        this.props.wasteRequest(this.state.term.toLowerCase());
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <StyledInputContainer>
                    <StyledInput
                        value={this.state.term}
                        onChange={this.onInputChange}
                    >
                    </StyledInput>
                    <StyledButton type="submit">
                        <StyledSearchIcon />
                    </StyledButton>
                </StyledInputContainer>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ wasteRequest, clearWasteResults }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
