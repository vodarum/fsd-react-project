import { User } from "entities/user/@x/comment";

type Comment = {
    id: number;
    text: string;
    userId: number;
    user: User;
};

export { Comment };
