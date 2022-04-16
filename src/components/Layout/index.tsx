import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
}
