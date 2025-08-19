# Website Visit Counter

This portfolio website now includes a comprehensive visit tracking system that monitors website usage and provides analytics.

## Features

### 1. Visit Counter (Bottom Right)
- **Total Visits**: Tracks every page load/visit
- **Unique Visitors**: Counts distinct visitors using localStorage-based visitor IDs
- **Last Visit**: Shows when the user last visited
- **Click to Expand**: Click the counter to see detailed stats
- **Position**: Fixed bottom-right corner

### 2. Analytics Panel (Bottom Left)
- **Total Visits & Unique Visitors**: Quick overview stats
- **Average Visits per Day**: Calculated over the last 7 days
- **Most Active Day**: Day with highest visit count in the last week
- **7-Day Chart**: Visual representation of daily visits
- **Toggle**: Click "Analytics" button to show/hide

### 3. Data Storage
- **localStorage**: All data is stored locally in the user's browser
- **Visitor ID**: Unique identifier for each visitor (persistent across sessions)
- **Visit History**: Daily visit tracking for the last 30 days
- **Auto-cleanup**: Old data is automatically removed to prevent storage bloat
- **Page ID**: Unique identifier for this deployment (persistent across sessions)

### 4. External API Integration
- **Visitor Badge API**: Hits `https://visitor-badge.laobi.icu/badge?page_id={pageId}` on every visit
- **Global Tracking**: Enables visit tracking across different deployments
- **Automatic**: No manual intervention required
- **Visual Indicator**: Green pulsing dot shows external tracking is active

## Technical Implementation

### Components
- `VisitCounter.tsx`: Main counter display with expandable stats
- `VisitAnalytics.tsx`: Detailed analytics panel with charts
- `useVisitTracker.ts`: Custom hook for visit tracking logic

### Data Structure
```typescript
interface VisitStats {
  totalVisits: number
  uniqueVisitors: number
  lastVisit: string
}

interface VisitData {
  date: string
  visits: number
}
```

### Key Features
- **Client-side only**: No server required, works entirely in the browser
- **Privacy-friendly**: Data stays on user's device
- **Real-time updates**: Stats update immediately on each visit
- **Responsive design**: Works on all screen sizes
- **Theme integration**: Matches the portfolio's dark theme
- **External tracking**: Integrates with global visitor badge API

## Usage

1. **Automatic Tracking**: Visit counter starts tracking immediately when the page loads
2. **View Stats**: Click the visit counter to see detailed information
3. **Analytics**: Click the "Analytics" button for comprehensive statistics
4. **Data Persistence**: All data persists across browser sessions

## Customization

The visit counter can be easily customized by:
- Modifying the `useVisitTracker` hook for different tracking logic
- Updating the UI components for different visual styles
- Adding more analytics metrics in the analytics component
- Changing the positioning and styling of the components
- Modifying the page ID generation for different deployment strategies
- Changing the external API endpoint or tracking parameters

## Browser Compatibility

- **Modern Browsers**: Full support for all features
- **localStorage**: Required for data persistence
- **ES6+**: Uses modern JavaScript features
- **React 18+**: Built with React hooks and modern patterns
