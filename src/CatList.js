import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {

    // renderCatPics = () => this.props.catPics.map(catPic => {debugger})
    renderCatPics = () => this.props.catPics.map(catPic => <img src={catPic.url} />)

    render() {
        return (
            <div>
                {this.renderCatPics()}
            </div> 
        )
    }
    
    
}

export default CatList;