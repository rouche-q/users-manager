import React, { createContext, useReducer } from 'react'

const initialState = { notes: [], currentNote: null }
const store = createContext(initialState)
const { Provider } = store

const NoteContext = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'addNote':
                return { ...state, ...{ notes: [...state.notes, action.payload] } }
            case 'deleteNote':
                const index = state.notes.findIndex((note) => note[0] === action.payload[0])
                if (index > -1)
                    state.notes.splice(index, 1)
                return { ...state, ...{ notes: state.notes } }
            case 'setSavedNotes':
                return { ...state, ...{ notes: action.payload } }
            case 'setCurrentNote':
                let note = state.notes.find((note) => note[0] === action.payload[0])
                return { ...state, currentNote: note[1] }
            default:
                throw new Error()
        }
    }, initialState)

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, NoteContext }