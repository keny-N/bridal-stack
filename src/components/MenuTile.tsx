import Link from "next/link";
import styles from "./MenuTile.module.css";

interface MenuTileProps {
  title: string;
  href: string;
  icon: React.ReactNode;
  isExternal?: boolean;
}

export default function MenuTile({ title, href, icon, isExternal }: MenuTileProps) {
  const content = (
    <>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.title}>{title}</span>
      {isExternal && (
        <svg
          className={styles.externalIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={styles.tile}
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'relative' }}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={styles.tile}>
      {content}
    </Link>
  );
}