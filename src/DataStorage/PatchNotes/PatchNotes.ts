import { PatchNotesItem } from "./PatchNotesDao";

export const PatchNotes: PatchNotesItem[] = [
    {
        date: "September 30, 2021",
        title: "Update 0.0.2",
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
        title: "Beta Release 0.0.1",
        summary: "Beta is out! Feedback needed.",
        changes: ["Check it out!", "Character banks are temporarily down while I make them possible.", "Graphics are subject to suggestions."],
    },
];
