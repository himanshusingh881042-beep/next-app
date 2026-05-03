import styles from "./Badge.module.css";

export default function Badge({ children, tone = "neutral", size = "sm" }) {
  const className = [
    styles.badge,
    styles[tone] || styles.neutral,
    size === "md" ? styles.medium : styles.small
  ].join(" ");

  return <span className={className}>{children}</span>;
}
