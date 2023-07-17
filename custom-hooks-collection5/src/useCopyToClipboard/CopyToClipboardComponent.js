import useCopyToClipboard from "./useCopyToClipboard";

const CopyToClipboardComponent = () => {
  const [copyToClipboard, { success, value }] = useCopyToClipboard();

  return (
    <>
      <button onClick={() => copyToClipboard("This is copied")}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" />
    </>
  );
};

export default CopyToClipboardComponent;
