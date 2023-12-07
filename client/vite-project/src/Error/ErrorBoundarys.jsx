import { Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


export default class ErrorBoundarys extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
        }
    }
    
    static getDerivedStateFromError(err) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        <p>We have a problem!Sorry...</p>
    }

    render() {
        if (this.state.hasError) {
            return console.log("!!!!!!!Error!!!!!")
        }

        return this.props.children;
    }
}