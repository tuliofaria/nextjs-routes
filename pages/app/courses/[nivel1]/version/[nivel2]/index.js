import Link from "next/link";
import { useRouter } from "next/router";
const lessons = [1, 2, 3, 4, 5];
const Course = () => {
  const router = useRouter();
  const { nivel1, nivel2 } = router.query;
  return (
    <>
      <h1>Course</h1>
      {false && <pre>{JSON.stringify(router, null, 2)}</pre>}
      <ul>
        {lessons.map((l) => (
          <li key={l.toString()}>
            <Link
              href={
                "/app/courses/" + nivel1 + "/version/" + nivel2 + "/learn/" + l
              }
            >
              <a>Lesson {l}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Course;
