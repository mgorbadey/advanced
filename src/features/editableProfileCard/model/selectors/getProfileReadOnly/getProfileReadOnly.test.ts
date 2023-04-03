import { getProfileReadOnly } from './getProfileReadOnly';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileReadOnly.test', () => {
    test('should return "readonly" status', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
