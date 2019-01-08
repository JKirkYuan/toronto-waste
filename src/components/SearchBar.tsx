import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { wasteRequest } from '../actions/index';

const StyledInputContainer = styled.div`
    margin: 2em;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const StyledInput = styled.input`
    font-size: 0.9em;
    padding: 0.8em 1.4em 0.8em 1.4em;
    box-sizing: border-box;
    width: 90%;
`;

const StyledButton = styled.button`
    width: 4.8%;
    height: 4em;
    background-color: #1f824f;
    border-radius: 2px;
    border: none;
`;

const StyledSearchIcon = styled(IoIosSearch)`
    fill: white;
    height: 3em;
    width: 3em;
`;

type Props = {
    wasteRequest(input: string): actionCreators.WasteRequestParams;
};

type State = {
    term: string;
};

class SearchBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({term: event.currentTarget.value});
    }
    onFormSubmit(event: React.FormEvent) {
        event.preventDefault();
        this.props.wasteRequest(this.state.term);
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <StyledInputContainer>
                    <StyledInput 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        placeholder="Takeout...">
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
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
