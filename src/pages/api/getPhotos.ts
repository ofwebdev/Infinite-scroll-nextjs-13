import { createClient } from "pexels";

interface PhotosWithTotalResults {
    photos: Array<{ src: { large: string } }>;
    total_results: number;
}

interface ErrorResponse {
    error: string;
    status: number;
}

type Result = PhotosWithTotalResults | ErrorResponse;

interface Request {
    method: string;
    query: { query: string; page: number };
}

interface Response {
    send: (response: any) => void;
    status: (statusCode: number) => { send: (response: any) => void };
}

const clientApi = createClient(process.env.API_KEY as string)

const handler = async (req: Request, res: Response) => {
    const { method, query: { query, page } } = req;
    if (method !== 'GET') return res.status(405).send('Method not allowed');
    if (!query || !page) return res.status(400).send('Bad request');

    const result = await clientApi.photos.search({ query, page }) as PhotosWithTotalResults;
    // or ✅
    // const result: Record<string, any> = await clientApi.photos.search({ query, page });


    const photos = result.photos.map(photo => photo.src.large);
  
    return res.send(photos);
}

export default handler;


