import React, { useEffect, useState } from "react"
import {
    MdAdd,
    MdEdit,
    MdClose,
} from "react-icons/md"
import { Modal, ModalBody, ModalHeader } from "shards-react"
import { useMutation, useQuery } from "@apollo/client"

import { GET_USERS } from "./../graphql/queries"
import { CREATE_USER, DELETE_USER } from "./../graphql/mutations"

import BoringCard from "./../components/BoringCard"
import { List, UserItem } from "./../components/List"
import { UserForm } from "../components/Form"

const UsersPage = () => {

    const [modalIsOpen, setModalOpen] = useState(false)
    const { loading, error, data, refetch } = useQuery(GET_USERS)
    const [createUser] = useMutation(CREATE_USER)
    const [deleteUser] = useMutation(DELETE_USER)

    let toggleModal = () => {
        setModalOpen(!modalIsOpen)
    }

    let onSubmit = (firstname, lastname, email, organisation, squad, role) => {
        let user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            organisation: organisation || "",
            squad: squad || "",
            role: role || ""
        }

        createUser({ variables: { user: user } })
        refetch()
        toggleModal()
    }

    let onClickDelete = (id) => {
        deleteUser({ variables: { id: id } })
        refetch()
    }

    return (
        <>
            <Modal open={modalIsOpen} toggle={toggleModal}>
                <ModalHeader>Create new user</ModalHeader>
                <ModalBody>
                    <UserForm onSubmit={onSubmit} />
                </ModalBody>
            </Modal>
            <BoringCard title="Users">
                {loading ?
                    <p>Loading ...</p> :
                    <List
                        data={data.users}
                        header={<UserItem icon={<MdAdd size="1.5em" />} onClick={toggleModal} />}
                        component={({ _id, firstname, lastname, email, organisation, squad, role }) =>
                            <UserItem name={firstname + ' ' + lastname} email={email}
                                organisation={organisation || "No yet"} squad={squad || "Not yet too"}
                                role={role || "I don't want to be a minion"} icon={<MdClose size="1.5em" />}
                                onClick={() => onClickDelete(_id)}
                            />}
                    />
                }
            </BoringCard>
        </>
    )
}

export default UsersPage