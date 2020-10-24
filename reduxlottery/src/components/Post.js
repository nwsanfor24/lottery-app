import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Post extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const drawItems = this.props.posts.map(item => (
            <div key={item.draws}>
                <h1>{item.bonus}</h1>
                <h2>{item.winningNumbers}</h2>
            </div>
        ));
        return (
            <div>
                <h1>Post</h1>
                {drawItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Post);
