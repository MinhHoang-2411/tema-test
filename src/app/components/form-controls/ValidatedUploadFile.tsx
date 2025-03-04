'use client';

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UseFormSetValue, FieldError } from "react-hook-form";
// import axios from "axios";
import styles from './styles.module.scss'


interface ValidatedUploadFileProps {
  name: string;
  label: string;
  setValue: UseFormSetValue<any>;
  error?: FieldError;
  required?: boolean;
}

const ValidatedUploadFile: React.FC<ValidatedUploadFileProps> = ({ name, label, setValue, error, required = false }) => {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      // show preview image
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);

        // const response = await axios.post<{ url: string }>(
        //   "https://api.example.com/upload",
        //   formData,
        //   { headers: { "Content-Type": "multipart/form-data" } }
        // );

        // const uploadedImageUrl = response.data.url;
        console.log({formData})
        setValue(name, objectUrl, { shouldValidate: true });
      } catch (error) {
        console.error("Upload failed:", error);
      } finally {
        setUploading(false);
      }
    },
    [name, setValue]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <div className={styles.validatedUpload} >
      <label>{label}<span className={styles.required}>{required ? "*" : ""}</span></label>
      <div>{previewUrl && <img src={previewUrl} alt="Preview" className={styles.previewImage} />}</div>
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        {uploading ? <p>Uploading...</p> : <p>Drag & drop an image, or click to select</p>}
      </div>
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default ValidatedUploadFile;