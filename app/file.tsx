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

  const handleDownload = (type: string = 'text') => {
    // Create a Blob object with the file content
    const blob = new Blob([fileContent], { type: 'text/plain' })

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob)

    // Create a link element
    const link = document.createElement('a')
    link.href = url
    link.download = `example.${type}` // Set the file name
    link.click()

    // Cleanup
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="flex justify-center my-4 overflow-hidden gap-6 flex-wrap">
      <button
        onClick={() => handleDownload('cert')}
        className="w-full font-bold text-2xl h-10 bg-purple-300 rounded-lg "
      >
        Download cert file
      </button>
      <button
        onClick={() => handleDownload('text')}
        className="w-full font-bold text-2xl h-10 bg-purple-300 rounded-lg"
      >
        Download text file
      </button>
      <button
        onClick={() => handleDownload('jpeg')}
        className="w-full font-bold text-2xl h-10 bg-purple-300 rounded-lg"
      >
        Download jpeg file
      </button>
    </div>
  )
}
