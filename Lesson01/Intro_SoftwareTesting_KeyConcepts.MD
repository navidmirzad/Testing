# Testing vs. Debugging
- testing is when you try to break something or test a function/method where debugging is when you know there is an error and try to find the error fix it while coding so you can get to a point where you can write tests for your code.

# Static vs. Dynamic Testing
- Static testing = examining code, design, or documentation without executing the program. Examples: code reviews, walkthroughs, linting, PR reviews.

- Dynamic testing = executing the software to validate its behavior. Examples: unit tests, integration tests, UI tests.

# Positive vs. Negative Testing
- Positive testing checks that the system works as expected with valid input (e.g., entering a correct username/password).
- Negative testing checks that the system handles invalid or unexpected input gracefully (e.g., entering an empty password or invalid format).

# Verification and Validation
- verification is: are we building the product right? through reviews, static testing to verify.
- validation is: are we building the right product? actual unit testing, dynamic testing to validate.

# Regression Testing
- Regression testing is when you run already existing unit tests to make sure new features or bug fixes haven’t broken already existing functionality. This is especially important for larger projects, as you can set up a CI/CD pipeline that checks if all existing unit tests run and succeed, so you can push your new code in.

# The General Testing Principles
- Test early and often – start testing as soon as possible in the development cycle (shift-left).
- Exhaustive testing is impossible – you can’t test all input combinations; focus on risk-based testing.
- Defect clustering – a small number of modules usually contain most defects.
- Pesticide paradox – running the same tests repeatedly will eventually stop finding new defects; you need to update tests.
- Testing shows presence of defects, not their absence – passing tests doesn’t prove there are no bugs.
- Independent testing – ideally, testers should be independent of the developers to reduce bias.
- Modularity / unit focus – as you said, test one thing at a time, keep tests isolated.

# SDLC & V-Model
- [The General Testing Principles](https://www.geeksforgeeks.org/software-engineering/software-engineering-sdlc-v-model/)

- The rationale of the V-model
- How to apply it in the context of a software development project
- How to apply it in an iterative development (e.g., Agile)
- The differences between the four levels of testing (
    - unit
    - integration
    - system 
    - acceptance

- The Test Pyramid, with a critical focus as to its present day validity

# Introduction to Unit Testing, specifically:
- The AAA pattern