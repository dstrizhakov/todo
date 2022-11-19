import React from 'react';


const File = ({ url, name, edit }) => {
    return (
        <div className="file">
            <a href={url} target="_blank">{name}</a>
            {edit?<p>x</p>:<></>}
        </div>
    );
};

export default File;