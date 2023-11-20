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

export const create = async (id, username, comment) => {
    const response = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify()
    });

    const result = await response.json(newComment);

    return newComment;
};