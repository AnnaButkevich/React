import React, {Component} from 'react';

class PostComponent extends Component {

    render() {
        let {item, selectThisPost} = this.props
        return (
            <div>
                <h3>{item.id}  {item.name}</h3>
                <p>{item.email}</p>
                <p>{item.body}</p>
                <button onClick={() => selectThisPost(item.id)}> Show me </button>
            </div>
        );
    }
}

export default PostComponent;