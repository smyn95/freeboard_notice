import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailProps {
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoard: () => void;
  goEdit: () => void;
  onClickLike: () => Promise<void>;
  onClickDisLike: () => Promise<void>;
  onClickDelete: () => Promise<void>;
}
