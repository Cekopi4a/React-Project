const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () =>{
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};


{/*export const create = async (data) => {
    const body = {
        imageUrl: data.imageUrl,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber
    }


const response = await fetch(baseUrl,{
    method: "POST",
    headers: {
       'Content-Type': 'application/json', 
    },
    body: JSON.stringify(body),
    })

    const result = await response.json();
};*/}
export const create = async (itemData) =>{
    const response = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(itemData)
    });

    const result = await response.json();

    return result;
};