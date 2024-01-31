/* eslint-disable no-constant-condition */
import { FC, memo, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";
import { ImSpinner9 } from "react-icons/im";
import { Socket } from "socket.io-client";
import useSocket from "../hooks/useSocket";
import { useQuery } from "react-query";
import { callGraphQl } from "../service/master";
import { getChatData } from "../constants/query";

interface Props {}

const Chat: FC<Props> = () => {
  const { id } = useParams();
  const searchParams = new URLSearchParams(window.location.search);

  const { currentProfile } = useContext(ProfileContext) as IMasterContext;
  const socket = useSocket();

  const { isLoading: isLoadingChatData } = useQuery(
    ["getChatData"],
    () => callGraphQl(getChatData(id || "")),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (response) => {
        sessionStorage.setItem(
          "myEmail",
          response.data?.getChattingData?.participants?.filter(
            (val: string) => val != searchParams.get("email"),
          )[0],
        );
      },
    },
  );

  useEffect(() => {
    if (!socket) return;
    const myEmail = sessionStorage.getItem("myEmail");
    socket?.on("connection", (s: Socket) => {
      console.log("Socket is connected", s.id);
    });
    socket?.emit("joinChat", { chatId: id, email: myEmail });
    socket?.emit(myEmail || "", () => {
      console.log("I have joined the chat");
    });
    socket?.on(searchParams.get("email") || "", () => {
      console.log("another one joined the chat!!!!!");
    });
  }, [socket]);

  const [input, setInput] = useState("");

  // useEffect(() => {
  //   const el = document.getElementById("messages") as any;
  //   el?.scrollTop = el?.scrollHeight;
  // }, []);

  const handleSendMessage = () => {
    console.log("message", input);
    setInput("");
  };

  if (1 || !socket || isLoadingChatData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ImSpinner9 className="animate-spin h-10 w-10 text-primary-dark" />
        <span className="ml-2 text-2xl font-bold text-secondary-dark">
          Waiting for another to join
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="w-[350px] md:w-[550px] mx-auto">
        <div className="flex-1 sm:p-6 justify-between flex flex-col h-screen">
          <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="relative flex items-center space-x-4">
              <div className="relative">
                <img
                  src={currentProfile?.details[0]?.dpUrl}
                  alt="dp"
                  className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-2xl mt-1 flex items-center">
                  <span className="text-gray-700 mr-3">
                    {currentProfile?.details[0]?.name}
                  </span>
                </div>
                <span className="text-lg text-gray-600">
                  {currentProfile?.details[0]?.email}
                </span>
              </div>
            </div>
          </div>
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            <div className="chat-message">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      Can be verified on any platform using docker
                    </span>
                  </div>
                </div>
                <img
                  src={currentProfile?.details[0]?.dpUrl}
                  alt="My profile"
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <input
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSendMessage();
                }}
                type="text"
                onChange={(event) => {
                  setInput(event?.target?.value);
                }}
                value={input}
                name="input"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 bg-gray-200 rounded-s-md py-3"
              />
              <div>
                <button
                  onClick={handleSendMessage}
                  type="button"
                  className="inline-flex items-center justify-center rounded-e-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                >
                  <span className="font-bold" onClick={handleSendMessage}>
                    Send
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Chat);
