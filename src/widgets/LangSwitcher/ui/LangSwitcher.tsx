import { classNames } from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string,
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {

  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t("Language")}
    </Button>
  );
};
