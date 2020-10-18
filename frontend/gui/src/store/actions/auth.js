import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const idSuccess = userid => {
    return {
        type: actionTypes.AUTH_ID,
        userid: userid
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('username')
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}


export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost:8000/dj-rest-auth/login/', {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.key
                getid(res.data.key)
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
                localStorage.setItem('token', token)
                localStorage.setItem('username', username)
                localStorage.setItem('expirationDate', expirationDate)
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout(3600))
                console.log(token, '---back w token')
                return token
            })
            .then(token => {
                console.log('getid is firing')
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
                axios.get(`http://localhost:8000/dj-rest-auth/user/`
                ).then(response => {
                    localStorage.setItem('userdata', response.data.pk)
                    console.log(response.data.pk)
                })


            })
            .catch(err => {
                dispatch(authFail(err.message))
            })

    }
}

export const signup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost:8000/dj-rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
            .then(res => {
                const token = res.data.key
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
                localStorage.setItem('token', token)
                localStorage.setItem('username', username)
                localStorage.setItem('expirationDate', expirationDate)
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout(3600))
            })
            .catch(err => {
                dispatch(authFail(err))
            })

    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (token === undefined) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

export const getid = (token) => {
    return dispatch => {

        console.log('getid is firing')
        axios.get(`http://localhost:8000/dj-rest-auth/user/`, {
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Token ${token}`
            }
        }
        ).then(res => {
            const userid = res.data.pk
            localStorage.setItem('userid', userid)
            dispatch(idSuccess(userid))

        }).catch(Error => {
            console.log(Error)
        })


    }
}