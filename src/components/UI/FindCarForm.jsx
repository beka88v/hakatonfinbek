import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="От адресса" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Адресовать" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Дата поездки" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Автомобиль Переменого Тока</option>
            <option value="non-ac">Автомобиль Без Кондера </option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">найти машину </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
