import React, {Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import {deletePost} from "../actions/postActions";

class Post extends Component {

    // state = {
    //     post: null,
    // }
    //
    // componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(response => {
    //             this.setState({
    //                 post: response.data
    //             })
    //         })
    // }

    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    };

    render() {
        console.log(this.props);
        let post = null;
        if (this.props.post) {
             post = (
                <div className="post">
                        <h4 className="center">{this.props.post.title}</h4>
                        <p>{this.props.post.body}</p>
                    <div className="center">
                        <button className="btn grey" onClick={this.handleDelete}>
                            Delete Post
                        </button>
                    </div>
                </div>
            )
        } else {
            post = (
                <h1 className="center">Loading post ...</h1>
            );
        }


        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    // console.log(state.posts.find(post => ));
    const post = state.posts.find(post => {
        return post.id == id
    });
    return {
        post: post
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => {
            dispatch(deletePost(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);