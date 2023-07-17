import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {score, topScore, doesUserWon} = this.props

    return (
      <>
        {!doesUserWon && (
          <div className="navbar-container">
            <div className="emoji-game-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
              />
              <h1>Emoji Game</h1>
            </div>
            <div className="scores-container">
              <p className="score">Score: {score}</p>
              <p>Top Score: {topScore}</p>
            </div>
          </div>
        )}
        {doesUserWon && (
          <div className="navbar-container">
            <div className="emoji-game-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
              />
              <h1>Emoji Game</h1>
            </div>
            <div className="scores-container">.</div>
          </div>
        )}
      </>
    )
  }
}

export default NavBar
