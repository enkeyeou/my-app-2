import Image from "next/image";
import profileImage from "../pictures/2x2.jpg";
import vectorIcon from "../pictures/Vector.svg";
import facebookIcon from "../pictures/Frame 9.svg";
import mailIcon from "../pictures/Frame 8.svg";
import discordIcon from "../pictures/Frame 6.svg";
import instagramIcon from "../pictures/Frame 7.svg";

const skillsData = [
  {
    id: 1,
    icon: vectorIcon,
    title: "Python",
    description:
      "Lorem ipsum dolor sit amet. Non galisum itaque et praesentium facere ut vero minus non fugiat galisum non beatae nemo?",
  },
  {
    id: 2,
    icon: vectorIcon,
    title: "Python",
    description:
      "Lorem ipsum dolor sit amet. Non galisum itaque et praesentium facere ut vero minus non fugiat galisum non beatae nemo?",
  },
  {
    id: 3,
    icon: vectorIcon,
    title: "Python",
    description:
      "Lorem ipsum dolor sit amet. Non galisum itaque et praesentium facere ut vero minus non fugiat galisum non beatae nemo?",
  },
  {
    id: 4,
    icon: vectorIcon,
    title: "Python",
    description:
      "Lorem ipsum dolor sit amet. Non galisum itaque et praesentium facere ut vero minus non fugiat galisum non beatae nemo?",
  },
];

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: facebookIcon,
    url: "#",
    className: "relative flex w-10 h-10 items-center justify-center",
  },
  {
    id: 2,
    name: "Mail",
    icon: mailIcon,
    url: "#",
    className: "relative flex w-10 h-10 items-center justify-center",
  },
  {
    id: 3,
    name: "Discord",
    icon: discordIcon,
    url: "#",
    className: "relative flex w-10 h-10 items-center justify-center",
  },
  {
    id: 4,
    name: "Instagram",
    icon: instagramIcon,
    url: "#",
    className: "relative flex w-10 h-10 items-center justify-center",
  },
];

const navigationItems = [
  { id: 1, label: "About Me", href: "#about" },
  { id: 2, label: "Skills", href: "#skills" },
];

export default function Desktop() {
  return (
    <div className="bg-[#f4f4f4] w-full min-w-[1440px] min-h-[2701px] relative">
      <div className="absolute top-[463px] left-[389px] w-[1051px] h-[969px] bg-[#d9d9d9]" />

      <section className="flex w-[1051px] h-[471px] items-center gap-[65px] pl-[97px] pr-12 pt-[75px] pb-[93px] absolute top-0.5 left-[389px] bg-[#f4f4f4]">
        <div className="flex flex-col w-[551px] items-start gap-[21px] relative">
          <header className="flex flex-col w-[527px] items-start relative flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-normal text-black text-8xl tracking-[0] leading-[normal]">
              <span className="font-bold">NK </span>
              <span className="font-medium">Olmo</span>
            </h1>

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
                Software Engineering Student
              </h2>

              <p className="relative w-[483.82px] font-normal text-black text-2xl tracking-[0] leading-[normal]">
                I&apos;m a software engineering student at the Central
                Philippine University
              </p>
            </div>
          </header>

          <div className="flex items-center gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
            <a
              href="#portfolio"
              className="relative w-[266px] h-[53px] bg-[#081f62] rounded-2xl overflow-hidden"
            >
              <div className="inline-flex items-center relative top-px left-[23px]">
                <div className="inline-flex items-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
                  <span className="text-white text-2xl">↗</span>
                </div>

                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                    View Portfolio
                  </span>
                </div>
              </div>
            </a>

            <a href="#resume" className="relative w-[266px] h-[53px]">
              <div className="w-full h-full flex bg-black rounded-2xl overflow-hidden">
                <div className="inline-flex mt-[1.0px] w-[215.95px] h-[50.95px] ml-[23px] relative items-center">
                  <div className="inline-flex items-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
                    <span className="text-white text-2xl">📄</span>
                  </div>

                  <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                      View Resume
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <Image
          className="w-[290px] h-[290px] mr-[-0.34px] relative aspect-[1] object-cover rounded-full"
          alt="NK Olmo profile"
          src={profileImage}
          width={290}
          height={290}
        />
      </section>

      <h2 className="absolute top-[1528px] left-[499px] w-[527px] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
        Featured Projects
      </h2>

      <section
        id="skills"
        className="flex flex-col w-[858px] items-start gap-[15px] absolute top-[551px] left-[498px]"
      >
        <h2 className="relative self-stretch mt-[-1.00px] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          Skills
        </h2>

        <div className="flex flex-wrap items-start gap-[33px_36px] relative self-stretch w-full flex-[0_0_auto]">
          {skillsData.map((skill) => (
            <article
              key={skill.id}
              className="relative w-[410.22px] h-[348.86px] bg-[#e7e9f0] rounded-[20px]"
            >
              <div className="flex flex-col w-[334px] items-start gap-[23px] relative top-[30px] left-[29px]">
                <Image
                  className="relative w-[50px] h-[50px] aspect-[1]"
                  alt={`${skill.title} icon`}
                  src={skill.icon}
                  width={50}
                  height={50}
                />

                <h3 className="relative self-stretch font-bold text-[#081f62] text-[32px] tracking-[0] leading-[normal]">
                  {skill.title}
                </h3>

                <p className="relative self-stretch font-medium text-black text-2xl tracking-[0] leading-[normal]">
                  {skill.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="fixed top-0 left-0 w-[389px] h-[2701px] bg-[#081f62]">
        <nav className="absolute top-[492px] left-[69px]">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block ml-[50px] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap"
              style={{ marginTop: item.id === 1 ? "0" : "43px" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col w-[250px] items-center gap-6 absolute top-[75px] left-[70px]">
          <h1 className="relative self-stretch mt-[-1.00px] font-normal text-white text-[40px] text-center tracking-[0] leading-[normal]">
            <span className="font-bold">NK </span>
            <span className="font-medium">Olmo</span>
          </h1>

          <Image
            className="self-stretch w-full relative aspect-[1] object-cover rounded-full"
            alt="NK Olmo profile"
            src={profileImage}
            width={250}
            height={250}
          />

          <div
            className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]"
            role="list"
          >
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className={social.className}
                aria-label={social.name}
                role="listitem"
              >
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}