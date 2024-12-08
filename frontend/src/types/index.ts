// src/types/index.ts
export interface CourseData {
  course: string;
  students: string[];
  time: string;
  day: string;
}

export interface ScheduleResponse {
  schedule: CourseData[];
  colors: { [key: string]: number };
  graph_data: { [key: string]: string[] };
}
