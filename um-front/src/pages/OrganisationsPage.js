import React, { useState } from "react"
import {
    MdAdd,
    MdEdit,
    MdClose,
} from "react-icons/md"
import { Modal, ModalBody, ModalHeader } from "shards-react"
import { useQuery, useMutation } from "@apollo/client"

import { GET_ORGANISATIONS } from "./../graphql/queries"
import { CREATE_ORGANISATION, DELETE_ORGANISATION } from "./../graphql/mutations"

import BoringCard from "./../components/BoringCard"
import { List, OrganisationItem, UserItem } from "./../components/List"
import { OrganisationForm } from "../components/Form"

const OrganisationsPage = () => {
    const [modalIsOpen, setModalOpen] = useState(false)
    const { loading, error, data, refetch } = useQuery(GET_ORGANISATIONS)
    const [createOrganisation] = useMutation(CREATE_ORGANISATION)
    const [deleteOrganisation] = useMutation(DELETE_ORGANISATION)

    let toggleModal = () => {
        console.log(data)
        setModalOpen(!modalIsOpen)
    }


    let onSubmit = (name) => {
        let organisation = { name: name }
        createOrganisation({ variables: { organisation: organisation } })
        refetch()
        toggleModal()
    }

    let onClickDelete = (id) => {
        console.log(id)
        deleteOrganisation({ variables: { id: id } })
        refetch()
    }

    return (
        <>
            <Modal open={modalIsOpen} toggle={toggleModal}>
                <ModalHeader>Create new user</ModalHeader>
                <ModalBody>
                    <OrganisationForm onSubmit={onSubmit} />
                </ModalBody>
            </Modal>
            <BoringCard title="Organisation">
                {loading ?
                    <p>Loading ...</p> :
                    <List
                        data={data.organisations}
                        header={<OrganisationItem icon={<MdAdd size="1.5em" />} onClick={toggleModal} />}
                        component={({ name, _id }) => <OrganisationItem name={name} icon={<MdClose size="1.5em" />}
                            onClick={() => onClickDelete(_id)} />}
                    />
                }
                <List />
            </BoringCard>
        </>
    )
}

export default OrganisationsPage