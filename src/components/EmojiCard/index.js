import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emojisList, onClickEmoji, renderedScore} = this.props
    const emojisLength = emojisList.length
    console.log(renderedScore)

    return (
      <ul className="emojis-container">
        {emojisList.map(eachItem => (
          <li key={eachItem.id} className="emoji-item">
            <button className="emoji-btn" type="button">
              <img
                src={eachItem.emojiUrl}
                alt={eachItem.emojiName}
                onClick={() => {
                  onClickEmoji(eachItem.id, renderedScore, emojisLength)
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default EmojiCard
