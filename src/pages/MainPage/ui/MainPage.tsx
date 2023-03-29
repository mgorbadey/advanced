import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Main Page')}
            <RatingCard
                title={t('Do you like the article?')}
                feedbackTitle={t('Please write a review')}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
