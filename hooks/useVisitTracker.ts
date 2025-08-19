import { useState, useEffect } from 'react'

interface VisitStats {
  totalVisits: number
  uniqueVisitors: number
  lastVisit: string
}

interface VisitData {
  date: string
  visits: number
}

export function useVisitTracker() {
  const [stats, setStats] = useState<VisitStats>({
    totalVisits: 0,
    uniqueVisitors: 0,
    lastVisit: ""
  })

  useEffect(() => {
    // Get current stats from localStorage
    const currentStats: VisitStats = JSON.parse(
      localStorage.getItem("visitStats") || 
      JSON.stringify({
        totalVisits: 0,
        uniqueVisitors: 0,
        lastVisit: ""
      })
    )
    
    // Generate or get visitor ID
    let visitorId = localStorage.getItem("visitorId")
    if (!visitorId) {
      visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      localStorage.setItem("visitorId", visitorId)
      currentStats.uniqueVisitors += 1
    }
    
    // Increment total visits
    currentStats.totalVisits += 1
    currentStats.lastVisit = new Date().toISOString()
    
    // Track daily visits
    const today = new Date().toISOString().split('T')[0]
    const visitHistory = JSON.parse(localStorage.getItem("visitHistory") || "[]")
    const todayIndex = visitHistory.findIndex((v: VisitData) => v.date === today)
    
    if (todayIndex >= 0) {
      visitHistory[todayIndex].visits += 1
    } else {
      visitHistory.push({ date: today, visits: 1 })
    }
    
    // Keep only last 30 days
    if (visitHistory.length > 30) {
      visitHistory.splice(0, visitHistory.length - 30)
    }
    
    // Save to localStorage
    localStorage.setItem("visitStats", JSON.stringify(currentStats))
    localStorage.setItem("visitHistory", JSON.stringify(visitHistory))
    
    // Hit the visitor badge API for external tracking
    const pageId = localStorage.getItem("pageId") || generatePageId()
    localStorage.setItem("pageId", pageId)
    
    // Create a hidden image to trigger the API call
    const img = new Image()
    img.src = `https://visitor-badge.laobi.icu/badge?page_id=${pageId}`
    img.style.display = 'none'
    document.body.appendChild(img)
    
    // Clean up the image after a short delay
    setTimeout(() => {
      if (document.body.contains(img)) {
        document.body.removeChild(img)
      }
    }, 1000)
    
    // Update state
    setStats(currentStats)
  }, [])

  // Generate a unique page ID for this deployment
  const generatePageId = () => {
    // Try to get a stable identifier from environment or generate one
    let pageId = localStorage.getItem("pageId")
    
    if (!pageId) {
      // Create a unique ID based on domain and some stable characteristics
      const domain = window.location.hostname
      const path = window.location.pathname
      const stableId = `${domain}${path}`.replace(/[^a-zA-Z0-9]/g, '_')
      const timestamp = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) // Days since epoch
      const randomSuffix = Math.random().toString(36).substr(2, 6)
      
      pageId = `${stableId}_${timestamp}_${randomSuffix}`
      localStorage.setItem("pageId", pageId)
    }
    
    return pageId
  }

  const getVisitHistory = (): VisitData[] => {
    return JSON.parse(localStorage.getItem("visitHistory") || "[]")
  }

  const resetStats = () => {
    const defaultStats = {
      totalVisits: 0,
      uniqueVisitors: 0,
      lastVisit: ""
    }
    localStorage.setItem("visitStats", JSON.stringify(defaultStats))
    localStorage.setItem("visitHistory", JSON.stringify([]))
    localStorage.removeItem("visitorId")
    setStats(defaultStats)
  }

  return {
    stats,
    getVisitHistory,
    resetStats
  }
}
