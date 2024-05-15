# Social Media Wall

This project is a Social Media Wall built using ReactJS.

## Features

- At the top is a menu bar, with notifications and profile dropdown to the right.
- Next section contains an "Add a Post" section which allows users to write and post content.
- Below that is the section where all the posts are displayed in reverse chronological order (latest at the top).
- Each post includes message content with options to like, and delete. each post also shows the name of user who posted it. user can delete a post by clicking on the delete option provided at the top right corner of the post.
- There is also a chat button floating at the bottom right corner of the page, with a chat Icon that remains visible all the time and allows users to see the chat contact list from which user can select a friend to chat with.

## Assumptions

- Since it was not given it the problem statement so vite is used instead of create-react-app. 
- Friends list is hardcoded.
- Notification and profile menu dropdown data is hardcoded. Since the details about the Notification and profile functionality was not given clearly so only dropdown functionality is created.
- Design is very simple. blue theme is used to create website.
- Responsiveness is not needed for the most part of the website.
- Due to shortage of time some of the easy functionalities were not implemented.

## Run Instructions

1. Clone the repository.
2. Navigate to the project directory.
3. Navigate to frontend directory.
3. Install dependencies: `npm install`.
4. Start the development server: `npm run dev`.


## Usage

- All the components used are present in the components in the `src/components` directory.
- Nearly all the state logic is provided by the context providers in the `src/context` directory to manage state and data sharing.

## Author

- Deepak Singh
- email: Deepaksg21@iitk.ac.in