import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { updatedAt: 'desc' },
  })

  return (
    <main className="">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </main>
  )
}
