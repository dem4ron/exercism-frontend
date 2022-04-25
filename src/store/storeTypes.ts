import { TestimonialsParams } from "@/api";


export interface TestimonialsState {
  status: "loading" | "fulfilled" | "rejected";
  testimonials: Testimonials|null;
  page: number;
  orderBy: OrderByObj;
  searchQuery: string;
  track: string;
  init:boolean;
  pageTotalCount: number;
  populateTestimonials: (params: TestimonialsParams ) => void;
  turnPage: (pageNumber: number) => void;
  setOrderBy: ({}: OrderByObj) => void;
  setSearchQuery: (val: string) => void;
  setTrack: (track:string)=>void;
}

export type OrderByObj = {
  label: string;
  value: "newest_first" | "oldest_first";
};

export type Testimonials = {
  results: result[];
  pagination: pagination;
  tracks: string[];
  track_counts: {};
};

type TrackExercise = {
  slug: string;
  title: string;
  icon_url: string;
};

export type result = {
  id: number;
  track: TrackExercise;
  exercise: TrackExercise;
  mentor: { handle: string; avatar_url: string };
  content: string;
  created_at: string;
};

type pagination = {
  current_page: number;
  total_count: number;
  total_pages: number;
};