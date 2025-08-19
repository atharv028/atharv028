"use client"

import { useState, useEffect } from "react"
import { BarChart3, Calendar, Clock, Users } from "lucide-react"
import { useVisitTracker } from "@/hooks/useVisitTracker"

interface VisitData {
  date: string
  visits: number
}

interface AnalyticsStats {
  totalVisits: number
  uniqueVisitors: number
  averageVisitsPerDay: number
  mostActiveDay: string
  visitHistory: VisitData[]
}

export default function VisitAnalytics() {
  const { stats: visitStats, getVisitHistory } = useVisitTracker()
  const [stats, setStats] = useState<AnalyticsStats>({
    totalVisits: 0,
    uniqueVisitors: 0,
    averageVisitsPerDay: 0,
    mostActiveDay: "",
    visitHistory: []
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const visitHistory = getVisitHistory()
    
    // Calculate analytics
    const today = new Date().toISOString().split('T')[0]
    const last7Days = visitHistory.filter((v: VisitData) => {
      const visitDate = new Date(v.date)
      const daysDiff = (Date.now() - visitDate.getTime()) / (1000 * 60 * 60 * 24)
      return daysDiff <= 7
    })
    
    const totalVisits = visitStats.totalVisits || 0
    const uniqueVisitors = visitStats.uniqueVisitors || 0
    const averageVisitsPerDay = last7Days.length > 0 ? 
      (last7Days.reduce((sum: number, v: VisitData) => sum + v.visits, 0) / 7).toFixed(1) : 0
    
    // Find most active day
    const mostActiveDay = last7Days.length > 0 ? 
      last7Days.reduce((max: VisitData, v: VisitData) => v.visits > max.visits ? v : max).date : "N/A"
    
    setStats({
      totalVisits,
      uniqueVisitors,
      averageVisitsPerDay: parseFloat(averageVisitsPerDay),
      mostActiveDay,
      visitHistory: last7Days
    })
  }, [visitStats, getVisitHistory])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-2 shadow-lg hover:bg-slate-800/90 transition-colors z-50"
      >
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <BarChart3 className="w-4 h-4" />
          <span>Analytics</span>
        </div>
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-lg min-w-[280px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-slate-200">Visit Analytics</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-slate-200 text-xs"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-slate-400">Total</span>
              </div>
              <div className="text-lg font-mono text-slate-200">{stats.totalVisits}</div>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-xs text-slate-400">Unique</span>
              </div>
              <div className="text-lg font-mono text-slate-200">{stats.uniqueVisitors}</div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-slate-400">Avg/Day (7d)</span>
            </div>
            <div className="text-lg font-mono text-slate-200">{stats.averageVisitsPerDay}</div>
          </div>
          
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-slate-400">Most Active</span>
            </div>
            <div className="text-sm text-slate-200">{formatDate(stats.mostActiveDay)}</div>
          </div>
          
          {stats.visitHistory.length > 0 && (
            <div className="pt-2 border-t border-slate-700">
              <div className="text-xs text-slate-400 mb-2">Last 7 Days</div>
              <div className="flex gap-1 h-16 items-end">
                {stats.visitHistory.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-blue-500/60 rounded-t-sm"
                      style={{ height: `${Math.max(day.visits * 10, 4)}px` }}
                    />
                    <div className="text-xs text-slate-400 mt-1">
                      {formatDate(day.date)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
