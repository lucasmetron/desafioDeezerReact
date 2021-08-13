export default function musicsReducer(state = [], action) {
    switch (action.type) {
        case 'ADDMUSICS':
            return state = action.payload

        default:
            return state;
    }
}