import { Header, Container } from "./particles";
import "./index.css";
import { useFetchData } from "@/hooks/useFetchData";
export function Testimonials() {
  useFetchData();

  return (
    <div className="testimonials">
      <Header />
      <Container />
    </div>
  );
}
