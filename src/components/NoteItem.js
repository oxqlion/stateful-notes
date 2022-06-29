import React from "react";
import { showFormattedDate } from "../utils";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemBody from "./NoteItemBody";

function NoteItem({title, body, query, archived, createdAt, id, onDelete, onArchive}) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body} />
            <div className="note-item__buttons">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} archived={archived} query={query} onArchive={onArchive}/>
            </div>
        </div>
    );
}

export default NoteItem;