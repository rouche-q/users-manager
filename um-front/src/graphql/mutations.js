import { gql } from "@apollo/client"

const CREATE_USER = gql`
    mutation CreateUser($user: UserInput){
        createUser(user: $user) {
            _id
            firstname
            lastname
            email
            organisation
            role
            squad
        }
    }  
`

const DELETE_USER = gql`
    mutation DeleteUser($id: ID){
        deleteUser(id: $id)
    }  
`

const CREATE_ORGANISATION = gql`
mutation CreateOrganisation($organisation: OrganisationInput) {
    createOrganisation(organisation: $organisation) {
        name
        _id
    }
}
`

const DELETE_ORGANISATION = gql`
    mutation DeleteOrganisation($id: ID){
        deleteOrganisation(id: $id)
    }  
`


export { CREATE_USER, DELETE_USER, CREATE_ORGANISATION, DELETE_ORGANISATION }