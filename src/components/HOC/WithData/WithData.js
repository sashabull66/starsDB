import React, {Component} from "react";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";

const WithData = (ViewComponent) => {
    return class extends Component {
        state = {
            data: null, // info for feature render
            loading: true,
            error: false
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update()
            }
        }

        componentDidMount() {
            this.update()
        }

        update = () => {
            this.setState({
                loading: true,
                error: false
            })
            this.props.getData()
                .then(data => {
                    this.setState({
                        loading: false,
                        data,
                    })

                })
                .catch(()=>{
                    this.setState({
                        loading: false,
                        error: true
                    })
                })

        }

        render() {
            const {data, error, loading} = this.state
            if (loading) return <Spinner/>
            if (error) return <ErrorComponent/>
            return <ViewComponent data={data} {...this.props}/>
        }
    }
}

export default WithData