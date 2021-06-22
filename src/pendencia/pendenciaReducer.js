const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'PENDENCIA_SEARCHED':
            return { ...state, list: action.payload.data}
        case 'PENDENCIA_ADDED':
            return { ...state, description: ''}
        default:
            return state
    }
}