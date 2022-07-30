const istate = { data: [] }
export function usersreducer(state = istate, action) {
    if (action.type === 'GETDATA')
        return { data: action.payload.data };
    return state;

}