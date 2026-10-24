# Project Architecture Rules

- Keep `@tanstack/router-core` pinned to `1.171.34` so it matches the versions required by React Router, React Start, and the router plugin; mismatched router internals break the production build.
- Reference restored bonus images through their `.asset.json` URLs in `src/assets/bonus-restored` so missing root-level image files cannot block route compilation.