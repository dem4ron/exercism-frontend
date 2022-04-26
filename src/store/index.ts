import { ApiService } from "@/api";
import { TestimonialsState } from "./storeTypes";
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
      init: true,
      testimonials: null,
      populateTestimonials: async (params, signal) => {
        set({ status: "loading" }, false, "Start loading");
        window.history.replaceState({ page: null }, "_", "/");
        try {
          let res = await ApiService.getTestimonials(params, signal);
          set(
            {
              testimonials: res.data.testimonials,
              pageTotalCount: res.data.testimonials.pagination.total_pages,
            },
            false,
            "Fetch testimonials"
          );
          set({ status: "fulfilled", init: false }, false, "End loading");
        } catch (error: any) {
          set({ status: "rejected" }, false, "Request got rejected/cancelled");
          if (error && error.message !== "canceled") {
            console.error(error);
          }
        }
      },

      turnPage: (pageNumber) => {
        set({ page: pageNumber }, false, "Turn page");
      },

      setOrderBy: (sobj) => {
        set({ orderBy: sobj }, false, "Changing order");
      },
      setSearchQuery: (val) => {
        set(
          { searchQuery: val, page: 1 },
          false,
          "Searching for specific cool stuff while reseting page"
        );
      },
      setTrack: (track) => {
        set({ track, page: 1 }, false, "Selecting track, reseting page");
      },
    }),
    { name: "Testimonials store" }
  )
);
