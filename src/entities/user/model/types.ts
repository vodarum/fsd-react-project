type Session = {
    token: string;
    userId: number;
};

type UserState = {
    session?: Session;
};

export { Session, UserState };
