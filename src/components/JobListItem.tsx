import { Job } from "@prisma/client"

interface JobListItemProps {
  job: Job
}

export default function JobListItem({ job: {
  title,
  type,
  companyName,
  locationType,
  location,
  applicationEmail,
  applicationUrl,
  slug,
  salary,
  approved,
  description
} }: JobListItemProps) {
  return (
    <article className=" gap-3 flex border rounded-lg p-5 hover:bg-muted/60">
      {title}
    </article>
  )
}
