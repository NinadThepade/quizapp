import React, { Component, Fragment } from 'react'
import questions from '../questions.json'

export default class QuizPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentQuestionNumber: 0,
      totalNumberOfQuestions: 0,
      questions,
      currentQuestion: {},
      nextQuestion: {},
      answer: "",
      optionSelected: "",
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      score: 0,
      time: {},
      nextButtonDisabled: false
    };
    this.interval = null
  }

  componentDidMount () {
    const { questions, currentQuestion, nextQuestion } = this.state
    this.displayQuestions(questions, currentQuestion, nextQuestion)
    this.startTimer()
  }

  displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion) => {
    let { currentQuestionNumber } = this.state;
    if (Array.isArray(this.state.questions) && this.state.questions.length) { 
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionNumber];
      nextQuestion = questions[currentQuestionNumber + 1];
      const answer = currentQuestion.answer;
      this.setState({
        currentQuestion,
        nextQuestion,
        answer,
        totalNumberOfQuestions: questions.length
      }, () => {this.handleDisableNext()})
    }
  };

  handleOptionClicked = (e) => {
    this.resetOptions()
    this.setState({
      optionSelected: e.target.innerHTML
    })
    e.target.classList = e.target.classList.value === 'option' ? 'option-selected' : 'option'
  }

  handleNextClicked = () => {
    if(this.state.optionSelected === this.state.answer) {
      this.correctAnswer()
    } else {
      this.wrongAnswer()
    }
    this.resetOptions()
    this.setState({
      optionSelected: ""
    })
  }

  resetOptions () {
    let optionsList = document.getElementsByClassName("options-container")[0]

    Array.from(optionsList.children).forEach(child => {
      child.classList.value = 'option'
    });
  }

  handleQuitClicked = () => {
    if(window.confirm('Are you sure?') ) {
      this.props.history.push('/quizapp/show-results')
    }
  }

  correctAnswer = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      correctAnswers: prevState.correctAnswers + 1,
      currentQuestionNumber: prevState.currentQuestionNumber + 1,
    }), () => {
      this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion);
    })
  }

  wrongAnswer = () => {
    this.setState(prevState => ({
      numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      wrongAnswers: prevState.wrongAnswers + 1,
      currentQuestionNumber: prevState.currentQuestionNumber + 1,
    }), () => {
      this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion);
    })
  }

  startTimer () {
    const quizTotalTime = Date.now() + 180000
    this.interval = setInterval(() => {
      const now = new Date();
      const timeLeft = quizTotalTime - now

      const minutes = Math.floor((timeLeft % (1000 * 60 * 60))/(1000 * 60))
      const seconds = Math.floor((timeLeft % (1000 * 60))/(1000))

      if (timeLeft < 0) {
        clearInterval(this.interval);
        this.setState({
          time: {
            minutes: 0,
            seconds: 0
          }
        }, () =>  {
          alert('Quiz timeout');
          this.props.history.push('/quizapp/show-results')
        })
      } else {
        this.setState({
          time: {
            minutes,
            seconds
          }
        })
      }
    }, 1000);
  }

  handleDisableNext() {
    if(this.state.nextQuestion === undefined || this.state.currentQuestionNumber + 1 === this.state.totalNumberOfQuestions) {
      this.setState({
        nextButtonDisabled: true
      })
    } else {
      this.setState({
        nextButtonDisabled: false
      })
    }
  }

  render() {
    const {currentQuestion, currentQuestionNumber, totalNumberOfQuestions, time} = this.state;

    return (
      <Fragment>
        <div className="question-number-container">
    <span style={{fontSize: 36 + 'px'}}>{currentQuestionNumber + 1}</span>/{totalNumberOfQuestions}
        </div>
        <div className="question-container">
          <div className="timer-container">
            Time left - {time.minutes}:{time.seconds}
          </div>
          <h4>{currentQuestion.question}</h4>
          <div className="options-container">
            <p onClick={this.handleOptionClicked} className="option">{currentQuestion.optionA}</p>
            <p onClick={this.handleOptionClicked} className="option">{currentQuestion.optionB}</p>
            <p onClick={this.handleOptionClicked} className="option">{currentQuestion.optionC}</p>
            <p onClick={this.handleOptionClicked} className="option">{currentQuestion.optionD}</p>
          </div>

          <div className="buttons-container">
            <button onClick={this.handleQuitClicked}>Quit</button>
            <button onClick={this.handleNextClicked} disabled={this.state.nextButtonDisabled}>Next</button>
          </div>
        </div>
      </Fragment>
    )
  }
}
