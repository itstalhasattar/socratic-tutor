# Socratic Tutor

A focused learning app for an AI-powered tutor that helps students reason through problems instead of giving direct answers.

The project is built to communicate the product idea quickly: a calm educational brand, a sample Socratic tutoring conversation, and a model-backed interactive learning flow.

## Current Status

- Custom landing page replaces the default Next.js starter screen.
- Brand metadata and favicon have been updated for Socratic Tutor.
- Default starter assets were removed to keep the project focused.
- The landing CTA opens `/learn`, a chat-style learning session.
- The chat flow stores user input, appends messages to local state, shows loading feedback, and auto-scrolls to the newest message.
- `/api/chat` validates conversation history before sending it to the model layer.
- The backend uses a server-only Anthropic helper with a Socratic system prompt to generate tutor responses.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Zod
- Anthropic SDK
- ESLint

## Product Direction

Socratic Tutor is intended to become an interactive learning assistant that guides users with questions, hints, and reasoning prompts. The current milestone pairs a polished landing page with a working chat interface connected to a model-backed API route.

## Project Highlights

This project focuses on:

- A clear product concept with a focused landing experience.
- A responsive interface that works across desktop and mobile layouts.
- A chat interaction flow with reusable message components.
- Server-side message validation before model requests.
- A dedicated Socratic system prompt that shapes tutor behavior.
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

Create a local `.env` file with your Anthropic API key before using the model-backed chat:

```bash
ANTHROPIC_API_KEY=your_api_key_here
```

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
