import { buildSchema } from 'graphql'
import { gqlChapterModel } from '../gql/models/GQLChapterModel'
import { gqlCourseModel } from '../gql/models/GQLCourseModel'
import { gqlLessonModel } from '../gql/models/GQLLessonModel'
import { gqlChapterMutation } from '../gql/mutations/ChapterMutation'
import { gqlCourseMutation } from '../gql/mutations/CourseMutation'
import { gqlLessonMutation } from '../gql/mutations/LessonMutation'
import { gqlChapterQuery } from '../gql/queries/GQLChapterQuery'
import { gqlCourseQuery } from '../gql/queries/GQLCourseQuery'
import { gqlLessonQuery } from '../gql/queries/GQLessonQuery'
import { testQuery } from '../gql/TestQuery'

const schema = `

# Models
${gqlCourseModel.getGQL()}
${gqlChapterModel.getGQL()}
${gqlLessonModel.getGQL()}

${gqlCourseMutation.getGQLTypes()}
${gqlChapterMutation.getGQLTypes()}
${gqlLessonMutation.getGQLTypes()}

${gqlCourseQuery.getGQLTypes()}
${gqlChapterQuery.getGQLTypes()}
${gqlLessonQuery.getGQLTypes()}

type Query {
    ${gqlCourseQuery.getGQL()}
    ${gqlChapterQuery.getGQL()}
    ${gqlLessonQuery.getGQL()}
}

type Mutation {
    ${gqlCourseMutation.getGQL()}
    ${gqlChapterMutation.getGQL()}
    ${gqlLessonMutation.getGQL()}
}

`
export const graphqlRootSchema = buildSchema(`
${schema}
`)

// type Mutation {
//     ${gqlCourseMutation.getGQL()}
//     ${gqlChapterMutation.getGQL()}
// }