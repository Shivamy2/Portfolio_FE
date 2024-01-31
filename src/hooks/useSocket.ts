import io from "socket.io-client";
import { baseURL } from "../constants";
import { useQuery } from "react-query";

const getSocket = () => io(baseURL);
const useSocket = () => {
  // const [socket, setSocket] = useState<Socket>();
  const { data, isLoading, isFetching } = useQuery(
    ["initializeSocket"],
    () => getSocket(),
    {
      refetchOnWindowFocus: false,
    },
  );

  if (isLoading || isFetching) {
    return null;
  }

  return data;
};

export default useSocket;
