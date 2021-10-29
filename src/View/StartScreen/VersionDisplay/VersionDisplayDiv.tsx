import React from "react";
import { PatchNotesDao } from "../../../DataStorage/PatchNotes/PatchNotesDao";
import "./VersionDisplayDivStyles.less";

export const VersionDisplayDiv: React.FC<{}> = (props) => {
    
    let version: string = PatchNotesDao.getLatestPatchInfo().version;
    
    return (<div className="VersionDisplayDiv">
        <h1>Version {version}</h1>
    </div>)
}