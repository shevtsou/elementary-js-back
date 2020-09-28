import { gqlChapterMutation } from "../gql/mutations/ChapterMutation";
import { contentBlockMutation } from "../gql/mutations/ContentBlockMutation";
import { gqlCourseMutation } from "../gql/mutations/CourseMutation";
import { gqlLessonMutation } from "../gql/mutations/LessonMutation";
import { sectionMutation } from "../gql/mutations/SectionMutation";
import { gqlTaskMutation } from "../gql/mutations/TaskMutation";
import { contentBlockQuery } from "../gql/queries/ContentBlockQuery";
import { gqlChapterQuery } from "../gql/queries/GQLChapterQuery";
import { gqlCourseQuery } from "../gql/queries/GQLCourseQuery";
import { gqlLessonQuery } from "../gql/queries/GQLessonQuery";
import { gqlTaskQuery } from "../gql/queries/GQLTaskQuery";
import { sectionQuery } from "../gql/queries/SectionQuery";
import { testQuery } from "../gql/TestQuery";

export const graphqlRootProvider = {
    ...gqlCourseQuery.getProvider(),
    ...gqlChapterQuery.getProvider(),
    ...gqlLessonQuery.getProvider(),
    ...gqlTaskQuery.getProvider(),
    ...sectionQuery.getProvider(),
    ...contentBlockQuery.getProvider(),

    ...gqlCourseMutation.getProvider(),
    ...gqlChapterMutation.getProvider(),
    ...gqlLessonMutation.getProvider(),
    ...gqlTaskMutation.getProvider(),
    ...sectionMutation.getProvider(),
    ...contentBlockMutation.getProvider(),
}
