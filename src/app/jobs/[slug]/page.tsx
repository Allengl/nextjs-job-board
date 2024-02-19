import React, { cache } from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import JobPage from "@/components/JobPage";

interface PageProps {
  params: { slug: string };
}

const getJob = cache(async (slug: string) => {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return job;
});

export const generateMetadata = async ({
  params: { slug },
}: PageProps): Promise<Metadata> => {
  const job = await getJob(slug);

  return {
    title: job.title,
  };
};

const page = async ({ params: { slug } }: PageProps) => {
  const job = await getJob(slug);

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
    </main>
  );
};

export default page;