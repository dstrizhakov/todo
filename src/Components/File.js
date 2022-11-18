import React from 'react';

const File = ({url}) => {
    return (
        <div className="file">
            <a href={url} target="_blank">file</a>
        </div>
    );
};

export default File;