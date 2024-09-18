import './index.css'

function Adress(props) {
    const {phone, email} = props
  return (
    <div>
        <p>{phone}</p>
        <p>{email}</p>
    </div>
  )
}

export default Adress