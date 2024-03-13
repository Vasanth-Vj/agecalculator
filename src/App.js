import logo from './logo.svg';
import './App.css';
import AgeCalculator from './Components/AgeCalculator';

function App() {
  return (
    <>
    <AgeCalculator/>
    {/* <div className='body'>
    <div className='container'>
      <div className='input-wrapper'>
        <input type='date' id='date-input'>
        </input>
        <button id='cal-age-btn'>Calculate</button>
      </div>
      <div className='outer-wrapper'>
        <div>
          <span id='years'>-</span>
          <p>Years</p>
        </div>
        <div>
          <span id='months'>-</span>
          <p>Months</p>
        </div>
        <div>
          <span id='days'>-</span>
          <p>Days</p>
        </div>
      </div>
    </div>
    </div> */}
    </>
  );
}

export default App;
