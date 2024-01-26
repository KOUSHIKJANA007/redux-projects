import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {

  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" })
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" })
  };
  const handlePrivacyTroggle = () => {
    dispatch({ type: "PRIVACY_TROGGLE" })
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      }
    })
  };
  const handleSubstract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        num: inputElement.current.value,
      }
    })
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-success" onClick={handleIncrement}>+1</button>
        <button type="button" className="btn btn-danger" onClick={handleDecrement}>-1</button>
        <button type="button" className="btn btn-warning" onClick={handlePrivacyTroggle}>Privacy Troggle</button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" className='input-box' ref={inputElement} placeholder='Enter number' />
        <button type="button" className="btn btn-warning" onClick={handleAdd} >Add</button>
        <button type="button" className="btn btn-info" onClick={handleSubstract} >Sub</button>
      </div>
    </>
  )
}

export default Controls