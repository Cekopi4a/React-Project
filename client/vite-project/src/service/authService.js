import * as request from '../request/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password,firstName) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
        firstName
    });

    return result;
};

export const register = (email, password,firstName) => request.post(`${baseUrl}/register`, {
    email,
    password,
    firstName,
});

export const logout = () => request.get(`${baseUrl}/logout`);