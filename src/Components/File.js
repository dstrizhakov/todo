import React from 'react';


const File = ({ url, name, edit, deleteFile }) => {



    return (
        <div className="file">
            <a href={url} target="_blank">{name}</a>
            {/*{edit?<p onClick={ e => handleDelete(e)}>x</p>:<></>}*/}
        </div>
    );
};

export default File;