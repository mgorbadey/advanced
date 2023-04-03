import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
