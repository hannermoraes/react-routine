import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full h-full flex container">
      <div className=" flex items-center justify-center">
        <h1 className="text-3xl font-extrabold py-4 mt-8">routine</h1>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;