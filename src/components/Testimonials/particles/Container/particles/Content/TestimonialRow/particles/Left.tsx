import { memo } from "react";

interface Props {
  trackImg: string;
  mentorAvatar: string;
  mentorHandle: string;
  exerciseTitle: string;
}

function _Left({ trackImg, mentorAvatar, mentorHandle, exerciseTitle }: Props) {
  return (
    <div className="testimonial-row--left flex-row-align">
      <div className="track-img-container">
        <img width="32px" alt="track image" src={trackImg} />
      </div>
      <div className="mentor-avatar-container">
        <img width="42px" alt={`${mentorHandle}'s avatar`} src={mentorAvatar} />
      </div>

      <div className="handle-title-container">
        <div>{mentorHandle}</div>
        <div>{exerciseTitle}</div>
      </div>
    </div>
  );
}

export const Left = memo(_Left);
