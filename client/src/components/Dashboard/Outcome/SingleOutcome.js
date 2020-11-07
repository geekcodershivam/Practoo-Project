import React from 'react';

const SingleOutcome = (props) => {
    return (
        <div className="col-md-3">
            <div className={"d-flex align-items-center p-3 px-4 text-white rounded "+props.bgColor}>
                <h1 className="w-25 mr-2">{props.value.count}</h1>
                <h6>{props.value.title}</h6>
            </div>
        </div>
    );
};

export default SingleOutcome;