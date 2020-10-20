
import React from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

function IndivComment(props) {
    return (
        <div>
            <Comment

                author={props.commentsData.name}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        {props.commentsData.body}
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{props.commentsData.created_on}</span>
                    </Tooltip>
                }
            />
        </div>
    );
}

export default IndivComment;