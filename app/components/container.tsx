import type React from "react"
export default function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full ${className}`}>{children}</div>
}
