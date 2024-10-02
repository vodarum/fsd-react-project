import { User } from 'features/user'; // TODO: исправить импорт features -> entities

type Comment = {
    id: number;
    text: string;
    userId: number;
    user: User;
};

export { Comment };
