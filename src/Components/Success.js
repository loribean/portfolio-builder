import React from 'react'
import { Result, Button } from 'antd';

class Success extends React.Component {

    render() {
        return (
            <Result
                status="success"
                title="Successfully Logged in!"
                subTitle="Let's get started"
                extra={[
                    <Button type="primary" key="console">
                        <a href="/">To Home</a>
                    </Button>,

                ]}
            />

        );
    }
}

export default Success;



