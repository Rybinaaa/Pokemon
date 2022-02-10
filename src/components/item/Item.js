import { Component } from "react";
import './Item.css'


class Item extends Component{
    constructor(props){
        super(props)
    }

    state = {
        img: this.props.imgDef,
    }

    onClick = () => {
        this.props.onClick(this.props.name)
    }
    

    onMouseOver = () => {
        this.setState({
            img: this.props.imgShiny

        })
    }
    
    onMouseLeave = () => {
        this.setState({
            img: this.props.imgDef,

        })
    }


    render (){
        const {name,id} = this.props
        const {img} = this.state
        const imgSkeleton = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        return (
            <div className="item" onClick={this.onClick} >
                <img src={img? img: imgSkeleton} style={(id===404)? {'width': '100px', 'display': "block", 'margin': '20px auto'}: null} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}/>
                <h2 className="name">{name}</h2>
            </div>
        )
    }
}

export default Item