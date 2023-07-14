/**
 * Load 3rd party jQuery library to the page
 */
import useScript from "./useScript";

const ScriptComponent = () => {
  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.6.0.min.js"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <div>width: {window.$(window).width()}</div>
      <div>version: {window.jQuery().jquery}</div>
    </>
  );
};

export default ScriptComponent;
