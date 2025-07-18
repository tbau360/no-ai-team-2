# no-ai-team-2
The intent of this challenge is to assess measurable efficiencies gained through the use of AI toolsets without introducing selection bias by using actual work at G360 for which subject matter expertise may come into play.

Note that the task outlined here intentionally provides some ambiguity that would require research, not just coding know-how. 

As part of the challenge, participants will be divided into three categories:

 No-AI: participants in this group may use the internet, Stack Overflow, etc., but should not use any AI toolset, either within the IDE or via a tool like ChatGPT.

ALL-AI: participants in this group must ONLY use a prompt engine for generating code. If alterations are needed, they must be made through the prompt engine.

Hybrid: participants in this group should use a combination of prompting and manual methodology to achieve the goal, emphasizing AI in places where it is efficient to do so.

Teams may be 1-2 developers depending on 1) ability to develop full-stack, or 2) assignment to ALL-AI team where knowledge of how to develop for a specific language or part of the stack is less relevant.

The Challenge:
Build a single project that has a frontend and backend. This project should be set up so that you can run a task to simultaneously spin up the frontend and backend.

The BACKEND should:
Utilize any backend language/framework of your choosing.

Expose the following endpoints:

Endpoint #1

Accepts 

A start and end date.

Returns 

A list of unique commit authors within the date constraints supplied.

Endpoint #2

Accepts

A start and end date.

Returns 

A list of commit SHAs and titles associated with commits that have a significant deviation based on a z-score > 2 from the mean total changes across all commits within the date range provided.

Endpoint #3

Accepts

A start and end date.

A metric_type parameter with the following enumerated values: commits, additions, deletions, total_changes (the latter being a calculated value derived from additions + deletions).

An OPTIONAL author parameter. When this parameter is provided, it should filter the results to the supplied author.

Returns 

A JSON data structure that represents Sunday through Saturday and the sum of ALL of the associated activity (based on the dates, enumeration, and optionally the author passed in) on that day for every occurrence of that day between the dates supplied.

Example: If I passed in an argument of commits, I should get back a data structure showing me the total number of commits that happened on Sun-Sat, regardless of WHICH Sun-Sat. If I additionally supply an author, then the data returned would only show that author’s commits.

The purpose of this metric is to show activity patterns for a given day of the week. (i.e. what days of the week are people typically committing code to this repo?).

Endpoint #4

Accepts

A start and end date.

Returns 

A JSON data structure detailing occurrences of words in commit messages (for commits within the dates provided) and their frequency, eliminating common “stop words” such as “the”, “and”, etc.

Sourcing Your Data

Commit data should be sourced from OpenRA public repo or any public repo with a similar long-term and active commit history. 

Make use of the GraphQL endpoint of GitHub’s API (https://api.github.com/graphql).

Gracefully handle timeouts, rate limits, and pagination.

Pull all non-merge commits between two supplied dates (inclusive).

The start date should default to one year ago.

The end date should default to yesterday.

Output a progress bar to the terminal window that indicates the progress of the data fetch based on the pagination of said data.

The fetched data should be cached locally to avoid redundant fetches on repeated runs with the same parameters.

Upon execution, there should be output to the terminal window that indicates whether the cache was used.

The data fetch should save incremental progress so that in the event of untimely or unplanned code termination wherein not all data is fetched, the next subsequent run will pick up where it left off.

Make use of graceful error handling and appropriate error resolution with the frontend client.

The FRONTEND should:
Render a date start/end selector (utilized by all backend calls)

Render a table that shows high deviations in commit sizes utilizing endpoint #2 above. This should be paginated as necessary.

Render a visual SUN-SAT timeline (line graph or bar graph) with filters for metric_type (commits, additions, deletions, total_changes) and author (sourced from endpoint #1 above) that utilizes endpoint #3 above.

Render a word cloud of commit word frequency.

Data from previous requests should be cached locally so that the last seen visualizations render by default across page reloads.

Expose a button that triggers new requests to the endpoints defined above with the associated arguments coming from the values entered in the above form controls.

This button should be debounced.

Show an animated “Please Wait…” interstitial for any server interactions.

Additional Considerations:
Try to accomplish as much of the task as possible. Conversely, feel free to embellish with additional features if time permits (be creative!), but try to make sure that your code is demo-able by the end of the exercise, even if you weren’t able to finish every feature. Timebox and prioritize your work accordingly!

Feel free to make use of whatever libraries you deem appropriate to the task.

Scoring Criteria:
It’s not fun if there’s not a winner, right?

Projects will be graded on the following criteria:

Number of task criteria met

Polish, performance, and attention to detail

Timeliness

Code quality

Creativity (e.g. apply a marketing spin or creative branding on it using AI…or interpret what this means through your own lens)

Extra credit items (e.g. show us how much of an over-achiever you are)

 

Participants

AI Teams:

Team 1

Alex S

Rebecca

Al (half-day) 


Team 2

Surbhi

Ed Hernandez

Afeefa

 

Hybrid AI:

Team 1

Orlando  (Hybrid)

Carlos Cajina

Rene Nieto (React)


Team 2

Mohamed Osman

Jorge Cascante

Luis Gonzalez


Team 3

Nick Darnley

Emmanuel

Joel

 

No AI:

Team 1

Molly Goforth

Joe

Aaron Aguerrevere


Team 2

David Shaw

Thomas Bau (Python)