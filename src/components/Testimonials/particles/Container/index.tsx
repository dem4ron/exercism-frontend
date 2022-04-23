import { memo } from "react";
import { Header, Content, Footer } from "./particles";

function _Container() {
  return (
    <div className="testimonials__container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export const Container = memo(_Container);
