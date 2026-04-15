<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:sanity-cms-rules -->
# Sanity CMS - Content Management System

This project uses **Sanity** as the headless CMS for content management.

## Project Structure
- **Schema Types**: Located in `src/sanity/schemaTypes/` - defines content models (documents, fields, validation)
- **Sanity Config**: `sanity.config.ts` - main configuration for Sanity Studio
- **Sanity CLI**: `sanity.cli.ts` - CLI configuration
- **Studio Route**: `/studio` - embedded Sanity Studio at `src/app/studio/[[...tool]]/page.tsx`
- **Client**: `src/sanity/lib/client.ts` - Sanity client for querying content
- **Image Utilities**: `src/sanity/lib/image.ts` - helpers for image URLs
- **Live Preview**: `src/sanity/lib/live.ts` - real-time content preview

## Key Packages
- `sanity` - Core Sanity Studio and toolkit
- `next-sanity` - Next.js integration for Sanity (Studio components, metadata, client utilities)
- `@sanity/vision` - GROQ query tool in Studio
- `@sanity/image-url` - Image URL builder

## Content Querying
- Use **GROQ** (Graph-Relational Object Queries) for querying content
- Query documents using the Sanity client from `src/sanity/lib/client.ts`
- Documents are typed based on schema types in `schemaTypes/`

## Schema Development
- Define schema types in `src/sanity/schemaTypes/`
- Export types from `schemaTypes/index.ts`
- Use Sanity's `defineType` and `defineField` utilities
- Available schema types include: document, object, string, text, number, boolean, date, datetime, image, file, reference, array, block (portable text)

## Important Notes
- Schema changes require Studio restart to take effect
- The Studio is embedded within the Next.js application at `/studio`
- Content is stored in Sanity's Content Lake (cloud-hosted)
- Use environment variables for project ID and dataset configuration
<!-- END:sanity-cms-rules -->
