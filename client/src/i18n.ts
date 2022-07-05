import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        resources: {
            en: {
                translation: {
                    news: 'News',
                    followers: 'Follows',
                    dialogs: 'Dialogs',
                    map: 'Map',
                    recs: 'For you',
                    favs: 'Favorites',
                    settings: 'Settings',
                    exit: 'Exit',
                    help: 'Help',
                }
            },
            ru: {
                translation: {
                    news: 'Новости',
                    followers: 'Подписки',
                    dialogs: 'Диалоги',
                    map: 'Карта',
                    recs: 'Для вас',
                    favs: 'Избранное',
                    settings: 'Настройки',
                    exit: 'Выход',
                    help: 'Помощь',
                }
            }
        }
    })