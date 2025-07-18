
export async function getCommitAuthors(payload){
    const getCommitAuthorsEndpoint = process.env.GET_AUTHORS_ENDPOINT

    let result = await fetch(getCommitAuthorsEndpoint, {
        method: 'post',
        body: JSON.stringify(payload),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    let data = await result.json()
    return data
}
