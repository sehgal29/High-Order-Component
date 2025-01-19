import React, { PureComponent } from 'react'

class Demo extends PureComponent {
    render() {
        console.log("Child Check Re-rendering!!")
        return(
            <>
            <h1>Hello, Everyone {this.props.user} </h1>
            </>
        )
    }
}

export default Demo
