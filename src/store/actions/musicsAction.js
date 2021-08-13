export const addAllMusics = (value) => {
    return {
        type: 'ADDMUSICS',
        payload: value || {},
    }
}