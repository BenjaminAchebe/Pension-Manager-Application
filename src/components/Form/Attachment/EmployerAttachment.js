import React, {useRef, useState} from "react";

const AttachmentUpload = () => {
    const [attachedFiles, setAttachedFiles] = useState(null);
    const inputRef = useRef();

    const clickHandler = () => {
        inputRef.current.click();
    };

    const preventHandler = (event) => {
        event.stopPropagation();
        event.preventDefault();
      }

      console.log(attachedFiles);

  return (
    <div>
      <div>
        <div>
          <h5>Your files:</h5>
          { attachedFiles && (<ul>{attachedFiles .map((file, index) => (<li key={file.name}>{index + 1}.{file.name}</li>))}</ul>)}
        </div>
        <div onDragEnter={preventHandler} onDragOver={preventHandler} onDrop={(event) => {
            preventHandler(event)
            setAttachedFiles(Array.from(event.dataTransfer.files))
        }}>
          <i className="fa fa-cloud-upload fa-4x"></i>
          <p>Drag and drop files or select files below.</p>
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={(event) => setAttachedFiles(Array.from(event.target.files))}
          />
          <button onClick={clickHandler}>Choose Files</button>
        </div>
      </div>
    </div>
  );
};

export default AttachmentUpload;
