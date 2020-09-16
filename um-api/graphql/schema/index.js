import { buildSchema } from "graphql"

const schema = buildSchema(`
    type User {
        _id: ID!
        firstname: String!
        lastname: String!
        email: String!
        organisation: String
        squad: String
        role: String
    }

    type Organisation {
        _id: ID!
        name: String
    }

    type Squad {
        _id: ID!,
        name : String!
        leader: User
        member1: User
        member2: User
        minion: User
    }

    input UserInput {
        firstname: String!
        lastname: String!
        email: String!
        organisation: String
        squad: String
        role: String
    }

    input OrganisationInput {
        name: String!
    }


    type Query {
        users: [User]!
        organisations: [Organisation]!
    }

    type Mutation {
        createUser(user: UserInput): User
        deleteUser(id: ID): String
        createOrganisation(organisation: OrganisationInput): Organisation
        deleteOrganisation(id: ID): String
    }

    schema {
        query: Query
        mutation: Mutation
    }
`)

export default schema