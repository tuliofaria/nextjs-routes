import Link from "next/link";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <Link href="/app/courses/courseId/version/versionId">
        <a>Course</a>
      </Link>
      AA: [{JSON.stringify(pageProps)}]
      <Component />
    </>
  );
};
export default MyApp;
