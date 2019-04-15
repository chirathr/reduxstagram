import React from 'react';


const Comments = React.createClass({
    renderComment(comment, i) {
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{ comment.user }</strong>
                    { comment.text }
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        );
    },
    handleSubmit(e) {
        e.preventDefault();
        const postCode = this.props.params.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(postCode, author, comment);
        this.props.addComment(postCode, author, comment);
    },
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref='commentForm' className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"></input>
                    <input type="text" ref="comment" placeholder="comment"></input>
                    <input type="submit" hidden></input>
                </form>
            </div>
        );
    }
});

export default Comments;
