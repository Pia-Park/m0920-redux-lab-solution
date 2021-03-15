import React, { Component } from 'react'
import { connect } from 'react-redux'

let count = 0;

class Post extends Component{

    render(){
        console.log(`Posts render ${++count}`)
        return(
            <>
            </>
        )
    }

}

export default connect()(Post)