import api from "./api";

export const ApiService = {
  getTestimonials,
  getTracks: () => api.get("/tracks"),
};


export type order = "newest_first" | "oldest_first";

export interface TestimonialsParams {
  page: number;
  order: order;
  track?: string;
  exercise?: string;
}

function getTestimonials(params: TestimonialsParams) {
  const { page, order, track, exercise } = params;
  const TESTIMONIALS_URL = `/hiring/testimonials`;

  let url = `${TESTIMONIALS_URL}/?page=${page}&order=${order}`;

  if (track) {
    url = `${url}&track=${track}`;
  }
  if (exercise) {
    url = `${url}&exercise=${exercise}`;
  }
  return api.get(url);
}
