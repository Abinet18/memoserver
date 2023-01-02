import React from 'react';
import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material'


type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
};
const acceptedFileTypes = 'image/x-png,image/gif,image/jpeg,image/png';
const ImageUpload = ({ label, value, onChange }: Props) => {
  const uploadImage = (e: React.SyntheticEvent<any, Event>): void => {
    const reader = new FileReader();
    const { target } = e;
    if (
      target instanceof HTMLInputElement &&
      target.files &&
      target.files.length
    ) {
      const file = target.files[0];

      reader.addEventListener(
        'load',
        function () {
          // convert image file to base64 string
          const src = reader.result;
          if (typeof src === 'string') {
            onChange(src);
          }
        },
        false,
      );
      reader.readAsDataURL(file);
    }
  };


  return (
    <>
      <Button style={{ backgroundColor: 'transparent', color: '#222' }}>
        <label htmlFor='file-input'>
          <Edit data-tip='Change Profile Picture' />
          <input
            id='file-input'
            type='file'
            name='name'
            style={{ display: 'none' }}
            accept={acceptedFileTypes}
            onChange={uploadImage}
          />
        </label>
      </Button>
      <img src={value} height={300} alt={''} />
    </>
  );
};

export default ImageUpload;
