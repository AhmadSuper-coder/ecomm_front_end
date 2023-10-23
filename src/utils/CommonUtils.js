
export const getAccessToken = () => {
    return sessionStorage.getItem('accessToken');
}

export const getRefreshToken = () => {
    return sessionStorage.getItem('refreshToken');
}

export const setAccessToken = (accessToken) => {
    sessionStorage.setItem('accessToken', `${accessToken}`);
}

export const setRefreshToken = (refreshToken) => {
    sessionStorage.setItem('refreshToken', `${refreshToken}`);
}
