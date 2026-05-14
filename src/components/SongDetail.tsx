import styles from "./SongDetail.module.css";
import { SetlistItem } from "@/types/setlist";

interface SongDetailProps {
  item: SetlistItem;
}

export default function SongDetail({ item }: SongDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.songInfo}>
        <h3 className={styles.title}>{item.song_title}</h3>
        <p className={styles.artist}>{item.artist_name}</p>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>選曲の想い</span>
        <p className={styles.message}>{item.message}</p>
      </div>

      <div className={styles.linkGroup}>
        {item.youtube_url && (
          <a
            href={item.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.youtubeButton}
          >
            <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTubeで聴く
          </a>
        )}

        {item.lyrics_url && (
          <a
            href={item.lyrics_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.lyricsLink}
          >
            歌詞全文を見る →
          </a>
        )}
      </div>

      {item.lyrics && (
        <div className={styles.section}>
          <span className={styles.label}>歌詞フレーズ</span>
          <div className={styles.lyrics}>{item.lyrics}</div>
        </div>
      )}
    </div>
  );
}