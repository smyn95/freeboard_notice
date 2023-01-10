import { FormEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListProps {
  onClickMoveToBoardDetail?: (event: MouseEvent<HTMLLIElement>) => void;
  onClickMoveToBoardNew?: (event: MouseEvent<HTMLButtonElement>) => void;
  isEdit?: boolean;
}

export interface IBoardListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  bestData: any;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLLIElement>) => void;
  RangePicker: any;
  onClickPage: (event: MouseEvent<HTMLLIElement>) => void;
  onChangeSearch: (event: FormEvent<HTMLElement>) => void;
  onClickSearch: () => void;
}

export interface IBoardListMapProps {
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLLIElement>) => void;
  data: any;
}
