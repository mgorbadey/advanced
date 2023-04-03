import type {
    StateSchema, StateSchemaKey, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

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
