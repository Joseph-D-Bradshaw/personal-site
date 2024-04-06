import Image from "next/image";
import Me from "../../../../public/me.png";
import Poco from "../../../../public/poco.png";
import "./MeAndPoco.css";

export default function MeAndPoco() {
  return (
    <div className="joseph-and-poco">
      <div className="image-container">
        <Image className="image-container__joseph" layout="responsive" src={Me} alt="Hello, it's an AI generated me!" />
        <div className="image-container__poco">
          <Image className="image-container__poco__image" layout="responsive" src={Poco} alt="My dog Poco" />
          <div className="flex">
            <div className="image-container__poco__name">Poco</div>
            <div className="image-container__poco__desc">
              <span className="nowrap">Professional Attention</span> Seeker
            </div>
          </div>
        </div>
      </div>

      <div className="image-container__joseph__name nowrap linear-gradient">Joseph Bradshaw</div>
      <div className="image-container__joseph__desc nowrap">Senior Full-Stack Engineer & Computer Scientist</div>
    </div>
  );
}
