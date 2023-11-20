const baseUrl = 'http://localhost:3030/jsonstore/cars';

export const getAll = async () =>{
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    console.log(result);
    return data;
};

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
}