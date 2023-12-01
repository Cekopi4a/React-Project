const baseUrl ='http://localhost:3030/users';

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

    if (response.status === 204){
        return{};
    } 

    const result =  response.json();

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