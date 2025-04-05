"use client";

import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Calendar,
  // Briefcase, Code
} from "lucide-react";
import "../styles/Experience.css";

const Experience = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="experience-page">
      <section className="experience-hero">
        <div className="container">
          <div className="section-header animate">
            <h1 className="page-title">{t("experience.title")}</h1>
            <p className="page-subtitle">{t("experience.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("experience.education")}</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item animate">
              <div className="timeline-icon">
                <Calendar size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{t("experience.period1")}</div>
                <h3 className="timeline-title">{t("experience.university")}</h3>
                <p className="timeline-subtitle">{t("experience.degree")}</p>
                <p className="timeline-description">
                  {t("experience.universityDesc")}
                </p>
              </div>
            </div>

            <div className="timeline-item animate">
              <div className="timeline-icon">
                <Calendar size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{t("experience.period2")}</div>
                <h3 className="timeline-title">{t("experience.highSchool")}</h3>
                <p className="timeline-subtitle">{t("experience.track")}</p>
                <p className="timeline-description">
                  {t("experience.highSchoolDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Kinh nghiệm làm việc*/}
      <section className="timeline-section alt-bg">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("experience.work")}</h2>
          </div>

          {/* <div className="timeline">
            <div className="timeline-item animate">
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">
                  {t("experience.workPeriod1")}
                </div>
                <h3 className="timeline-title">{t("experience.workTitle1")}</h3>
                <p className="timeline-subtitle">
                  {t("experience.workLocation1")}
                </p>
                <p className="timeline-description">
                  {t("experience.workDesc1")}
                </p>
                <div className="timeline-tags">
                  <span className="timeline-tag">React</span>
                  <span className="timeline-tag">Node.js</span>
                  <span className="timeline-tag">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="timeline-item animate">
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">
                  {t("experience.workPeriod2")}
                </div>
                <h3 className="timeline-title">{t("experience.workTitle2")}</h3>
                <p className="timeline-subtitle">
                  {t("experience.workLocation2")}
                </p>
                <p className="timeline-description">
                  {t("experience.workDesc2")}
                </p>
                <div className="timeline-tags">
                  <span className="timeline-tag">HTML/CSS</span>
                  <span className="timeline-tag">JavaScript</span>
                  <span className="timeline-tag">React</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/*Dự án cá nhân*/}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header animate">
            <h2 className="section-title">{t("experience.projects")}</h2>
          </div>

          {/* <div className="timeline">
            <div className="timeline-item animate">
              <div className="timeline-icon">
                <Code size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">
                  {t("experience.projectPeriod1")}
                </div>
                <h3 className="timeline-title">
                  {t("experience.projectTitle1")}
                </h3>
                <p className="timeline-description">
                  {t("experience.projectDesc1")}
                </p>
                <div className="timeline-tags">
                  <span className="timeline-tag">React</span>
                  <span className="timeline-tag">Node.js</span>
                  <span className="timeline-tag">Express</span>
                  <span className="timeline-tag">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="timeline-item animate">
              <div className="timeline-icon">
                <Code size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">
                  {t("experience.projectPeriod2")}
                </div>
                <h3 className="timeline-title">
                  {t("experience.projectTitle2")}
                </h3>
                <p className="timeline-description">
                  {t("experience.projectDesc2")}
                </p>
                <div className="timeline-tags">
                  <span className="timeline-tag">React</span>
                  <span className="timeline-tag">TypeScript</span>
                  <span className="timeline-tag">Firebase</span>
                </div>
              </div>
            </div>

            <div className="timeline-item animate">
              <div className="timeline-icon">
                <Code size={24} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">
                  {t("experience.projectPeriod3")}
                </div>
                <h3 className="timeline-title">
                  {t("experience.projectTitle3")}
                </h3>
                <p className="timeline-description">
                  {t("experience.projectDesc3")}
                </p>
                <div className="timeline-tags">
                  <span className="timeline-tag">JavaScript</span>
                  <span className="timeline-tag">API Integration</span>
                  <span className="timeline-tag">CSS</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Experience;
