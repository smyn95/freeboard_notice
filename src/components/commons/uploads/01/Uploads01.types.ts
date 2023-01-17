import { ChangeEvent, RefObject } from "react";

export interface IUploadProps {
  defaultFileUrl?: any;
  index: number;
  imgUrlIndex: string;
  onChangeFileUrls: (imgUrlIndex: string, index: number) => void;
}

export interface IUploadPropsUI {
  fileRef?: RefObject<HTMLInputElement>;
  imgUrlIndex?: string;
  defaultFileUrl?: any;
  onClickUpload?: () => void;
  onChangeFile?: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}
