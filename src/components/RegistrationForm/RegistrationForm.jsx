import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };
  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <label htmlFor="name">
        Username
        <input type="text" name="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;
