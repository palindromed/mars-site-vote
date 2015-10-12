Readme for the Mars Site Vote website project
Written by Aaron Filson for B34 Code Fellows Seattle Boot Camp.


Initial work: Starting on domain analysis and user stories.

Assignment description for Monday, October 12.
New week, new project!

The problem domain described below is an example of the type of project that you'll undertake this week. Following that description will be a list of the ways that you can adapt to your own desired approach.

Problem domain example:

CutestKittenPageant.com has hired you to create an app so visitors can vote on who they think is the cutest kitten ever. The following is a list of requirements they've given you.

When the app loads, randomly select two kitten photos from this album (Links to an external site.) (download these photos, and put them in a folder in your project directory).
Ask the visitor to cast their vote by clicking on the photo of the cutest kitten.
After voting,
Highlight the winning kitten photo.
Chart the relative popularity of the two photos.
Increase the total votes for the winning photo by one.
Encourage the visitor to vote for two new randomly selected kitten photos.
We'd like you to be in charge of the look-and-feel of the app too. All we ask is that you do the following.
Choose a custom web font (Links to an external site.).
Choose a custom color palette (Links to an external site.).

Create a layout using semantic HTML (note that our layout techniques will be evolving throughout the week, so do not get hung up on layout at first... save it for later in the week, for the most part)
After further analysis, you realize that you'll need the following domain models.

A set of Photo objects to manage all the attributes and behaviors around kitten photos.
A single Tracker object to manage all the attributes and behaviors around a visitor's voting experience.
For charting the relative popularity of the two kitten photos, start with the Chart.js API (Links to an external site.). If you finish early, see what it takes to replace the Chart API with direct calls to the Canvas API. You don't have to use the Canvas the API in the end, but try it out for yourself.

TIP: First build the HTML structure (at least two interlinked pages), add the JavaScript behavior, and then add some CSS styling. Don't forget to add a README.md describing your approach to this app.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++

How you may adapt this assignment

User voting on images is the primary interactivity
Storing the running vote totals, and displaying them in a chart (or charts) using Chart.JS, is the primary technical challenge
You may choose any subject for voting that you wish. It does not need to be kittens; it could be puppies or professional wrestlers or cups of coffee or whatever you want. Keep in mind that your choice of subject will determine your hypothetical audience, and therefore your design.
Use at least 12 images, and store them in a img directory. It is recommended that you modify them into a standard shape and size using an image editing tool like Photoshop or Gimp (it's open source: http://www.gimp.org (Links to an external site.)), or an online tool such as https://pixlr.com/editor (Links to an external site.).
Utilize your creativity and expression to make something fun. Do you really only want to wear the minimum number of pieces of flair? Of course not!
+++++++++++++++++++++++++++++++++++++++++++++++++++++++

Consider your audience; user stories

Read the following articles on the use of user stories in website development.

http://blogs.collab.net/agile/user-story-examples-and-counterexamples (Links to an external site.)

https://www.mountaingoatsoftware.com/agile/user-stories (Links to an external site.) (note that this one has 6 pages)

Create a USER-STORIES.md document and try writing some user stories for potential users of your site. Work off the format and examples provided in the second article: “As a [role] I can [function] so that [rationale].”

Allow this process to guide your thinking on what you are building, away from "what you want to build" and toward "what you believe your audience wants."

This should be something that also informs your ideas and development of a final project later in the week.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++

Submit your work:

1) Submit a link to your repo to this Canvas assignment.
2) Add a comment to your Canvas submission with answers to the following questions.
How long did this assignment take you?
What observations or questions do you have about what you've learned?
