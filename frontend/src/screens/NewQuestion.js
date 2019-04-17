import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { green } from '../resources/colors';
import { Header, Footer } from '../components';
import styled from 'styled-components';

class NewQuestion extends Component {
  state = {
    title: '',
    question: '',
  };

  createQuestion = e => {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title,
          question: this.state.question,
        },
      })
      .then(data =>
        this.props.history.push(`/giveanswer/${data.data.createQuestion._id}`)
      )
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <GridView>
          <FormView>
            <form onSubmit={this.createQuestion}>
              <NewQuestionTitle
                placeholder="Add new question title here..."
                value={this.state.title}
                onChange={this.handleChange}
              />
              <NewQuestionForm
                placeholder="Add new question description here..."
                value={this.state.question}
                onChange={this.handleChange}
              />
              <br />
              <AskBtn type="submit">Ask</AskBtn>
            </form>
          </FormView>
        </GridView>
        <Footer />
      </div>
    );
  }
}

const CREATE_QUESTION = gql`
  mutation createQuestion($title: String!, $question: String!) {
    createQuestion(title: $title, question: $question) {
      _id
      title
      question
    }
  }
`;

export default graphql(CREATE_QUESTION)(NewQuestion);

const FormView = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  margin: auto 0;
`;

const GridView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 40;
  color: white;
  justify-content: center;
`;

const NewQuestionTitle = styled.textarea`
  width: 80vw;
  height: 18px;
  margin: 5px 0 0 5px;
  box-shadow: 0px 0px 8px 4px gainsboro;
  border: 2px solid gainsboro;
  border-radius: 4px;
  resize: none;
  padding: 5px;
`;

const NewQuestionForm = styled.textarea`
  width: 80vw;
  height: 100px;
  margin: 5px 0 0 5px;
  box-shadow: 0px 0px 8px 4px gainsboro;
  border: 2px solid gainsboro;
  border-radius: 4px;
  resize: none;
  padding: 5px;
`;

const AskBtn = styled.button`
  background-color: ${green};
  width: 100px;
  height: 36px;
  margin: 5px 0 0 5px;
  align-items: center;
  font-size: 14px;
  color: white;
  font-family: Poppins;
  border: 0px;
`;
