# ioBroker.opentherm - OpenTherm Gateway Adapter

**ALWAYS follow these instructions first and only fall back to additional search and context gathering if the information here is incomplete or found to be in error.**

This is an ioBroker adapter for OpenTherm Gateway that allows controlling central heating systems via TCP/IP or USB connections to OpenTherm devices.

## Working Effectively

### Bootstrap and Setup
- **Install dependencies**: `npm install` 
  - **TIMING**: Takes ~50 seconds. **NEVER CANCEL** - set timeout to 90+ seconds
  - **EXPECTED**: Will show deprecation warnings, this is normal
  - **EXPECTED**: Will show 39+ vulnerabilities, this is normal for this older project

### Testing and Validation
- **Package validation**: `npm run test:package`
  - **TIMING**: ~0.5 seconds. Set timeout to 10+ seconds
  - **PURPOSE**: Validates package.json and io-package.json structure
  - **EXPECTED**: Should show 38+ passing tests

- **Unit tests**: `npm run test:unit` 
  - **TIMING**: ~0.4 seconds. Set timeout to 10+ seconds
  - **EXPECTED**: Shows "DEPRECATED!" warning but passes

- **Integration tests**: `npm run test:integration`
  - **TIMING**: ~46 seconds. **NEVER CANCEL** - set timeout to 90+ seconds
  - **PURPOSE**: Starts full adapter with mock ioBroker environment
  - **EXPECTED**: Will show Redis server startup messages, then "The adapter started successfully"

- **Manual test run**: `npx mocha --require test/mocha.setup.js "main.test.js"`
  - **TIMING**: ~0.5 seconds. Set timeout to 10+ seconds
  - **PURPOSE**: Runs the basic dummy test

- **CRITICAL**: `npm test` command FAILS due to deprecated mocha.opts - use individual test commands above instead

### Linting and Code Quality
- **Lint with auto-fix**: `npm run lint . --fix`
  - **TIMING**: ~0.8 seconds. Set timeout to 15+ seconds
  - **PURPOSE**: Auto-fixes most linting issues
  - **EXPECTED**: May show ~18 remaining errors in admin/words.js and gulpfile.js (auto-generated files)

- **Lint check only**: `npm run lint .`
  - **TIMING**: ~0.8 seconds. Set timeout to 15+ seconds
  - **PURPOSE**: Shows all linting issues without fixing

- **Lint core files only**: `npx eslint main.js lib/*.js --fix`
  - **TIMING**: Fast. Set timeout to 10+ seconds
  - **PURPOSE**: Focus on main adapter code, ignoring auto-generated files

### Build Tasks (Optional)
- **Update packages**: `npx gulp updatePackages`
  - **TIMING**: Very fast. Set timeout to 10+ seconds
  - **PURPOSE**: Updates package metadata

- **View available tasks**: `npx gulp --tasks`
  - **PURPOSE**: Shows translation and package management tasks

## Validation Scenarios

**ALWAYS run these validation steps after making changes:**

1. **Basic validation**: `npm install && npm run test:package`
2. **Code quality**: `npm run lint . --fix`
3. **Functionality**: `npm run test:integration` - **NEVER CANCEL, takes 46+ seconds**
4. **Manual verification**: Check that your changes don't break module loading

**CRITICAL VALIDATION**: After making code changes, always run the integration test to ensure the adapter can start properly. This is the primary validation that your changes work.

## Common Tasks and Timing Expectations

### Full development cycle (recommended order):
1. `npm install` (50s - **NEVER CANCEL**)
2. `npm run lint . --fix` (0.8s)
3. Make your changes
4. `npx eslint main.js lib/*.js --fix` (focus on core files)
5. `npm run test:package` (0.5s)
6. `npm run test:integration` (46s - **NEVER CANCEL**)

### Quick validation cycle:
1. `npm run lint . --fix` (0.8s)
2. `npm run test:package` (0.5s)

## Key Project Structure

### Core Files
- `main.js` - Main adapter implementation
- `lib/state_attr.js` - State attribute definitions
- `lib/openthermdec.js` - OpenTherm protocol decoder
- `lib/otgwdec.js` - OpenTherm Gateway decoder
- `io-package.json` - ioBroker adapter configuration

### Admin Interface
- `admin/index_m.html` - Admin UI
- `admin/words.js` - Translations (auto-generated, has lint issues)

### Testing
- `test/integration.js` - Full adapter startup test
- `test/package.js` - Package validation
- `main.test.js` - Basic unit test

### Configuration
- `.eslintrc.json` - ESLint rules (tabs, single quotes, Node.js environment)
- `gulpfile.js` - Build and translation tasks
- `.github/workflows/test-and-release.yml` - CI/CD pipeline

## Dependencies and Environment

### Runtime Dependencies
- `@iobroker/adapter-core` - Core ioBroker functionality
- `serialport` - USB communication with OpenTherm devices

### Environment
- **Node.js**: Works with 12.x, 14.x, 16.x, 20.x (current: 20.19.5)
- **NPM**: 10.8.2+ 
- **Platform**: Linux, Windows, macOS supported

## Known Issues and Workarounds

### Test Command Issues
- **DO NOT USE**: `npm test` - fails due to deprecated mocha.opts
- **USE INSTEAD**: Individual test commands (`npm run test:package`, `npm run test:integration`)

### Linting Issues
- `admin/words.js` and `gulpfile.js` have persistent lint errors (auto-generated files)
- Focus linting on core files: `npx eslint main.js lib/*.js --fix`

### Module Loading
- Cannot run `node main.js` directly - requires ioBroker js-controller
- Use integration tests to verify adapter functionality

## Critical Reminders

- **NEVER CANCEL** the integration test - it takes 46+ seconds and is essential validation
- **NEVER CANCEL** npm install - it takes 50+ seconds 
- **ALWAYS** run `npm run lint . --fix` before committing
- **ALWAYS** run integration test after code changes to verify functionality
- **TIMING**: Set timeouts of 90+ seconds for install and integration tests, 15+ seconds for linting

## Frequent Command Reference

```bash
# Full setup and validation
npm install                          # 50s - NEVER CANCEL
npm run lint . --fix                 # 0.8s
npm run test:package                 # 0.5s  
npm run test:integration             # 46s - NEVER CANCEL

# Quick validation
npm run lint . --fix && npm run test:package

# Core file linting only
npx eslint main.js lib/*.js --fix

# View available gulp tasks
npx gulp --tasks
```