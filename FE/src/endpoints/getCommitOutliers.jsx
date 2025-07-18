export async function getCommitOutliers(payload){
    const getOutliersEndpoint = process.env.GET_OUTLIERS_ENDPOINT

    let result = await fetch(getOutliersEndpoint, {
        method: 'post',
        body: JSON.stringify(payload),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    let data = await result.json()
    return data
}
