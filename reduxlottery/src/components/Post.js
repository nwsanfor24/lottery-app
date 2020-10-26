import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import MUIDataTable from 'mui-datatables';

class Post extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const columns = ["Draw Date", "Draw Number", "Bonus", "Winning Numbers"];

        const options = {
            filterType: 'checkbox'
        };

        return (
            <MUIDataTable
                title={"Massachusetts State Lottery"}
                data={this.props.posts.map(item => {
                    return [
                        item.drawDate,
                        item.drawNumber,
                        item.bonus,
                        item.winningNumbers
                    ]
                })}
                columns={columns}
                options={options}
            />
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Post);
