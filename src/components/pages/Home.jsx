import React from 'react'
import '../../App.css'
// import Cards from '../Cards'
// import HeroSection from '../HeroSection'
import Footer from '../Footer'
import HomepageSlider from '../Carousel/Carousel'
import './Home.css'
// import 'animate.css'
// import WOW from './wow.js'

function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <HomepageSlider />
      {/*  -------OUT_LINE ABOUT--------- */}
      <div>
        <div className="full-bg-white" id="about">
          <div className="container">
            <div className="row">
              <h2 className="wow wow fadeInDown animated delay-01">
                About Aptech
              </h2>
              <div className="wrap-title" />
              <p className="lead wow fadeInUp animated delay-02">
                Aptech is a pioneer in the field of Technology training
                Information and Multimedia, is an education company world
                leading global careers based in Mumbai, India Degree. We have
                had training experience since 1986.
              </p>
              <p className="lead wow fadeInUp animated delay-03">
                With centers widely present in Vietnam, Aptech really has become
                a prestigious training center according to international
                standards.
                <br />
                From Hanoi to Ho Chi Minh City. So no matter where you are
                Aptech is always at your fingertips. All centers Aptech in
                Vietnam are in line with international standards. In addition to
                the training method directly guided by the instructor, All
                centers apply online training and testing online.
                <br />
              </p>
            </div>
            <div className="clearfix" />
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4 text-center">
                <div className="hexagon wow fadeIn animated delay-02">
                  <div className="i-icon1 wow zoomInUp animated delay-03" />
                </div>
                <h3 className="wow fadeInLeft animated delay-03">
                  32
                  <br />
                  year
                </h3>
              </div>
              <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4 text-center">
                <div className="hexagon wow fadeIn animated delay-03">
                  <div className="i-icon2 wow zoomInUp animated delay-04" />
                </div>
                <h3 className="wow fadeInLeft animated delay-04">
                  40
                  <br />
                  nation
                </h3>
              </div>
              <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4 text-center">
                <div className="hexagon wow fadeIn animated delay-04">
                  <div className="i-icon3 wow zoomInUp animated delay-05" />
                </div>
                <h3 className="wow fadeInLeft animated delay-05">
                  1,350
                  <br />
                  center
                </h3>
              </div>
            </div>
            <div className="clearfix" />
            <p className="lead wow fadeInUp animated delay-05 margin20">
              Aptech always believes that it is possible to unlock the potential
              of each student members and bring the mission to give wings to
              millions of industry professionals IT for the world's leading
              businesses. Based on the teachers Latest update with world
              technology trends, Aptech always Leading the way in education and
              training courses from elementary to professionally.
            </p>
          </div>
        </div>
        <div className="clearfix" />
        <div className="full-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3 col-md-3 wow fadeInLeft animated delay-01">
                <div className="advantages-info">
                  <span className="advantages-icon">
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon-sm1.png'}
                      alt=""
                      className="stroke"
                    />
                  </span>
                  <h4 className="ui-title-inner decor decor_mod-a">
                    Education quality
                  </h4>
                </div>
                <p>
                  Aptech is continuously improving &amp; improve the quality of
                  training
                </p>
                <p>
                  <a href="/">Read More...</a>
                </p>
              </div>
              <div className="col-sm-6 col-lg-3 col-md-3 wow fadeInLeft animated delay-02">
                <div className="advantages-info">
                  <span className="advantages-icon">
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon-sm2.png'}
                      alt=""
                      className="stroke"
                    />
                  </span>
                  <h4 className="ui-title-inner decor decor_mod-a">
                    IT industry
                  </h4>
                </div>
                <p>
                  Do you dream of working in the IT field? Take hold of the
                  Basic knowledge of this industry:
                </p>
                <p>
                  <a href="it-industry.php.html">Read More...</a>
                </p>
              </div>
              <div className="col-sm-6 col-lg-3 col-md-3 wow fadeInLeft animated delay-03">
                <div className="advantages-info">
                  <span className="advantages-icon">
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon-sm3.png'}
                      alt=""
                      className="stroke"
                    />
                  </span>
                  <h4 className="ui-title-inner decor decor_mod-a">
                    IT Career
                  </h4>
                </div>
                <p>
                  The IT industry is huge and continues to open wide. With tech
                  expertise, you can build a career growing around the world.
                </p>
                <p>
                  <a href="it-careers.php.html">Read More...</a>
                </p>
              </div>
              <div className="col-sm-6 col-lg-3 col-md-3 wow fadeInLeft animated delay-04">
                <div className="advantages-info">
                  <span className="advantages-icon">
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon-sm4.png'}
                      alt=""
                      className="stroke"
                    />
                  </span>
                  <h4 className="ui-title-inner decor decor_mod-a">
                    Online learning portal
                  </h4>
                </div>
                <p>
                  Online learning portal 24 hours / 7 days, access any any
                  place, any platform and any time.
                </p>
                <p>
                  <a href="#courses">Read More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------OUT_LINE COURSE--------- */}
      <div>
        <div className="clearfix" />
        <div className="full-bg-lite" id="course">
          <div className="container">
            <div className="row">
              <h2 className="wow fadeInDown animated">Course</h2>
              <div className="wrap-title" />
              <div className="container content">
                <div
                  id="carousel-example-generic-1"
                  className="carousel slide no-margin"
                  data-bs-ride="carousel"
                >
                  {/* Indicators */}
                  {/*<ol className="carousel-indicators bottom-10">
              <li data-target="#carousel-example-generic-1" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic-1" data-slide-to="1"></li>
            </ol>*/}
                  {/* Wrapper for slides */}
                  <div className="carousel-inner">
                    <div className="row">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-sm-4 col-lg-4 col-md-4 wow zoomIn animated delay-01">
                            <div className="thumbnail">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/courses/acn_pro.jpg'
                                }
                                alt=""
                                className="img-responsive"
                              />
                              <div className="caption">
                                <h4>Program ACN Pro</h4>
                                <p>
                                  Aptech Certified Next-Generation Professional
                                  (ACN Pro) is the program for the future
                                  future. The program will train the
                                  technologies of new generation ??? such as:
                                  artificial intelligence, machine learning,
                                  deep learning, software testing and more and
                                  more. The program will also train you about
                                  programming python, R Programming, Mini
                                  millet, etc. to help you become an expert Get
                                  ready for your future career.
                                </p>
                                <p>
                                  <a href="acnpro-course.php.html">
                                    Read More...
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-lg-4 col-md-4 wow zoomIn animated delay-01">
                            <div className="thumbnail">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/courses/courses-img1.jpg'
                                }
                                alt=""
                                className="img-responsive"
                              />
                              <div className="caption">
                                <h4>
                                  International Programmer Training Program
                                </h4>
                                <p>
                                  Comprehensive training provides knowledge from
                                  foundation to advanced in programming,
                                  administration database, application
                                  development, data big, cloud computing and
                                  real experience from eProject projects
                                </p>
                                <p>
                                  <a href="accp-course.php.html">
                                    Read More...
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-lg-4 col-md-4 wow zoomIn animated delay-02">
                            <div className="thumbnail">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/courses/courses-img2.jpg'
                                }
                                alt=""
                                className="img-responsive"
                              />
                              <div className="caption">
                                <h4>
                                  Parallel Programmer Training Program
                                  International (ACCP - L5 DC)
                                </h4>
                                <p>
                                  Aptech cooperates with NCC UK for parallel
                                  training practical, provide students with the
                                  opportunity to receive by ADSE (granted by
                                  Aptech India) and L5 DC (issued by NCC UK),
                                  opens the opportunity to study continuously 60
                                  universities around the world
                                </p>
                                <p>
                                  <a href="accp-ncc-course.php.html">
                                    Read More...
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*<div className="col-sm-4 col-lg-4 col-md-4 wow zoomIn animated delay-03">
                      <div className="thumbnail"> <img src={process.env.PUBLIC_URL + "/images/courses/courses-img3.jpg" } alt="" className="img-responsive">
                        <div className="caption">
                          <h4>Kho?? h???c d??nh cho ng?????i m???i b???t ?????u</h4>
                          <p>Kho?? h???c d??nh cho ng?????i m???i b???t ?????u ???????c thi???t k??? cho nh???ng h???c vi??n tr???, nh???ng sinh vi??n c??n ??ang trong gi???ng ???????ng ?????i h???c ho???c v???a t???t nghi???p v?? mu???n kh??m ph?? v?? b???t ?????u t??? nh???ng b?????c ??i ?????u ti??n trong l??nh v???c C??ng Ngh??? Th??ng Tin.</p>
                          <p><a href="career-starter.php">Read More...</a></p>
                        </div>
                      </div>
                                        </div>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Controls */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      {/* -------OUT_LINE COURSE ONLINE--------- */}
      <section id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="center wow fadeInLeftBig animated delay-01">
                <h2>
                  <img
                    className="img-responsive"
                    src={process.env.PUBLIC_URL + '/img/img-onlinevarsity.png'}
                    alt=""
                  />
                </h2>
              </div>
            </div>
            <div className="col-md-7">
              <div>
                <h2 className="margin20 wow fadeInRightBig animated delay-02">
                  <img
                    src={process.env.PUBLIC_URL + '/images/onlinevarsity.png'}
                    alt=""
                    className="img-responsive"
                  />
                </h2>
                <p className="wow fadeInUp animated delay-03">
                  The e-learning portal is an exclusive learning portal with a
                  24x7 access from anywhere, any platform, anywhere anytime and
                  anywhere.
                </p>
                <p className="wow fadeInUp animated delay-03">
                  This portal provides interactive tools, resources Valuable,
                  expert advice and guidance to improve skills of students
                  outside the classroom.
                </p>
              </div>
              <div className="margin20">
                <div className="row">
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-04">
                    <figure>
                      <img
                        src={
                          process.env.PUBLIC_URL + '/img/icon-onlinever1.png'
                        }
                        alt=""
                      />
                      <figcaption>Online lectures</figcaption>
                    </figure>
                  </div>
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-05">
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon-onlinever2.png'}
                      alt=""
                    />
                    <figure>
                      <figcaption>Login 24/7</figcaption>
                    </figure>
                  </div>
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-06">
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon-onlinever3.png'}
                      alt=""
                    />
                    <figure>
                      <figcaption>Click Go to learn</figcaption>
                    </figure>
                  </div>
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-07">
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon-onlinever4.png'}
                      alt=""
                    />
                    <figure>
                      <figcaption>Certifications</figcaption>
                    </figure>
                  </div>
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-08">
                    <img
                      src={process.env.PUBLIC_URL + '/img/icon-onlinever5.png'}
                      alt=""
                    />
                    <figure>
                      <figcaption>Guide</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />
      {/* -------OUT_LINE TECH ONLINE--------- */}
      <section className="full-bg-lite" id="tech">
        <div className="container">
          <div className="row">
            <h2 className="wow fadeInDown animated">Technology Center</h2>
            <div className="wrap-title" />
            <div
              id="myCarousel-2"
              className="carousel slide carousel-dark no-margin"
              data-bs-ride="carousel"
            >
              {/* Indicators */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-5 wow fadeInUp animated">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img1.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-7 wow fadeInRightBig animated">
                      <div>
                        <h3 className="margin20">Big Data</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-1"
                        />
                        <div className="read-more-wrap slider-text">
                          Big data involves a particularly large set of The data
                          is processed by the computer to produce the coins
                          direction, pattern, judgment. Using the right Data
                          tools large data can we store, manage, analyze data to
                          capture valuable information. According to the
                          Gartner,
                          <span className="read-more-target">
                            Big data represents an information set whose
                            characteristics such as large volume (Volume), high
                            speed (Velocity) and variety (Variety) to require
                            the method of distribution separate analysis and
                            technology to make it valuable treat. 3Vs has been
                            extended to add data properties whether big.
                            <ul>
                              <li>
                                Volume: Volume - big data without samples; it
                                just executes and tracks what happens
                              </li>
                              <li>
                                Velocity: Speed - big data is often processed
                                real time
                              </li>
                              <li>
                                Variety: Diversity - big data can be collected
                                from text, images, audio, video, plus it
                                completes the missing data pieces through Data
                                synthesis
                              </li>
                            </ul>
                          </span>
                        </div>
                        <label htmlFor="post-1" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img2.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">White Hat Hacker</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-2"
                        />
                        <div className="read-more-wrap slider-text">
                          White hat hackers are concerned with finding loopholes
                          and holes vulnerabilities of computers and information
                          systems by multiplying hackers' intentions and
                          actions.
                          <span className="read-more-target">
                            A white hat hacker is a security expert who who
                            apply their hacking skills to items defense
                            purposes, protecting network security for
                            organizations.
                          </span>
                        </div>
                        <label htmlFor="post-2" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img3.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">Internet of Things - IoT</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-3"
                        />
                        <div className="read-more-wrap slider-text">
                          The Internet of Things involves a network of
                          objects/devices capable of transmitting and exchanging
                          information information and data over a single network
                          without the need for direct person-to-person
                          interaction, or person With computer. IoT has evolved
                          from the convergence of technology wireless
                          technology,
                          <span className="read-more-target">
                            micro-mechanical technology and the Internet. Simply
                            put a set of devices capable of connecting to each
                            other, with the Internet, and with the outside world
                            in order to do some work. It could be a phone,
                            coffee machine, washing machine, headphones, night
                            light, appliances wearable and anything you can
                            think of.
                            <br />
                            <br />
                            According to Gartner, Inc. (a research and
                            consulting firm technology), there will be nearly 26
                            billion devices on IoT by 2020. IoT will be a
                            platform for creating links between the real world
                            and the computer system, increasing efficiency and
                            reduced human intervention.
                          </span>
                        </div>
                        <label htmlFor="post-3" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img4.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">
                          Cyber Forensics - Cyber Forensics
                        </h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-4"
                        />
                        <div className="read-more-wrap slider-text">
                          Cyber Forensics is a public investigative science high
                          technology based on the data stored on the computer
                          devices such as hard drives, CD drives, or data on the
                          Intenet. The purpose of this technique is to find
                          Search and analyze data on computers, serve for the
                          investigation of public crimes
                          <span className="read-more-target">
                            high technology (hackers, company financial
                            information has been delete???), understand exactly
                            what happened to the computing device and who is
                            responsible for it, from That helps the court get
                            the criminal evidence The most accurate digital.
                          </span>
                        </div>
                        <label htmlFor="post-4" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img5.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">.NET</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-5"
                        />
                        <div className="read-more-wrap slider-text">
                          .NET Framework is a programming platform and also a an
                          operating system-based application execution platform
                          Microsoft Windows operating system is developed by
                          Microsoft. The .NET framework includes:
                          <span className="read-more-target">
                            <ul>
                              <li>
                                Common Language Runtime ??? Software environment
                                This is a virtual machine which provides
                                services such as software security, memory
                                management, and exception error handling.
                              </li>
                              <li>
                                Base Class Libraries ??? Built-in code for works
                                low programming service
                              </li>
                              <li>
                                Development frameworks and technologies ???
                                Solution Customizable, reusable methods for
                                programming tasks larger program
                              </li>
                            </ul>
                          </span>
                        </div>
                        <label htmlFor="post-5" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img6.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">Cloud Computing</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-6"
                        />
                        <div className="read-more-wrap slider-text">
                          Cloud computing is the latest craze in the world
                          technology. In the simplest terms, cloud computing The
                          cloud consists of virtual shared computing resources
                          and accessed as a service, through an API. The cloud
                          allows users in an organization to run applications
                          use by
                          <span className="read-more-target">
                            deploying them to the cloud is a data center virtual
                            material.
                            <br />
                            <br />
                            In a cloud computing system, there is a change
                            significant workload change. Local computers sets no
                            longer have to do all the heavy lifting when run
                            applications. Network of constituent computers so
                            the cloud will do it. Hardware requirements and
                            software on the user side is greatly reduced. Thing
                            only the user's computer needs to be able to running
                            is the interface software of the computing system
                            cloud. It can be as simple as a Web browser and the
                            cloud network will do all the rest.
                            <br />
                            <br />
                            How could one miss such an exciting technology this?
                            Equip yourself with comprehensive knowledge best in
                            cloud computing to create your own applications
                            unique applications, put them in the cloud and
                            access anywhere.
                          </span>
                        </div>
                        <label htmlFor="post-6" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img7.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">Java</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-7"
                        />
                        <div className="read-more-wrap slider-text">
                          Java is a widely used programming language. This is
                          the most commonly used programming language with over
                          9 million developers. It's a programming language
                          Advanced program developed by Sun Microsystems. Java
                          is an object-oriented language similar to C++. but
                          simplify to remove the
                          <span className="read-more-target">
                            language features that cause common programming
                            errors variable.
                            <br />
                            <br />
                            There are a lot of apps and websites that won't work
                            unless you have Java installed. Java is fast, an
                            complete and reliable. From laptops to laptops data
                            centers, game consoles for super machines science,
                            mobile to the Internet, Java everywhere. Java allows
                            us to play online games, video, audio, chat with
                            everyone people around the world, banking app, watch
                            3D images and online purchases. Seem as The best
                            programming language for developing an app use for
                            the Web.
                          </span>
                        </div>
                        <label htmlFor="post-7" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img8.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">iOS</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-8"
                        />
                        <div className="read-more-wrap slider-text">
                          IOS (formerly iPhone OS) is a mobile operating system
                          Motion created and developed by Apple Inc. spend their
                          own hardware. This is the operating system currently
                          used for company mobile devices company, including
                          iPhone, iPad, and iPod Touch. Unlike like Microsoft's
                          Windows phone
                          <span className="read-more-target">
                            and Google's Android, Apple does not license iOS to
                            install on non- Apple. <br />
                            <br />
                            The language used to create applications for
                            applications Using iPhone, iPad and Mac OSX is
                            Swift. According to the Statista, Apple's App Store
                            has 2.2 million applications used in 2017.
                          </span>
                        </div>
                        <label htmlFor="post-8" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="center">
                        <h2>
                          <img
                            className="img-responsive"
                            src={
                              process.env.PUBLIC_URL +
                              '/images/technologyhub/tech-img9.png'
                            }
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">Android</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-9"
                        />
                        <div className="read-more-wrap slider-text">
                          Android is a Linux-based operating system for Mobile
                          phone. It is mainly designed for the Touch screen
                          mobile devices such as smartphones smart phones and
                          tablets. Android, Inc. established in the US in 2003
                          and was acquired by
                          <span className="read-more-target">
                            Google in 2005. It has integrated Java Virtual
                            Machine.
                            <br />
                            <br />
                            Android has a large community of developers writing
                            Applications that extend the functionality of the
                            device, are written mainly in the Java programming
                            language version. According to Statista, Android
                            users already have 2.8 million application in 2017.
                          </span>
                        </div>
                        <label htmlFor="post-9" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel-2"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel-2"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* -------OUT_LINE STORY ONLINE--------- */}
      <div>
        <div className="clearfix" />
        <section className="full-bg-yellow">
          <div className="container">
            <h2 className="wow fadeInDown animated">
              Chia s??? c???a nh???ng h???c vi??n Aptech
            </h2>
            <div className="wrap-title-yellow" />
            <div
              id="myCarousel-3"
              className="carousel slide carousel-dark no-margin"
              data-bs-ride="carousel"
            >
              {/* Indicators */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img1.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Excellent course, easy to follow, learned with
                                  experienced teachers.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  L????ng Th??? Anh V??
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> FPT HCMC*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img25.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  What I consider the most important when
                                  participating in APTECH is team work -
                                  "collective strength". How to get more people
                                  to participate Running the project smoothly is
                                  what I never thought during the "one himself a
                                  horse" fought before. In addition, APTECH's
                                  curriculum is also very modern: detailed and
                                  constantly updated.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  L?? Anh Qu??n
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> BK Aptech*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img26.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  The instructors at Aptech are the ones who
                                  inspired, helped me perfect the version body
                                  and orient the future path private.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Ph???m Nh???t Tr?????ng
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> BK Aptech*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img27.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  At Aptech, under the suggestion of people
                                  teacher, who enthusiastically guided me, I got
                                  only teach the most necessary knowledge that a
                                  programmer must have. That's how to think
                                  clearly Obviously, the most up-to-date
                                  platforms in terms of software, new
                                  technologies on the basis of Traditional
                                  philosophy???I'm the most fully equipped in both
                                  knowledge and spirit, to be ready to step
                                  Enter the challenging IT industry.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  L?? Quang Hi???u
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> BK Aptech*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img28.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  I love the job and love the "people of the
                                  profession" than. The teachers here always
                                  encourage and create things sue me when i have
                                  a lot to do study outside Aptech. You guys on
                                  Aptech are very friendly. Especially the
                                  learning environment is extremely Dynamic,
                                  creative, fun???
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Nguy???n Kh??nh Minh
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img29.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  The school space is also very good. Dedicated
                                  teachers. During school hours It is not
                                  necessary to be constrained, it can be
                                  promoted all the ideas or things you want to
                                  do, as long as you don't leave the learning
                                  content???
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  D????ng Vi???t C?????ng
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img30.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  APTECH is the cradle for me to grow up. At
                                  APTECH, I get to go through all the stages
                                  when doing the project, should come later when
                                  working official work, I am no longer
                                  surprised and have Can handle any situation
                                  quickly fast.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Ng?? Thu Huy???n
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img31.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  While studying at Aptech, I wrote an app
                                  Restaurant management ??? one of the best
                                  projects interesting, my group taught
                                  themselves to program request from the
                                  trainer/center. this is a of the specials in
                                  the program Studying here, I can practice
                                  directly right after the theory, so it can be
                                  applied quickly learned knowledge. Can say
                                  Studying here has helped me a lot for today's
                                  achievements.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Nguy???n H???u Quang
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <div className="adjust1">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12">
                              <img
                                className="media-object rounded-circle img-thumbnail"
                                src={
                                  process.env.PUBLIC_URL +
                                  '/images/testimonials/testim-img32.jpg'
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  With the knowledge learned at Aptech plus with
                                  practical experience from teachers, ideas mine
                                  was very quickly realized chemical. I have
                                  never seen every word of the teacher lectures
                                  in class, the times when the teacher pointed
                                  out the code so useful.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Cao Anh Qu??n
                                  <br />
                                  {/*<i className="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel-3"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel-3"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* -------OUT_LINE PARTNER ONLINE--------- */}
      <div>
        <div className="clearfix" />
        <section className="full-bg-lite" id="partner">
          <div className="container">
            <div className="row">
              <h2 className="wow fadeInDown animated">Our Partner</h2>
              <div className="wrap-title" />
              <div className="margin30 col-md-6 col-sm-6 wow fadeInLeft animated delay-01">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + '/img/middlesex-logo.png'}
                    alt=""
                  />
                  <h4 className="margin20">Middlesex University</h4>
                  <p>
                    Middlesex University is a university in north London,
                    England. The school is located in Middlesex County, a county
                    with Long history in England. Middlesex is proud to be one
                    of the the school is chosen by international students to
                    study undergraduate courses and Post-University is the most
                    crowded in the UK. By providing content curriculum content
                    based on innovative research, professional practice
                    environment, besides there are also many scholarships for
                    excellent students.
                  </p>
                  {/*<p><a href="#">Read More...</a></p>*/}
                </div>
              </div>
              <div className="margin30 col-md-6 col-sm-6 wow fadeInLeft animated delay-02">
                <div>
                  <img src={process.env.PUBLIC_URL + '/img/ncc.png'} alt="" />
                  <h4 className="margin20">NCC Education, UK</h4>
                  <p>
                    NCC Education is the UK's leading institution of higher
                    education. Established 40 years ago, NCC Education degree
                    ensure students continue to apply and enroll at more than 60
                    universities in the UK and other countries. Peach quality
                    NCC's creation and awarding process is accredited by the
                    Qualifications &amp; Examinations Regulator (OfQual).
                    Students will receive a global degree from the NCC Diploma
                    in Computing (L5 DC) and get the leading competitive
                    advantages top and different.
                  </p>
                  {/*<p><a href="#">Read More...</a></p>*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* -------OUT_LINE AGENCY ONLINE--------- */}
      <div>
        <div className="clearfix" />
        <section className="full-bg-grey" id="agency">
          <div className="container">
            <h2 className="wow fadeInDown animated">
              Become a business partner
            </h2>
            <div className="wrap-title" />
            <p style={{ textAlign: 'center' }}>
              For details, please kindly
              <a
                href="http://aptechvietnam.vn/franchise/"
                title="nh???n v??o ????y"
                style={{ color: '#ffc800', textDecoration: 'underline' }}
              >
                click here
              </a>
              to access the franchise website in Vietnam with Aptech.
            </p>
            <div className="col-md-12 col-xs-12 forma margin30">
              <form id="enquiry" name="form" action method="post">
                <div className="row">
                  <div className="col-md-1 col-xs-12 margin5" />
                  <div className="col-md-5 col-xs-12 margin5 wow fadeInLeft animated delay-01">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fa fa-user" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="First & Last Name"
                      />
                    </div>
                    <span className="validation_error_franchise" id="errorname">
                      <span></span>
                    </span>
                  </div>
                  <div className="col-md-5 col-xs-12 margin5 wow fadeInLeft animated delay-02">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        maxLength={15}
                        id="mobile"
                        placeholder="Mobile phone"
                      />
                    </div>
                    <span
                      className="validation_error_franchise"
                      id="errormobile"
                    >
                      <span></span>
                    </span>
                  </div>
                  <div className="col-md-1 col-xs-12 margin5" />
                </div>
                {/* <div className="clearfix" /> */}
                <div className="row">
                  <div className="col-md-1 col-xs-12 margin5" />
                  <div className="col-md-5 col-xs-12 margin5 wow fadeInLeft animated delay-03">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="EMAIL"
                      />
                    </div>
                    <span
                      className="validation_error_franchise"
                      id="erroremail"
                    >
                      <span></span>
                    </span>
                  </div>
                  <div className="col-md-5 col-xs-12 margin5 wow fadeInLeft animated delay-04">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fa fa-globe" aria-hidden="true" />
                      </div>
                      {/*<input type="text" className="form-control" name='country' id="country" placeholder='Th??nh ph??? b???n mu???n m??? trung t??m'/>*/}
                      <select
                        className="form-control"
                        name="cityDropDownList"
                        id="cityfranchise"
                      >
                        <option value={-1}>
                          Th??nh ph??? b???n mu???n m??? trung t??m
                        </option>
                        <option value="B?? R???a - V??ng T??u">
                          B?? R???a - V??ng T??u
                        </option>
                        <option value="B???c Giang">B???c Giang</option>
                        <option value="B???c K???n">B???c K???n</option>
                        <option value="B???c Li??u">B???c Li??u</option>
                        <option value="B???c Ninh">B???c Ninh</option>
                        <option value="B???n Tre">B???n Tre</option>
                        <option value="B??nh ?????nh">B??nh ?????nh</option>
                        <option value="B??nh D????ng">B??nh D????ng</option>
                        <option value="B??nh Ph?????c">B??nh Ph?????c</option>
                        <option value="B??nh Thu???n">B??nh Thu???n</option>
                        <option value="C?? Mau">C?? Mau</option>
                        <option value="C???n Th??">C???n Th??</option>
                        <option value="Cao B???ng">Cao B???ng</option>
                        <option value="???? N???ng">???? N???ng</option>
                        <option value="?????k L???k">?????k L???k</option>
                        <option value="?????k N??ng">?????k N??ng</option>
                        <option value="??i???n Bi??n">??i???n Bi??n</option>
                        <option value="?????ng Nai">?????ng Nai</option>
                        <option value="?????ng Th??p">?????ng Th??p</option>
                        <option value="Gia Lai">Gia Lai</option>
                        <option value="H?? Giang">H?? Giang</option>
                        <option value="H?? Nam">H?? Nam</option>
                        <option value="H?? N???i">H?? N???i</option>
                        <option value="H?? T??nh">H?? T??nh</option>
                        <option value="H???i D????ng">H???i D????ng</option>
                        <option value="H???i Ph??ng">H???i Ph??ng</option>
                        <option value="H???u Giang">H???u Giang</option>
                        <option value="H??a B??nh">H??a B??nh</option>
                        <option value="H??ng Y??n">H??ng Y??n</option>
                        <option value="Kh??nh H??a">Kh??nh H??a</option>
                        <option value="Ki??n Giang">Ki??n Giang</option>
                        <option value="Kon Tum">Kon Tum</option>
                        <option value="Lai Ch??u">Lai Ch??u</option>
                        <option value="L??m ?????ng">L??m ?????ng</option>
                        <option value="L???ng S??n">L???ng S??n</option>
                        <option value="L??o Cai">L??o Cai</option>
                        <option value="Long An">Long An</option>
                        <option value="Nam ?????nh">Nam ?????nh</option>
                        <option value="Ngh??? An">Ngh??? An</option>
                        <option value="Ninh B??nh">Ninh B??nh</option>
                        <option value="Ninh Thu???n">Ninh Thu???n</option>
                        <option value="Ph?? Th???">Ph?? Th???</option>
                        <option value="Ph?? Y??n">Ph?? Y??n</option>
                        <option value="Qu???ng B??nh">Qu???ng B??nh</option>
                        <option value="Qu???ng Nam">Qu???ng Nam</option>
                        <option value="Qu???ng Ng??i">Qu???ng Ng??i</option>
                        <option value="Qu???ng Ninh">Qu???ng Ninh</option>
                        <option value="Qu???ng Tr???">Qu???ng Tr???</option>
                        <option value="S??c Tr??ng">S??c Tr??ng</option>
                        <option value="S??n La">S??n La</option>
                        <option value="T??y Ninh">T??y Ninh</option>
                        <option value="Th??i B??nh">Th??i B??nh</option>
                        <option value="Th??i Nguy??n">Th??i Nguy??n</option>
                        <option value="Thanh H??a">Thanh H??a</option>
                        <option value="Th???a Thi??n Hu???">Th???a Thi??n Hu???</option>
                        <option value="Ti???n Giang">Ti???n Giang</option>
                        <option value="TP HCM">TP HCM</option>
                        <option value="Tr?? Vinh">Tr?? Vinh</option>
                        <option value="Tuy??n Quang">Tuy??n Quang</option>
                        <option value="V??nh Long">V??nh Long</option>
                        <option value="V??nh Ph??c">V??nh Ph??c</option>
                        <option value="Y??n B??i">Y??n B??i</option>
                      </select>
                    </div>
                    <span
                      className="validation_error_franchise"
                      id="errorcityfranchise"
                    >
                      <span></span>
                    </span>
                  </div>
                  <div className="col-md-1 col-xs-12 margin5" />
                </div>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-md-1 col-xs-12 margin5" />
                  <div className="col-md-10 col-xs-12 margin5 wow fadeInLeft animated delay-05">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fa fa-weixin" aria-hidden="true" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="comments"
                        id="comments"
                        placeholder="L???i nh???n"
                      />
                    </div>
                  </div>
                  <div className="col-md-1 col-xs-12 margin5" />
                </div>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-md-1 col-xs-12 margin5" />
                  <div className="col-md-10 col-xs-12 margin5">
                    <div className="cBtn wow zoomIn animated delay-05">
                      <button
                        type="button"
                        id="submitbtn"
                        name="submitbtn"
                        className="send"
                        // onClick="validationEnquiry();"
                      >
                        <i className="fa fa-share" />
                        &nbsp;G???i
                      </button>
                    </div>
                  </div>
                  <div className="col-md-1 col-xs-12 margin5" />
                </div>
                <input
                  type="hidden"
                  id="typeenquiry"
                  name="typeenquiry"
                  defaultValue="enquiry"
                />
              </form>
            </div>
          </div>
        </section>
        <div className="clearfix" />
      </div>
      {/* <Cards /> */}
      <Footer />
    </>
  )
}

export default Home
