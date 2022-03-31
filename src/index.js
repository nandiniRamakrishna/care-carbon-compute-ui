import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import CarbonElementsTestApp from './components/carbonElementTest';
import YearlyEmissionsCardView from "./components/yearlyEmissionsCardView";
import YourImpact from "./components/yourImpact";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      {/* <CarbonElementsTestApp /> */}
      <div className='mainContainer'>
      <YearlyEmissionsCardView />
      <YourImpact/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
