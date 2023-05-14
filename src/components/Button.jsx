import Refresh from '../img/refresh 1.png'

function Button(){
    return(
        <div className='buttons'>
            <button className='buttons__plus'>+</button>
            <button className='buttons__refresh'><img src={Refresh} alt="" /></button>
            <button className='buttons__minus'>-</button>
        </div>
    )
}

export default Button