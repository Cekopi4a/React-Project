const baseUrl ='http://localhost:3030/users';

export const login = async (email,password) => {
    const response = await fetch(`${baseUrl}/login`,{
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({email,password})
    });

    const result = await response.json();

    return result;
}