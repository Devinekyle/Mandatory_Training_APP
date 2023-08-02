import React, { useState } from 'react';
import {fetchURL} from '../App'

const FileView = ({ file }) => {
  const [fileData, setFileData] = useState(null);
  const [fileContent, setFileContent] = useState(null);

  const handleDownloadFile = async () => {
    try {
      // Get the response headers to determine the file name and type
      const fileType = file.file_type;
      const fileName = file.file_name;

      // Create a Blob object from the file content
      const fileBlob = new Blob([file.file_content], { type: fileType });

      // Create a URL for the Blob object
      const fileURL = URL.createObjectURL(fileBlob);

      // Save the file data in state
      setFileData({
        fileName,
        fileType,
        fileURL,
      });

      // Trigger the download
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  // const handleStreamFile = async () => {
  //   try {
  //     // Save the file content in state after reading
  //     setFileContent(file.file_content);

  //     // Save the file data in state
  //     setFileData({
  //       fileName: file.file_name,
  //       fileType: file.file_type,
  //     });
  //   } catch (error) {
  //     console.error('Error streaming file:', error);
  //   }
  // };

  // // Helper function to render the file content based on the file type
  // const renderFileContent = () => {
  //   if (!fileContent) return null;

  //   if (file.type.includes('image/')) {
  //     return <img src={fileContent} alt={file.name} />;
  //   } else if (file.type === 'application/pdf') {
  //     return <embed src={fileContent} type={file.type} width="100%" height="600px" />;
  //   } else {
  //     return <pre>{fileContent}</pre>;
  //   }
  // };

  return (
    <div>
      <button onClick={handleDownloadFile}>Download File</button>
      {/* <button onClick={handleStreamFile}>Read File</button>
      {fileContent && (
        <div>
          <h4>File Content:</h4>
          {renderFileContent()}
        </div>
      )} */}
    </div>
  );
};

export default FileView;