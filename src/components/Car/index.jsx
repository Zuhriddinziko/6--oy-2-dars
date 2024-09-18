import './index.css'

function Car(props) {
    const {cars}= props
  return (
    <span className='car'>{cars}</span>
  )
}

export default Car