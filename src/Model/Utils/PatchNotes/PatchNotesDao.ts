import { PatchNotes } from "./PatchNotes";

export interface PatchNotesItem {
    date: string;
    title: string;
    summary: string | undefined;
    changes: string[];
}

export class PatchNotesDao {
    public static getAllPatchNotes(): PatchNotesItem[] {
        return PatchNotes;
    }

    public static getLatestPatchInfo(): PatchNotesItem {
        return PatchNotes[0];
    }
}
