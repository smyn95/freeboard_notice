import CoffeeItem from "../coffeeItem";
import * as S from "../../../../styles/starbucks";

export default function CoffeeList({ data }: any) {
  return (
    <>
      <S.List>
        {data.map((item: any) => (
          <CoffeeItem key={item.id} item={item} />
        ))}
      </S.List>
    </>
  );
}
