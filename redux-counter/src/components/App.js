import React, { Component } from 'react';
import './App.css';

import CounterContainer from '../containers/CounterContainer';
class App extends Component {
    render() {
        return (
            <div className="App">
              <h1>Redux 예제</h1>
              <p>한 번 클릭 : 카운터 증가<br/>
                더블 클릭 : 색상 변경<br/>
                  오른쪽 클릭 : 카운터 감소</p>
                <CounterContainer/>
            </div>

        );
    }
}

export default App;
