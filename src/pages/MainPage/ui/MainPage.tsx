import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Main Page')}
        </Page>
    );
};

export default MainPage;
