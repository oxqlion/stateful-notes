import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemBody({title, body, createdAt}) {
    return (
        <div className="note-item__container">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            <span className="barrier"></span>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemBody;