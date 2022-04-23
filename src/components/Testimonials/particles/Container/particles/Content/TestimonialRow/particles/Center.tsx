import { memo } from "react";

function _Center({ content }: { content: string }) {
  return <div className="testimonial-row--center">{content}</div>;
}

export const Center = memo(_Center);
