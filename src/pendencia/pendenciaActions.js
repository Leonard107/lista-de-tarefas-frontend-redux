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
    const request = axios.post(URL, { description })
        return {
            type: 'PENDENCIA_ADDED',
            payload: request
        }
}