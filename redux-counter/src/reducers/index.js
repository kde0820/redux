import * as types from '../actions/ActionTypes';

// 초기 상태 정의
const initialState = {
    color: 'black',
    number: 0
};

/*
    Reducer 함수를 정의
    Reducer는 액션의 type에 따라 변화를 일으킴.
    state를 직접 수정하지 않고 기존 state값에 덮어쓴 새로운 객체를 생성하여 리턴한다.
*/
function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
};

export default counter;
