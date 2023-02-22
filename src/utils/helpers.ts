import axios from "axios";

export async function getResurrectedData(urls: string[]) {
    let metadata = []
    for (const url of urls) {
        const { data } = await axios.get(url)
        metadata.push(data)
    }
    return metadata
}
export async function getUnresurrectedData(url: string) {
    const { data } = await axios.get(url)
    return [data]
}