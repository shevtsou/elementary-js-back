import { buildSchema } from 'graphql'
import { testQuery } from '../gql/TestQuery'

export const graphqlRootSchema = buildSchema(`
    ${testQuery.getQuery()}
`)
