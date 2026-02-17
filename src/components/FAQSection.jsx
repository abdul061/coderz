import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaGraduationCap,
  FaClock,
  FaCertificate,
  FaMoneyBill,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMinus
} from "react-icons/fa";
import "../css/FAQSection.css";

const FAQSection = () => {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      category: "General Questions",
      color: "blue",
      icon: <FaQuestionCircle />,
      questions: [
        {
          q: "What is Coderz Academy?",
          a: "Coderz Academy is a tech training institute focused on practical and job-oriented programs."
        },
        {
          q: "Who can join your courses?",
          a: "Beginners, students, and professionals who want to upgrade their tech skills."
        },
        {
          q: "Do I need prior programming knowledge?",
          a: "No, we offer beginner-friendly courses."
        }
      ]
    },
    {
      id: 2,
      category: "Courses & Learning",
      color: "green",
      icon: <FaGraduationCap />,
      questions: [
        {
          q: "What courses do you offer?",
          a: "Full Stack, Python, Data Science, Java & more."
        },
        {
          q: "Are the courses practical or theory-based?",
          a: "Courses are 70% practical and project-based."
        },
        {
          q: "Will I work on real projects?",
          a: "Yes, you will build real-world applications."
        }
      ]
    },
    {
      id: 3,
      category: "Duration & Mode",
      color: "orange",
      icon: <FaClock />,
      questions: [
        {
          q: "What is the duration of courses?",
          a: "Courses range from 3 to 6 months."
        },
        {
          q: "Do you offer online and offline classes?",
          a: "Yes, we offer both modes."
        }
      ]
    },
    {
      id: 4,
      category: "Certification & Career",
      color: "teal",
      icon: <FaCertificate />,
      questions: [
        {
          q: "Will I get a certificate?",
          a: "Yes, certification is provided after completion."
        },
        {
          q: "Do you provide placement assistance?",
          a: "Yes, we offer career guidance and placement support."
        }
      ]
    },
    {
      id: 5,
      category: "Fees & Enrollment",
      color: "cyan",
      icon: <FaMoneyBill />,
      questions: [
        {
          q: "What is the fee structure?",
          a: "Fees vary depending on the course."
        },
        {
          q: "Is there an installment option?",
          a: "Yes, EMI options are available."
        }
      ]
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-header">
        <div className="faq-icon-big">
          <FaQuestionCircle />
        </div>
        <div>
          <h2>Frequently Asked Questions (FAQ)</h2>
          <p>Coderz Academy</p>
        </div>
      </div>

      {faqData.map((section) => (
        <div key={section.id} className="faq-category">

          <div className={`category-header ${section.color}`}>
            <span>{section.icon} {section.category}</span>
            <FaChevronDown />
          </div>

          <div className="faq-items">
            {section.questions.map((item, index) => {
              const id = `${section.id}-${index}`;
              return (
                <div key={id} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggle(id)}
                  >
                    <span>
                      <strong>{index + 1}.</strong> {item.q}
                    </span>
                    {active === id ? <FaMinus /> : <FaPlus />}
                  </div>

                  {active === id && (
                    <div className="faq-answer">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="faq-contact">
        <p>
          <strong>Still have questions?</strong> 👉 Contact us anytime, we're here to help!
        </p>
        <button>Contact Us</button>
      </div>

    </section>
  );
};

export default FAQSection;
