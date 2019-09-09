import React from './kkbreact';
import ReactDOM from './kkbreact-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// class KKB extends React.Component {
//   render() {
//     return (<h2>hhgheg</h2>)
//   }
// }
ReactDOM.render(
  <div id="nb" key='nbkey'>
    就你最牛逼
  <span id='nb-span' >你比的span</span>
  </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();