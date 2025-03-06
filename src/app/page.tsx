import styles from "./page.module.css";
import { FormIngoPay } from "@/components/FormIngoPay/Form";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FormIngoPay />
      </main>
    </div>
  );
}
