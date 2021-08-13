export const selectedMusic = (value) => {
    return {
        type: 'SELECTEDMUSIC',
        payload: value || {},
    }
}