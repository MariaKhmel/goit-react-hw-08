const RegistrationForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
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
