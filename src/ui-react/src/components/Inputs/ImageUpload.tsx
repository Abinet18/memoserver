import React , {ChangeEvent, useState} from 'react';
import { Button } from '@mui/material';
import { Upload } from '@mui/icons-material'
import Card from '../cards/Card';
import SubmitButton from '../Buttons/SubmitButton';
import SaveIconButton from '../IconButtons/SaveIconButton';



const acceptedFileTypes = 'image/x-png,image/gif,image/jpeg,image/png';
const ImageUpload = ({pid,onUploading,save,afterUpload}:{pid:string,onUploading?:(val:boolean)=>void,save?:boolean,afterUpload?:(val:any)=>void}) => {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('');

  const saveImage = async (img:any) => {
    let formData = new FormData()
    formData.append('file', img.data);
    formData.append('pid',pid);
    const response = await fetch('http://localhost:5001/memos/addAttachement', {
      method: 'POST',
      body: formData,
    })
    if (response) {
      // setStatus(response.statusText);
      ;
      if(afterUpload) {
        const addedAttachement = await response.json();
        afterUpload({...addedAttachement,pid});
      }
      onUploading && onUploading(false);
    }
  }
  const handleSubmit = async (e?:Event) => {
    if(!e) {
      return;
    }
    e.preventDefault()
    await saveImage(image);
  }

  const handleFileChange = async (e:ChangeEvent<HTMLInputElement>) => {
    if(onUploading) {
      onUploading(true);
    }
   
    const { target } = e;
    if (
      target instanceof HTMLInputElement &&
      target.files &&
      target.files.length
    ) {
      const file = target.files[0];
    const img = {
      preview: URL.createObjectURL(file),
      data: file,
    };
  
    if(save) {
      await saveImage(img);
    }
    else {
        //@ts-ignore
      setImage(img);
    }
    
  }
}
const inputid=`file-input-${pid}`;
  return (
    <Card xs={12} defaultClass>
      {/* <Button style={{ backgroundColor: 'transparent', color: '#222' }}> */}
        {/* <label htmlFor={inputid}>
          <Upload data-tip='Upload image' /> */}
          <input
            id={inputid}
            type='file'
            name='name'
            style={{ display: 'none' }}
            accept={acceptedFileTypes}
            onChange={handleFileChange}
          />
        {/* </label> */}
      {/* </Button> */}
      {!save && image.preview && <img src={image.preview} width="100%"  />}
      {!save && image.preview && <SaveIconButton onClick={handleSubmit} label="Save"/>}
    </Card>
  );
};

export default ImageUpload;
