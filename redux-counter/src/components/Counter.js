/* 숫자, 색상값, 더하기함수, 빼기함수, 색상변경 함수를
props로 전달받는 컴포넌트 */

import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            // 좌클릭하면 더하기 수행
            onClick={onIncrement}
            // 우클릭할때 빼기가 수행되어야 하므로
            // default 이벤트인 메뉴가 열리는 이벤트가 수행되지 않도록 하고 onDecrement함수를 수행한다.
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement();
                }
            }
            // 더블클릭하면 색상 변경
            onDoubleClick={onSetColor}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

// default 값은 0이고 default 색상은 검정
Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;
