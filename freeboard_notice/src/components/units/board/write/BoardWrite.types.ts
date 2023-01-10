import { ChangeEvent, RefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToBoard: () => void;
  onClickUpdate: () => void;
  onClickNotice: () => void;
  handleComplete: (value: any) => void;
  onToggleModal: any;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen?: boolean;
  isEdit: boolean;
  open?: boolean;
  input: {
    name: string;
    password: string;
    title: string;
    contents: string;
    youtubeUrl: string;
    boardAddress: {
      boardAddress: string;
      boardAddressDetail: string;
      boardZipcode: string;
    };
  };
  imgUrl: string[];
  FileRef: RefObject<HTMLInputElement>;
  onClickUpload: () => void;
  onChangeFileUrls: (imgUrlIndex: string, index: number) => void;
}

export interface IBoardWriteInput {
  title?: String;
  contents?: String;
}
