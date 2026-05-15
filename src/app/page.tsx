import Header from "@/components/Header";
import MenuTile from "@/components/MenuTile";
import BottomNav from "@/components/BottomNav";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <div className={styles.welcome}>
          <p>
            本日はご列席いただきありがとうございます。<br />
            披露宴のBGMは、私たちの好きな「ももいろクローバーZ」の楽曲を選びました。<br />
            各演目の雰囲気に合わせ、皆様へ伝えたいメッセージを込めた選曲となっています。<br />
            本日は楽しみましょう！
          </p>
        </div>

        <div className={styles.grid}>
          <MenuTile
            title="セットリスト"
            href="/setlist"
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            }
          />
        </div>

        <div className={styles.notice}>
          <p>
            ※このアプリは、本日の挙式・披露宴終了後、<br />
            まもなくアクセスできなくなります。
          </p>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}