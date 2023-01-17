import * as S from "../../../../../styles/freeboard";
import { IBoardListMapProps } from "./BoardList.types";
export default function BoardListMap({
  data,
  onClickMoveToBoardDetail,
}: IBoardListMapProps) {
  return (
    <>
      {data?.fetchBoards.map((el: any, index: number) => (
        <S.Listfirst key={el._id}>
          <S.Listtitle>
            <li>{index + 1}</li>
            <li id={el._id} onClick={onClickMoveToBoardDetail}>
              {el.title}
            </li>
            <li>{el.writer.slice(0, 6)}</li>
            <li>{el.createdAt.slice(0, 10)}</li>
          </S.Listtitle>
        </S.Listfirst>
      ))}
    </>
  );
}
