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

  const handleToggle = () => {
    if (!isOpen) {
      const isConfirmed = sessionStorage.getItem("setlist_confirmed");
      if (isConfirmed) {
        setIsOpen(true);
      } else {
        const confirmed = window.confirm("曲名を表示してもいいですか？\n結婚式の曲のネタバレになってしまうけど大丈夫？");
        if (confirmed) {
          sessionStorage.setItem("setlist_confirmed", "true");
          setIsOpen(true);
        }
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
      <div className={styles.header} onClick={handleToggle}>
        <div className={styles.content}>
          <span className={styles.scene}>{item.scene_name}</span>
        </div>
        <div className={styles.revealAction}>
          <span>{isOpen ? "閉じる" : "タップして曲名を表示"}</span>
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
      </div>
      {isOpen && <SongDetail item={item} />}
    </div>
  );
}