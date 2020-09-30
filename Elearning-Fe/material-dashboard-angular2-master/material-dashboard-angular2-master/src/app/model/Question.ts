import { Course } from "./Course";
import { QuestionType } from "./QuestionType";

export class Question {
    id: number;
    content: string;
    type: QuestionType;
    course: Course;
}