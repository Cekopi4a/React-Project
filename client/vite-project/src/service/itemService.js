const baseUrl = 'http://localhost:3030/data/cars';
const cartUrl = 'http://localhost:3030/data/cart';

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
        body: JSON.stringify(itemData,id)
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


export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 4,
    });

    const response = await fetch(`${baseUrl}?${query}`);
  
    const result = await response.json();

    const data = Object.values(result);
 
    return data;
}









//////////////Cart Section/////////////////

export const addCart = async ({id,brand,model,price,imageUrl,addUserId}) =>{
    const response = await fetch(`${cartUrl}`,{
        method: 'POST',
        headers:{
            "content-type": "application/json",
            'X-Authorization': token,
        },
        body: JSON.stringify({id,brand,model,price,imageUrl,addUserId})
    });

    const result = await response.json();

    return result;
    console.log(result);
}

export const getAllCart = async (id) =>{
    const response = await fetch(cartUrl);
  
    const result = await response.json(id);

    const data = Object.values(result);

    return data;
};


export const deleteCartItem = async (id) => {
    const response = await fetch(`${cartUrl}/${id}`, {
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


 
