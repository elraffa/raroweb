import ReservationForm from "../components/ReservationForm";
import globals from "../src/app/globals.css";
import styles from './reservas.module.css';

export default function Reservas() {
  return (
    <main className={`${styles.main} container`}>
      <h1 className={`${styles.title}`}>Reservas</h1>
      <p className={styles.text}>El show será a la gorra con reserva. Ingresá tus datos abajo para reservar.</p>
      <ReservationForm />
    </main>
  );
}

