import Intro from "../components/Intro/Intro";
import styles from "./About.module.css";

const introTextPart1 = `I'm a Full-Stack Software Engineer who leans a bit more towards the frontend side of things — I'd say about 60% of
my heart belongs to crafting user interfaces. My tech toolbox starts with Python, but I truly shine when working
with frontend technologies like Angular, TypeScript, and React. While I'm also skilled in containerization with
Buildah and Podman, and deploying services using Kubernetes, it's the creative frontend challenges that excite
me the most. Gitlab CI/CD? Yep, I handle that too, streamlining workflows like a pro.
`;

const introTextPart2 = `My formal training? A Computer Science degree specializing in AI in Robotics from the University of
Hertfordshire. This blend of practical tech skills and specialized education fuels my passion for developing
innovative and robust software solutions, especially when I get to focus on the frontend.
`;

export default function About() {
  return (
    <div className={styles.container}>
      <Intro />

      <p>{introTextPart1}</p>

      <p>{introTextPart2}</p>
    </div>
  );
}
