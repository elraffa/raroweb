import ReservationForm from "../components/ReservationForm";
import globals from "../src/app/globals.css";
import styles from './reservas.module.css';

export default function Reservas() {
  return (
    <main className={`${styles.main} container`}>
      <h1 className={`${styles.title}`}>Reservas</h1>
      <ReservationForm />
    </main>
  );
}

