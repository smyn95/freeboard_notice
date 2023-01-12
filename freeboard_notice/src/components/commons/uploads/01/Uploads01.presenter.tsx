import { PlusOutlined } from "@ant-design/icons";
import * as S from "./Uploads01.styles";
import { IUploadPropsUI } from "./Uploads01.types";

export default function Uploads01UI(props: IUploadPropsUI) {
  return (
    <>
      {props.imgUrlIndex ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.imgUrlIndex}`}
        />
      ) : (
        <S.Imgbx onClick={props.onClickUpload}>
          <div>
            <PlusOutlined />
            <span>Upload</span>
          </div>
        </S.Imgbx>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
