import React from 'react';
import faker from 'faker';



const CommentSection = (props) => {
    return(
        <div className="ui comments">
            <div className="comment">
                <a className="avatar">
                    <img src={props.imgage} alt="helo" />
                </a>
                <div className="content">
                    <a className="author">{props.name}</a>
                    <div className="metadata">
                            <div className="date">{props.date1}</div>
                        <div className="rating">
                            <i className="star icon"></i>
                            {props.rating}
                        </div>
                    </div>
                    <div className="text">
                    {props.description}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CommentSection;