import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            title:'',
            body:'',
            archived: false,
            createdAt: new Date(),
            maxText: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const max = 50;
        const titleInputUser = event.target.value.substr(0, max);
        const titleInputUserLength = titleInputUser.length;

        this.setState((prevState) => {
            return {
                ...prevState,
                title: titleInputUser,
                maxText: max - titleInputUserLength
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" className="note-input__judul" placeholder="Judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <input type="text" className="note-input__body" placeholder="Tulis catatan disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;