// GET Method:

// Purpose: Retrieve data from the server
// Characteristics:

// Data is sent in the URL as query parameters
// Limited amount of data can be sent (typically 2048 characters)
// Data is visible in the URL, so not secure for sensitive information
// Idempotent: multiple identical requests should have the same effect as a single request
// Cacheable


// POST Method:

// Purpose: Submit data to be processed by the server
// Characteristics:

// Data is sent in the request body
// Can send large amounts of data
// More secure as data is not visible in the URL
// Not idempotent: multiple identical requests may result in multiple resources being created
// Not cacheable by default



// GET:

// Purpose: Retrieve data
// Data in: URL parameters
// Safe: Yes (doesn't change server state)
// Idempotent: Yes
// Cacheable: Yes


// POST:

// Purpose: Create new resource
// Data in: Request body
// Safe: No (changes server state)
// Idempotent: No
// Cacheable: Not typically


// PUT:

// Purpose: Update/replace entire resource
// Data in: Request body
// Safe: No
// Idempotent: Yes
// Cacheable: No


// PATCH:

// Purpose: Partial update of resource
// Data in: Request body
// Safe: No
// Idempotent: No (typically, but can be implemented as idempotent)
// Cacheable: No


// DELETE:

// Purpose: Remove a resource
// Data in: Usually none (sometimes URL parameters)
// Safe: No
// Idempotent: Yes
// Cacheable: No



// Explanation of Idempotent:
// The word "idempotent" might sound technical, but the concept is straightforward. Let's break it down:
// Meaning:
// An operation is idempotent if doing it once has the same outcome as doing it multiple times.
// Simple Explanation:
// Imagine you're using a TV remote. Pressing the power button once turns the TV on or off. Pressing it multiple times doesn't make the TV "more on" or "more off". The end result is the same whether you press it once or many times. This is an idempotent action.
// Examples in everyday life:

// Setting an alarm clock: Setting it for 7 AM once or ten times has the same result.
// Putting a car in "Park": Shifting to Park once or multiple times ends with the car in Park.

// In HTTP methods:

// GET: Looking up information multiple times doesn't change the information.
// PUT: Updating a user's name to "John" once or many times results in the name being "John".
// DELETE: Deleting a file once or trying to delete it multiple times ends with the file being gone.

// Non-idempotent example:

// POST: Creating a new user account. Doing this multiple times usually creates multiple accounts.




// Key Uses of package-lock.json
// Ensuring Consistent Installations:

// The primary purpose of package-lock.json is to lock the versions of installed packages. This ensures that the same dependency versions are installed every time you run npm install, providing consistency across different environments (e.g., development, testing, production).
// Performance Optimization:

// By storing the exact version and the resolved URL of each installed package, package-lock.json allows for faster installations. The dependency tree is pre-computed, so npm doesn’t have to resolve dependencies from scratch each time, improving installation speed.

// Collaboration:

// When working in a team, package-lock.json ensures that all team members have the same dependency versions installed. This avoids the "it works on my machine" problem by providing a consistent setup for all developers.