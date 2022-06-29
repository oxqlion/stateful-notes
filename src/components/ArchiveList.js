import React from "react";
import NoteItem from "./NoteItem";

function ArchiveList({notes, query, onDelete, onArchive}) {
    const archiveArray = (notes.filter(note => note.archived === true));

    if(archiveArray.length > 0) {
        return (
            <div className="note-item__true">
                {/* <h1>Arsip</h1> */}
                {/* {archiveArray.map((note) => (
                    <NoteItem key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} onDelete={onDelete} onArchive={onArchive}{...note} />
                ))} */}

                {archiveArray.filter((note) => {
                    if (query) {
                        return note.title.toLowerCase().includes(query.toLowerCase());
                    }
                    return true;
                }).map(((note) => (
                    <NoteItem key={note.id} id={note.id} title={note.title} body={note.body} query={note.query} createdAt={note.createdAt} onDelete={onDelete} onArchive={onArchive}{...note} />
                )))}
            </div>
        )
    } else {
        return <h1 className="empty">Belum ada arsip catatan</h1>
    }
}

export default ArchiveList;