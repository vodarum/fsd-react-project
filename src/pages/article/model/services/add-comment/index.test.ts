import { mockComments } from 'entities/comment';
import { addComment } from '.';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { mockSession, mockSessionState } from 'entities/session';
import { mockArticles, mockArticleState } from 'entities/article';

const mockArticle = mockArticles[0];
const mockState = {
    session: {
        ...mockSessionState,
        data: mockSession,
    },
    article: {
        ...mockArticleState,
        data: mockArticle,
    },
};
const mockComment = mockComments[0];
const url = `/articles/${mockComment.articleId}/comments`;
const mockRequestBody = {
    articleId: mockArticle.id,
    userId: mockSession.userId,
    text: mockComment.text,
};
const mockResponseData = {
    id: mockComment.id,
    articleId: mockComment.articleId,
    userId: mockComment.userId,
    text: mockComment.text,
};

describe('addComment', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(
            addComment,
            mockState,
        );

        api.post.mockReturnValueOnce(
            Promise.resolve({ data: mockResponseData }),
        );

        const result = await callThunk(mockComment.text);

        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(api.post).toHaveBeenCalledWith(url, mockRequestBody);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockResponseData);
    });

    test('with rejected', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(
            addComment,
            mockState,
        );

        api.post.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk(mockComment.text);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.post).toHaveBeenCalledWith(url, mockRequestBody);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');
    });

    test('with rejected by empty string', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(
            addComment,
            mockState,
        );

        const result = await callThunk('');

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.post).toHaveBeenCalledTimes(0);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Empty data');
    });
});
