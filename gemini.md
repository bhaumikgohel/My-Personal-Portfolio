# Gemini - Project Constitution

## Data Schemas

### Portfolio Content Schema (`portfolio.json`)
```json
{
  "bio": {
    "picture": "path/url",
    "name": "string",
    "title": "string",
    "about": "string",
    "skills": {
      "automation": ["string"],
      "ai_agent_development": ["string"],
      "other": ["string"]
    },
    "socials": {
      "github": "url",
      "linkedin": "url",
      "email": "string"
    }
  },
  "projects": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "thumbnail": "path/url",
      "tags": ["string"],
      "links": {
        "live": "url",
        "repo": "url"
      }
    }
  ],
  "contact": {
    "email": "string",
    "location": "string"
  }
}
```


## Behavioral Rules
1. **Modern Aesthetics**: All UI must be premium, dynamic, and use modern typography (Outfit).
2. **Dark Mode First**: The theme must be native dark mode with high-contrast accents.
3. **Vanilla Core**: No heavy frameworks or CSS libraries. Focus on performance.
4. **Interactive**: Use micro-animations and smooth transitions for a "living" feel.


## Architectural Invariants
1. Separated concerns between logic and presentation.
2. Deterministic tool execution.
