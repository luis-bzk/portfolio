import {
  FcReadingEbook,
  FcPodiumWithSpeaker,
  FcServices,
  FcPortraitMode,
  FcClock,
  FcBinoculars,
  FcSelfie,
  FcIdea,
  FcReading,
  FcCollaboration,
} from 'react-icons/fc';

import styles from './component.module.scss';

export function SoftSkills() {
  return (
    <section className={styles.Section}>
      <h3 className={styles.TitleSection}>Habilidades blandas</h3>

      <div className={styles.GridCards}>
        {SoftSkillList.map((skill) => (
          <div className={styles.Card} key={skill.id}>
            {skill.icon}
            <p className={styles.Title}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const SoftSkillList = [
  { id: 1, name: 'Comunicación', icon: <FcPodiumWithSpeaker className={styles.Icon} /> },
  { id: 2, name: 'Trabajo en equipo', icon: <FcCollaboration className={styles.Icon} /> },
  { id: 3, name: 'Resolución de problemas', icon: <FcReadingEbook className={styles.Icon} /> },
  { id: 4, name: 'Pensamiento crítico', icon: <FcServices className={styles.Icon} /> },
  { id: 5, name: 'Gestión del tiempo', icon: <FcClock className={styles.Icon} /> },
  { id: 6, name: 'Atención al detalle', icon: <FcBinoculars className={styles.Icon} /> },
  { id: 7, name: 'Empatía', icon: <FcSelfie className={styles.Icon} /> },
  { id: 8, name: 'Creatividad', icon: <FcIdea className={styles.Icon} /> },
  { id: 9, name: 'Aprendizaje continuo', icon: <FcReading className={styles.Icon} /> },
  { id: 10, name: 'Liderazgo', icon: <FcPortraitMode className={styles.Icon} /> },
];
