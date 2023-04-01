import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
    StateSchema, StateSchemaKey, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    StateSchema,
    StateSchemaKey,
    AppDispatch,
    ThunkConfig,
    ReduxStoreWithManager,
};
