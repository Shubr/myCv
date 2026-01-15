
export interface Cat{
    id: string;
    url: string;
    width: number;
    height: number;
}

export type CatList = Cat[]

export default async function getCat(): Promise<[]>{

    const header: Headers = new Headers()

    header.set("Content-Type", "application/json")
    header.set("Accept", "application/json")

    const request: RequestInfo = new Request('https://api.thecatapi.com/v1/images/search?limit=10',{
        method: 'GET',
        headers: header
    })
    const response = await fetch(request)
    const toJson = await response.json();
    return toJson
}