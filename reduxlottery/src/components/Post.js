import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import MUIDataTable from "mui-datatables";

class Post extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const columns = ["Draw Number", "Bonus", "Draw Date", "Winning Numbers"];

        const options = {
            filterType: 'checkbox',
            filter: true,
            pageLength: 10,
            responsive: 'stacked'
        }

        return (
            <div>
                <MUIDataTable
                    title={"Massachusetts Lottery Numbers"}
                    data={this.props.posts.map(item => {
                        return [
                            item.drawNumber,
                            item.bonus,
                            item.drawDate,
                            item.winningNumbers
                        ]
                    })}
                    columns={columns}
                    options={options}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Post);
