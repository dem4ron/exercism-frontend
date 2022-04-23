import { Left, Right, Center } from "./particles";
import { result } from "@/store/storeTypes";
import { memo, useCallback } from "react";

interface Props {
  result: result;
}

function _TestimonialRow({ result }: Props) {
  // unpleasently fake routing
  const updateUrlHistory = useCallback(() => {
    window.history.pushState(
      { page: result.id },
      "_",
      `/testimonial/${result.id}`
    );
  }, []);

  return (
    <a
      className="testimonial-row"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        updateUrlHistory();
      }}
    >
      <Left
        trackImg={result.track.icon_url}
        mentorAvatar={result.mentor.avatar_url}
        mentorHandle={result.mentor.handle}
        exerciseTitle={result.exercise.title}
      />

      <Center content={result.content} />

      <Right date={result.created_at} />
    </a>
  );
}

export const TestimonialRow = memo(_TestimonialRow);
