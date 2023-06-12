import React, { Component } from 'react';

export default class Buttons extends Component {
    clickBtn = () => {
        let value = this.props.content
        let name = this.props.name
        this.props.callback(value, name)
    }
    render() {
        return (
            <input type='button' value={this.props.content} onClick={this.clickBtn} name={this.props.name}></input>
        )
    }
}




// import React, { Component } from 'react';

// export default class Buttons extends Component {
//     clickBtn = () => {
//         let value = this.props.content
//         let name = this.props.name
//         this.props.callback(value, name)
//     }
//     render() {
//         return (
//             <input type='button' value={this.props.content} onClick={this.clickBtn} name={this.props.name}></input>
//         )
//     }
// }
