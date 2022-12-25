import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from './articleDetails';

describe('getArticleDetailsData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'Title',
        };
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading.test', () => {
    test('should return true', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});

describe('getArticleDetailsError.test', () => {
    test('should return true', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'Error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('Error');
    });
    test('should work with empty state error', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
