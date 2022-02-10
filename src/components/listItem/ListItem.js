import { Component } from "react";
import Cervice from "../cervice/Cervice";
import Item from "../item/Item";
import './ListItem.css'


class ListItem extends Component {
    constructor(props){
        super(props)
    }

    cervice = new Cervice

    state = {
        loading: true,
        items: [],
        offset: 0,
    }

    onItemsLoaded = (newItems) => {
        this.setState(({items, loading}) => ({
            items: newItems,
            loading: false,
        }))
    }

    onRequest = (offset) => {
        this.cervice
        .getAllItems(offset)
        .then(res => this.onItemsLoaded(res))
    }

    componentDidMount(){
        this.onRequest(this.state.offset)
    }

    createItems = (items) => {
        const elements = items.map(item => {
            return <Item key = {item.id} name = {item.name} imgShiny = {item.imgShiny} imgDef = {item.imgDef} onClick={this.props.onClick}/>
        })
        return elements
    }

    onNext = (e) => {
        e.preventDefault()
        this.setState(
            {
                offset: this.state.offset + 3
            }, () => this.onRequest(this.state.offset))
    
    }

    onPrev = (e) => {
        e.preventDefault()
        this.setState(
            {
                offset: this.state.offset - 3
            }, () => this.onRequest(this.state.offset))
    
    }
        

    render() {
        const {items, loading, offset} = this.state
        return(
        <main> 
            <div className="container">
            {loading? null :  this.createItems(items)}
            <div className="btn-wrapper">
                <button className="btn" onClick={(e) => this.onPrev(e)} disabled={offset===0? 'disabled' : null}>Previous</button>
                <button className="btn" onClick={e => this.onNext(e)} disabled={offset===24? 'disabled' : null}>Next</button>
            </div>
            </div>

        </main>    
        )
    }
}


export default ListItem