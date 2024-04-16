const LoginForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  };

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
      <button type="submit">Register</button>
    </form>
  );
};

export default LoginForm;
