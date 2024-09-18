import './index.css'
import User from '../User';
import Adress from '../Adress';
function UserList(props) {
    const {data} = props
  return (
    <div className="userList">
       {
        data.length>0 && data.map(function(value, index){
            return (
                <User user ={value} key = {index}></User>
            )
        })
       }
       
    </div>
  )
}

export default UserList