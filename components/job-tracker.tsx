"use client"

import { useState, useEffect } from "react"
import { JobList } from "@/components/job-list"
import { JobForm } from "@/components/job-form"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import type { JobApplication } from "@/types/job-application"

export function JobTracker() {
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null)

  // Load applications from localStorage on component mount
  useEffect(() => {
    const savedApplications = localStorage.getItem("jobApplications")
    if (savedApplications) {
      try {
        const parsed = JSON.parse(savedApplications)
        setApplications(parsed)
      } catch (error) {
        console.error("Failed to parse saved applications:", error)
      }
    }
  }, [])

  // Save applications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("jobApplications", JSON.stringify(applications))
  }, [applications])

  const addApplication = (application: JobApplication) => {
    setApplications([...applications, application])
    setIsFormOpen(false)
  }

  const updateApplication = (updatedApplication: JobApplication) => {
    setApplications(applications.map((app) => (app.id === updatedApplication.id ? updatedApplication : app)))
    setEditingJob(null)
    setIsFormOpen(false)
  }

  const deleteApplication = (id: string) => {
    setApplications(applications.filter((app) => app.id !== id))
  }

  const handleEdit = (application: JobApplication) => {
    setEditingJob(application)
    setIsFormOpen(true)
  }

  return (
    <div className="space-y-6">
      {!isFormOpen ? (
        <div className="flex justify-end">
          <Button onClick={() => setIsFormOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Application
          </Button>
        </div>
      ) : (
        <JobForm
          onSubmit={editingJob ? updateApplication : addApplication}
          onCancel={() => {
            setIsFormOpen(false)
            setEditingJob(null)
          }}
          initialData={editingJob}
        />
      )}

      {!isFormOpen && (
        <JobList
          applications={applications}
          onEdit={handleEdit}
          onDelete={deleteApplication}
          onUpdate={updateApplication}
        />
      )}
    </div>
  )
}

