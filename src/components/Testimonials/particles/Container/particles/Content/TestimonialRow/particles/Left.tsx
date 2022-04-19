interface Props {
  trackImg: string;
  mentorAvatar: string;
  mentorHandle: string;
  exerciseTitle: string;
}

export function Left({
  trackImg,
  mentorAvatar,
  mentorHandle,
  exerciseTitle,
}: Props) {
  return (
    <div className="testimonial-row--left flex-row-align">
      <div className="track-img-container">
        <img width="32px" src={trackImg} />
      </div>

      <div className="mentor-avatar-container">
        <img width="42px" src={mentorAvatar} />
      </div>

      <div className= "handle-title-container">
        <div>{mentorHandle}</div>
        <div>{exerciseTitle}</div>
      </div>
    </div>
  );
}
