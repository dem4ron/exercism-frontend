import { ApiService } from "@/api";
import {TestimonialsState} from './storeTypes';
import create from "zustand";
import { devtools } from "zustand/middleware";
import { SORT_OPTIONS } from "@/components/Testimonials/particles/Container/particles/Header/particles";


export const useTestimonialsStore = create<TestimonialsState>()(
  devtools(
    (set) => ({
      status: "loading",
      page: 1,
      orderBy: SORT_OPTIONS[0],
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
      setSearchQuery: (val) => {
        set({ searchQuery: val }, false, "Searching for specific cool stuff");
      },
    }),
    { name: "Testimonials store" }
  )
);
