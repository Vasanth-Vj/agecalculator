import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDateObj.getDate())) {
      years--;
      months = 12 + months;
    }

    if (days < 0) {
      months--;
      const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
      days = tempDate.getDate() - birthDateObj.getDate() + today.getDate();
    }

    setAge({ years, months, days });
  };

  const handleChange = (e) => {
    setBirthDate(e.target.value);

  };

  return (
    <div className='body'>
      <h1>AGE CALCULATOR</h1>

      <div className='container'>
        <div className='input-wrapper'>
          <input type='date' id='date-input' onChange={handleChange} />
          <button onClick={calculateAge} id='cal-age-btn'>Calculate</button>
        </div>
        <div className='outer-wrapper'>
          <div>
            <span id='years'>{age.years}</span>
            <p>Years</p>
          </div>
          <div>
            <span id='months'>{age.months}</span>
            <p>Months</p>
          </div>
          <div>
            <span id='days'>{age.days}</span>
            <p>Days</p>
          </div>
        </div>
      </div>
    </div>
  );


}
export default AgeCalculator
