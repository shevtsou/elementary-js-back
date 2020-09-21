import { SQuery } from "./SQuery"

class TestQuery implements SQuery {
    getGQL() {
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

