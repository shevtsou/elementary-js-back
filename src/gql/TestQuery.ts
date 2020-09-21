import { SQuery } from "./SQuery"

class TestQuery implements SQuery {
    getQuery() {
        return `
type Query {
    hello: String
}

        `
    }

    getProvider() {
        return {
            hello: () => "new refactored hello"
        }
    }
}

export const testQuery = new TestQuery(); 

