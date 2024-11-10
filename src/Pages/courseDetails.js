// src/pages/CourseDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import "./css/course.css";
import './css/CD.css'

const CourseDetails = () => {
  const { id } = useParams();
  const courses = [
    {
      id: "course1",
      title: "Computer Basics",
      description:
        "Computer Fundamentals: OS/GUI basics - WordPad - Notepad - Paint - Control Panel MS Office: Word (Mail merge - Macros) - Excel (Formulas - Pivot tables) - PowerPoint (Audio/Video - Special effects)",

      imgSrc:
        "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720dc5639034bb74b428d2e_course1.png",
      para1:
        "Our computer basics course at Coderz Academy is designed for everyone who wants to build a solid foundation in computing. We introduce students to fundamental concepts, explaining how computers work, the role of various hardware components, and the use of popular operating systems. Understanding these essential aspects ensures a strong start in mastering the world of technology and prepares students for the digital landscape they will encounter.",
      para2:
        "Students also learn to navigate software applications effectively, managing files and folders efficiently, while acquiring basic but crucial skills like using the internet securely.",
      para3:
        "A significant part of the course includes an introduction to MS Office tools such as Word, Excel, and PowerPoint. We guide students through the basics of creating documents, managing spreadsheets, and designing engaging presentations. Additionally, we emphasize safe online practices, ensuring students know how to stay secure in today’s digital environment, which is essential for responsible internet usage.",
      para4:
        "Our hands-on approach to learning builds deep understanding, helping students become confident in using computers for any job or personal project, making everyday activities simpler and more manageable.",
      para5:
        "Come to Coderz Academy and take the first step toward becoming highly digitally proficient. Start your journey to master the essential computer skills that lay the foundation for success!",
    },
    {
      id: "course2",
      title: "Full stack",
      description:
        "Front-End Development: HTML5 Semantic Elements - Responsive Design - CSS3 Flexbox - Animations - Media Queries - JavaScript Events - Functions - DOM Manipulation - React JS ES6 - Components. Back-End Development: Node.js REST APIs - JWT Authentication - Express Routing - HTTP Methods - MySQL Joins - Queries - Constraints - MongoDB Schema Validation - Aggregation - Indexing.",
      imgSrc:
        "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720dd6bd29e6db132fe8169_appdev.png",
      para1:
        "Our computer basics course at Coderz Academy is designed for everyone who wants to build a solid foundation in computing. We introduce students to fundamental concepts, explaining how computers work, the role of various hardware components, and the use of popular operating systems. Understanding these essential aspects ensures a strong start in mastering the world of technology and prepares students for the digital landscape they will encounter.",
      para2:
        "Students also learn to navigate software applications effectively, managing files and folders efficiently, while acquiring basic but crucial skills like using the internet securely.",
      para3:
        "A significant part of the course includes an introduction to MS Office tools such as Word, Excel, and PowerPoint. We guide students through the basics of creating documents, managing spreadsheets, and designing engaging presentations. Additionally, we emphasize safe online practices, ensuring students know how to stay secure in today’s digital environment, which is essential for responsible internet usage.",
      para4:
        "Our hands-on approach to learning builds deep understanding, helping students become confident in using computers for any job or personal project, making everyday activities simpler and more manageable.",
      para5:
        "Come to Coderz Academy and take the first step toward becoming highly digitally proficient. Start your journey to master the essential computer skills that lay the foundation for success!",
    },
    {
      id: "course3",
      title: "TALLY",
      description: "Tally Prime: Accounting Principles - Voucher Types - Ledgers - Reports (Balance Sheet - Profit & Loss) - Cash Flow - Cost Center - Bank Reconciliation - Inventory Management - Budgets - GST - Payroll - Security.",
      imgSrc:
        "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720df4cd5b183f3a62c2497_tax-tally.png",
      para1:
        "Our Tally course is ideal for individuals looking to gain mastery over the most widely used accounting software among businesses today. This course enables students to learn and master all aspects of financial transaction management, report generation, and other essential accounting activities like GST, VAT, and TDS efficiently. With a strong focus on practical skills, students will be well-equipped to handle a variety of accounting tasks confidently.",
      para2:
        "We cover everything from the creation and management of company accounts to inventory management, payroll, data analysis, and audit tools to ensure comprehensive learning.",
      para3:
        "Our hands-on approach ensures that the functionalities of Tally are effectively learned, providing students with a thorough understanding. This practical experience allows them to apply their knowledge in real-time situations without hesitation. Perfectly guided and stepwise instruction from experienced instructors equips students for accounting job assignments and sets the stage for their career progression in the financial sector.",
      para4:
        "So, here comes the opportunity to understand Tally confidently and glide ahead with finance management through our comprehensive course. Don’t miss out on this chance to enhance your skills!",
      para5:
        "Join us at Coderz Academy to start your journey in mastering Tally. With our expert guidance, you’ll be ready to excel in your accounting career and achieve your professional goals.",
    },
    {
      id: "course4",
      title: "MS Excel, MS Word",
      description: "MS Office: Word (Mail merge - Macros) - Excel (Formulas - Pivot tables - Conditional Formatting) - PowerPoint (Audio/Video - Special Effects) - VBA (Loops - User Forms - Database Connections).",
      imgSrc:
        "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6723793ff7c81cf3dae38186_xcel.png",
      para1:
        "The Excel and MS Word course at Coderz Academy equips students with essential skills for creating and managing documents. A student using MS Word will learn to create professional documents, utilize templates, insert tables, and leverage more advanced features like mail merge and styles. This foundational knowledge is crucial for effective communication and documentation in any professional setting, providing students with a competitive edge in the job market.",
      para2:
        "In Excel, we teach data entry, formulas, and functions, along with creating and formatting charts, managing large datasets, and using pivot tables for insightful analysis.",
      para3:
        "Our hands-on training approach ensures that students master automating tasks and improving productivity through practical exercises. By engaging in real-world scenarios, students gain confidence in their abilities to handle various tasks efficiently. This skill set is essential not only for academic success but also for thriving in business environments and everyday life, where effective data management is crucial.",
      para4:
        "Join Coderz Academy to master Excel and MS Word, boost your efficiency, and prepare yourself for today’s tech-driven workplace. Enhance your skills and become a valuable asset in any organization ",
      para5:
        "With our expert guidance, you will learn to navigate these powerful tools effectively. Start your journey today and open doors to numerous opportunities in your professional career.",
    },
    {
      id: "course5",
      title: "JAVA",
      description:
        "Java Introduction: Variables - Data Types - Conditional Statements - Loops - Arrays - Classes - Objects - Methods - Inheritance - Interfaces - Abstract Classes - Exception Handling - Multi-threading - JDBC - Swing.",
      imgSrc:
        "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238666ed2c8423e3397ba7_Set_of_programmers_02_02.jpg",
      para1:
        "Coderz Academy's Java course lays down a strong foundation in one of the most widely used programming languages in software development. We begin with data types, control structures, and object-oriented programming concepts, which include classes, objects, inheritance, polymorphism, and encapsulation. This foundational knowledge is essential for students aiming to develop robust software applications and prepare them for more advanced programming topics.",
      para2:
        "Students then progress to learn about exception handling, file operations, and Java collections, which are crucial for effective programming and managing data within applications.",
      para3:
        "We introduce GUI development and multithreading for more complex applications, enabling students to create interactive and responsive software solutions. This hands-on approach allows students to gain valuable experience through practical exercises and projects, which significantly enhances their understanding of Java programming. By applying their knowledge in real-world scenarios, they become proficient in developing efficient, robust, and scalable applications.",
      para4:
        "Become a master of Java programming and learn to develop large applications using Java in our comprehensive classes. Gain the skills needed to excel in the tech industry!",
      para5:
        "Join us at Coderz Academy to unlock your potential in Java programming. With our expert instructors guiding you, you're one step closer to a successful career in software development.",
    },
    {
      id: "course6",
      title: "Advanced JAVA",
      description:
        "Advanced Java: Servlets - JSP - Web Services - REST APIs - Frameworks (Spring - Hibernate) - Design Patterns - Security - Java Beans - RMI - JDBC - Event Handling - JavaFX - Networking.",
      imgSrc:
        "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720e0c4d656af853629a5c5_web-development-removebg-preview.png",
      para1:
        "The Advanced Level Java course at Coderz Academy elevates your learning to new heights by focusing on building enterprise-level applications. We will cover essential concepts such as JDBC for database connectivity and Servlets along with JSP for web development. Through this, we guide you in creating dynamic and interactive web applications, which are crucial for modern software solutions in a competitive tech landscape.",
      para2:
        "The course will expose you to frameworks like Spring and Hibernate, which educate you on how to tackle complex development tasks and manipulate data efficiently.",
      para3:
        "Topics include the exploration of RESTful APIs, web services, and advanced features such as multithreading, network programming, and socket communication. This comprehensive curriculum ensures that students gain a deep understanding of Java's capabilities and its application in real-world scenarios. By focusing on practical knowledge, we prepare you for the challenges faced in software development today.",
      para4:
        "Additionally, our students will develop real-world projects to understand the intricacies of creating robust, scalable, and secure applications. This hands-on experience is vital for successful learning.",
      para5:
        "Master Advanced Java with us at Coderz Academy! We help you prepare for demanding software development roles in the field, equipping you with the skills needed to excel.",
    },
    {
      id: "course7",
      title: "Python",
      description:
        "Introduction - Conditional statements - Loops - Data structures - Functions - OOP - Exception handling - Multithreading - MySQL - Tkinter. Django: Overview - Project creation - Models - Views - REST API.",
      imgSrc:
        "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67237a410c0637c540fc1a7b_pyI.jpg",
      para1:
        "The course at Coderz Academy is perfect for learning Python, whether you are a beginner or someone trying to enhance your programming skills. We start with the basics of Python, covering data types, control flow, functions, and modules. As the course progresses, we move toward advanced concepts such as object-oriented programming (OOP) and file handling, ensuring a comprehensive understanding of the language’s fundamentals.You will learn how to produce code that is efficient, readable, and clean, leveraging Python's simple yet versatile syntax to create effective solutions.",
      para2:
        "We also introduce essential libraries such as NumPy and Pandas for data analysis, as well as Matplotlib for visualization. The course emphasizes practical learning through real-world projects, making it easier to understand how Python is applied in web development, automation, and data science. This hands-on approach prepares you to tackle various challenges in diverse fields confidently.",
      para3:
        "By the end of this course, you will be equipped with the skills necessary to handle a wide range of challenges using Python effectively in your future endeavors.",
      para4:
        "Come join us at Coderz Academy and start your Python journey! Unlock the potential of this powerful programming language and pave the way for your success in tech.",
    },
    {
      id: "course8",
      title: "Advanced Python",
      description:
        "Decorators - Generators - Context Managers - Comprehensions - Multithreading - Multiprocessing - Asyncio - Type Hints - Metaclasses - Regular Expressions - File I/O - Unit Testing - Web Scraping - Flask.",
      imgSrc:
        "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/672385bfd650f17afa944ec5_python03.jpg",
      para1:
        "The Advanced Python course at Coderz Academy takes your learning to the next level for those who want to master this versatile programming language. We focus on advanced topics such as decorators, generators, and context managers, which enhance coding efficiency and promote a functional programming style. Following that, we delve into multithreading and multiprocessing, enabling you to build concurrent applications and start developing client-server applications through network programming.",
      para2:
        "In addition to essential libraries, we cover popular web frameworks like Flask and Django, empowering students to create robust web applications tailored to their needs.",
      para3:
        "Moreover, we introduce a glimpse of machine learning using the scikit-learn library and TensorFlow. This exposure helps students understand how to apply Python in various domains, particularly in developing scalable applications. Our hands-on projects and practical exercises ensure that you can tackle more significant challenges and implement advanced solutions with confidence, equipping you with the tools needed for today’s tech landscape.Join us at Coderz Academy to elevate your Python skills further! Learn from experienced instructors and work on real-world applications that will enhance your programming capabilities and knowledge.",
      para4:
        "Let’s take your skills to the next level together. Enroll in our Advanced Python course today and open the door to exciting opportunities in programming and technology!",
    },
  ];

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <header className="uui-section_heroheader04">
        <div className="uui-page-padding-10"
        id="oneRem">
          <div className="uui-container-large-4">
            <div className="uui-padding-vertical">
              <div className="w-layout-grid uui-heroheader04_component">
                <div className="uui-heroheader04_content">
                  <h1 className="uui-heading-xlarge-3">
                    {course.title} {/* Correct reference to course */}
                  </h1>
                  <div className="uui-space-small-3"></div>
                  <div className="uui-max-width-medium-2">
                    <div className="uui-text-size-xlarge-3">
                      {course.description} {/* Correct reference to course */}
                    </div>
                  </div>
                </div>
                <div className="uui-heroheader04_image-wrapper">
                  <img
                    src={course.imgSrc} // Correct reference to course
                    loading="lazy"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 1216px"
                    alt={course.title} // Update alt text for accessibility
                    className="uui-heroheader04_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="w-node-faaf701e-5001-aec5-33d1-067d1329b847-b798f64f"
        className="udesly-container"
      >
        <div className="udesly-title-wrapper-2">
          <div className="udesly-overline-large">About Course</div>
          <h2
            data-w-id="faaf701e-5001-aec5-33d1-067d1329b84b"
            style={{
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0,
            }}
            className="udesly-text-extrabold"
          >
            Course definition with Coderz Academy .
          </h2>
        </div>
        <div className="udesly-information">
          <div
            id="w-node-faaf701e-5001-aec5-33d1-067d1329b84e-b798f64f"
            className="udesly-info-block"
          >
            <p className="udesly-paragraph-large">{course.para1}</p>
            <ul role="list" className="udesly-list-info"></ul>
            <p className="udesly-paragraph-large">{course.para2}</p>
          </div>
          <div
            id="w-node-faaf701e-5001-aec5-33d1-067d1329b85d-b798f64f"
            className="udesly-info-block"
          >
            <p className="udesly-paragraph-large">{course.para3}</p>
            <p className="udesly-paragraph-large">{course.para4}</p>
            <p className="udesly-paragraph-large">{course.para5}</p>
            <p className="udesly-paragraph-large"></p>
            <p className="udesly-paragraph-large"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails; // Updated to export the correctly named component
