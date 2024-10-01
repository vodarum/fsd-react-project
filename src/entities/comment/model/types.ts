type CommentAuthor = {
    id: number;
    name: string;
    avatar?: string;
};

type Comment = {
    id: number;
    text: string;
    author: CommentAuthor;
};

export { Comment };
