
let iState = { tps: ['React', 'Angular'] };


export function topicsreducer(state = iState, action) {
    if (action.type == 'ADD') {
        return { tps: [...state.tps, action.payload.tp] }
    }
    return state;
}