import { Question } from "./Question";
import { Exam } from "./Exam";

export class ExamQuestion {
    id: number;
    question: Question;
    exam: Exam;
}
