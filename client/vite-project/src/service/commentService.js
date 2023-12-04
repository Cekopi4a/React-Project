import * as request from '../request/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (id) => {
    const query = new URLSearchParams({
        where: `_id="${id}"`,
        load: `owner = _ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (_id, text) => {
    const newComment = await request.post(baseUrl, {
        _id,
        text,
    });

    return newComment;
};
{/*export const create = async ( _id, username, text) => {
    const newComment = await request.post(baseUrl,{
        _id,
        username,
        text,
    });

    return newComment;
}


export const getAll = async (id) =>{
    const response = await fetch(baseUrl);
    const result = await response.json();

    const Comment = Object.values(result);

    console.log(result);
    return Comment;
};

export const create = async (comid,text) => {
    const response = await fetch(baseUrl,{
        method: 'POST',
        headers:{
            "content-type": "application/json",
        },
        
        body:JSON.stringify({comid,text}),
    });

    const result = await response.json();

    return result;
};*/}