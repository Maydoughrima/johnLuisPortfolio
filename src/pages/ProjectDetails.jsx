import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SectionWrapper from "../components/SectionWrapper";
import projects from "../config/projects";
import Button from "../components/Buttons/Button";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === String(id));

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "caseStudy", label: "Case Study" },
    { id: "result", label: "Result" },
    { id: "links", label: "Links" },
  ];

  const refs = {
    overview: useRef(null),
    problem: useRef(null),
    caseStudy: useRef(null),
    result: useRef(null),
    links: useRef(null),
  };

  const [active, setActive] = useState("overview");
  const [progress, setProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});

  const clickLock = useRef(false);
  const lockTimeout = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  // MOBILE DETECTION
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // FORCE TOP ON LOAD
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setActive("overview");
  }, [id]);

  // NAV CLICK
  const scrollTo = (id) => {
    clickLock.current = true;
    setActive(id);

    refs[id].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    clearTimeout(lockTimeout.current);
    lockTimeout.current = setTimeout(() => {
      clickLock.current = false;
    }, 700);
  };

  // SCROLL SYNC
  useEffect(() => {
    const handleScroll = () => {
      if (clickLock.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + viewportHeight >= docHeight - 50) {
        setActive("links");
        return;
      }

      const scrollPos = scrollY + viewportHeight * 0.35;

      let current = "overview";

      for (const sec of sections) {
        const el = refs[sec.id].current;
        if (!el) continue;

        const top = el.getBoundingClientRect().top + scrollY;

        if (scrollPos >= top) {
          current = sec.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MOBILE PROGRESS BAR
  useEffect(() => {
    if (!isMobile) {
      setProgress(0);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(docHeight ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // ✅ INTERSECTION OBSERVER (SMOOTH REVEAL)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  if (!project) {
    return (
      <>
        <Navbar />
        <SectionWrapper>
          <p className="text-muted">Project not found</p>
        </SectionWrapper>
      </>
    );
  }

  // ✅ SECTION COMPONENT (CSS-BASED ANIMATION)
  const Section = ({ id, title, children }) => {
    const isVisible = visibleSections[id];

    return (
      <section
        id={id}
        ref={refs[id]}
        className={`pb-6 md:pb-12 border-b border-border/40 scroll-mt-24 md:scroll-mt-32 transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-h3 font-semibold text-text mb-3">{title}</h2>
        {children}
      </section>
    );
  };

  return (
    <main className="w-full min-h-screen">
      <Navbar />

      {/* MOBILE PROGRESS BAR */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-border/30 z-[999]">
          <div
            className="h-full bg-text transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <SectionWrapper>
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 pt-5 md:pt-0">
          {/* NAV */}
          <aside className="hidden md:flex md:w-1/4 flex-col gap-4 text-sm text-muted sticky top-32 h-fit">
            <p className="text-text text-h2 font-semibold mb-6">Project</p>

            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left text-bodyMd font-medium border-l-2 pl-3 transition-all duration-300 ${
                  active === s.id
                    ? "text-accent border-accent"
                    : "text-muted border-transparent hover:text-text"
                }`}
              >
                {s.label}
              </button>
            ))}
          </aside>

          {/* CONTENT */}
          <div className="md:w-3/4 flex flex-col gap-6 md:gap-10">
            <Section id="overview" title={project.title}>
              <p className="text-muted text-bodyMd max-w-3xl">
                {project.longDescription}
              </p>
            </Section>

            <Section id="problem" title="Problem">
              <p className="text-muted text-bodyMd max-w-3xl">
                {project.problem}
              </p>
            </Section>

            <Section id="caseStudy" title="Case Study">
              <p className="text-muted text-bodyMd max-w-3xl">
                {project.caseStudy}
              </p>
            </Section>

            <Section id="result" title="Result">
              <p className="text-muted text-bodyMd max-w-3xl">
                {project.result}
              </p>
            </Section>

            <section
              id="links"
              ref={refs.links}
              className={`pb-10 border-b border-border/40 scroll-mt-24 md:scroll-mt-32 transition-all duration-700 ease-out
              ${
                visibleSections.links
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <h2 className="text-h3 font-semibold text-text mb-4">Links</h2>

              <div className="flex gap-4 flex-wrap">
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  variant="primary"
                  size="responsive"
                >
                  Visit Site
                </Button>

                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  variant="ghost"
                  size="responsive"
                >
                  GitHub
                </Button>
              </div>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
