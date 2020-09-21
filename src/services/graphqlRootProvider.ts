import { testQuery } from "../gql/TestQuery";

export const graphqlRootProvider = {
    ...testQuery.getProvider()
}
