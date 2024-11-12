'use client'

import React, { useState, useRef } from 'react'

interface ImageInputProps {
  onChange: (file: File | null) => void
  onError?: (error: string) => void
  label?: string
  accept?: string
  maxSize?: number
  className?: string
  buttonClassName?: string
  previewClassName?: string
}

export const FileInput = ({
  onChange,
  onError,
  label = 'Add image',
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB default
  className = '',
  buttonClassName = '',
  previewClassName = '',
}: ImageInputProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files: FileList) => {
    const file = files[0]
    if (file) {
      if (file.size > maxSize) {
        onError?.(`File size exceeds ${maxSize / 1024 / 1024}MB limit.`)
        return
      }
      if (!file.type.startsWith('image/')) {
        onError?.('Please select an image file.')
        return
      }
      setPreview(URL.createObjectURL(file))
      onChange(file)
    }
  }

  const removeImage = () => {
    setPreview(null)
    onChange(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className={`relative ${className}`}>
      {preview ? (
        <div className={`relative ${previewClassName}`}>
          <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Remove image"
          >
            <span className="block w-4 h-4 text-sm font-bold">×</span>
          </button>
        </div>
      ) : (
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-4 transition-colors cursor-pointer ${
            isDragging ? 'border-teal-600 bg-teal-50/50' : 'border-teal-500 hover:bg-teal-50/50'
          } ${buttonClassName}`}
        >
          <input ref={inputRef} type="file" accept={accept} onChange={handleChange} className="hidden" aria-label={label} />
          <span className="text-3xl text-teal-500">+</span>
          <span className="text-sm font-medium text-teal-500">{label}</span>
          <span className="text-xs text-gray-500">Drag & drop or click to upload</span>
        </div>
      )}
    </div>
  )
}
