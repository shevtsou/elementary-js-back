import { gqlCourseQuery } from "../gql/queries/GQLCourseQuery";
import { testQuery } from "../gql/TestQuery";

export const graphqlRootProvider = {
    ...gqlCourseQuery.getProvider()
}
