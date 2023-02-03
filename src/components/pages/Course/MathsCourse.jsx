import React, { Component } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from 'react-router-dom'
class MathsCourse extends Component {
  render() {
    return (
      <>
        <div className="breadcrumss">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/course3">
              COURSE
            </Link>
            <Link underline="hover" color="inherit" to="/course4">
              Mathematics(Maths)
            </Link>
            <Typography color="text.primary">View Detail</Typography>
          </Breadcrumbs>
        </div>

        <Container>
          <Row className="text-center">
            <Col>
              {/* <Image
                src="https://images-platform.99static.com//KlBLMX8dQrcq6hZGnxf5HSnG29I=/8x543:50x100/fit-in/50x50/99designs-contests-attachments/123/123360/attachment_123360235"
                alt="Maths Course"
                fluid
              /> */}
              <h1>Flutter programming course</h1>
              <p>
                Học các kiến thức toán học cơ bản và nâng cao trong môi trường
                học tập trực tuyến tiên tiến.
              </p>
              <Button variant="primary">Đăng ký ngay</Button>
            </Col>
          </Row>
          <div>
            <h2>INTRODUCE FLUTTER </h2>
            <h3>FLUTTER</h3>
            <p>
              Flutter was developed to solve common problems in mobile, Fast
              Development and Native Performance. If React Native only ensures
              Fast Development and pure native code only ensures Native
              Performance, then Flutter can do both of the above
            </p>
            <p>
              Flutter is an open source mobile app development SDK created out
              by Google.
            </p>
            <p>Flutter excels thanks to factors such as:</p>
            <p>
              - Rapid App Development: Its hot reload feature makes it quick and
              easy to test, build user interfaces, add features, and fix bugs
              faster. Experience a second reload, without losing state, on
              emulators, simulators and devices for iOS and Android.
            </p>
            <p>
              - Beautiful and expressive UI: Indulge your users with beautiful
              Material Design and Cupertino (iOS-flavor) built-in widgets, rich
              motion APIs, smooth natural scrolling, and background self-aware
              platform
            </p>
            <p>
              - Use Dart (object-oriented programming language developed by
              Google) to help release or rebuild projects quickly
            </p>
            <p>
              In this course, you will learn from the language used in Flutter,
              Dart, to building a complete application with products such as
              shopping cart, chat, weather forecast, etc. personal projects or
              interviews
            </p>
            <h2>COURSE OBJECTIVES</h2>
            <p>- The course will help you master Flutter knowledge</p>
            <p>
              - The course brings you closer to the real working environment
              from A-Z, helping you to confidently apply for an interview.
            </p>
            <h2>Objects of study</h2>
            <p>
              - Course for beginners to get acquainted with Flutter and mobile
              programming.
            </p>
            <p>- Mobile programmers (iOS native, Android)</p>
            <h2>Conditions of study</h2>
            <p>- Đã biết một ngôn ngữ lập trình bất kì.</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Row>
            <Col>
              <h2>Chủ Đề Chính</h2>
              <ul>
                <li>Số học</li>
                <li>Đại số</li>
                <li>Không gian vecto</li>
                <li>Hàm số</li>
                <li>...</li>
              </ul>
            </Col>
            <Col>
              <h2>Tính Năng Nổi Bật</h2>
              <ul>
                <li>Giảng viên chuyên môn</li>
                <li>Bài tập và kiểm tra hàng tuần</li>
                <li>Hỗ trợ trực tuyến 24/7</li>
                <li>...</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default MathsCourse
