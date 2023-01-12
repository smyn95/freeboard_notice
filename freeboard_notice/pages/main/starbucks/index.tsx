import MenuItem from "./menuItem";
import * as S from "../../../styles/starbucks";

export default function MenuList({ menu, onMenu }: any) {
  return (
    <>
      <S.Menu>
        {menu.map((item: any, index: number) => (
          <MenuItem key={index} item={item} onMenu={onMenu} />
        ))}
      </S.Menu>
    </>
  );
}
