import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './PhotoUploader.css'
import { Checkbox, FormControlLabel } from '@mui/material';
import { Box, Grid, Button } from "@mui/material";

function PhotoUploader({parameters,onFileChange}) {
    if(parameters == null) {
        parameters = {};
        parameters = {'multiple_allowed':false};
    }
    const multiple_allowed = parameters.multiple_allowed;

    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const files = fileInputRef.current.files;
        console.log(files)
        if(multiple_allowed) {
            setSelectedFiles([...selectedFiles, ...files]);
        }
        else {
            setSelectedFiles([files[0]]);
        } 
    };

    const handleUpload = () => {
        const formData = new FormData();
        selectedFiles.forEach((file) => {
        formData.append('photos', file);
        });

        // Upload photos to Django backend
        axios.post('/upload-photos/', formData)
        .then((response) => {
            // Handle success response
            console.log(response.data);
        })
        .catch((error) => {
            // Handle error response
            console.error(error);
        });
    };

    const handleRemove = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };
    
    // Execute code whenever `selectedFiles` changes
    useEffect(() => {
        // Do something with `selectedFiles` here
        console.log('Selected files changed:', selectedFiles);
        generateThumbnails();

        onFileChange(selectedFiles);
    }, [selectedFiles]);

    const generateThumbnail = async (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            resolve(event.target.result);
          };
          reader.onerror = (event) => {
            reject(event.target.error);
          };
          if (file && file.type.includes('image/')) {
            const blob = new Blob([file], { type: file.type });
            reader.readAsDataURL(blob);
          }
          else {
            reject({'reason':'No file type allowed'})
          }
          
        });
      };

      const stopPromise = async () => {
        return new Promise((resolve,reject) => {
            reject('Already rendered');
        });
      }
    
      const generateThumbnails = async () => {
        console.log(selectedFiles)
        const promises = selectedFiles.map((file) => {
            if(file.rendered !== true) {
                return generateThumbnail(file);
            }
            else {
                return stopPromise();
            }
            
            
          
        });
    
        Promise.all(promises)
          .then((thumbnails) => {
            if(thumbnails.length > 0) {
                const updatedFiles = selectedFiles.map((file, index) => {
                    if(thumbnails[index] != null) {
                        file.thumbnail = thumbnails[index]
                        file.rendered = true;
                    }
                    
                    return file;
                  });
                  console.log(updatedFiles)
                  setSelectedFiles(updatedFiles);
            }
            
            console.log('Thumbnails:', thumbnails);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
    

  return (
    <div>
        <div style={{position:'relative'}}>
        <button htmlFor="fileInput" className="custom-file-upload">
        Adjunta archivos
        </button>
        { multiple_allowed && <input type="file" ref={fileInputRef} id="fileinput" multiple onChange={handleFileChange} className='file-input' />}
        { !multiple_allowed && <input type="file" ref={fileInputRef} id="fileinput" onChange={handleFileChange} className='file-input' />}
        </div>
      
      <Box sx={{display:'flex',flexWrap:'wrap',margin:'15px',padding:'10px'}}>
      {selectedFiles.map((file, index) => (
        <Box className='file_thumb' sx={{position:"relative",width:"200px",height:"200px",borderRadius:"8px",margin:"15px",backgroundColor:"white"}}>
            <div className='black_blur'>
                <div className='actions_thumb'>
                <div className='remove_thumb' onClick={() => handleRemove(index)}>X</div>
                </div>         
            </div>
            <img key={index} src={file.thumbnail} alt={`Thumbnail ${index}`} width="200px" height="200px" style={{objectFit:'contain'}}/>
        </Box>
        
      ))}
      </Box>
      
      <button onClick={handleUpload}>Upload Photos</button>
    </div>
  );
}

export default PhotoUploader;
