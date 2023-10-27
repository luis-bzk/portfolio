import styles from './app.module.scss';
import { Contact, Header, Hero, Presentation, Services, SoftSkills, Work } from './components';

function App() {
  return (
    <>
      <Header />

      {/* main */}
      <main className={styles.Main}>
        <Hero />

        <Presentation />
        <Work />
        <Services />
        <SoftSkills />

        <Contact />
      </main>

      {/* footer */}
    </>
  );
}

export default App;
