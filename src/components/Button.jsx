import Refresh from '../img/refresh 1.png'

function Button({counter, setCounter}){

    function plus(){
        setCounter(counter + 3)
    }

    function minus(){
        setCounter(counter - 2 >= 0 ? counter - 2 : 0);
    }

    function reset(){
        setCounter(0)
    }


    return(
        <div className='buttons'>
            <button className='buttons__plus' onClick={plus}>+</button>
            <button className='buttons__refresh' onClick={reset}><img src={Refresh} alt="" /></button>
            <button className='buttons__minus' onClick={minus}>-</button>
        </div>
    )
}

export default Button