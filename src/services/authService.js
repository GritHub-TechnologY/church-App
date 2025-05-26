import api from './api'

export async function signup(payload) {
    // { email, password, fullName, role }
    const res = await api.post('/auth/signup', payload)
    return res.data.data
}

export async function signin(payload) {
    // { email, password }
    const res = await api.post('/auth/signin', payload)
    const token = res.data?.data?.token
    if (token) {
        localStorage.setItem('token', token)
    }
    return res.data.data.user
}

export async function me() {
    const res = await api.get('/auth/me')
    return res.data.data
}

export async function changePassword(payload) {
    // { currentPassword, newPassword }
    const res = await api.post('/auth/change-password', payload)
    return res.data.data
}

export function logout() {
    localStorage.removeItem('token')
} 