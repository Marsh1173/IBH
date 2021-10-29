import { PatchNotesItem } from "./PatchNotesDao";

export const PatchNotes: PatchNotesItem[] = [
    {
        date: "October 29, 2021",
        updateType: "Update",
        version: "0.0.3",
        summary: "PHYSICS, upcoming features in todo page, website icon, mouse touch-ups, crosshair design",
        changes: [
            "ADDED OBJECT PHYSICS!",
            "Added a todo page to the menu, with future patches outlined!",
            "Added a website icon!",
            "Changed the theme.",
            "Increased aiming sensitivity slightly and improved mouse movement response.",
            "Increased crosshair visibility. It now changes based on the colors beneath rather than being a flat color.",
            'Added "O" option to reset character position. DEBUGGING ONLY',
            "Added a shove feature to the right mouse button.",
        ],
    },
    {
        date: "September 30, 2021",
        updateType: "Update",
        version: "0.0.2",
        summary: "Ease of life changes, in-game menu and better immersion. Improved gameplay.",
        changes: [
            'There is now an in-game menu opened with "P".',
            "You can now pause a game while playing, and leave or resume from there.",
            "Fullscreen is enabled, with pointer locking so people with multiple monitors don't click out.",
            "A miniature sprite was added!",
            "Shooting and bullet collision added!",
            "Rudimentary particles were added.",
        ],
    },
    {
        date: "September 20, 2021",
        updateType: "Beta Release",
        version: "0.0.1",
        summary: "Beta is out! Feedback needed.",
        changes: ["Check it out!", "Character banks are temporarily down while I make them possible.", "Graphics are subject to suggestions."],
    },
];
