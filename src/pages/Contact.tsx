import { FC, memo, useEffect } from "react";
import { Socket } from "socket.io-client";
import useSocket from "../hooks/useSocket";
import Title from "../shared/Title";

interface Props {}

const Contact: FC<Props> = () => {
  const socket = useSocket();

  useEffect(() => {
    socket?.on("connection", (s: Socket) => {
      console.log("Socket is connected", s.id);
      s.emit("connected", "Successfully Connected");
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-5">
        <Title text="Contact" />
      </div>
      <div className="mt-24">
        <div className="space-y-5 flex flex-col">
          <label htmlFor="user-name">
            <input
              type="text"
              name="user-name"
              id="user-name"
              placeholder="Name"
              className="rounded-lg border border-primary-dark outline-1 outline-primary-dark px-4 py-2"
            />
          </label>
          <label htmlFor="user-email">
            <input
              type="text"
              name="user-email"
              id="user-email"
              placeholder="Email"
              className="rounded-lg border border-primary-dark outline-1 outline-primary-dark px-4 py-2"
            />
          </label>
          <label htmlFor="user-message">
            <textarea
              name="user-message"
              id="user-message"
              placeholder="Message"
              className="rounded-lg border border-primary-dark outline-1 outline-primary-dark px-4 py-2"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
