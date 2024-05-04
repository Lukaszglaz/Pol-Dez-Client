import { Logo } from "./logo";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="header">
      <Logo />

      <Nav />
    </header>
  );
};
