import useOnlineStatus from "./useOnlineStatus";

const OnlineStatusComponent = () => {
  const online = useOnlineStatus();

  return <div>Online: {online.toString()}</div>;
};

export default OnlineStatusComponent;
