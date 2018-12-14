import axios from 'axios'

const link = 'https://api.nasa.gov/'

export const photos = () => {
    return axios.get(link+"/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=KIoW2gaJDyYpJpklKyhCcrect47n7H8v4HWxFthO")
    .then( response => response.data)
    .catch(e => e.response)
}

export const photoDetail = () => {
    return axios.get(link+"/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=KIoW2gaJDyYpJpklKyhCcrect47n7H8v4HWxFthO")
    .then( response => response.data)
    .catch(e => e.response)
}

export const todayPhoto = () => {
    return axios.get(link+"/planetary/apod?api_key=KIoW2gaJDyYpJpklKyhCcrect47n7H8v4HWxFthO")
    .then( response => response.data)
    .catch(e => e.response)
}