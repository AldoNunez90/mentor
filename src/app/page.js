
import styles from "./page.module.css";
import "./styles.css";
import Advice from "@/Components/Advice";



export default function Home() {
  return (
    <main className={styles.main}>
      <Advice />
    
    </main>
  );
}
