import React from "react";
import CommentList from './components/CommentList'

class Comments extends React.Component {
    render() {
        return (
            <div>
                {this.props.allComments.map(comment => (
                    <CommentList comment={comment} />))}
            </div>
        )
    }    
};

export default Comments;