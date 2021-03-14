import React, { Component } from 'react';
import PropTypes from 'prop-types';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        console.log('WillMount đã chạy');
    }

    componentDidMount() {
        console.log('DidMount đã chạy')
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        console.log('Render đã chạy')
        return (
            <div>

            </div>
        );
    }
}

index.propTypes = {

};

export default index;