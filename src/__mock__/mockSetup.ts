import { RestRequest, ResponseComposition, RestContext } from "msw";
import { testimonialsResult } from "./mockData";
import { BASE_URL } from "@/api/api";
const testimonialURL = `${BASE_URL}/hiring/testimonials`;

import { rest } from "msw";
import { setupServer } from "msw/node";

const testimonialResponse = rest.get(
  testimonialURL,
  (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
    return res(ctx.json(testimonialsResult));
  }
);

export const server = setupServer(testimonialResponse);
