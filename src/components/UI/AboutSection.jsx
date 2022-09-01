import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">О Нас</h4>
              <h2 className="section__title">
                Добро пожаловать в сервис аренды автомобилей
              </h2>
              <p className="section__description">
                Наши клиенты-это наши боссы, и мы работаем только на них. Вы
                почувствуете максимальный комфорт при пользовании услугами нашей
                компании. 2. Мы передаем автомобили исключительно с полным
                баком. Они всегда прибывают к клиенту чистыми. Наши сотрудники
                стараются предоставить автомобиль как можно быстрее. 3. Каждое
                транспортное средство имеет страховку КАСКО и ОСАГО. 4. У нас вы
                не найдете никаких скрытых платежей. Мы работаем честно! 5.
                Техническая поддержка доступна круглосуточно. Вы всегда можете
                связаться с нами по телефону в случае возникновения проблем с
                сервисом или автомобилем. 6. Если автомобиль сломается, мы
                быстро предоставим вам новый автомобиль.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Клиент очень
                  счастлив.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Клиент очень
                  счастлив.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Клиент очень
                  счастлив.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Клиент очень
                  счастлив.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
