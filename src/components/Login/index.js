// Write your code here

const Login = props => {
  const {event} = props
  return (
    <button type="button" className="button" onClick={event}>
      Login
    </button>
  )
}

export default Login
