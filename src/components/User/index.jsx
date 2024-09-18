import Adress from '../Adress';
import Car from '../Car';
import './index.css'

function User(props) {
    const {firstName, lastName, image, cars, phone, email} = props.user;
    console.log(cars);
  return (
    <div className='user'>
        <img src= {image}alt="" />
        <p className='name'>{firstName}{lastName}</p>
        {
            cars.length>0 && cars.map(function(value, index){
                return(
                    <Car cars= {value} key = {index}/>
                )
            })
        }
        {
            cars.length ==0 && <span className='carr'>mashina mavjud emas</span>
            
        }
        <Adress phone={phone} email={email}></Adress>

    </div>
  )
}

export default User