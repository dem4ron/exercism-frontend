import { Left } from "./particles";
import { result } from "@/store/storeTypes";
interface Props {
  result: result;
}
export function TestimonialRow({ result }: Props) {
  return (
    <div className="testimonial-row flex-row-align">
      <Left
        trackImg={result.track.icon_url}
        mentorAvatar={result.mentor.avatar_url}
        mentorHandle={result.mentor.handle}
        exerciseTitle={result.exercise.title}
      />

      {/* <div>{result.content}</div> */}
    </div>
  );
}
