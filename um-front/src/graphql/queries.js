import { gql } from "@apollo/client"

const GET_USERS = gql`
{
    users {
      _id
      firstname
      lastname
      email
      organisation
      role
    }
  }  
`

const GET_ORGANISATIONS = gql`
{
  organisations {
    name
    _id
  }
}
`

export {GET_USERS, GET_ORGANISATIONS}