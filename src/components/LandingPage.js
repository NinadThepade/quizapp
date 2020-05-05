import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="landingPage">
      <section className="content-container">
        <h1>Landing page for Quiz</h1>
        <div className="button-container">
          <Link to='/start' className="start-button">Start</Link>
        </div>
      </section>
    </div>
  )
}

export default LandingPage