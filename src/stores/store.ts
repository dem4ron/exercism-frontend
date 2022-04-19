import { ApiService } from "@/api";
import { TestimonialsParams, order } from "@/api";
import create from "zustand";
import { devtools } from "zustand/middleware";

export type OrderByObj = {
  label: string;
  value: "newest_first" | "oldest_first";
};

export interface TestimonialsState {
  status: "loading" | "fulfilled" | "rejected";
  testimonials: {};
  page: number;
  orderBy: OrderByObj;
  searchQuery: string;
  track: string;
  pageTotalCount: number;
  populateTestimonials: (params: TestimonialsParams) => void;
  turnPage: (pageNumber: number) => void;
  setOrderBy: ({}:OrderByObj) => void;
}

export const useTestimonialsStore = create<TestimonialsState>()(
  devtools(
    (set) => ({
      status: "loading",
      page: 1,
      orderBy: { label: "Sort by newest first", value: "newest_first" },
      searchQuery: "",
      track: "",
      pageTotalCount: 0,
      testimonials: {},
      populateTestimonials: async (params) => {
        set({ status: "loading" }, false, "Start loading");
        let res = await ApiService.getTestimonials(params);
        try {
          set(
            {
              testimonials: res.data.testimonials,
              pageTotalCount: res.data.testimonials.pagination.total_pages,
            },
            false,
            "Fetch testimonials"
          );
          set({ status: "fulfilled" }, false, "End loading");
        } catch {
          set({ status: "rejected" }, false, "Request got rejected");
        }
      },

      turnPage: (pageNumber) => {
        set({ page: pageNumber }, false, "Turn page");
      },

      setOrderBy: (sobj) => {
        set({ orderBy: sobj }, false, "Changing order");
      },
    }),
    { name: "Testimonials store" }
  )
);
