export async function getCommitWordCounts(payload){
    const getCommitWordCountsEndpoint = process.env.GET_COMMIT_WORD_COUNT_ENDPOINT

    let result = await fetch(getCommitWordCountsEndpoint, {
        method: 'post',
        body: JSON.stringify(payload),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    let data = await result.json()
    return data
}
