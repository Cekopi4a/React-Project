{/*const baseUrl ='http://localhost:3030/users';

export const login = async (email,password,username) => {
    const response = await fetch(`${baseUrl}/login`,{
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({email,password,username})
    });

    

    const result = await response.json();

    return result;
}



export const logout = () => {
    const response = fetch(`${baseUrl}/logout`,{
        method: 'GET',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify()
    });

    const result =  response.json();

    if (response.status === 204){
        return{};
    } 

    if(!response.ok) {
        throw result;
    }

    return result;
}

export const register = async (email,password) => {
    const response = await fetch(`${baseUrl}/register`,{
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({email,password})
    });


    const result = await response.json();

    return result;
}
*/}
import * as request from '../request/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (email, password) => request.post(`${baseUrl}/register`, {
    email,
    password,
});

export const logout = () => request.get(`${baseUrl}/logout`);