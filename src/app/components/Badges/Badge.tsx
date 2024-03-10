import Image from "next/image";
import linkedinIcon from "../../../../public/linkedin-white.svg";
import gitlabIcon from "../../../../public/gitlab-white.png";
import githubIcon from "../../../../public/github-white.png";
import emailIcon from "../../../../public/email-white.svg";
import styles from "./Badge.module.css";

type IconType = "linkedin" | "gitlab" | "github" | "email";

// TODO: Get better icons for gitlab and github, they are actually images
function getIconSrc(iconType: IconType) {
  switch (iconType) {
    case "linkedin":
      return linkedinIcon;
    case "gitlab":
      return gitlabIcon;
    case "github":
      return githubIcon;
    case "email":
      return emailIcon;
    default:
      return linkedinIcon;
  }
}

export default function Badge({ iconType }: { iconType: IconType }) {
  const iconSrc = getIconSrc(iconType);

  // TODO: Do fancy effect as in Figma by making multiple circles as coloured masks
  return (
    <div className={styles.container}>
      <Image className={`${styles[iconType]} ${styles.image}`} priority src={iconSrc} alt=""></Image>
    </div>
  );
}
