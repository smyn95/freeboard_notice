import * as S from "../../../../styles/starbucks";

export default function CoffeeItem({ item }: any) {
  const { img, title } = item;
  return (
    <>
      <S.ListOver>
        <img src={img} alt={title} />
        <p>{title}</p>
      </S.ListOver>
    </>
  );
}
