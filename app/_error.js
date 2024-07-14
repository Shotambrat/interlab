import Custom404 from './404';
import Custom500 from './500';

function Error({ statusCode }) {
  if (statusCode === 404) {
    return <Custom404 />;
  }
  if (statusCode === 500) {
    return <Custom500 />;
  }
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">An unexpected error has occurred</h1>
    </main>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;