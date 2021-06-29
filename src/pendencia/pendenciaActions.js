import axios from 'axios'

const URL = 'http://localhost:3003/api/listas'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = (description) => {
    const search = description ? `&description__regex=/${description}/` : '' 
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
        return {
            type: 'PENDENCIA_SEARCHED',
            payload: request
        }
}


export const add = (description) => {
    //utilizando o thunk
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (pendencia) => {
    //utilizando o thunk
    return dispatch => {
        axios.put(`${URL}/${pendencia._id}`, { ...pendencia, done: true})
            .then(resp => dispatch(search(description)))
    }
}

export const markAsPending = (pendencia) => {
    //utilizando o thunk
    return dispatch => {
        axios.put(`${URL}/${pendencia._id}`, {...pendencia, done: false})
        .then(resp => dispatch(search(description)))
    }
}

export const remove = (pendencia) => {
    //utilizando o thunk
    return dispatch => {
        axios.delete(`${URL}/${pendencia._id}`)
        .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    //ultilizando o multi
    return [{type: 'PENDENCIA_CLEAR'}, search()]
}