import React, { Component } from 'react';

class classCong extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleCong = () => {
        this.setState({
            count: this.state.count +  1
        })
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleCong}>Cộng</button>
            </div>
        );
    }
}

export default classCong;