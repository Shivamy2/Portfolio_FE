import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { baseURL } from "../constants";

const getSocket = () => io(baseURL);
const useSocket = () => {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    setSocket(getSocket());
  }, []);

  return socket;
};

export default useSocket;
