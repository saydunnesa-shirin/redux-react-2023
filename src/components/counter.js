import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterActions';

const Counter = () => {
  const count = useSelector(state =>  state.count);
  const dispatch = useDispatch();

  console.log(count);
  const handleIncrement = () => {
    dispatch(incrementCounter());
  }

  
  const handleDecrement = () => {
    dispatch(decrementCounter());
  }
  
  const handleReset = () => {
    dispatch(resetCounter());
  }

  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>


    </div>
  )
}

export default Counter
