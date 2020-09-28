import { buildSchema } from 'graphql'
import { gqlChapterModel } from '../gql/models/GQLChapterModel'
import { gqlCourseModel } from '../gql/models/GQLCourseModel'
import { gqlLessonModel } from '../gql/models/GQLLessonModel'
import { gqlSectionModel } from '../gql/models/GQLSectionModel'
import { gqlTaskModel } from '../gql/models/GQLTaskModel'
import { gqlChapterMutation } from '../gql/mutations/ChapterMutation'
import { gqlCourseMutation } from '../gql/mutations/CourseMutation'
import { gqlLessonMutation } from '../gql/mutations/LessonMutation'
import { sectionMutation } from '../gql/mutations/SectionMutation'
import { gqlTaskMutation } from '../gql/mutations/TaskMutation'
import { gqlChapterQuery } from '../gql/queries/GQLChapterQuery'
import { gqlCourseQuery } from '../gql/queries/GQLCourseQuery'
import { gqlLessonQuery } from '../gql/queries/GQLessonQuery'
import { gqlTaskQuery } from '../gql/queries/GQLTaskQuery'
import { sectionQuery } from '../gql/queries/SectionQuery'
import { testQuery } from '../gql/TestQuery'

const schema = `

# Models
${gqlCourseModel.getGQL()}
${gqlChapterModel.getGQL()}
${gqlLessonModel.getGQL()}
${gqlTaskModel.getGQL()}
${gqlSectionModel.getGQL()}

${gqlCourseMutation.getGQLTypes()}
${gqlChapterMutation.getGQLTypes()}
${gqlLessonMutation.getGQLTypes()}
${gqlTaskMutation.getGQLTypes()}
${sectionMutation.getGQLTypes()}

${gqlCourseQuery.getGQLTypes()}
${gqlChapterQuery.getGQLTypes()}
${gqlLessonQuery.getGQLTypes()}
${gqlTaskQuery.getGQLTypes()}
${sectionQuery.getGQLTypes()}

type Query {
    ${gqlCourseQuery.getGQL()}
    ${gqlChapterQuery.getGQL()}
    ${gqlLessonQuery.getGQL()}
    ${gqlTaskQuery.getGQL()}
    ${sectionQuery.getGQL()}
}

type Mutation {
    ${gqlCourseMutation.getGQL()}
    ${gqlChapterMutation.getGQL()}
    ${gqlLessonMutation.getGQL()}
    ${gqlTaskMutation.getGQL()}
    ${sectionMutation.getGQL()}
}

`
export const graphqlRootSchema = buildSchema(`
${schema}
`)
