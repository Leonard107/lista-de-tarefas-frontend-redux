import axios from 'axios'

const URL = 'http://localhost:3003/api/listas'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
        return {
            type: 'PENDENCIA_SEARCHED',
            payload: request
        }
}


export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (pendencia) => {
    return dispatch => {
        axios.put(`${URL}/${pendencia._id}`, { ...pendencia, done: true})
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (pendencia) => {
    return dispatch => {
        axios.put(`${URL}/${pendencia._id}`, {...pendencia, done: false})
        .then(resp => dispatch(search()))
    }
}

export const remove = (pendencia) => {
    return dispatch => {
        axios.delete(`${URL}/${pendencia._id}`)
        .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return {type: 'PENDENCIA_CLEAR'}
}