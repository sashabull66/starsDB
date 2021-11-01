import React, {Component} from "react";
import Spinner from "../../Spinner";

const WithData = (ViewComponent) => {
    return class extends Component {
        state = {
            data: null, // info for feature render
        }

        componentDidMount() {
            this.props.getData()
                .then(data => {
                    this.setState({
                        data,
                    })
                })
        }

        render() {
            return !this.state.data ? <Spinner/> : <ViewComponent {...this.state} {...this.props}/>
        }
    }
}

export default WithData