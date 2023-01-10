import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.Presenter";
import { SuccessModal } from "../../../../commons";
import {
  FETCH_BOARD,
  DISLIKE_BOARD,
  LIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.query";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function Fetchboard() {
  const router = useRouter();
  const [likeboard] = useMutation(LIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [dislikeboard] = useMutation(DISLIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      fetchPolicy: "network-only",
      variables: { boardId: String(router.query.boardId) },
    }
  );

  const onClickMoveToBoard = () => {
    void router.push("/board/");
  };
  const goEdit = () => {
    void router.push(`/board/${router.query.boardId as string}/edit`);
  };

  const onClickLike = async () => {
    await likeboard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDisLike = async () => {
    await dislikeboard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDelete = async () => {
    await deleteBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    SuccessModal("삭제가 완료되었습니다.");
    void router.push(`/board/`);
  };

  return (
    <>
      <BoardDetailUI
        onClickMoveToBoard={onClickMoveToBoard}
        goEdit={goEdit}
        data={data}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
        onClickDelete={onClickDelete}
      />
    </>
  );
}
