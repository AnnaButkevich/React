import React, {Component} from 'react';
import {PostComponent} from "../PostComponent/postComponent";
import {PostService} from "../../Services/postService";


export class Allpost extends Component {

    postService = new PostService()
    state = {posts: [], chosenPost: null};


    selectThisPost = (id) => {
        this.postService.getPostByID(id).then(value => this.setState({chosenPost: value}))
    };

    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts: value.slice(0,5)}))
    }

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                <h2>Posts</h2>
                {
                    posts.map((value) => {
                        return (<PostComponent item={value}
                                               key={value.id}
                                               selectThisPost={this.selectThisPost}
                        />)
                    })
                }
                <hr/>
                {
                    chosenPost && <PostComponent item = {chosenPost} isShowBtn = {true}/>
                }
            </div>
        );
    }
}