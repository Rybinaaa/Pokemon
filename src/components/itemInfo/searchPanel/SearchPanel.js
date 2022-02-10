import { Component } from "react";
import './SearchPanel.css'


class SearchPanel extends Component{
    constructor(props){
        super(props)
    }

    onSubmit = (e) => {
        e.preventDefault()
        const name = e.target.firstChild.value
        this.props.onSubmit(name.toLowerCase())
    }

    render() {
        return(
            <form name="search" onSubmit={(e) => this.onSubmit(e)}>
                <input type='text' placeholder="Enter the name of pokemon..."/>
            </form>
        )
    }
}


export default SearchPanel