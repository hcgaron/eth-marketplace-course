import { Modal } from "@components/common";
import {
  CourseHero,
  Curriculum,
  Keypoints
} from "@components/course";
import { BaseLayout } from "@components/layout";
import { getAllCourses } from "@content/courses/fetcher";
import { Course } from "..";

export default function Course({ course }: { course: Course }) {

  return (
    <>
      <div className="py-4">
        <CourseHero
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
      </div>
      <Keypoints
        points={course.wsl}
      />
      <Curriculum
        locked={true}
      />
      <Modal />
    </>
  )
}

export function getStaticPaths() {
  const { data } = getAllCourses()

  return {
    paths: data.map(c => ({
      params: {
        slug: c.slug
      }
    })),
    fallback: false
  }
}


export function getStaticProps({ params }: { params: any }) {
  const { data } = getAllCourses()
  const course = data.filter(c => c.slug === params.slug)[0]

  return {
    props: {
      course
    }
  }
}

Course.Layout = BaseLayout
