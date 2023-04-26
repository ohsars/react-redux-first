import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, reset } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App container text-center mt-5">
      <h2>Counter {counter}</h2>
      <div className='items-center m-auto gap-8 text-white-700'>
        <button onClick={() => dispatch(increment(5))} className='m-2 w-10 rounded bg-sky-600'>+5</button>
        <button onClick={() => dispatch(decrement(2))} className='mr-3 w-10 rounded bg-sky-600'>-2</button>
        <button onClick={() => dispatch(reset())} className='m-auto w-12 rounded bg-sky-600'>RESET</button>
      </div>
      {isLogged ? 
      <h3>valuable information i shouldn't see</h3> 
      : 
      <h3>Log in to see this</h3>}
    </div>
  );
}

export default App;
