import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, query, onDelete, onArchive}) {
    const notesArray = (notes.filter(note => note.archived === false));

    if(notesArray.length > 0) {
        return (
            <div className="note-item__false">
                {/* <h1>Catatan</h1>              */}
                {notesArray.filter((note) => {
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
        return <h1 className="empty">Belum ada catatan</h1>
    }

}

export default NoteList;