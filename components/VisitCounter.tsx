"use client"

import { useState } from "react"
import { Eye, Users, TrendingUp } from "lucide-react"
import { useVisitTracker } from "@/hooks/useVisitTracker"

export default function VisitCounter() {
  const { stats } = useVisitTracker()
  const [isExpanded, setIsExpanded] = useState(false)

  const formatDate = (dateString: string) => {
    if (!dateString) return "Never"
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Main Counter */}
      <div 
        className="bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-2 shadow-lg cursor-pointer hover:bg-slate-800/90 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Eye className="w-4 h-4" />
          <span className="font-mono">{stats.totalVisits.toLocaleString()}</span>
          <span className="text-xs text-slate-400">visits</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="External tracking active"></div>
        </div>
      </div>

      {/* Expanded Stats */}
      {isExpanded && (
        <div className="mt-2 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-lg min-w-[200px]">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Total Visits:</span>
              <span className="font-mono text-slate-200">{stats.totalVisits.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Unique Visitors:</span>
              <span className="font-mono text-slate-200">{stats.uniqueVisitors.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Last Visit:</span>
              <span className="text-slate-200">{formatDate(stats.lastVisit)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Page ID:</span>
              <span className="text-xs text-slate-200 font-mono" title="Unique identifier for this deployment">
                {localStorage.getItem("pageId")?.substring(0, 12)}...
              </span>
            </div>
            <div className="pt-2 border-t border-slate-700">
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <TrendingUp className="w-3 h-3" />
                <span>Click to collapse</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
