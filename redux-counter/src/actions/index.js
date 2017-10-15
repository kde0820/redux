/*
    action 객체를 만드는 액션 생성자들을 선언 (action creators)
*/

import * as types from './ActionTypes';

// 숫자 증가
export const increment = () => ({
    type: types.INCREMENT
});

// 숫자 감소
export const decrement = () => ({
    type: types.DECREMENT
});

// 파라미터를 받아와 색상을 바꾸어준다.
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});
