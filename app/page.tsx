import { JobTracker } from "@/components/job-tracker"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Job Application Tracker</h1>
          <ThemeToggle />
        </div>
        <JobTracker />
      </div>
    </main>
  )
}

