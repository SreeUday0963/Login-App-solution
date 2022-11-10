// Write your code here
const Logout = props => {
  const {event} = props
  return (
    <button type="button" className="button" onClick={event}>
      Logout
    </button>
  )
}

export default Logout
