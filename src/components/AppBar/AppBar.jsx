import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
// Водночас авторизований користувач замість AuthNav має бачити UserMenu.
