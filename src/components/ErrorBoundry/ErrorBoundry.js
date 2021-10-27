import React, {Component} from "react";
import ErrorComponent from "../ErrorComponent";

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        return this.state.hasError ? <ErrorComponent/> : this.props.children
    }
}