import { Question } from "./Question";

export class Option {
    id: number;
    is_correct: boolean;
    question: Question;
    content: string;
}
