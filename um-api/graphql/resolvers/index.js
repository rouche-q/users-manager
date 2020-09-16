import User from "./../../models/user"
import Organisation from "./../../models/organisation"

const resolver = {

    // Query

    users: async () => {
        try {
            const usersFetched = await User.find()
            return usersFetched.map((user) => (user._doc))
        } catch (error) {
            throw (error)
        }
    },

    organisations: async () => {
        try {
            const OrgaFetched = await Organisation.find()
            return OrgaFetched.map(orga => (orga._doc))
        } catch (error) {
            throw (error)
        }
    },

    // Mutation

    createUser: async (args) => {
        try {
            const { firstname, lastname, email, organisation, squad, role } = args.user
            const user = new User({ firstname, lastname, email, organisation, squad, role })
            const newUser = await user.save()
            return newUser._doc
        } catch (error) {
            throw (error)
        }
    },

    deleteUser: async (args) => {
        try {
            const id = args.id
            await User.findByIdAndDelete(id)
            return ("User removed")
        } catch (error) {
            throw (error)
        }
    },

    createOrganisation: async (args) => {
        try {
            const { name } = args.organisation
            const orga = new Organisation({ name: name })
            const newOrga = await orga.save()
            return newOrga._doc
        } catch (error) {
            throw (error)
        }
    },

    deleteOrganisation: async (args) => {
        try {
            const id = args.id
            console.log(id)
            await Organisation.findByIdAndDelete(id)
            return ("Organisation removed")
        } catch (error) {
            throw (error)
        }
    }


}

export default resolver