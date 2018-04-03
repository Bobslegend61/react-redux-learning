import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        let post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={ this.submitForm }>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" onChange={ this.onChange } value={ this.state.title }/>
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <input type="text" name="body" onChange={ this.onChange } valure={ this.state.body }/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostFrom.PropTypes = {
    createPost: PropTypes.func
}

export default connect(null, { createPost })(PostFrom);