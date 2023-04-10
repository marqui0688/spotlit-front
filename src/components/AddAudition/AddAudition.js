import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./AddAudition.scss";
import { useNavigate } from "react-router-dom";

function AddAudition() {
  const id = uuid();
  const { auditionId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const [formData, setFormData] = useState({
    id: id,
    project: "",
    role: "",
    casting: "",
    network: "",
    deadline: "",
    status: "",
  });
  return (
    <form className="auth-form__login" onSubmit={handleSubmit}>
      <label className="auth-form__label" htmlFor="project">
        Project
      </label>
      <input
        className="auth-form__input"
        value={formData.audition.project}
        onChange={(e) => setEmail(e.target.value)}
        type="pro"
        placeholder="Project Name"
      />
      <label className="auth-form__label" htmlFor="Password">
        Password
      </label>
      <input
        className="auth-form__input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <Link to="/">
        <button className="auth-form__btn" type="submit">
          Log In
        </button>
      </Link>
    </form>
  );
}
export default AddAudition;
