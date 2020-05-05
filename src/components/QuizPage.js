import React, { Component, Fragment } from 'react'

export default class QuizPage extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     currentQuestionNumber: 1,
  //     totalNumberOfQuestions: 10
  //   }
  // }

  incrementCounter = () => {
    this.setState({ 
      count: 5 
    });
  };

  render() {
    return (
      <Fragment>
        <div className="question-number-container">
          1/10
        </div>
        <div className="question-container">
          <div className="timer-container">
            10:10
          </div>
          <h4>Test Question. Select 'Right Answer'</h4>
          <div className="options-container">
            <p className="option">Right Answer</p>
            <p className="option">Right</p>
            <p className="option">Wrong</p>
            <p className="option">Answer</p>
          </div>

          <div className="buttons-container">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </Fragment>
    )
  }
}
