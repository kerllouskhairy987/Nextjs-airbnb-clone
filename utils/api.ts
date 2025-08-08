export const getExplore = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const getLive = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const getSearchResult = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}