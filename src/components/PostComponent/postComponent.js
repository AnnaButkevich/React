import React, {Component} from 'react';

export class PostComponent extends Component {

    render() {
        let {item, selectThisPost, isShowBtn} = this.props
        return (
            <div>
                <h3>{item.id} {item.name}</h3>
                <p>{item.email}</p>
                <p>{item.body}</p>
                {! isShowBtn && <button onClick={() => selectThisPost(item.id)}> Show me</button>}
            </div>
        );
    }
}