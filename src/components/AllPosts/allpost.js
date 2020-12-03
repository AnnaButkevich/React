import React, {Component} from 'react';
import PostComponent from "../PostComponent/postComponent";

class Allpost extends Component {


    state = {posts: [ ], chosenPost: null};

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts/1/comments')
            .then(value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI })
            })

    };

    selectThisPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost});
    };

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                <h2>Posts</h2>
                {
                    posts.map(value =>
                        (<PostComponent item={value}
                                        key={value.id}
                                        selectThisPost = {this.selectThisPost}
                         />))
                }
                <hr/>
                {
                    chosenPost && <PostComponent item = {chosenPost}/>
                }
            </div>
        );
    }
}

export default Allpost;