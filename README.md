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

## Project Highlights

This project focuses on:

- A clear product concept with a focused landing experience.
- A responsive interface that works across desktop and mobile layouts.
- An early chat interaction flow with reusable message components.
- A simple structure that can grow into a full tutoring experience.
- A deployable app with documented setup and quality checks.

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

The README should be updated whenever product-facing changes are pushed so the project stays aligned with the current app experience.
