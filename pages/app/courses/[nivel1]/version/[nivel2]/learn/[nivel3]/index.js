import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Lesson from "../../../../../../../../components/Lesson";
const lessons = [1, 2, 3, 4, 5];

const Menu = () => {
  const router = useRouter();
  const { nivel1, nivel2, nivel3 } = router.query;
  return (
    <ul>
      {lessons.map((l) => (
        <li key={"a" + l.toString()}>
          <a href={"#" + l}>-- Lesson {l}</a>
        </li>
      ))}
      {lessons.map((l) => (
        <li key={l.toString()}>
          <Link
            shallow
            href={
              "/app/courses/" + nivel1 + "/version/" + nivel2 + "/learn/" + l
            }
          >
            <a>Lesson {l}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Course = () => {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <h1>Lesson</h1>
      <p onClick={() => setCounter((curr) => curr + 1)}>Counter {counter}</p>
      <Menu />
      <Lesson />
    </>
  );
};

export default Course;
