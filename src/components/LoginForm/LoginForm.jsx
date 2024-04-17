import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      login({
        email,
        password,
      })
    );
    form.reset();
  };

  // email: "dvdscscsac@gmail.com";
  // name: "dvdscscsac";

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
