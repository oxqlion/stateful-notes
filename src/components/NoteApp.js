import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";
import ArchiveList from "./ArchiveList";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            query: '',
            maxText: 5
        }

        this.addNotesHandler = this.addNotesHandler.bind(this);
        this.deleteNotesHandler = this.deleteNotesHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
        this.onSearchTermEventHandler = this.onSearchTermEventHandler.bind(this);
    }

    onSearchTermEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                query: event.target.value,
            };
        });
    }

    addNotesHandler({title, body, createdAt, archived}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        archived,
                        id: +new Date(),
                        title,
                        createdAt,
                        body
                    }
                ]
            }
        })
    }

    deleteNotesHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchivedEventHandler(id) {
        const noteIndex = this.state.notes.findIndex((note) => note.id === id);
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.notes[noteIndex].archived = !this.state.notes[noteIndex].archived;
        this.setState((prevState) => {
            return {
                ...prevState,
                archived: this.state.notes[noteIndex].archived,
            }
        });
    }

    render() {
        return (
            <div className="note-app__container">
                <input className="note-search__bar" type="text" placeholder="Cari catatan..." onChange={this.onSearchTermEventHandler} query={this.state.query}></input>
                <NoteInput addNote={this.addNotesHandler}/>
                {/* {this.state.notes.archived === false ? <NoteList notes={this.state.notes} onDelete={this.deleteNotesHandler} onArchive={this.onArchivedEventHandler}/> : <h1>Belum ada catatan</h1>} */}
                {/* {this.state.notes.archived === true ? <ArchiveList notes={this.state.notes} onDelete={this.deleteNotesHandler} onArchive={this.onArchivedEventHandler}/> : <h1>Belum ada arsip catatan</h1>} */}
                <h1>Catatan</h1>
                <NoteList notes={this.state.notes} query={this.state.query} onDelete={this.deleteNotesHandler} onArchive={this.onArchivedEventHandler}/>
                <h1>Arsip</h1>
                <ArchiveList notes={this.state.notes} query={this.state.query} onDelete={this.deleteNotesHandler} onArchive={this.onArchivedEventHandler}/>
            </div>
        )
    }
}

export default NoteApp;