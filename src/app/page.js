import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { FaInstagram, FaCalendar, FaLocationArrow } from "react-icons/fa";

const inter = Inter({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const messages = [
    "* Ante la duda, no dude.",
    "* Por las dudas no consulte a su médico.",
    "* La vida es rara, disfrútala.",
    "* Siempre hay algo raro por descubrir.",
    "* No te preocupes, sé raro.",
    "* No por mucho madrugar se amanece menos raro.",
    "* Al que quiera celeste, que se ponga raro.",
    "* No hay raro que por bien no venga.",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1 className={styles.title}>
        ¿No le parece que está todo un poco RARO?
      </h1>
      <h3>Serénese.</h3>
      <h3>Tómese la pastillita*</h3>
      <h3>
        y venga a ver a <i>RARO.</i>
      </h3>
      <div className={styles.cafecito}>
        <a href="https://cafecito.app/raro_duo" rel="noopener" target="_blank">
          <img
            srcset="https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_6.png"
            alt="Invitame un café en cafecito.app"
          />
        </a>
      </div>
      <div className={styles.data}>
        <div className={styles.date}>
          <FaCalendar />
          <h4>
            21 de septiembre a las 21 h. en{" "}
            <a
              className={styles.hover}
              href="https://www.instagram.com/dynartespaciodearte/"
            >
              Espacio Dynart
            </a>
          </h4>
        </div>
        <div className={styles.place}>
          <FaLocationArrow />
          <a
            className={styles.hover}
            href="https://maps.app.goo.gl/CXPGPvjjiVUBDNgRA"
          >
            <p>Vuelta de obligado 3587, Buenos Aires, Argentina</p>
          </a>
        </div>
      </div>
      <Link href="/reservas">
        <button className={styles.button}>Reserve aquí su localidad</button>
      </Link>
      <h6>{randomMessage}</h6>
      <div className={styles.social}>
        <FaInstagram />
        <a href="https://www.instagram.com/raro_duo/">@raro_duo</a>
      </div>
    </main>
  );
}
