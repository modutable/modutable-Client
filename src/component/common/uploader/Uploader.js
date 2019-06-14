import React from "react";
import { connect } from "react-redux";
import { Upload, Icon, message } from "antd";
import "./Uploader.css";
import Axios from "axios";
import { changeIMGS } from "../../../store/modules/createDescription";

function Uploader(props) {
  const Dragger = Upload.Dragger;

  const { flag, changeIMGS, images } = props;

  const size = flag === "profile" ? { width: 100, height: 100 } : { width: 800, height: 600 };

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
      let data = {};
      const buffer = await fileHandler(options.file);
      data.encoder = buffer.slice(22);
      data.folder = flag;
      data.size = size;
      data.token = localStorage.getItem("token");

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
          console.log(res.data);
          options.onSuccess(res.data, options.file);
          if (flag === "event") {
            changeIMGS(images.concat(res.data.Location));
          }
        })
        .catch(err => {
          options.onError("error");
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

const mapStateToProps = ({ createDescription }) => ({
  images: createDescription.images
});
// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  // changeNumber: number => dispatch(changeNumber(number))
  changeIMGS: images => dispatch(changeIMGS(images))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Uploader);
