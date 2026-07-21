.PHONY: setup dev build lint preview check

# Install dependencies
setup:
	bun install

# Run the dev server with hot reload
dev:
	bun run dev

# Type-check and build for production
build:
	bun run build

# Lint the codebase
lint:
	bun run lint

# Preview the production build locally
preview:
	bun run preview

# Lint + build (run before committing)
check: lint build
