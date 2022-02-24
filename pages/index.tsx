
import { Hero } from "@components/common"
import { CourseList } from "@components/course"
import { BaseLayout } from "@components/layout"
import { getAllCourses } from "@content/courses/fetcher"


export type Course = {
  id: string,
  type: string,
  title: string,
  description: string,
  coverImage: string,
  author: string,
  link: string,
  slug: string,
  wsl: string[],
  createdAt: string
}
export default function Home({ courses }: { courses: Course[] }) {
  return (
    <>
      <Hero />
      <CourseList
        courses={courses}
      />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Home.Layout = BaseLayout
