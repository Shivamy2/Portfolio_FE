/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { callGraphQl } from "../service/master";
import { getProject } from "../constants/query";
import { useQuery } from "react-query";
import Page404 from "./Page404";
import FallbackLoader from "../shared/FallbackLoader";
import ProjectHero from "../components/ProjectHero";
import Header from "../shared/Header";
import Description from "../shared/Description";
import Tag from "../shared/Tag";
import Button from "../shared/Button";
import Footer from "../components/Footer";

function Projects() {
  const params = useParams();
  const { data, isLoading, isError } = useQuery(
    "project",
    () =>
      callGraphQl(
        getProject({
          code: window.location.hostname,
          id: params?.id!,
          type: params?.type!,
        }),
      ),
    {
      enabled: !!params?.id && !!params?.type,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  if (isError) return <Page404 />;
  if (isLoading) return <FallbackLoader text="Project" />;
  if (data?.data?.getProjects?.title)
    document.title = `Case Study Of ${data?.data?.getProjects?.title}`;
  return (
    <>
      <Header />
      <div>
        <div>
          <ProjectHero data={data?.data?.getProjects} />
        </div>
        <div className="pt-20 px-4 md:px-36 md:pb-10 2xl:w-[1200px] 2xl:mx-auto">
          <div className="text-center space-y-8 md:grid md:grid-cols-2 md:gap-20">
            <div className="md:flex-shrink md:flex md:items-center">
              <img
                src={data?.data?.getProjects?.imageUrl}
                alt={data?.data?.getProjects?.title}
                className="border-2 border-primary-dark rounded-lg shadow-lg object-scale-down"
              />
            </div>
            <div className="space-y-5">
              <div className="font-extrabold text-xl text-black text-left">
                Project Overview
              </div>
              {data?.data?.getProjects?.points?.map(
                (point: any, index: number) => (
                  <Description
                    key={index}
                    description={point}
                    className="md:text-left text-justify"
                  />
                ),
              )}
            </div>
          </div>
          <div id="visitlink">
            <dl className="py-16 md:pt-8">
              <dt className="font-bold text-xl tracking-wider text-black">
                Tools Used
              </dt>
              <dd className="mt-8 flex flex-wrap gap-3">
                {data?.data?.getProjects?.stackUsed?.map(
                  (ele: string, i: number) => <Tag key={i} label={ele} />,
                )}
              </dd>
            </dl>
          </div>
          <div>
            <div className="font-bold mb-5 text-xl tracking-wider text-black">
              See Live
            </div>
            <div>
              {data?.data?.getProjects?.pocUrl
                ?.split("|")
                ?.map((link: string, index: number) => (
                  <span key={index} className="flex">
                    <a href={link} target="_black" rel="noreferrer">
                      <Button
                        label={`${!index ? "front-end" : "back-end"}`}
                        shape={`${!index ? "filled" : "outlined"}`}
                        type={`${!index ? "primary" : "secondary"}`}
                        className="mt-3 px-14 !w-60 text-center"
                      />
                    </a>
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default memo(Projects);
