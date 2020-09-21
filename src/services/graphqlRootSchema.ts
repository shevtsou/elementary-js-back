import { buildSchema } from 'graphql'
import { gqlCourseModel } from '../gql/models/GQLCourseModel'
import { gqlCourseMutation } from '../gql/mutations/CourseMutation'
import { gqlCourseQuery } from '../gql/queries/GQLCourseQuery'
import { testQuery } from '../gql/TestQuery'

export const graphqlRootSchema = buildSchema(`
    ${gqlCourseModel.getGQL()}
    ${gqlCourseQuery.getGQL()}
    ${gqlCourseMutation.getGQL()}
`)
