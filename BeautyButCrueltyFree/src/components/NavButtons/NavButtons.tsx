import "./NavButtons.scss";

type ButtonProps = {
    label: string;
    variant: "primary" | "secondary";
  };

const NavButtons = ({label, variant}:ButtonProps) => {
    const className = `button button--${variant}`;
  return (
    <button className={className}>{label}</button>
  )
}

export default NavButtons