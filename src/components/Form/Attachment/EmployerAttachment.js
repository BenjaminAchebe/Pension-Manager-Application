import React, { useRef, useState } from "react";

const AttachmentUpload = () => {
  const [attachedFiles, setAttachedFiles] = useState(null);
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.click();
  };

  //Function logic for deleting attached files
  const removeAttachedFileHandler = (name) => {
      const newAttachedFiles = attachedFiles.filter((file) => file.name !== name)
      setAttachedFiles(newAttachedFiles)
  };

  //Function logic for adding new attachment
  const addFilesHandler = (attachedFileList, mode = 'write') => {
    if (mode === 'add') {
      setAttachedFiles((prevAttachedFiles) => [...prevAttachedFiles, ...Array.from(attachedFileList)])
    } else if (mode === 'write') {
      setAttachedFiles(Array.from(attachedFileList))
    }
  }

  const preventHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  console.log(attachedFiles);

  return (
    <div>
      <div>
        <div>
            {/*logic for displaying multiple files at once */}
          <h5>Your files:</h5>
          {attachedFiles && (
            <ul>
              {attachedFiles.map((file, index) => (
                <li key={file.name}>
                  {index + 1}.{file.name}
                  {/*Logic for deleting attached files */}
                  <span onClick={() => removeAttachedFileHandler(file.name)}>
                    <i className="fa fa-times" />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          onDragEnter={preventHandler}
          onDragOver={preventHandler}
          onDrop={(event) => {
            preventHandler(event);

            {/*Logic for converting attached files to an array list */}
            addFilesHandler(event.dataTransfer.files, 'add');
          }}
        >
          <i className="fa fa-cloud-upload fa-4x"></i>
          <p>Drag and drop files or select files below.</p>
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={(event) =>
              addFilesHandler(event.target.files, 'add')
            }
          />
          <button onClick={clickHandler}>Choose Files</button>
        </div>
      </div>
    </div>
  );
};

export default AttachmentUpload;
