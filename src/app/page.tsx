"use client";
import styles from "./page.module.css";
import useThemeState from "../stores/theme-store";

export default function Home() {
  const { mode, changeMode } = useThemeState((state) => state);
  return (
    <main className={styles.main}>
      <button onClick={changeMode}>Toggle Theme</button>
      <div>{mode}</div>
    </main>
  );
}
