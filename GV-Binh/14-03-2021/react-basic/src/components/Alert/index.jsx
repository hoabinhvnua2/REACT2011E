import React, { Component } from 'react';
import PropTypes from 'prop-types';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps, prevProps) {
        // console.log('prev props', prevProps)
        console.log('next props', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did update đã chạy')
    }

    componentWillUnmount() {

    }

    render() {
        console.log('render đã chạy')
        return (
            <div>
                <p>Xin chào các bạn lớp {this.props.subject}</p>
            </div>
        );
    }
}

index.propTypes = {

};

export default index;