// Write your code here
import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: true}

  onChangeStatus = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
    // console.log('event triggerd')
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="home">
        <div className="content">
          {isLoggedIn ? <h1 className="status">Please Login</h1> : <Message />}
          <div className="button-container">
            {isLoggedIn ? (
              <Login event={this.onChangeStatus} />
            ) : (
              <Logout event={this.onChangeStatus} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
