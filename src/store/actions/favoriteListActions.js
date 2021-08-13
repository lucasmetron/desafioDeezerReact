export const addFavoriteList = (value) => {
    return {
        type: 'ADDFAVORITEMUSIC',
        payload: value || {}
    }
}

export const removeFavoriteList = (value) => {
    return {
        type: 'REMOVEFAVORITEMUSIC',
        payload: value || {}
    }
}

