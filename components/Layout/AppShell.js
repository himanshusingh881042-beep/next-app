import { brand, heroContent, navItems } from "../../config/pageContent";
import styles from "./AppShell.module.css";

export default function AppShell({ children, onExport }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>{brand.mark}</span>
          <div>
            <strong className={styles.brandName}>{brand.name}</strong>
            <span className={styles.brandProduct}>{brand.product}</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className={styles.navLink}>
              {item}
            </a>
          ))}
        </nav>

        <div className={styles.desk}>
          <strong>{brand.deskTitle}</strong>
          {brand.deskCopy}
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.hero}>
          <div className={styles.heroAccent} />
          <div className={styles.heroContent}>
            <div>
              <p className={styles.eyebrow}>{heroContent.eyebrow}</p>
              <h1 className={styles.title}>{heroContent.title}</h1>
              <p className={styles.heroBody}>{heroContent.body}</p>
            </div>
            <button onClick={onExport} className={styles.exportButton}>
              Export Plan
            </button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
