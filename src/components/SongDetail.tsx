import styles from "./SongDetail.module.css";
import { SetlistItem } from "@/types/setlist";

interface SongDetailProps {
  item: SetlistItem;
}

export default function SongDetail({ item }: SongDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <span className={styles.label}>Our Message</span>
        <p className={styles.message}>{item.message}</p>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Lyrics Preview</span>
        <div className={styles.lyrics}>{item.lyrics}</div>
        {item.lyrics_url && (
          <div className={styles.linkArea}>
            <a
              href={item.lyrics_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View Full Lyrics →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}