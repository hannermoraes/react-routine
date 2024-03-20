import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full h-full container mx-auto">
      <div className=" flex items-center justify-center">
        <h1 className="text-3xl font-bold py-4">routine</h1>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;