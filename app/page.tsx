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

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    type: "Case Study",
    description:
      "Lorem ipsum dolor sit amet. Non galisum itaque et praesentium facere ut vero minus non fugiat galisum non beatae nemo?",
  },
  {
    id: 2,
    title: "Project 2",
    type: "Web App",
    description:
      "Lorem ipsum dolor sit amet. Non galisum itaque et praesentium facere ut vero minus non fugiat galisum non beatae nemo?",
  },
  {
    id: 3,
    title: "Project 3",
    type: "Mobile",
    description:
      "Lorem ipsum dolor sit amet. Non galisum itaque et praesentium facere ut vero minus non fugiat galisum non beatae nemo?",
  },
  {
    id: 4,
    title: "Project 4",
    type: "Backend",
    description:
      "Lorem ipsum dolor sit amet. Non galisum itaque et praesentium facere ut vero minus non fugiat galisum non beatae nemo?",
  },
];

const testimonialsData = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet. Non galisum itaque et",
    name: "NK Olmo",
    title: "Trust me bro",
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor sit amet. Non galisum itaque et",
    name: "NK Olmo",
    title: "Trust me bro",
  },
];

const quickStats = [
  { id: 1, label: "Projects", value: "12+" },
  { id: 2, label: "Tech Stack", value: "8" },
  { id: 3, label: "Hackathons", value: "5" },
];

const experienceData = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Sample Startup",
    period: "2025 - Present",
    summary: "Built UI components and collaborated with design and QA teams.",
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Student Projects",
    period: "2024 - 2025",
    summary: "Delivered landing pages and portfolio sites for local clients.",
  },
];

const contactLinks = [
  {
    id: 1,
    label: "Email",
    value: "nk.olmo@email.com",
    href: "mailto:nk.olmo@email.com",
  },
  {
    id: 2,
    label: "LinkedIn",
    value: "linkedin.com/in/nkolmo",
    href: "#",
  },
  {
    id: 3,
    label: "GitHub",
    value: "github.com/enkeyeou",
    href: "#",
  },
];

const navigationItems = [
  { id: 1, label: "About Me", href: "#about" },
  { id: 2, label: "Skills", href: "#skills" },
  { id: 3, label: "Featured Projects", href: "#featured-projects" },
  { id: 4, label: "Experience", href: "#experience" },
  { id: 5, label: "Contact", href: "#contact" },
];

