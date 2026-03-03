import Marquee from "react-fast-marquee";
import {
  SiComptia,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { FaAws,FaVuejs,FaJava } from "react-icons/fa";

export const techStack = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Postman", icon: SiPostman },
  { name: "Java", icon: FaJava },
  { name: "Security+", icon: SiComptia },
  { name: "Vue", icon: FaVuejs },
  { name: "AWS", icon: FaAws },
];

export default function TechMarquee() {
  return (
    <Marquee pauseOnHover={true} gradient={false} speed={20} className="whitespace-nowrap gap-2 mb-5">
  {[...techStack, ...techStack, ...techStack].map((tech, i) => {
    const Icon = tech.icon;
    return (
      <div
        key={`${tech.name}-${i}`}
        className="flex items-center gap-2 rounded-md bg-muted px-2 py-2 text-black"
      >
        <Icon className="w-6 h-6" />
        <p className="text-sm">{tech.name}</p>
      </div>
    );
  })}
</Marquee>


  );
}
