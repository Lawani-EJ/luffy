<p align="center">
    <a href="https://tropicolx.hashnode.dev/building-a-slack-clone-with-nextjs-and-tailwindcss-part-one" style="display: block;" align="center">
        <img src="https://res.cloudinary.com/tropicolx/image/upload/v1732563279/Slack%20clone/pzsikrnn7odrwyylzflh.png" alt="Building a Slack Clone with Next.js, TailwindCSS, and Stream" width="60%" />
    </a>
</p>

# Building the Slack Clone (Phase 1)

## Build the workspace dashboard
In this second part now that I've setup the database and authentication, It's time to start building the workspace dashboard.
This dashboard will be the main area where users can use different parts of the app, view their workspaces and see invitations to other workspaces.    

### 1. Create the navigation bar 
The navigation bar is integral to websites because it helps users navigate the sites and access different features.

### 2. Creating a Workspace List Component
To display all the workspaces a user has, we need a WorkspaceList component. This component will show the workspace details and allow users to launch a workspace or accept an invitation.

- The component takes several props:
    - `action`: A function defining what happens when the action button clicks.
    - `actionText`: The text displayed on the button for each workspace.
    - `buttonVariant`: Specifies the style of the button, either 'primary' or 'secondary'.
    - `title`: The title of the workspace list.
    - `workspaces`: An array of workspace objects with additional details.
- For each workspace, we show:
    - Name: The name of the workspace.
    - Image: The workspace image or a placeholder if no image is provided.
    - Number of Members: The count of members in the workspace.
 
- Each workspace item is also a form that has hidden input fields. These fields store essential data like `channelId`, `token`, and `workspaceId`. When a user clicks the submit button, these inputs send the needed information to act for that workspace.

### Putting all the componets together
1. User Information: The function starts by retrieving the current user's information using Clerk.
2. Workspace Data: It queries the database to get all the workspaces the user belongs to and any pending invitations.
3. Functions for Actions: There are three main functions defined here:
   - `acceptInvitation()`: Accepts an invitation and redirects the user to the appropriate workspace.
   - `launchChat()`: Launches the selected workspace's chat by redirecting to the correct URL.
   - `goToGetStartedPage()`: Redirects to the "Get Started" page to create a new workspace.

Finally, I return the `Navbar`, `WorkspaceList`, and Clerk’s `SignOutButton` button to present a welcoming interface.

## Outpus
![image](https://github.com/user-attachments/assets/1091f816-838c-4151-87b9-afe80b478c48)

<!--
In this first part, I'll be setting up the basics by setting up the project and building the first user interface, including the channel page.

1. In this first part of building the Slack clone, I:
   - Set up the project, including workspace creation, channel management, and integration with Stream and Clerk.
   - Created API routes for managing workspaces and channels.
   - Built essential components for navigating between workspaces and channels.

The project structure organized to keep the code neat and easy to manage as it grows:
1. Components Directory: This folder has all the reusable parts of the user interface, like icons, buttons, and other base components.
2. Hooks Directory: The hooks folder has custom React hooks like useClickOutside, which we will use to handle specific user interactions.
3. Lib Directory: This folder contains utility functions like utils.ts that simplify common tasks across the app.

## Setting up the Database
I'll be using Prisma to help us interact with this database easily.
we need to be able to store information about workspaces, channels, members, and invitations in a database.
### What is Prisma?
Prisma is an open-source ORM (Object-Relational Mapping) tool that lets us define our database structure and run queries efficiently. With Prisma, you can write database operations more intuitively without needing to handle SQL directly, which makes things simpler and reduces errors.

## Setting up Clerk and User Authentication with Clerk
Clerk is a platform that helps manage users by providing tools for authentication and user profiles. It includes ready-made UI components, APIs, and a dashboard for admins, making adding authentication features to your app much more straightforward. Instead of building an entire authentication system yourself, Clerk saves time and effort by offering these features out of the box.

![image](https://github.com/user-attachments/assets/38d5efec-fa82-4684-b7de-f6642994bba3)

![image](https://github.com/user-attachments/assets/005ecef7-0478-4f81-9604-418ec9554b6a)

-->


<!--
# The Slack Clone

A collaborative chat and video-calling application inspired by Slack, built using Next.js, TypeScript, and Stream's Video and Chat SDKs. This Slack clone offers real-time messaging, video calls, rich text formatting, and more, providing a complete team communication solution.

<p align="center"><a href="https://tropicolx.hashnode.dev/building-a-slack-clone-with-nextjs-and-tailwindcss-part-one" align="center">Click to read!</a></p>

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- **User Authentication**: Secure user authentication using Clerk for registered users and guests.
- **Workspace and Channel Management**: Users can create workspaces and channels, allowing organized conversations.
- **Rich Text Messaging**: Rich text formatting, emojis, and reactions for more expressive messages.
- **Dynamic Video Calling**: Integrated video call functionality using Stream's Video SDK, similar to Slack's "Huddle" feature.
- **Screen Sharing**: Participants can share screens during video calls for easier collaboration.
- **File Sharing**: Upload and share files within a channel.
- **Interactive Controls**: Users can mute/unmute audio, enable/disable video, and more.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## Demo

You can access a live demo of the application [here](https://slack-clone-nine-jet.vercel.app/).

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Stream Account**: Sign up for a free account at [Stream](https://getstream.io/)
- **Clerk Account**: Sign up for a free account at [Clerk](https://clerk.dev/)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tropicolx/slack-clone.git
   cd slack-clone
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```
3. **[Set Up Database](https://tropicolx.hashnode.dev/building-a-slack-clone-with-nextjs-and-tailwindcss-part-one#heading-running-prisma-migrations)**
4. **Set Up Stream Dashboard**
   
   - Create a new Stream app with chat messaging and video calling enabled.
   - Update Permissions:
      - Navigate to **Roles & Permissions** under **Chat messaging**.
      - Select the **user** role and **messaging** scope.
      - Edit permissions to enable:
         - **Create Message**
         - **Read Channel**
         - **Read Channel Members**
         - **Create Reaction**
         - **Upload Attachments**
         - **Create Attachments**
      - Save and confirm changes.

5. **Set Up Clerk Dashboard**
   
   [Create and setup a new Clerk application](https://tropicolx.hashnode.dev/building-a-slack-clone-with-nextjs-tailwindcss-and-stream#heading-creating-a-new-clerk-project).

6. **Set Up Environment Variables**

   Create a `.env.local` file in the root directory and add your Stream and Clerk API keys:

   ```env
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

## Usage

1. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

2. **Create a New Workspace**

   - Visit `http://localhost:3000`.
   - Click on **Create Workspace** to start a new workspace and add channels for communication.

3. **Join a Workspace and Start a Huddle**

   - Users can join an existing workspace and initiate a Huddle (video call) within any channel.

## Technologies Used

- **Next.js**: React framework for server-side rendering and routing.
- **TypeScript**: Typed superset of JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **Stream Video SDK**: Provides video calling functionality.
- **Stream Chat SDK**: Enables real-time messaging.
- **Clerk**: User management and authentication.
--->
