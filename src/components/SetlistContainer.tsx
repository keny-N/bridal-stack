"use client";

import { useEffect, useState } from "react";
import styles from "./SetlistContainer.module.css";
import SetlistItem from "./SetlistItem";
import { SetlistItem as SetlistItemType } from "@/types/setlist";

export default function SetlistContainer() {
  const [items, setItems] = useState<SetlistItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/setlist.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch setlist:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading setlist...</div>;
  }

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <SetlistItem key={item.id} item={item} />
      ))}
    </div>
  );
}