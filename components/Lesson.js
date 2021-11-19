import { useRouter } from "next/router";

const Lesson = ({ lessonId }) => {
  const router = useRouter();
  const { nivel1, nivel2, nivel3 } = router.query;
  return <h1>Watch lesson {nivel3}</h1>;
};
export default Lesson;
