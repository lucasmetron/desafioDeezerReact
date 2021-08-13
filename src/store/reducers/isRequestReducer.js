export default function isRequestReducer(state = false, action) {
    switch (action.type) {
        case 'START':
            return state = true;

        case 'FINISH':
            return state = false;

        default:
            return state;
    }
}