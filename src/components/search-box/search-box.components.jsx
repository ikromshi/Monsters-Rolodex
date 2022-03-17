import { Component } from "react";
import "./search-box-style.css";

class SearchBox extends Component {
    render() {
        return (
            <input 
                className={`search-box ${this.props.className}`} 
                type="search" 
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler} /**
                * don't have to pass the event, since the function {} is a reference to onSearchChange
                */
            />
        )
    }
}

export {SearchBox as default};