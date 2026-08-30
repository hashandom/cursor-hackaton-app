export type Project = {
  id: string
  title: string
  description: string
  creatorName: string
  participants: string[]
  createdAt: string
}

/** Frontend-only sample data until the backend API is connected. */
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Campus Food Finder',
    description:
      'A map-based app that helps students find open food spots near campus during late-night study sessions.',
    creatorName: 'Aisha Khan',
    participants: ['Aisha Khan', 'Leo Park'],
    createdAt: '2026-08-28T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Realtime Whiteboard',
    description:
      'Collaborative whiteboard for brainstorming with sticky notes, drawing tools, and export to PNG.',
    creatorName: 'Marcus Lee',
    participants: ['Marcus Lee'],
    createdAt: '2026-08-28T11:30:00.000Z',
  },
  {
    id: '3',
    title: 'Habit Streak Tracker',
    description:
      'Track daily habits with streaks, gentle reminders, and a weekly progress summary.',
    creatorName: 'Priya Patel',
    participants: ['Priya Patel', 'Sam Ortiz', 'Jordan Kim'],
    createdAt: '2026-08-29T09:15:00.000Z',
  },
  {
    id: '4',
    title: 'Hackathon Team Matcher',
    description:
      'Match participants by skills and interests so people can form balanced teams quickly.',
    creatorName: 'Chris Nguyen',
    participants: ['Chris Nguyen', 'Taylor Brooks'],
    createdAt: '2026-08-29T14:00:00.000Z',
  },
]
