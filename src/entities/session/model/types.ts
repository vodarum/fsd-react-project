type Session = {
    token: string;
    userId: number;
};

type SessionState = {
    data?: Session;
};

export type { Session, SessionState };
