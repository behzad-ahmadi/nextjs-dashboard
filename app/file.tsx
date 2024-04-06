'use client'
import { useEffect, useState } from 'react'

export default function FileFC() {
  const [fileContent, setFileContent] = useState('')

  useEffect(() => {
    // Generate the content of the file
    const content =
      'This is some example content that will be included in the downloaded file.'

    // Set the content to state
    setFileContent(content)
  }, [])

  const handleDownload = () => {
    // Create a Blob object with the file content
    const blob = new Blob([fileContent], { type: 'text/plain' })

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob)

    // Create a link element
    const link = document.createElement('a')
    link.href = url
    link.download = 'example.cert' // Set the file name
    link.click()

    // Cleanup
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-purple-300 h-32 flex justify-center rounded-lg my-4 overflow-hidden">
      <button onClick={handleDownload} className="w-full font-bold text-4xl">
        Download File
      </button>
    </div>
  )
}
