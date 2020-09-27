import { gqlChapterMutation } from "../gql/mutations/ChapterMutation";
import { gqlCourseMutation } from "../gql/mutations/CourseMutation";
import { gqlLessonMutation } from "../gql/mutations/LessonMutation";
import { gqlChapterQuery } from "../gql/queries/GQLChapterQuery";
import { gqlCourseQuery } from "../gql/queries/GQLCourseQuery";
import { gqlLessonQuery } from "../gql/queries/GQLessonQuery";
import { testQuery } from "../gql/TestQuery";

export const graphqlRootProvider = {
    ...gqlCourseQuery.getProvider(),
    ...gqlChapterQuery.getProvider(),
    ...gqlLessonQuery.getProvider(),

    ...gqlCourseMutation.getProvider(),
    ...gqlChapterMutation.getProvider(),
    ...gqlLessonMutation.getProvider(),
}
