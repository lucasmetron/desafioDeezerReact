export default function favoriteListReducer(state = [], action) {
    switch (action.type) {
        case 'ADDFAVORITEMUSIC':
            return state = [...state, action.payload || {}];

        case 'REMOVEFAVORITEMUSIC':
            return state = state.filter(item => item.id !== action.payload);

        default:
            return state;
    }
}