import './index.css'
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    isGameGoing: true,
    topScore: 0,
    currentScore: 0,
    clickedEmojisList: [],
  }

  handleEmojiClick = id => {
    const {clickedEmojisList, currentScore, topScore} = this.state

    const isEmojiIdInCurrentEmojisList = clickedEmojisList.includes(id)
    const changedTopScore = () => {
      if (currentScore > topScore) {
        return currentScore
      }
      return topScore
    }

    const finalTopScore = changedTopScore()

    if (isEmojiIdInCurrentEmojisList) {
      this.setState({
        currentScore,
        isGameGoing: false,
        topScore: finalTopScore,
      })
    } else {
      if (clickedEmojisList.length === 11) {
        this.setState({
          currentScore,
          isGameGoing: false,
          topScore: finalTopScore,
        })
      }
      this.setState(prevState => ({
        currentScore: prevState.currentScore + 1,
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  handlePlayAgain = () => {
    const {currentScore, topScore} = this.state
    const checkTopScore = () => {
      if (currentScore >= topScore) {
        return currentScore
      }
      return topScore
    }
    const finalTopScore = checkTopScore()

    this.setState({
      isGameGoing: true,
      currentScore: 0,
      clickedEmojisList: [],
      topScore: finalTopScore,
    })
  }

  render() {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    const {isGameGoing, topScore, currentScore} = this.state
    const emojisLength = emojisList.length
    //  console.log(`currentScore in render ${currentScore}`)
    return (
      <div className="main-container">
        <NavBar
          score={currentScore}
          topScore={topScore}
          doesUserWon={!isGameGoing}
        />
        <div className="game-container">
          {isGameGoing && (
            <EmojiCard
              emojisList={shuffledEmojisList}
              onClickEmoji={this.handleEmojiClick}
              renderedScore={currentScore}
            />
          )}
          {!isGameGoing && (
            <WinOrLoseCard
              onClickPlayAgain={this.handlePlayAgain}
              gameDetails={this.state}
              emojisLength={emojisLength}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
