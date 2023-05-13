// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogin: false}

  onChangeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageEl
    let btnEl
    if (isLogin) {
      messageEl = <Message text="Welcome User" />
      btnEl = <Logout changeStatus={this.onChangeStatus} />
    } else {
      messageEl = <Message text="Please Login" />
      btnEl = <Login changeStatus={this.onChangeStatus} />
    }

    return (
      <div className="bg-container">
        <div className="container">
          {messageEl}
          {btnEl}
        </div>
      </div>
    )
  }
}
export default Home
// https://loginlogoutsure.ccbp.tech/
