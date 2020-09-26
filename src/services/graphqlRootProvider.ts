import { gqlChapterMutation } from "../gql/mutations/ChapterMutation";
import { gqlCourseMutation } from "../gql/mutations/CourseMutation";
import { gqlCourseQuery } from "../gql/queries/GQLCourseQuery";
import { testQuery } from "../gql/TestQuery";

export const graphqlRootProvider = {
    ...gqlCourseQuery.getProvider(),
    
    ...gqlCourseMutation.getProvider(),
    ...gqlChapterMutation.getProvider(),
}