export default function Desktop() {
  return (
    <div className="bg-[#f4f4f4] w-full min-w-[1440px] min-h-[4145px] relative">
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

          <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            {quickStats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-start justify-center w-[170px] h-[76px] px-5 bg-[#e7e9f0] rounded-2xl"
              >
                <span className="font-bold text-[#081f62] text-[30px] leading-[1]">
                  {stat.value}
                </span>
                <span className="font-medium text-black text-base leading-[normal]">
                  {stat.label}
                </span>
              </div>
            ))}
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

      <section
        id="skills"
        className="flex flex-col w-[1051px] h-[958px] items-start gap-2.5 pl-[108px] pr-[84px] pt-[77px] pb-[88px] absolute top-[473px] left-[389px] bg-[#d9d9d9]"
      >
        <div className="flex flex-col w-[858.02px] items-start gap-[15px] relative flex-[0_0_auto]">
          <p className="text-[#081f62] font-medium text-xl tracking-[0] leading-[normal]">
            What I use and what I&apos;m currently learning
          </p>

          <h2 className="relative self-stretch mt-[-1.00px] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
            Skills
          </h2>

          <div className="flex flex-wrap items-start gap-[33px_36px] relative self-stretch w-full flex-[0_0_auto]">
            {skillsData.map((skill) => (
              <article
                key={skill.id}
                className="relative w-[410.22px] h-[348.86px] bg-[#e7e9f0] rounded-[20px] transition-transform duration-200 hover:-translate-y-1"
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
        </div>
      </section>

      <section
        id="featured-projects"
        className="flex flex-col w-[1051px] h-[1340px] items-start gap-11 pl-[110px] pr-[85px] py-[99px] absolute top-[1429px] left-[389px] bg-[#f4f4f4]"
      >
        <p className="text-[#081f62] font-medium text-xl tracking-[0] leading-[normal]">
          Selected work and experiments
        </p>

        <h2 className="relative self-stretch mt-[-1.00px] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          Featured Projects
        </h2>

        <div className="flex flex-wrap w-[855.44px] items-start gap-[36px_35px] relative flex-[0_0_auto] mb-[-0.72px]">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="relative w-[410.22px] h-[511px] bg-[#e7e9f0] rounded-[20px] overflow-hidden transition-transform duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="relative self-stretch w-full h-[210px] bg-white" />
              <div className="relative self-stretch w-full h-[301px] bg-[#d9d9d9]" />
              <div className="flex flex-col w-[334px] h-[245px] items-start absolute top-[236px] left-6">
                <div className="flex flex-col items-start relative self-stretch w-full flex-1">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#081f62] text-white text-sm font-medium mb-3">
                    {project.type}
                  </span>

                  <h3 className="relative self-stretch mt-[-1.00px] font-bold text-[#081f62] text-[30px] tracking-[0] leading-[1.1]">
                    {project.title}
                  </h3>

                  <p className="relative mt-2 self-stretch font-medium text-black text-[20px] tracking-[0] leading-[1.35]">
                    {project.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center relative flex-[0_0_auto] mt-3"
                >
                  <span className="relative w-[134.79px] mt-[-1.00px] font-bold text-[#081f62] text-2xl tracking-[0] leading-[normal] underline">
                    Learn More
                  </span>
                  <span className="relative w-[26.82px] h-[26.82px] text-[#081f62] text-2xl leading-[1]">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="absolute top-[2769px] left-[389px] w-[1051px] h-[530px] pl-[110px] pr-[85px] pt-[83px] bg-[#d9d9d9]">
        <p className="text-[#081f62] font-medium text-xl tracking-[0] leading-[normal]">
          Feedback from people I&apos;ve worked with
        </p>

        <h2 className="w-[856px] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          Testimonials
        </h2>

        <div className="mt-[32px] flex w-[855.44px] items-start gap-[35px]">
          {testimonialsData.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="relative w-[410.22px] h-[258px] transition-transform duration-200 hover:-translate-y-1"
              role="region"
              aria-label="Customer testimonial"
            >
              <div className="absolute top-0 left-0 w-[410.22px] h-[258px] bg-[#e7e9f0] rounded-[20px]" />

              <Image
                className="absolute top-[162px] left-[38px] w-[70px] h-[70px] aspect-[1] object-cover rounded-full"
                alt={`${testimonial.name} profile picture`}
                src={profileImage}
                width={70}
                height={70}
              />

              <blockquote className="absolute top-20 left-[38px] w-[334px] font-medium text-black text-2xl tracking-[0] leading-[normal]">
                {testimonial.quote}
              </blockquote>

              <figcaption className="absolute top-[172px] left-[126px] w-[334px] font-normal text-[#081f62] text-2xl tracking-[0] leading-[normal]">
                <span className="font-bold">
                  {testimonial.name}
                  <br />
                </span>
                <span>{testimonial.title}</span>
              </figcaption>

              <div
                className="absolute top-[-10px] left-6 w-[114px] font-bold text-[#081f62] text-8xl tracking-[0] leading-[normal]"
                aria-hidden="true"
              >
                &quot;
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="absolute top-[3299px] left-[389px] w-[1051px] h-[430px] pl-[110px] pr-[85px] pt-[72px] bg-[#f4f4f4]"
      >
        <p className="text-[#081f62] font-medium text-xl tracking-[0] leading-[normal]">
          Journey and hands-on work
        </p>

        <h2 className="w-[856px] mt-1 font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          Experience
        </h2>

        <div className="mt-7 flex w-[855.44px] flex-col gap-5">
          {experienceData.map((experience) => (
            <article
              key={experience.id}
              className="w-full rounded-[20px] bg-[#e7e9f0] p-6 border-l-[6px] border-[#081f62]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-[#081f62] text-[30px] leading-[1.1]">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-black text-xl font-medium">
                    {experience.company}
                  </p>
                </div>
                <span className="text-[#081f62] text-lg font-bold">
                  {experience.period}
                </span>
              </div>
              <p className="mt-3 text-black text-xl leading-[1.35]">
                {experience.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="absolute top-[3729px] left-[389px] w-[1051px] h-[416px] pl-[110px] pr-[85px] pt-[72px] bg-[#d9d9d9]"
      >
        <p className="text-[#081f62] font-medium text-xl tracking-[0] leading-[normal]">
          Let&apos;s build something great
        </p>

        <h2 className="w-[856px] mt-1 font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          Contact
        </h2>

        <div className="mt-8 flex w-[855.44px] gap-[35px]">
          <div className="w-[410.22px] h-[210px] rounded-[20px] bg-[#e7e9f0] p-7 flex flex-col justify-between">
            <p className="text-black text-2xl leading-[1.35] font-medium">
              Open to internships, freelance projects, and collaborations.
            </p>
            <a
              href="mailto:nk.olmo@email.com"
              className="inline-flex w-fit items-center px-5 py-2 rounded-xl bg-[#081f62] text-white text-lg font-bold"
            >
              Send an Email
            </a>
          </div>

          <div className="w-[410.22px] h-[210px] rounded-[20px] bg-[#e7e9f0] p-7">
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="flex items-center justify-between text-[#081f62]"
                >
                  <span className="font-bold text-xl">{link.label}</span>
                  <span className="font-medium text-lg underline">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <aside className="fixed top-0 left-0 w-[389px] h-[4145px] bg-[#081f62]">
        <nav className="absolute top-[492px] left-[69px]">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block ml-[50px] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap"
              style={{ marginTop: item.id === 1 ? "0" : "26px" }}
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
                  width={50}
                  height={50}
                />
              </a>
            ))}
          </div>

          <div className="w-full rounded-[20px] bg-[#e7e9f0] p-4 mt-3">
            <p className="text-[#081f62] font-bold text-lg">Available For</p>
            <p className="text-black font-medium text-base mt-1">
              Internship • Freelance • Collaboration
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}