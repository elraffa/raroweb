import ReservationForm from "../components/ReservationForm";
import globals from "../src/app/globals.css";
import styles from './reservas.module.css';
import Head from 'next/head'; // Import Head component

export default function Reservas() {
  return (
    <>
    <Head>
      <title>Raro | Reservas</title>
      <meta name="description" content="Reserva tu lugar para el show de Raro" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${styles.main} container`}>
      <h1 className={`${styles.title}`}>Reservas</h1>
      <p className={styles.text}>El show será a la gorra con reserva. Ingresá tus datos abajo para reservar.</p>
      <ReservationForm />
    </main>
    </>
  );
}

