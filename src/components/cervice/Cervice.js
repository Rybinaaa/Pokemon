class Cervice {

    _adress = 'https://pokeapi.co/api/v2/'
    _offset = 0

    getResource = async (url) => {
        let res = await fetch (url)

        if (!res.ok){
            throw new Error(`status: ${res.status}`)
        }

        return await res.json()
    }

    getAllItems = async (offset = this._offset) => {
        let res = await this.getResource(`${this._adress}pokemon/?limit=6&offset=${offset}/`)
        const urls = res.results.map(item => item.url)
        const items = Promise.all(await urls.map(async (url) => await this.getResource(url)))
        // console.log(items)
        res = (await items).map(item => this.transformItem(item))
        return Promise.all(res)
    }

    transformItem = async (item) => {
        const desc = await this.getResource(`${this._adress}characteristic/${item.id}/`)
        // console.log(item)
        let infoItem = {
            name: item.name,
            imgDef: item.sprites.front_default,
            imgShiny: item.sprites.front_shiny,
            id: item.id,
            description: desc.descriptions[7].description,
        }
        return infoItem
    }

    getItem = async (id) => {
        let res = await this.getResource(`${this._adress}pokemon/${id}/`)
        return this.transformItem(res)
    } 
    
}


export default Cervice;