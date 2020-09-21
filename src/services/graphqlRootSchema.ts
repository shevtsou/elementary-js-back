import { buildSchema } from 'graphql'
import { gqlCourseModel } from '../gql/models/GQLCourseModel'
import { gqlCourseQuery } from '../gql/queries/GQLCourseQuery'
import { testQuery } from '../gql/TestQuery'

export const graphqlRootSchema = buildSchema(`
    ${gqlCourseModel.getGQL()}
    ${gqlCourseQuery.getQuery()}
`)
