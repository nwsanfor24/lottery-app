import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            draws: []
        }
    }

    componentDidMount() {
        fetch('https://www.masslottery.com/rest/keno/getDrawsByDateRange?startDate=2020-09-18&endDate=2020-09-18')
            .then(res => res.json())
            .then(data => this.setState(data, () => console.log(this.state)))
    }

    render() {
        let draws = this.state.draws

        const drawItems = draws.map(item =>(
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

export default Post;
