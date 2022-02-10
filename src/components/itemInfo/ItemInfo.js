import { Component } from "react";
import Cervice from "../cervice/Cervice";
import Item from "../item/Item";
import './ItemInfo.css'
import SearchPanel from "./searchPanel/SearchPanel"
import notFound from '../../images/notFound.png'
import next from '../../images/next.svg'
import back from '../../images/back.svg'




class ItemInfo extends Component{
    constructor(props){
        super(props)
    }



    state = {
        id: this.props.id,
        name: this.props.name,
        imgShiny: this.props.imgShiny,
        imgDef: this.props.imgDef,
        description: this.props.description,
    }

    cervice = new Cervice

    onSubmit = (name) => {
        this.cervice.getItem(name)
        .then((item) => {
          this.setState({
            name: item.name,
            imgDef: item.imgDef,
            imgShiny: item.imgShiny,
            id: item.id,
            description: item.description,
          })
        })
        .catch(this.onError)
    }

    onError = () => {
        this.setState({
            name: 'no information',
            imgDef: notFound,
            imgShiny: notFound,
            id: 404,
            description: 'no information',
          })
    }

    onNext = (id) => {
        id = id + 1
        this.onSubmit(id)
    }

    onPrev = (id) => {
        id = id - 1
        this.onSubmit(id)
    }

    onRandom = () => {
        const id = Math.round(Math.random() * (30 - 1) + 1);
        this.onSubmit(id)
    }

    render(){

        // const {img, name, loading} = this.state
        const {id, name, imgDef, imgShiny, description} = this.state
        const begin = id === 1? 'disabled' : null
        const end = id === 30? 'disabled' : null



        return(
            <aside className="itemInfo">
                 <div className="container">
                    <SearchPanel onSubmit={this.onSubmit}/>
                    <Item key = {id} name = {name} imgShiny = {imgShiny} imgDef = {imgDef} id = {id}/>
                    <div className="description">
                        <h2>{description}</h2>
                    </div>
                    <div className="btn-wrapper-nav">
                        <button className="btn" onClick={() => this.onPrev(id)} disabled={begin}><img src={back} /></button>
                        <button className="btn" onClick={() => this.onNext(id)} disabled={end}><img src={next} /></button>
                    </div>
                    <div className="btn-wrapper-random">
                        <button className="btn" onClick={this.onRandom}>Random Pokemon</button>
                    </div>
                </div>
             </aside>
        )
    }
}

export default ItemInfo