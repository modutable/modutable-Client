import React from "react";
import { Upload, Icon, message } from "antd";
import "./Uploader.css";
import Axios from "axios";

export default function Uploader(props) {
  const Dragger = Upload.Dragger;

  const fileHandler = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        resolve(event.target.result);
      };
    });
  };

  const option = {
    name: "file",
    className: "Uploader",
    multiple: true,
    action: props.link,
    customRequest: async options => {
      console.log(options);
      let data = {};
      const buffer = await fileHandler(options.file);
      data.encoder = buffer.slice(22);

      data = JSON.stringify(data);
      const config = {
        onUploadProgress: e => {
          options.onProgress({ percent: (e.loaded / e.total) * 100 });
        },
        headers: {
          "content-type": "application/json"
        }
      };

      Axios.post(options.action, data, config)
        .then(res => {
          options.onSuccess(res.data, options.file);
        })
        .catch(err => {
          console.log(err);
        });
    },

    onChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };
  return (
    <>
      <Dragger {...option}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or
          other band files
        </p>
      </Dragger>
    </>
  );
}
