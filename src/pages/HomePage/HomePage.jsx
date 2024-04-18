import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <h1 className={css.title}>Task manager welcome page</h1>
      <span role="img" aria-label="Greeting image">
        {" "}
        💁‍♀️
      </span>
    </div>
  );
};
export default HomePage;
