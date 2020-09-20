export const validateCourse = (body: any): string | 'valid' => {
    if (!body.name) {
        return 'No name specified'
    }
    if (body.chapters && body.chapters.length > 0) {
        return 'Chapters not supported yet'
    }
}