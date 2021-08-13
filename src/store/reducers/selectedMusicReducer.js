export default function selectedMusicReducer(state = {}, action) {
    switch (action.type) {
        case 'SELECTEDMUSIC':
            return state = action.payload;

        default:
            return state;
    }
}