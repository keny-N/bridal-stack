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
        <div className={styles.musicLinks}>
          {item.youtube_url && (
            <a
              href={item.youtube_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.musicButton} ${styles.youtube}`}
            >
              <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          )}
          {item.spotify_url && (
            <a
              href={item.spotify_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.musicButton} ${styles.spotify}`}
            >
              <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.04 10.2A11.025 11.025 0 0 0 9.6 7.56c-5.28 1.56-10.08 2.34-10.56 2.46-.6.18-1.08-.18-1.26-.72-.18-.6.18-1.08.72-1.26.48-.12 5.52-.96 11.16-2.58 4.2-1.2 9.48-1.02 14.16 2.16.54.36.66 1.14.3 1.68-.36.54-1.14.66-1.68.3z"/>
              </svg>
              Spotify
            </a>
          )}
          {item.apple_music_url && (
            <a
              href={item.apple_music_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.musicButton} ${styles.appleMusic}`}
            >
              <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.152 14.864c-1.83 0-2.85-1.127-2.85-2.85 0-1.802 1.142-2.895 2.94-2.895 1.77 0 2.805 1.125 2.805 2.805.001 1.83-1.155 2.94-2.895 2.94zm0-6.495c-2.34 0-4.005 1.545-4.005 3.6 0 2.056 1.62 3.645 3.975 3.645 2.37 0 4.02-1.575 4.02-3.615.001-2.055-1.62-3.63-3.99-3.63z" />
                <path d="M16.545 10.455c.165-.18.255-.375.255-.615 0-.465-.33-.78-.795-.78-.345 0-.615.195-.75.465a.692.692 0 0 0-.075.315c0 .48.33.825.825.825.21 0 .42-.09.54-.21zm-1.11 5.37c-.15.225-.24.42-.24.645 0 .495.345.855.855.855.33 0 .6-.18.735-.45a.65.65 0 0 0 .09-.345c0-.495-.36-.84-.855-.84-.24 0-.45.06-.585.135z" />
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.625 15.345c-.48.915-1.35 1.515-2.37 1.515-1.545 0-2.61-1.095-2.61-2.685V8.16l-4.5 1.05v6.525c-.48.915-1.35 1.515-2.37 1.515-1.545 0-2.61-1.095-2.61-2.685 0-1.605 1.11-2.73 2.7-2.73.48 0 .93.15 1.32.42V6.66l5.7-1.335v8.85c0 1.59 1.11 2.685 2.7 2.685.48 0 .93-.15 1.32-.42v-1.095z" />
              </svg>
              Apple Music
            </a>
          )}
        </div>

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