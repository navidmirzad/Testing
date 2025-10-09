# Why Parameterised Tests over individual unit tests:
- The benefits of writing one unit test per case are
    - Helps readability
    - Enforces the triple AAA pattern
- But can result in many unnecessary lines of code
- makes the overall unit test structure harder to understand - (According to the slides on itslearning ...)

- Most frameworks allow parameterised tests
    - Sometimes called DataProviders

- Similar test cases can be grouped into one unit test
    - it saves many lines of code
    - but downside is it blurries the tripleAAA pattern
- The values for each test case is usually provided in the form of an array.

# Test doubles
- Fake objects that replicate real/other objects in the codebase.
    - Help you test a unit in total isolation
    - Substitute components that aren't built yet
    - Speeds up test execution

- Essentially "Test doubles" is just creating mock data or using mock data to emulate the real thing.
- 'Stub' is when you emulate incoming interactions fx. a file

