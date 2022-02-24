

import { Course } from "@pages/index"
import courses from "./index.json"

type CourseMap = Course;

export const getAllCourses = () => {

  return {
    data: courses,
    courseMap: courses.reduce((a: { [k: string]: Course & { index?: number } }, c: Course, i: number) => {
      a[c.id] = c
      a[c.id].index = i
      return a
    }, {})
  }
}
