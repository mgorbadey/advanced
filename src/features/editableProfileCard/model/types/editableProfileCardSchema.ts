import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../consts/editableProfileCardconsts';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateProfileErrors?: ValidateProfileError[]
}
