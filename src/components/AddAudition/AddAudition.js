import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import "./AddAudition.scss";

function AddAudition() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5050/auditions/add`, {
        id: 145,
        project: e.target.project.value,
        role: e.target.role.value,
        deadline: e.target.deadline.value,
        status: e.target.status.value,
        casting: e.target.casting.value,
        network: e.target.network.value,
      })
      .then((res) => {
        console.log(res.data);
        setFormData({});
        navigate(`/`);
      })
      .catch((err) => console.log(err));
  };

  const [formData, setFormData] = useState({
    id: "",
    project: "",
    role: "",
    casting: "",
    network: "",
    deadline: "",
    status: "",
  });
  console.log(handleSubmit);
  return (
    <div className="page-wrapper">
      <Header />
      <div className="auth-form__container">
        {/* <h2 className="zoom">Add Audition</h2> */}

        <form className="auth-form__login" onSubmit={handleSubmit}>
          <label className="auth-form__label" htmlFor="project">
            Project
          </label>
          <textarea
            id="project"
            className="auth-form__input"
            placeholder="Project Name"
          ></textarea>
          <label className="auth-form__label" htmlFor="role">
            Role
          </label>
          <textarea
            id="role"
            className="auth-form__input"
            placeholder="Role"
          ></textarea>
          <label className="auth-form__label" htmlFor="casting">
            Casting
          </label>
          <textarea
            id="casting"
            className="auth-form__input"
            placeholder="Casting Director"
          ></textarea>
          <label className="auth-form__label" htmlFor="network">
            Network
          </label>
          <textarea
            id="network"
            className="auth-form__input"
            placeholder="Network"
          ></textarea>
          <label className="auth-form__label" htmlFor="deadline">
            Deadline
          </label>
          <textarea
            id="deadline"
            className="auth-form__input"
            placeholder="Deadline"
          ></textarea>
          <label className="auth-form__label" htmlFor="status">
            Status
          </label>
          <select id="status" className="auth-form__input" placeholder="Status">
            <option value="Please select">Please select</option>
            <option value="Submitted">SUBMITTED</option>
            <option value="Booked">BOOKED</option>
            <option value="Pass">PASSED</option>
            <option value="Request Extension">REQUEST EXTENSION</option>
          </select>
          <button className="auth-form__btn" type="submit">
            Add Audition
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAudition;
