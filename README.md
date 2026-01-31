# SwiftTranslator Playwright Tests

Automated UI tests for SwiftTranslator (Singlish → Sinhala) using Playwright Test with TypeScript.

## Test Coverage

- **24 Positive Functional Tests**: Verify correct translation of valid Singlish inputs to Sinhala
- **10 Negative Functional Tests**: Verify handling of invalid or problematic inputs
- **1 UI Test**: Verify real-time output updates and clearing behavior

## Setup

1. Install dependencies:
   ```bash
   npm i
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

Run tests in UI mode:
```bash
npx playwright test --ui
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

## View Test Report

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/
│   ├── testData.ts          # Test cases data
│   └── swifttranslator.spec.ts  # Test runner
├── package.json
├── tsconfig.json
├── playwright.config.ts
└── README.md
```

## Test Features

- **Robust Selectors**: Uses multiple selector strategies to locate input and output elements
- **Text Normalization**: Handles whitespace variations in output
- **Real-time Updates**: Waits for output to update dynamically
- **Flexible Assertions**: Uses exact matching with fallback to contains matching for stability
- **Data-driven**: All test cases are defined in `testData.ts` for easy maintenance

## Notes

- Tests target: https://www.swifttranslator.com/
- Input element is located using multiple strategies (id, data-testid, placeholder, etc.)
- Output element is located by detecting Sinhala characters or output-related attributes
- Negative tests verify that output is not equal to input and is non-empty
- UI test verifies that clearing input clears output immediately
