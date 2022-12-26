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
  // Defining WOW
  // useEffect(() => {
  //   new WOW.WOW().init()
  //   // console.log(user)
  // }, [])
  return (
    // <div className="abc">
    //   <img src="./Hero.png" alt="" />
    // </div>

    <>
      {/* <HeroSection /> */}
      {/* <HomepageSlider /> */}
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
                  {' '}
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
                  {' '}
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
                  {' '}
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
                  {' '}
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
      {/* <Cards /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home
