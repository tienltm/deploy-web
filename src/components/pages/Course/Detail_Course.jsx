import React from 'react'
function Detail_Course() {
  return (
    <>
      <div>
        <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">
                First
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">
                Second
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading3">
                    Third
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading4">
                    Fourth
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading5">
                    Fifth
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          class="scrollspy-example"
          tabindex="0"
        >
          <h4 id="scrollspyHeading1">First heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <br />
          <h4 id="scrollspyHeading2">Second heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <h4 id="scrollspyHeading3">Third heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <h4 id="scrollspyHeading4">Fourth heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
          <h4 id="scrollspyHeading5">Fifth heading</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that
            as you scroll down the page, the appropriate navigation link is
            highlighted. It's repeated throughout the component example. We keep
            adding some more example copy here to emphasize the scrolling and
            highlighting.
          </p>
        </div>
      </div>
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
                                src="images/courses/acn_pro.jpg"
                                alt=""
                                className="img-responsive"
                              />
                              <div className="caption">
                                <h4>Program ACN Pro</h4>
                                <p>
                                  Aptech Certified Next-Generation Professional
                                  (ACN Pro) is the program for the future
                                  future. The program will train the
                                  technologies of new generation – such as:
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
                                src="images/courses/courses-img1.jpg"
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
                                src="images/courses/courses-img2.jpg"
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
                      <div className="thumbnail"> <img src="images/courses/courses-img3.jpg" alt="" className="img-responsive">
                        <div className="caption">
                          <h4>Khoá học dành cho người mới bắt đầu</h4>
                          <p>Khoá học dành cho người mới bắt đầu được thiết kế cho những học viên trẻ, những sinh viên còn đang trong giảng đường đại học hoặc vừa tốt nghiệp và muốn khám phá và bắt đầu từ những bước đi đầu tiên trong lĩnh vực Công Nghệ Thông Tin.</p>
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
    </>
  )
}
export default Detail_Course
