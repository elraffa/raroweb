import styles from "./page.module.css";
import Image from "next/image";

export default function Show() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Algo Random</h1>
      <h2 className={styles.subtitle}>Show de Humor y Música</h2>
      <div className={styles.leftRight}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/algo-random-web.jpeg"
            alt="Show de Humor y Música"
            width={400}
            height={500}
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            <strong>Algo Random</strong> es un espectáculo único que combina
            humor stand-up, ciencia y música. A través de historias divertidas y
            datos curiosos, descubrirás personajes fascinantes y hechos
            sorprendentes del mundo de la ciencia.
          </p>
          <p>
            ¡Una experiencia educativa y entretenida que no te podés perder!
          </p>
          <button className={styles.button}>
            <a
              href="https://www.entradaweb.com.ar/evento/79fc2345/step/1?fbclid=PAZXh0bgNhZW0CMTEAAaZY-afrHY-wc6h2DkA_25A0PmJB6ZRgyZ9C-LO5zOYXRIZPyt_HMKleCKM_aem_pfU2h3g6NqSuY9f0tVjMeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar entradas
            </a>
          </button>
          <div class={styles.info}>
            <p>El show es apto para todo público.</p>
            <p>
              <strong>Duración:</strong> 60 minutos
            </p>
            <p>
              <strong>¿Cuándo?: </strong>
              Sábado 5 de abril
            </p>
            <p>
              <strong>¿Dónde?: </strong>
              Teatro Puerta 3
            </p>
            <p>Av. Belgrano 3584, Buenos Aires</p>
            <p>
              <strong>¿A qué hora?: </strong>21:30 hs
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bioSection}>
        <h2 className={styles.bioTitle}>Sobre Nadia Chiaramoni</h2>
        <div className={styles.bioColumns}>
          <Image
            className={styles.bioImage}
            src="/nadia-chiaramoni.png"
            alt="Nadia Chiaramoni"
            width={444}
            height={285}
            priority
          />
          <div className={styles.bioText}>
            <p>
              Nadia Chiaramoni nació en 1978 y es Doctora y Licenciada en
              Biotecnología (Universidad Nacional de Quilmes- UNQ). Actualmente
              es Investigadora de CONICET y desarrolla sus tareas de
              investigación en el Laboratorio de Bionanotecnología de la
              Universidad Nacional de Quilmes.
            </p>
            <p>
              Es comediante desde 2012, habiendo realizado numerosos cursos y
              talleres. En 2014 tomó un curso dictado por el Ministerio de
              Ciencia y Tecnología para entrenar científicos en comunicación de
              las ciencias mediante el humor. Desde allí formó el grupo “Poper”,
              científicos que popularizan las ciencias mediante el stand up.
            </p>
            <p>
              Dio charlas en diversos eventos Tedx, destacándose “Un cerebro más
              liviano” en Tedx Rio de la Plata (Tecnopolis, octubre de 2017) y
              “La comunicación de la ciencia mediante el humor” en Tedx Santa
              Cruz de la Sierra (Bolivia, junio de 2018). En 2016 formó parte
              del programa “Científico stand up”, conducido por Dalia Gutmann y
              emitido por TecTv.
            </p>
            <p>
              Desde 2017 redacta y narra junto a Valeria Edelzstein el podcast
              “Contemos Historias”, relatos relacionados con ciencia. Desde 2022
              es columnista científica del programa “Crossover” (Vorterix).
            </p>
            <p>
              En Instagram se encuentra como{" "}
              <a
                href="https://www.instagram.com/nadiachiaramoni"
                target="_blank"
                rel="noopener noreferrer"
              >
                @nadiachiaramoni
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bioSection}>
        <h2 className={styles.bioTitle}>Sobre RARO</h2>
        <div className={styles.bioColumns}>
          <div className={styles.bioText}>
            <p>
              RARO es un dúo de música y comedia que combina el humor con la
              música en vivo. Con un estilo fresco y divertido, RARO ofrece un
              espectáculo único que te hará reír y disfrutar al mismo tiempo.
            </p>
            <p>
              Con una amplia variedad de géneros musicales, desde pop hasta
              rock, RARO interpreta canciones originales y versiones de clásicos
              de la música, todo ello con un toque humorístico que los
              caracteriza.
            </p>
            <p>
              El dúo está formado por ElRaffa Ruffa y su compañero de
              aventuras Leandro Roma, quienes aportan su talento musical y su sentido del humor
              al espectáculo.
            </p>
            <p>
              Juntos, crean un ambiente divertido y ameno, donde la música y la
              risa se entrelazan para brindar una experiencia inolvidable al
              público.
            </p>
            <p>
              En Instagram se encuentra como{" "}
              <a
                href="https://www.instagram.com/raro_duo"
                target="_blank"
                rel="noopener noreferrer"
              >
                @raro_duo
              </a>
              .
            </p>
          </div>
          <Image
            className={styles.bioImage}
            src="/raro-profile-web.jpg"
            alt="Raro Duo"
            width={284}
            height={288}
            priority
          />
        </div>
      </div>
      <div className={styles.spacer}></div>
      <h2 className={styles.subtitle}>¡No te lo pierdas!</h2>
      <button className={styles.button}>
            <a
              href="https://www.entradaweb.com.ar/evento/79fc2345/step/1?fbclid=PAZXh0bgNhZW0CMTEAAaZY-afrHY-wc6h2DkA_25A0PmJB6ZRgyZ9C-LO5zOYXRIZPyt_HMKleCKM_aem_pfU2h3g6NqSuY9f0tVjMeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar entradas
            </a>
          </button>
    </div>
  );
}
