import { buildSchema } from 'graphql'
import { gqlChapterModel } from '../gql/models/GQLChapterModel'
import { gqlCourseModel } from '../gql/models/GQLCourseModel'
import { gqlChapterMutation } from '../gql/mutations/ChapterMutation'
import { gqlCourseMutation } from '../gql/mutations/CourseMutation'
import { gqlCourseQuery } from '../gql/queries/GQLCourseQuery'
import { testQuery } from '../gql/TestQuery'

const schema = `

# Models
${gqlCourseModel.getGQL()}
${gqlChapterModel.getGQL()}

${gqlCourseMutation.getGQLTypes()}
${gqlChapterMutation.getGQLTypes()}

${gqlCourseQuery.getGQLTypes()}


type Query {
    ${gqlCourseQuery.getGQL()}
}

type Mutation {
    ${gqlCourseMutation.getGQL()}
    ${gqlChapterMutation.getGQL()}
}

`
export const graphqlRootSchema = buildSchema(`
${schema}
`)

// type Mutation {
//     ${gqlCourseMutation.getGQL()}
//     ${gqlChapterMutation.getGQL()}
// }