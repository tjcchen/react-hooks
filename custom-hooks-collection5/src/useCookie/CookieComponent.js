import useCookie from "./useCookie";

const CookieComponent = () => {
  const [value, update, remove] = useCookie("name", "Andy");

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update("Sally")}>Change Name To Sally</button>
      <button onClick={remove}>Delete Name</button>
    </>
  );
};

export default CookieComponent;
