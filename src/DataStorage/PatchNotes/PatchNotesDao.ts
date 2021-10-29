import { PatchNotes } from "./PatchNotes";

export interface PatchNotesItem {
    date: string;
    updateType: string;
    version: string;
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
