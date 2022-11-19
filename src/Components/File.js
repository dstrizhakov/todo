import React from 'react';


const File = ({url, name, edit }) => {
    return (
        <div className="file">
            <a href={url} target="_blank">{name}</a>
            {edit?<button type="button">x</button>:<></>}
        </div>
    );
};

export default File;