import React from 'react';
import Course from './Course';


const courseDetails = () => {
    const { id } = useParams();
    const courses = [
      // (your courses data remains the same here)
      {
        id: "course1",
        title: "Computer Basics",
        description:
          "Our computer basics course gives one all the essential skills. Join us in developing our knowledge and realizing your goals.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720dc5639034bb74b428d2e_course1.png",
      },
      {
        id: "course2",
        title: "Full stack",
        description:
          "Master front-end as well as back-end technologies in our full stack Development course.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720dd6bd29e6db132fe8169_appdev.png",
      },
      {
        id: "course3",
        title: "TALLY",
        description: "Learn Tally from scratch using our comprehensive course.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720df4cd5b183f3a62c2497_tax-tally.png",
      },
      {
        id: "course4",
        title: "MS Excel, MS Word",
        description:
          "Learn the basics with Excel and MS Word at Coderz Academy.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6723793ff7c81cf3dae38186_xcel.png",
      },
      {
        id: "course5",
        title: "JAVA",
        description:
          "Master Java programming at Coderz Academy from fundamentals to advanced.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238666ed2c8423e3397ba7_Set_of_programmers_02_02.jpg",
      },
      {
        id: "course6",
        title: "Advanced JAVA",
        description:
          "Learn Advanced Java at Coderz Academy. It is a course that moves the use of frameworks beyond the use of APIs.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720e0c4d656af853629a5c5_web-development-removebg-preview.png",
      },
      {
        id: "course7",
        title: "Python",
        description:
          "Learn all the fundamentals concepts of programming, data structures, and libraries with Coderz.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67237a410c0637c540fc1a7b_pyI.jpg",
      },
      {
        id: "course8",
        title: "Advanced Python",
        description:
          "We also provide advanced Python skills to create a complex application and improve your code performance.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/672385bfd650f17afa944ec5_python03.jpg",
      },
    ];
    const course = courses.find((course) => course.id === id);

    if (!course) {
      return <p>Course not found</p>;
    }
  return (
    <div>
      <header className="uui-section_heroheader04">
        <div className="uui-page-padding-10">
          <div className="uui-container-large-4">
            <div className="uui-padding-vertical-xhuge-7">
              <div className="w-layout-grid uui-heroheader04_component">
                <div className="uui-heroheader04_content">
                  <h1 className="uui-heading-xlarge-3">
                    {Course.title}
                  </h1>
                  <div className="uui-space-small-3"></div>
                  <div className="uui-max-width-medium-2">
                    <div className="uui-text-size-xlarge-3">
                      {courseDetails.description}
                    </div>
                  </div>
                </div>
                <div className="uui-heroheader04_image-wrapper">
                  <img
                    src={Course.imgSrc}
                    loading="lazy"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 1216px"

                    alt="MacBook mockup"
                    className="uui-heroheader04_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="w-node-faaf701e-5001-aec5-33d1-067d1329b847-b798f64f" className="udesly-container">
        <div className="udesly-title-wrapper-2">
          <div className="udesly-overline-large">about me</div>
          <h2
            data-w-id="faaf701e-5001-aec5-33d1-067d1329b84b"
            style={{
              transform: 'translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0,
            }}
            className="udesly-text-extrabold"
          >
            What made me pop into design?
          </h2>
        </div>
        <div className="udesly-information">
          <div id="w-node-faaf701e-5001-aec5-33d1-067d1329b84e-b798f64f" className="udesly-info-block">
            <p className="udesly-paragraph-large">
              Coderz Academy is to ensure a very strong foundation in computer
              education for students of all ages. We are located in Panruti and
              have provided courses ranging from basic computer skills to
              Microsoft Office and further advanced programming languages such as
              Python and Java. The experienced instructors are dedicated to
              nurturing future tech leaders by ensuring that the students receive
              practical skills to succeed in today&#x27;s digital landscape.
            </p>
            <ul role="list" className="udesly-list-info"></ul>
            <p className="udesly-paragraph-large">
              The courses of Coderz Academy are tailored to the individual
              student&#x27;s needs, thus allowing each learner to develop at his
              or her own pace and proficiency.
            </p>
          </div>
          <div id="w-node-faaf701e-5001-aec5-33d1-067d1329b85d-b798f64f" className="udesly-info-block">
            <p className="udesly-paragraph-large">
              Coderz Academy is an educational institution located in Panruti,
              Cuddalore district, which teaches basic to advanced levels of
              computing and programming. We offer classes in Microsoft office, C,
              C++, Python, Java, HTML, CSS, JavaScript, and accounting with Tally
              Prime and more. Our focus will be on youthful talent and handing
              over skills for a career upsurge in the high-tech industry in the
              near future.
            </p>
            <p className="udesly-paragraph-large">
              We supports students by interactive coding opportunities and
              personalized tutoring. Highly dedicated teachers inculcate
              creativity and thought-provoking skills that provide learners a good
              foothold for excellent careers in tech and coding.
            </p>
            <p className="udesly-paragraph-large">
              Join Coderz Academy Level up your computer literacy and coding
              skills<br />to equip yourself for a bright and thriving tech career
              . Lessons with experienced instructors available to 6th grade
              onwards students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courseDetails;
