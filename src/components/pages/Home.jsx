import React, { useEffect } from 'react'
// import '../../App.css'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
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
                Thông tin về Aptech
              </h2>
              <div className="wrap-title" />
              <p className="lead wow fadeInUp animated delay-02">
                Aptech là công ty đi tiên phong trong lĩnh vực đào tạo Công Nghệ
                Thông Tin và Truyền Thông Đa Phương Tiện, là công ty giáo dục
                nghề nghiệp toàn cầu hàng đầu thế giới có trụ sở tại Mumbai, Ấn
                Độ. Chúng tôi đã có kinh nghiệm đào tạo từ năm 1986.
              </p>
              <p className="lead wow fadeInUp animated delay-03">
                Với các trung tâm có mặt rộng khắp tại Việt Nam, Aptech thực sự
                đã trở thành một trung tâm đào tạo uy tín theo chuẩn quốc tế.
                <br />
                Từ Hà Nội tới Thành phố Hồ Chí Minh. Vì vậy dẫu bạn đang ở đâu
                thì Aptech luôn nằm trong tầm tay của bạn. Tất cả các trung tâm
                Aptech tại Việt Nam đều phù hợp với các tiêu chuẩn quốc tế.
                Ngoài phương thức đào tạo được giảng viên hướng dẫn trực tiếp,
                thì ở các trung tâm đều áp dụng đào tạo trực tuyến và kiểm tra
                trực tuyến.
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
                  năm
                </h3>
              </div>
              <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4 text-center">
                <div className="hexagon wow fadeIn animated delay-03">
                  <div className="i-icon2 wow zoomInUp animated delay-04" />
                </div>
                <h3 className="wow fadeInLeft animated delay-04">
                  40
                  <br />
                  quốc gia
                </h3>
              </div>
              <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4 text-center">
                <div className="hexagon wow fadeIn animated delay-04">
                  <div className="i-icon3 wow zoomInUp animated delay-05" />
                </div>
                <h3 className="wow fadeInLeft animated delay-05">
                  1,350
                  <br />
                  trung tâm
                </h3>
              </div>
            </div>
            <div className="clearfix" />
            <p className="lead wow fadeInUp animated delay-05 margin20">
              Aptech luôn tin rằng có thể khai phá được tiềm năng của mỗi học
              viên và mang sứ mệnh chắp cánh cho hàng triệu chuyên gia ngành
              CNTT cho những doanh nghiệp hàng đầu thế giới. Dựa trên các giáo
              trình cập nhật mới nhất với xu thế công nghệ thế giới, Aptech luôn
              dẫn đầu về việc giáo dục và đào tạo các khoá học từ sơ cấp đến
              chuyên nghiệp.
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
                    <img src="img/icon-sm1.png" alt="" className="stroke" />
                  </span>
                  <h4 className="ui-title-inner decor decor_mod-a">
                    Chất Lượng Đào Tạo
                  </h4>
                </div>
                <p>
                  Aptech liên tục nâng cao &amp; tăng cường chất lượng đào tạo
                </p>
                <p>
                  <a href="quality-education.php.html">Xem them...</a>
                </p>
              </div>
              <div className="col-sm-6 col-lg-3 col-md-3 wow fadeInLeft animated delay-02">
                <div className="advantages-info">
                  <span className="advantages-icon">
                    <img src="img/icon-sm2.png" alt="" className="stroke" />
                  </span>
                  <h4 className="ui-title-inner decor decor_mod-a">
                    Ngành CNTT
                  </h4>
                </div>
                <p>
                  Bạn mơ ước làm việc trong lĩnh vực CNTT? Hãy nắm vững những
                  kiến thức cơ bản về ngành này:
                </p>
                <p>
                  <a href="it-industry.php.html">Xem them...</a>
                </p>
              </div>
              <div className="col-sm-6 col-lg-3 col-md-3 wow fadeInLeft animated delay-03">
                <div className="advantages-info">
                  <span className="advantages-icon">
                    <img src="img/icon-sm3.png" alt="" className="stroke" />
                  </span>
                  <h4 className="ui-title-inner decor decor_mod-a">
                    Sự Nghiệp CNTT
                  </h4>
                </div>
                <p>
                  Ngành CNTT là ngành công nghiệp khổng lồ và đang tiếp tục mở
                  rộng. Với chuyên môn công nghệ, bạn có thể gây dựng sự nghiệp
                  lớn mạnh trên toàn thế giới.
                </p>
                <p>
                  <a href="it-careers.php.html">Xem them...</a>
                </p>
              </div>
              <div className="col-sm-6 col-lg-3 col-md-3 wow fadeInLeft animated delay-04">
                <div className="advantages-info">
                  <span className="advantages-icon">
                    <img src="img/icon-sm4.png" alt="" className="stroke" />
                  </span>
                  <h4 className="ui-title-inner decor decor_mod-a">
                    Cổng học trực tuyến
                  </h4>
                </div>
                <p>
                  Cổng thông tin học tập online 24giờ /7 ngày, truy nhật bất cứ
                  nơi nào, nền tảng nào và bất cứ lúc nào.
                </p>
                <p>
                  <a href="#courses">Xem them...</a>
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
              <h2 className="wow fadeInDown animated">Các khoá học</h2>
              <div className="wrap-title" />
              <div className="container content">
                <div
                  id="carousel-example-generic-1"
                  className="carousel slide no-margin"
                  data-ride="carousel"
                >
                  {/* Indicators */}
                  {/*<ol class="carousel-indicators bottom-10">
              <li data-target="#carousel-example-generic-1" data-slide-to="0" class="active"></li>
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
                                <h4>Chương trình ACN Pro</h4>
                                <p>
                                  Aptech Certified Next-Generation Professional
                                  (ACN Pro) chính là chương trình dành cho tương
                                  lai. Chương trình sẽ đào tạo các công nghệ của
                                  thế hệ mới – như: trí tuệ nhân tạo, machine
                                  learning, deep learning, kiểm tra phần mềm và
                                  nhiều hơn nữa. Chương trình cũng sẽ đào tạo
                                  bạn về lập trình python, R Programming, Thống
                                  kê, v.v.. để giúp bạn trở thành một chuyên gia
                                  sẵn sàng cho sự nghiệp tương lai.
                                </p>
                                <p>
                                  <a href="acnpro-course.php.html">
                                    Xem them...
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
                                  Chương trình đào tạo Lập Trình Viên Quốc Tế
                                </h4>
                                <p>
                                  Đào tạo toàn diện cung cấp những kiến thức từ
                                  nền tảng đến nâng cao về lập trình, quản trị
                                  cơ sở dữ liệu, phát triển ứng dụng, dữ liệu
                                  lớn, điện toán đám mây và kinh nghiệm thực tế
                                  từ các dự án eProject
                                </p>
                                <p>
                                  <a href="accp-course.php.html">Xem them...</a>
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
                                  Chương trình đào tạo Lập Trình Viên Song Bằng
                                  Quốc Tế (ACCP - L5 DC)
                                </h4>
                                <p>
                                  Aptech liên kết cùng NCC UK đào tạo song hành
                                  thực tế, cung cấp cho sinh viên cơ hội nhận
                                  bằng ADSE (do Aptech Ấn Độ cấp) Và L5 DC (do
                                  NCC Anh Quốc cấp), mở ra cơ hội học liên thông
                                  60 trường đại học trên khắp thế giới
                                </p>
                                <p>
                                  <a href="accp-ncc-course.php.html">
                                    Xem them...
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*<div class="col-sm-4 col-lg-4 col-md-4 wow zoomIn animated delay-03">
                      <div class="thumbnail"> <img src="images/courses/courses-img3.jpg" alt="" class="img-responsive">
                        <div class="caption">
                          <h4>Khoá học dành cho người mới bắt đầu</h4>
                          <p>Khoá học dành cho người mới bắt đầu được thiết kế cho những học viên trẻ, những sinh viên còn đang trong giảng đường đại học hoặc vừa tốt nghiệp và muốn khám phá và bắt đầu từ những bước đi đầu tiên trong lĩnh vực Công Nghệ Thông Tin.</p>
                          <p><a href="career-starter.php">Xem them...</a></p>
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
                    src="img/img-onlinevarsity.png"
                    alt=""
                  />
                </h2>
              </div>
            </div>
            <div className="col-md-7">
              <div>
                <h2 className="margin20 wow fadeInRightBig animated delay-02">
                  <img
                    src="images/onlinevarsity.png"
                    alt=""
                    className="img-responsive"
                  />
                </h2>
                <p className="wow fadeInUp animated delay-03">
                  Cổng học trực tuyến là một cổng thông tin học tập độc quyền
                  với một 24x7 truy cập từ bất cứ nơi nào, nền tảng nào, bất cứ
                  lúc nào và bất cứ nơi nào.
                </p>
                <p className="wow fadeInUp animated delay-03">
                  Cổng này cung cấp các công cụ tương tác, các nguồn tài nguyên
                  có giá trị, chuyên gia tư vấn và hướng dẫn để nâng cao kỹ năng
                  của sinh viên bên ngoài lớp học.
                </p>
              </div>
              <div className="margin20">
                <div className="row">
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-04">
                    <figure>
                      <img src="img/icon-onlinever1.png" alt="" />
                      <figcaption>Bài giảng trực tuyến</figcaption>
                    </figure>
                  </div>
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-05">
                    <img src="img/icon-onlinever2.png" alt="" />
                    <figure>
                      <figcaption>Đăng nhập 24/7</figcaption>
                    </figure>
                  </div>
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-06">
                    <img src="img/icon-onlinever3.png" alt="" />
                    <figure>
                      <figcaption>Bấm Go để học</figcaption>
                    </figure>
                  </div>
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-07">
                    <img src="img/icon-onlinever4.png" alt="" />
                    <figure>
                      <figcaption>Chứng nhận</figcaption>
                    </figure>
                  </div>
                  <div className="col-sm-2 col-lg-2 col-md-2 text-center wow fadeInDown animated delay-08">
                    <img src="img/icon-onlinever5.png" alt="" />
                    <figure>
                      <figcaption>Hướng dẫn</figcaption>
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
            <h2 className="wow fadeInDown animated">Trung tâm công nghệ</h2>
            <div className="wrap-title" />
            <div
              id="myCarousel-2"
              className="carousel slide carousel-dark no-margin"
              data-ride="carousel"
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
                            src="images/technologyhub/tech-img1.png"
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-7 wow fadeInRightBig animated">
                      <div>
                        <h3 className="margin20">Dữ liệu lớn</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-1"
                        />
                        <div className="read-more-wrap slider-text">
                          Dữ liệu lớn liên quan đến một tập hợp đặc biệt lớn của
                          dữ liệu được xử lý bởi máy tính để đưa ra các xu
                          hướng, kiểu mẫu, nhận định. Sử dụng đúng công cụ Dữ
                          liệu lớn chúng ta có thể lưu giữ, quản lý, phân tích
                          dữ liệu để nắm được những thông tin quý giá. Theo
                          Gartner,
                          <span className="read-more-target">
                            Dữ liệu lớn tiêu biểu cho tập thông tin mà đặc điểm
                            như khối lượng lớn (Volume), tốc độ cao (Velocity)
                            và đa dạng (Variety) để yêu cầu phương thức phân
                            tích và công nghệ riêng biệt để biến nó thành có giá
                            trị. 3Vs đã được mở rộng để bổ sung đặc tính của dữ
                            liệu lớn.
                            <ul>
                              <li>
                                Volume: Khối lượng - dữ liệu lớn không có mẫu;
                                nó chỉ thực hiện và lần theo những gì diễn ra
                              </li>
                              <li>
                                Velocity: Tốc độ - dữ liệu lớn thường được xử lý
                                thời gian thực
                              </li>
                              <li>
                                Variety: Đa dạng - dữ liệu lớn có thể thu thập
                                từ văn bản, hình ảnh, âm thanh, video, cộng với
                                nó hoàn thành các phần dữ liệu thiếu thông qua
                                tổng hợp dữ liệu
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
                            src="images/technologyhub/tech-img2.png"
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">Hacker mũ trắng</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-2"
                        />
                        <div className="read-more-wrap slider-text">
                          Hacker mũ trắng liên quan đến việc tìm ra sơ hở và lỗ
                          hổng của máy tính và hệ thống thông tin bằng cách nhân
                          bản ý đồ và hành động của tin tặc.
                          <span className="read-more-target">
                            Một hacker mũ trắng là một chuyên gia bảo mật, những
                            người áp dụng các kỹ năng hacking của họ cho các mục
                            đích phòng thủ, bảo vệ an ninh mạng cho các tổ chức.
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
                            src="images/technologyhub/tech-img3.png"
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
                          Internet of Things liên quan đến một mạng lưới những
                          đồ vật/thiết bị có khả năng truyền tải, trao đổi thông
                          tin, dữ liệu qua một mạng duy nhất mà không cần đến sự
                          tương tác trực tiếp giữa người với người, hay người
                          với máy tính. IoT đã phát triển từ sự hội tụ của công
                          nghệ không dây,
                          <span className="read-more-target">
                            công nghệ vi cơ điện tử và Internet. Nói đơn giản là
                            một tập hợp các thiết bị có khả năng kết nối với
                            nhau, với Internet và với thế giới bên ngoài để thực
                            hiện một công việc nào đó. Nó có thể là điện thoại,
                            máy pha cà phê, máy giặt, tai nghe, đèn ngủ, thiết
                            bị đeo và bất cứ thứ gì mà bạn có thể nghĩ đến.
                            <br />
                            <br />
                            Theo Gartner, Inc. (một công ty nghiên cứu và tư vấn
                            công nghệ), sẽ có gần 26 tỷ thiết bị trên IoT vào
                            năm 2020. IoT sẽ là một nền tảng để tạo ra liên kết
                            giữa thế giới thực và hệ thống máy tính, gia tăng
                            hiệu quả và giảm sự can thiệp của con người.
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
                            src="images/technologyhub/tech-img4.png"
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">
                          Thám tử máy tính - Cyber Forensics
                        </h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-4"
                        />
                        <div className="read-more-wrap slider-text">
                          Cyber Forensics là một ngành khoa học điều tra công
                          nghệ cao dựa trên các dữ liệu được lưu trữ trên các
                          thiết bị máy tính như ổ cứng, ổ CD, hay các dữ liệu
                          trên mạng Internet. Mục đích của kỹ thuật này là tìm
                          kiếm và phân tích các dữ liệu trên máy tính, phục vụ
                          cho công tác điều tra tội phạm công
                          <span className="read-more-target">
                            nghệ cao (tin tặc, thông tin tài chính công ty đã bị
                            xóa…), hiểu được chính xác điều gì đã xảy ra với các
                            thiết bị điện toán và ai chịu trách nhiệm về nó, từ
                            đó giúp cho tòa án có được những bằng chứng tội phạm
                            kỹ thuật số chính xác nhất.
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
                            src="images/technologyhub/tech-img5.png"
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
                          .NET Framework là một nền tảng lập trình và cũng là
                          một nền tảng thực thi ứng dụng chủ yếu trên hệ điều
                          hành Microsoft Windows được phát triển bởi Microsoft.
                          .NET framework bao gồm:
                          <span className="read-more-target">
                            <ul>
                              <li>
                                Common Language Runtime – Môi trường phần mềm
                                này là một máy ảo trong đó cung cấp các dịch vụ
                                như an ninh phần mềm, quản lý bộ nhớ, và các xử
                                lý lỗi ngoại lệ.
                              </li>
                              <li>
                                Base Class Libraries – Mã dựng sẵn cho các tác
                                vụ lập trình thấp
                              </li>
                              <li>
                                Development frameworks and technologies – Giải
                                pháp tùy biến, sử dụng lại cho các tác vụ lập
                                trình lớn hơn
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
                            src="images/technologyhub/tech-img6.png"
                            alt=""
                          />
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <h3 className="margin20">Điện toán đám mây</h3>
                        <input
                          type="checkbox"
                          className="read-more-state"
                          id="post-6"
                        />
                        <div className="read-more-wrap slider-text">
                          Điện toán đám mây là cơn sốt mới nhất trong thế giới
                          công nghệ. Nói một cách đơn giản nhất, điện toán đám
                          mây bao gồm các tài nguyên máy tính chia sẻ được ảo
                          hóa và truy cập như là một dịch vụ, thông qua một API.
                          Đám mây cho phép người dùng trong một tổ chức chạy ứng
                          dụng bằng cách
                          <span className="read-more-target">
                            triển khai chúng vào đám mây là một trung tâm dữ
                            liệu ảo.
                            <br />
                            <br />
                            Trong một hệ thống máy tính đám mây, có một sự thay
                            đổi khối lượng công việc đáng kể. Các máy tính cục
                            bộ không còn phải làm tất cả các tác vụ nặng khi
                            chạy các ứng dụng. Mạng của các máy tính cấu thành
                            nên đám mây sẽ làm điều đó. Yêu cầu phần cứng và
                            phần mềm ở phía người dùng được giảm đáng kể. Điều
                            duy nhất mà máy tính của người dùng cần để có thể
                            chạy là phần mềm giao diện của hệ thống điện toán
                            đám mây. Nó có thể đơn giản như một trình duyệt Web
                            và mạng đám mây sẽ làm tất cả các công việc còn lại.
                            <br />
                            <br />
                            Tại sao có thể bỏ lỡ một công nghệ thú vị như thế
                            này? Hãy trang bị cho mình những kiến thức toàn diện
                            nhất về điện toán đám mây để tạo cho mình những ứng
                            dụng độc nhất, đưa chúng lên đám mây và truy cập ở
                            bất kì đâu.
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
                            src="images/technologyhub/tech-img7.png"
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
                          Java là một ngôn ngữ lập trình được sử dụng rộng rãi.
                          Đây là ngôn ngữ lập trình phổ biến nhất được sử dụng
                          với hơn 9 triệu nhà phát triển. Đó là một ngôn ngữ lập
                          trình cao cấp được phát triển bởi Sun Microsystems.
                          Java là một ngôn ngữ hướng đối tượng tương tự như C++,
                          nhưng đơn giản hóa để loại bỏ các
                          <span className="read-more-target">
                            tính năng ngôn ngữ gây ra các lỗi lập trình phổ
                            biến.
                            <br />
                            <br />
                            Có rất nhiều ứng dụng và trang web sẽ không hoạt
                            động trừ khi bạn đã cài đặt Java. Java nhanh, an
                            toàn và đáng tin cậy. Từ máy tính xách tay đến các
                            trung tâm dữ liệu, máy chơi game cho các siêu máy
                            tính khoa học, điện thoại di động đến Internet, Java
                            ở khắp mọi nơi. Java cho phép chúng ta chơi trò chơi
                            trực tuyến, video, âm thanh, trò chuyện với mọi
                            người trên toàn thế giới, ứng dụng ngân hàng, xem
                            hình ảnh 3D và mua hàng trực tuyến. Nó được coi là
                            ngôn ngữ lập kế hoạch tốt nhất để phát triển một ứng
                            dụng cho Web.
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
                            src="images/technologyhub/tech-img8.png"
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
                          IOS (trước đây là iPhone OS) là một hệ điều hành di
                          động được sáng tạo và phát triển bởi Apple Inc. dành
                          riêng cho các phần cứng của họ. Đây là hệ điều hành
                          hiện được sử dụng cho các thiết bị di động của công
                          ty, bao gồm iPhone, iPad và iPod Touch. Không giống
                          như điện thoại Windows của Microsoft
                          <span className="read-more-target">
                            và Android của Google, Apple không cấp phép cho iOS
                            để cài đặt trên những phần cứng không phải của
                            Apple. <br />
                            <br />
                            Ngôn ngữ được sử dụng để tạo ứng dụng cho các ứng
                            dụng iPhone, iPad và Mac OSX là Swift. Theo
                            Statista, App Store của Apple đã có 2,2 triệu ứng
                            dụng vào năm 2017.
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
                            src="images/technologyhub/tech-img9.png"
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
                          Android là một hệ điều hành dựa trên Linux dành cho
                          Điện thoại di động. Nó được thiết kế chủ yếu cho các
                          thiết bị di động màn hình cảm ứng như điện thoại thông
                          minh và máy tính bảng. Android, Inc. được thành lập
                          tại Mỹ vào năm 2003 và được mua lại bởi
                          <span className="read-more-target">
                            Google vào năm 2005. Nó đã tích hợp Java Virtual
                            Machine.
                            <br />
                            <br />
                            Android có một cộng đồng lớn các nhà phát triển viết
                            các ứng dụng mở rộng chức năng của thiết bị, được
                            viết chủ yếu bằng phiên bản ngôn ngữ lập trình Java.
                            Theo Statista, người dùng Android đã có 2,8 triệu
                            ứng dụng vào năm 2017.
                          </span>
                        </div>
                        <label htmlFor="post-9" className="read-more-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel-2"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel-2"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
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
              Chia sẻ của những học viên Aptech
            </h2>
            <div className="wrap-title-yellow" />
            <div
              id="myCarousel-3"
              className="carousel slide carousel-dark no-margin"
              data-ride="carousel"
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
                                src="images/testimonials/testim-img1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Khóa học xuất sắc, dễ dàng theo dõi, được học
                                  với những giáo viên đầy kinh nghiệm.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Lương Thị Anh Vũ
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> FPT HCMC*/}
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
                                src="images/testimonials/testim-img25.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Điều mình cho là quan trọng nhất khi tham gia
                                  vào APTECH là team work - "sức mạnh tập thể".
                                  Làm thế nào để nhiều người cùng tham gia thực
                                  hiện dự án một cách suôn sẽ là điều mà mình
                                  chưa từng nghĩ tới trong suốt thời gian "một
                                  mình một ngựa" chiến đấu trước đó. Ngoài ra,
                                  giáo trình học của APTECH cũng rất hiện đại:
                                  chi tiết và được cập nhật liên tục.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Lê Anh Quân
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> BK Aptech*/}
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
                                src="images/testimonials/testim-img26.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Các giảng viên tại Aptech chính là những người
                                  đã truyền cảm hứng, giúp mình hoàn thiện bản
                                  thân và định hướng được con đường tương lai
                                  riêng.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Phạm Nhật Trường
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> BK Aptech*/}
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
                                src="images/testimonials/testim-img27.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Tại Aptech, dưới sự gợi mở của những người
                                  thầy, người cô tận tình hướng dẫn, mình được
                                  chỉ dạy những kiến thức cần nhất mà một lập
                                  trình viên cần phải có. Đó là cách tư duy rõ
                                  ràng, những nền tảng cập nhật nhất về phần
                                  mềm, các công nghệ mới trên cơ sở những nguyên
                                  lý truyền thống…Mình được trang bị đầy đủ nhất
                                  về cả kiến thức và tinh thần, để sẵn sàng bước
                                  chân vào ngành IT đầy thử thách.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Lê Quang Hiệu
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> BK Aptech*/}
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
                                src="images/testimonials/testim-img28.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Mình thấy yêu nghề và yêu “người của nghề“
                                  hơn. Các thầy ở đây luôn động viên, tạo điều
                                  kiện cho mình trong khi mình có nhiều thứ phải
                                  học ngoài Aptech. Các bạn trên Aptech thì rất
                                  thân thiện. Đặc biệt môi trường học tập cực kỳ
                                  năng động, sáng tạo, vui vẻ,…
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Nguyễn Khánh Minh
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
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
                                src="images/testimonials/testim-img29.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Không gian học của trường cũng cực kỳ hay.
                                  Thầy cô giáo tận tình. Trong những giờ học
                                  không nhất thiết phải gò bó, có thể phát huy
                                  tất cả những ý tưởng hay những thứ muốn làm,
                                  miễn là không rời khỏi nội dung học…
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Dương Viết Cường
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
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
                                src="images/testimonials/testim-img30.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  APTECH là cái nôi để mình trưởng thành hơn.
                                  Tại APTECH, mình được trải qua tất cả các khâu
                                  khi thực hành dự án, nên về sau này khi làm
                                  việc chính thức, mình không còn bỡ ngỡ và có
                                  thể giải quyết mọi tình huống một cách nhanh
                                  chóng.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Ngô Thu Huyền
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
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
                                src="images/testimonials/testim-img31.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Lúc học tại Aptech mình đã viết một ứng dụng
                                  quản lý nhà hàng – một trong những đồ án khá
                                  thú vị nhóm mình đã tự học để lập trình theo
                                  yêu cầu từ giảng viên/trung tâm. Đây là một
                                  trong những điều đặc biệt trong chương trình
                                  học tại đây, mình được thực hành trực tiếp
                                  ngay sau lý thuyết nên nhờ đó ứng dụng được
                                  rất nhanh những kiến thức đã học. Có thể nói
                                  quá trình học tại đây đã hỗ trợ mình rất nhiều
                                  cho những thành tựu ngày hôm nay.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Nguyễn Hữu Quang
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
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
                                src="images/testimonials/testim-img32.jpg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                              <div className="caption1">
                                <p>
                                  Với những kiến thức được học tại Aptech cộng
                                  với kinh nghiệm thực tiễn từ các thầy, ý tưởng
                                  của mình đã rất nhanh chóng được hiện thực
                                  hóa. Chưa bao giờ mình thấy từng lời thầy
                                  giảng trên lớp, những lần thầy chỉ ra chỗ code
                                  sai lại hữu dụng đến vậy.
                                </p>
                                <div className="adjust2">
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  />
                                  Cao Anh Quân
                                  <br />
                                  {/*<i class="fa fa-map-marker" aria-hidden="true"></i> Hue Aptech*/}
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
                class="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel-3"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel-3"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
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
              <h2 className="wow fadeInDown animated">Các đối tác liên kết</h2>
              <div className="wrap-title" />
              <div className="margin30 col-md-6 col-sm-6 wow fadeInLeft animated delay-01">
                <div>
                  <img src="img/middlesex-logo.png" alt="" />
                  <h4 className="margin20">
                    Đại học Middlesex University tại Anh Quốc
                  </h4>
                  <p>
                    Đại học Middlesex là một trường đại học ở phía bắc London,
                    Anh Quốc. Trường toạ lạc tại quận Middlesex, là một quận có
                    lịch sử lâu đời tại Anh. Middlesex tự hào là một trong những
                    trường được sinh viên quốc tế chọn học khoá học Đại học và
                    sau Đại học đông nhất ở Anh. Bằng việc cung cấp những nội
                    dung chương trình học dựa trên nền tảng nghiên cứu sáng tạo,
                    môi trường thực hành chuyên nghiệp, bên cạnh đó cũng có
                    nhiều học bổng cho các sinh viên xuất sắc.
                  </p>
                  {/*<p><a href="#">Xem them...</a></p>*/}
                </div>
              </div>
              <div className="margin30 col-md-6 col-sm-6 wow fadeInLeft animated delay-02">
                <div>
                  <img src="img/ncc.png" alt="" />
                  <h4 className="margin20">NCC Education, UK</h4>
                  <p>
                    NCC Education là tổ chức giáo dục cấp cao hàng đầu Anh Quốc.
                    Được thành lập cách đây 40 năm, bằng cấp của NCC Education
                    đảm bảo cho học viên tiếp tục ứng tuyển và nhập học tại hơn
                    60 trường đại học tại Anh và các nước khác. Chất lượng đào
                    tạo và quá trình cấp bằng của NCC được kiểm định bởi văn
                    phòng Qualifications &amp; Examinations Regulator (OfQual).
                    Học viên sẽ được nhận bằng cấp toàn cầu từ NCC Diploma in
                    Computing (L5 DC) và có được những lợi thế cạnh tranh dẫn
                    đầu và khác biệt.
                  </p>
                  {/*<p><a href="#">Xem them...</a></p>*/}
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
              Trở thành đối tác kinh doanh
            </h2>
            <div className="wrap-title" />
            <p style={{ textAlign: 'center' }}>
              Để biết chi tiết, mời Anh Chị vui lòng
              <a
                href="http://aptechvietnam.vn/franchise/"
                title="nhấn vào đây"
                style={{ color: '#ffc800', textDecoration: 'underline' }}
              >
                nhấn vào đây
              </a>
              để truy cập trang web nhượng quyền tại Việt Nam cùng Aptech.
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
                        placeholder="Họ & Tên"
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
                        placeholder="Điện thoại di động"
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
                      {/*<input type="text" class="form-control" name='country' id="country" placeholder='Thành phố bạn muốn mở trung tâm'/>*/}
                      <select
                        className="form-control"
                        name="cityDropDownList"
                        id="cityfranchise"
                      >
                        <option value={-1}>
                          Thành phố bạn muốn mở trung tâm
                        </option>
                        <option value="Bà Rịa - Vũng Tàu">
                          Bà Rịa - Vũng Tàu
                        </option>
                        <option value="Bắc Giang">Bắc Giang</option>
                        <option value="Bắc Kạn">Bắc Kạn</option>
                        <option value="Bạc Liêu">Bạc Liêu</option>
                        <option value="Bắc Ninh">Bắc Ninh</option>
                        <option value="Bến Tre">Bến Tre</option>
                        <option value="Bình Định">Bình Định</option>
                        <option value="Bình Dương">Bình Dương</option>
                        <option value="Bình Phước">Bình Phước</option>
                        <option value="Bình Thuận">Bình Thuận</option>
                        <option value="Cà Mau">Cà Mau</option>
                        <option value="Cần Thơ">Cần Thơ</option>
                        <option value="Cao Bằng">Cao Bằng</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Đắk Lắk">Đắk Lắk</option>
                        <option value="Đắk Nông">Đắk Nông</option>
                        <option value="Điện Biên">Điện Biên</option>
                        <option value="Đồng Nai">Đồng Nai</option>
                        <option value="Đồng Tháp">Đồng Tháp</option>
                        <option value="Gia Lai">Gia Lai</option>
                        <option value="Hà Giang">Hà Giang</option>
                        <option value="Hà Nam">Hà Nam</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Hà Tĩnh">Hà Tĩnh</option>
                        <option value="Hải Dương">Hải Dương</option>
                        <option value="Hải Phòng">Hải Phòng</option>
                        <option value="Hậu Giang">Hậu Giang</option>
                        <option value="Hòa Bình">Hòa Bình</option>
                        <option value="Hưng Yên">Hưng Yên</option>
                        <option value="Khánh Hòa">Khánh Hòa</option>
                        <option value="Kiên Giang">Kiên Giang</option>
                        <option value="Kon Tum">Kon Tum</option>
                        <option value="Lai Châu">Lai Châu</option>
                        <option value="Lâm Đồng">Lâm Đồng</option>
                        <option value="Lạng Sơn">Lạng Sơn</option>
                        <option value="Lào Cai">Lào Cai</option>
                        <option value="Long An">Long An</option>
                        <option value="Nam Định">Nam Định</option>
                        <option value="Nghệ An">Nghệ An</option>
                        <option value="Ninh Bình">Ninh Bình</option>
                        <option value="Ninh Thuận">Ninh Thuận</option>
                        <option value="Phú Thọ">Phú Thọ</option>
                        <option value="Phú Yên">Phú Yên</option>
                        <option value="Quảng Bình">Quảng Bình</option>
                        <option value="Quảng Nam">Quảng Nam</option>
                        <option value="Quảng Ngãi">Quảng Ngãi</option>
                        <option value="Quảng Ninh">Quảng Ninh</option>
                        <option value="Quảng Trị">Quảng Trị</option>
                        <option value="Sóc Trăng">Sóc Trăng</option>
                        <option value="Sơn La">Sơn La</option>
                        <option value="Tây Ninh">Tây Ninh</option>
                        <option value="Thái Bình">Thái Bình</option>
                        <option value="Thái Nguyên">Thái Nguyên</option>
                        <option value="Thanh Hóa">Thanh Hóa</option>
                        <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                        <option value="Tiền Giang">Tiền Giang</option>
                        <option value="TP HCM">TP HCM</option>
                        <option value="Trà Vinh">Trà Vinh</option>
                        <option value="Tuyên Quang">Tuyên Quang</option>
                        <option value="Vĩnh Long">Vĩnh Long</option>
                        <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                        <option value="Yên Bái">Yên Bái</option>
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
                        placeholder="Lời nhắn"
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
                        onclick="validationEnquiry();"
                      >
                        <i className="fa fa-share" />
                        &nbsp;Gửi
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
      {/* <Footer /> */}
    </>
  )
}

export default Home
