import './index.css'
import {Component} from 'react'

class WinOrLoseCard extends Component {
  render() {
    const {onClickPlayAgain, gameDetails} = this.props
    const {currentScore} = gameDetails
    const checkTopScore = () => {
      if (currentScore === 12) {
        return true
      }
      return false
    }

    const isTopScoreBeaten = checkTopScore()

    const imgStyle = isTopScoreBeaten
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

    return (
      <>
        {isTopScoreBeaten && (
          <div className="result-container">
            <div className="result-container-elements">
              <h1>You Won</h1>
              <p>Best Score</p>
              <p className="score">{currentScore}/12</p>
              <button type="button" onClick={onClickPlayAgain}>
                Play Again
              </button>
            </div>
            <img src={imgStyle} alt="win or lose" />
          </div>
        )}
        {!isTopScoreBeaten && (
          <div className="result-container">
            <div className="result-container-elements">
              <h1>You Lose</h1>
              <p>Score</p>
              <p className="score">{currentScore}/12</p>
              <button type="button" onClick={onClickPlayAgain}>
                Play Again
              </button>
            </div>
            <img src={imgStyle} alt="win or lose" />
          </div>
        )}
      </>
    )
  }
}

export default WinOrLoseCard
