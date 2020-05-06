import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import GaugeChart from 'react-gauge-chart'

export default class ResultsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 0,
      totalNumberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0
    }
  }

  componentDidMount () {
    const {state} = this.props.location;
    if(state) {
      this.setState({
        score: (state.score / state.totalNumberOfQuestions) * 100,
        totalNumberOfQuestions: state.totalNumberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers
      })
  }
  }

  render() {
    const {state} = this.props.location;
    let stats;
    
    const chartStyle = {
      height: 200,
      width: 500
    }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <div className="results-container">
            <GaugeChart id="gauge-chart1" 
              style={chartStyle} 
              textColor="#ccc"
              colors={['#EA4228', '#F5CD19', '#5BE12C']}
              percent={this.state.score / 100} 
            />
            <h2>Your score is {this.state.score.toFixed(0)} &#37;</h2>
            <div className="details-container">
              <div className="row correct-answer">
                <span className="dot correct-answer-dot"></span>
                <span className="stat-value">{this.state.correctAnswers}</span>
                <span className="stat-title"> Correct Answers</span>
              </div>
              <div className="row wrong-answer">
                <span className="dot wrong-answer-dot"></span>
                <span className="stat-value">{this.state.wrongAnswers}</span>
                <span className="stat-title"> Wrong Answers</span>
              </div>
            </div>
          </div>
        </Fragment>
      )
    } else {
      stats = (<h1>No stats available</h1>)
    }
    return (
      <Fragment>
        {stats}
        <section className="results-content">
          <div className="buttons-container">
            <Link to='/quizapp' className="start-button">Home</Link>
            <Link to='/quizapp/start-quiz' className="start-button">Start Again</Link>
          </div>
        </section>
      </Fragment>
    )
  }
}
