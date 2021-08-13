export default function favoriteListReducer(state = [], action) {
    switch (action.type) {
        case 'ADDFAVORITEMUSIC':
            return state.push(action.payload);

        case 'REMOVEFAVORITEMUSIC':
            return state = state.filter(item => item.id !== action.payloa.id);

        default:
            return state;
    }
}