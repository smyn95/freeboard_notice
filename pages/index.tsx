import styles from "../styles/Home.module.css";
import * as S from "../src/commons/styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
      void router.push("/board");
    }, 2800);
  }, [router]);

  return (
    <>
      {loding ? (
        <div className={styles.container}>
          <S.Randing>
            <Image
              src="/randing.png"
              alt="스타벅스로고"
              width={800}
              height={800}
            />
          </S.Randing>
          <S.Container>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span> ...</span>
          </S.Container>
        </div>
      ) : null}
    </>
  );
}
