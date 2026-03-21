"use client";

import { useState } from "react";
import styles from "./SetlistItem.module.css";
import SongDetail from "./SongDetail";
import { SetlistItem as SetlistItemType } from "@/types/setlist";

interface SetlistItemProps {
  item: SetlistItemType;
}

export default function SetlistItem({ item }: SetlistItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.content}>
          <span className={styles.scene}>{item.scene_name}</span>
          <h3 className={styles.title}>
            {item.song_title}
            <span className={styles.artist}>/ {item.artist_name}</span>
          </h3>
        </div>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && <SongDetail item={item} />}
    </div>
  );
}