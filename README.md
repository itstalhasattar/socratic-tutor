# Socratic Tutor

A focused learning app for an AI-powered tutor that helps students reason through problems instead of giving direct answers.

The project is built to communicate the product idea quickly: a calm educational brand, a sample Socratic tutoring conversation, and an early interactive learning flow.

## Current Status

- Custom landing page replaces the default Next.js starter screen.
- Brand metadata and favicon have been updated for Socratic Tutor.
- Default starter assets were removed to keep the project focused.
- The landing CTA opens `/learn`, an initial chat-style learning session.
- The chat flow stores user input, appends messages to local state, shows a loading response, and auto-scrolls to the newest message.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Product Direction

Socratic Tutor is intended to become an interactive learning assistant that guides users with questions, hints, and reasoning prompts. The current milestone pairs a polished landing page with a working prototype chat interface that can later connect to a model API.

## Recruiter Notes

This repository demonstrates:

- Building a modern Next.js app from a clean starter foundation.
- Converting a generic template into a product-specific experience.
- Creating an early chat interaction flow with reusable message components.
- Using semantic components and JSX conventions correctly.
- Keeping project documentation current with implementation changes.
- Maintaining a deployable app with passing lint and production build checks.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Quality Checks

Run lint checks:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Maintenance Note

The README should be updated whenever product-facing changes are pushed so recruiters and reviewers can quickly understand the current state of the project.
