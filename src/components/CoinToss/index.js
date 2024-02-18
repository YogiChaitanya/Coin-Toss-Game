// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    status: true,
  }

  onClickBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({
      totalCount: prevState.tailsCount + 1,
    }))
    if (tossResult === 0) {
      this.setState(prevState => ({
        status: prevState.status === true,
      }))
    } else {
      this.setState(prevState => ({
        status: prevState.status === false,
      }))
    }

    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, status} = this.state

    const heads = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tails = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    const displayImage = status ? heads : tails
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading1">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>

          <img src={displayImage} className="toss-result" alt="toss result" />

          <button type="button" className="toss-btn" onClick={this.onClickBtn}>
            Toss Coin
          </button>
          <div className="result-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
