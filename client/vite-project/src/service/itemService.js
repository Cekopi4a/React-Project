const baseUrl = 'http://localhost:3030/data/cars';

const token = localStorage.getItem('accessToken');

export const getAll = async () =>{
    const response = await fetch(baseUrl);
  
    const result = await response.json();

    const data = Object.values(result);

    
    return data;
};

export const getOne = async (id) =>{
    const response = await fetch(`${baseUrl}/${id}`);
  
    const result = await response.json();

    return result;
};

export const create = async (itemData) =>{
    const response = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers:{
            "content-type": "application/json",
            'X-Authorization': token
        },
        body: JSON.stringify(itemData)
    });

    const result = await response.json();

    return result;
}

export const edit = async (id,itemData) =>{
    const response = await fetch(`${baseUrl}/${id}`,{
        method: 'PUT',
        headers:{
            "content-type": "application/json",
            'X-Authorization': token
        },
        body: JSON.stringify(itemData)
    });

    const result = await response.json();

    return result;
}



export const deleteItem = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers:{
        "content-type": "application/json",
        'X-Authorization': token
    },
    body: JSON.stringify(id)
});

   const result = await response.json();

    return result;
  
}

 
