const baseUrl = 'http://localhost:3030/jsonstore/comments';

{/*export const create = async ( _id, username, text) => {
    const newComment = await request.post(baseUrl,{
        _id,
        username,
        text,
    });

    return newComment;
}
*/}

export const getAll = async (carid) =>{
    const response = await fetch(baseUrl);
    const result = await response.json();

    const Comment = Object.values(result);

    console.log(result);
    return Comment;
};

export const create = async (carid,username,text) => {
    const response = await fetch(baseUrl,{
        method: 'POST',
        headers:{
            "content-type": "application/json",
        },
        
        body:JSON.stringify({carid,username,text}),
    });

    const result = await response.json();

    return result;
};