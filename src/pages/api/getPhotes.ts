import { createClient } from "pexels";

const clientApi = createClient(process.env.API_KEY)

// const handler = async  (req, res) => { 
//     const {method, query} = req;
//     if(method === 'GET'){
//         return res.status(405).send('Method not allowed')
//     }

//     if(!query || !page){
//         return res.status(400).send('Bed request')
//     }

//     const result = await clientApi.photos.search({query, page});

//     console.log(result)

//     return res.send(result);


//  }

const handler = async (method: string, query: any, page: number) => {
    if(method === 'GET'){
        throw new Error('Method not allowed')
    }

    if(!query || !page){
        throw new Error('Bad request')
    }

    try{
        const result = await clientApi.photos.search({query, page});
        console.log(result)
        return result;
    }catch(error){
        throw error
    }
}


 export default handler;