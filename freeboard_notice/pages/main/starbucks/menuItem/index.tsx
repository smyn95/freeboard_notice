export default function MenuItem({ item, onMenu }: any) {
  const { name } = item;

  return (
    <>
      <li onClick={() => onMenu(name)}>{name}</li>
    </>
  );
}
