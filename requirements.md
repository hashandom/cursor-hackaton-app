# Hackathon Project Finder - Software Specification

## 1. Problem Statement

During hackathons, it is often difficult for participants to quickly find interesting projects, see who is working on what, and organize teams efficiently. Participants may have ideas but struggle to find teammates, while others may want to join a project but do not know what options are available.

This app solves that problem by making it easy to browse available coding projects, join projects, and propose new project ideas for others to join.

## 2. Target Users

The main users are hackathon participants who want to:

- Discover available coding projects
- View details about projects
- Join one or more projects
- Leave or switch projects
- Propose new project ideas
- See how many people are working on each project

## 3. Goals

The goal of the application is to provide a simple web app that helps hackathon participants organize around project ideas.

The app should allow users to enter their name, browse available projects, join projects, leave projects, and submit new ideas. The first version should focus on the core experience and avoid complex authentication or advanced team management.

## 4. Tech Stack

The application will be built using:

- React for the user interface
- TypeScript for type safety
- Vite for development and build tooling
- Backend API for storing users, projects, and project participation data

## 5. Core Features

### 5.1 Simple User Entry

Users should be able to enter their name to start using the app.

Requirements:

- The user enters a display name.
- No password or full account registration is required.
- The entered name is used when joining projects or proposing new ideas.
- The app should remember the user during the current session.

### 5.2 Browse Available Projects

Users should be able to view available hackathon projects as cards.

Each project card should show:

- Project title
- Short description
- Number of participants
- Creator name
- Join status for the current user

### 5.3 View Project Details

Users should be able to open a project and view more information.

Project details should include:

- Project title
- Full description
- List or count of participants
- Creator name
- Option to join or leave the project

### 5.4 Join Projects

Users should be able to join projects they are interested in.

Requirements:

- A user can join multiple projects.
- When a user joins a project, their name should be added to the participant list.
- The participant count should update after joining.
- The app should prevent the same user from joining the same project more than once.

### 5.5 Leave Projects

Users should be able to leave a project they previously joined.

Requirements:

- A user can leave any project they have joined.
- The participant count should update after leaving.
- The project should remain visible even if it has no participants.

### 5.6 Propose New Project Ideas

Users should be able to propose new coding project ideas.

Requirements:

- The user can submit a project title.
- The user can submit a project description.
- The creator name should be saved with the project.
- Newly proposed projects should appear in the project list.
- Other users should be able to join the new project.

## 6. Backend Requirements

The backend should store application data so that projects and participants are not lost when the page refreshes.

The backend should support:

- Creating a project
- Getting all projects
- Getting details for one project
- Joining a project
- Leaving a project

Suggested data models:

### User

```ts
type User = {
  id: string;
  name: string;
};
```

### Project

```ts
type Project = {
  id: string;
  title: string;
  description: string;
  creatorName: string;
  participants: string[];
  createdAt: string;
};
```

## 7. User Flow

1. User opens the app.
2. User enters their name.
3. User sees a list of available project cards.
4. User can open a project to view details.
5. User can join one or more projects.
6. User can leave projects they joined.
7. User can propose a new project idea.
8. The new project appears in the project list for others to join.

## 8. UI Requirements

The interface should be simple and easy to use during a hackathon.

Main screens:

- Name entry screen
- Project browsing screen
- Project detail view
- New project proposal form

The design should prioritize:

- Clear project cards
- Easy join and leave actions
- Simple forms
- Fast navigation
- Mobile-friendly layout if possible

## 9. Non-Goals for MVP

The first version does not need:

- Password-based authentication
- Email verification
- Admin dashboard
- Chat between participants
- Project voting
- Advanced search or filters
- Team size limits
- Real-time updates

These can be considered future improvements.

## 10. Success Criteria

The MVP is successful if:

- A participant can enter their name and start using the app.
- Participants can browse project ideas.
- Participants can view project details.
- Participants can join multiple projects.
- Participants can leave projects.
- Participants can propose new project ideas.
- Project and participant data is saved through the backend.

## 11. Future Enhancements

Possible future features include:

- Search and filtering by project category
- Maximum team size per project
- Skill tags such as frontend, backend, design, AI, or hardware
- Real-time updates when users join or leave
- Voting or liking project ideas
- Admin controls for organizers
- Exporting team lists
