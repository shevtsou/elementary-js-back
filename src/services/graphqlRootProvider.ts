import { gqlChapterMutation } from "../gql/mutations/ChapterMutation";
import { gqlCourseMutation } from "../gql/mutations/CourseMutation";
import { gqlLessonMutation } from "../gql/mutations/LessonMutation";
import { gqlTaskMutation } from "../gql/mutations/TaskMutation";
import { gqlChapterQuery } from "../gql/queries/GQLChapterQuery";
import { gqlCourseQuery } from "../gql/queries/GQLCourseQuery";
import { gqlLessonQuery } from "../gql/queries/GQLessonQuery";
import { gqlTaskQuery } from "../gql/queries/GQLTaskQuery";
import { testQuery } from "../gql/TestQuery";

export const graphqlRootProvider = {
    ...gqlCourseQuery.getProvider(),
    ...gqlChapterQuery.getProvider(),
    ...gqlLessonQuery.getProvider(),
    ...gqlTaskQuery.getProvider(),

    ...gqlCourseMutation.getProvider(),
    ...gqlChapterMutation.getProvider(),
    ...gqlLessonMutation.getProvider(),
    ...gqlTaskMutation.getProvider(),
}
