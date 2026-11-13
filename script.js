if (location.hostname === 'www.sinerize.com') {
    location.replace(`https://sinerize.com${location.pathname}${location.search}${location.hash}`);
}

const translations = {
    pl: {
        nav: {
            product: 'Produkt',
            faq: 'FAQ',
            contact: 'Kontakt'
        },
        hero: {
            title: 'Więcej opinii Google.\nJedno przyłożenie telefonu.',
            subtitle: 'Pomóż klientom zostawić opinię Google w kilka sekund dzięki karcie NFC Premium.',
            contact: 'Skontaktuj się z nami',
            learnMore: 'Dowiedz się więcej'
        },
        features: {
            title1: 'Bez aplikacji',
            desc1: 'Klient nie musi niczego instalować. Wystarczy zbliżyć telefon.',
            title2: 'Działa z każdym telefonem',
            desc2: 'Kompatybilność z większością smartfonów z NFC.',
            title3: 'Bezpieczna technologia',
            desc3: 'Brak dostępu do danych klienta, tylko link do opinii.',
            title4: 'Zwiększ liczbę opinii',
            desc4: 'Więcej opinii = większe zaufanie i wyższa pozycja w Google.',
            title5: 'Personalizacja',
            desc5: 'Twoje logo, kolory i dane firmy na karcie.',
            title6: 'Trwałość',
            desc6: 'Wodoodporna, odporna na zarysowania, na lata użytkowania.'
        },
        workflow: {
            eyebrow: 'Jak to działa?',
            heading: 'Proces w 3 krokach',
            step1_title: '1. Odbierz kartę',
            step1_desc: 'Zamów personalizowaną kartę z własnym logo.',
            step2_title: '2. Zbliż telefon',
            step2_desc: 'Klient zbliża telefon do karty NFC po usłudze.',
            step3_title: '3. Wystaw opinię',
            step3_desc: 'Automatycznie otwiera się okno do wystawienia opinii Google.'
        },
        custom: {
            eyebrow: 'Rozwiązania na miarę',
            heading: 'Potrzebujesz czegoś więcej?',
            paragraph: 'Zaprojektujemy i wdrożymy dedykowane rozwiązania NFC dla Twojej firmy. Skontaktuj się, by omówić szczegóły.'
        },
        seo: {
            eyebrow: 'Dlaczego Sinerize?',
            heading: 'Więcej opinii Google dzięki jednej karcie NFC',
            paragraph1: 'Karta opinii Google Sinerize pozwala klientom otworzyć stronę opinii jednym zbliżeniem telefonu. To prosty sposób na zwiększenie liczby autentycznych opinii Google i poprawę widoczności firmy.',
            paragraph2: 'Idealne rozwiązanie dla restauracji, salonów kosmetycznych, hoteli, gabinetów, siłowni i lokalnych firm, które chcą budować zaufanie klientów i zdobywać więcej opinii Google.'
        },
        contact: {
            eyebrow: 'Kontakt',
            heading: 'Porozmawiajmy',
            paragraph: 'Masz pytania? Chętnie doradzimy i przedstawimy ofertę.',
            phone_label: 'Telefon',
            email_label: 'E-mail'
        },
        footer: {
            copyright: '© 2026 Sinerize. Wszelkie prawa zastrzeżone.'
        }
    },

    en: {
        nav: {
            product: 'Product',
            faq: 'FAQ',
            contact: 'Contact'
        },
        hero: {
            title: 'More Google Reviews.\nOne tap away.',
            subtitle: 'Help your customers leave a Google review in seconds using a premium NFC review card.',
            contact: 'Contact us',
            learnMore: 'Learn more'
        },
        features: {
            title1: 'No app needed',
            desc1: 'Customers don\'t need to install anything. Just tap the phone.',
            title2: 'Works with any phone',
            desc2: 'Compatible with most smartphones with NFC.',
            title3: 'Secure technology',
            desc3: 'No access to customer data, only a review link.',
            title4: 'Increase reviews',
            desc4: 'More reviews = more trust and higher Google ranking.',
            title5: 'Personalization',
            desc5: 'Your logo, colors, and company info on the card.',
            title6: 'Durable',
            desc6: 'Waterproof, scratch-resistant, made to last for years.'
        },
        workflow: {
            eyebrow: 'How does it work?',
            heading: '3-step process',
            step1_title: '1. Get your card',
            step1_desc: 'Order a personalized card with your own logo.',
            step2_title: '2. Tap the phone',
            step2_desc: 'Customer taps the NFC card after the service.',
            step3_title: '3. Leave a review',
            step3_desc: 'Google review window opens automatically.'
        },
        custom: {
            eyebrow: 'Custom solutions',
            heading: 'Need something more?',
            paragraph: 'We design and implement dedicated NFC solutions for your business. Contact us to discuss details.'
        },
        seo: {
            eyebrow: 'Why Sinerize?',
            heading: 'Collect more Google reviews with one NFC card',
            paragraph1: 'Sinerize Google Review Cards let customers open your Google review page with a single tap, making it easier to collect authentic reviews and strengthen your online reputation.',
            paragraph2: 'Perfect for restaurants, cafés, salons, hotels, clinics, gyms and local businesses that want more visibility and customer trust.'
        },
        contact: {
            eyebrow: 'Contact',
            heading: 'Let\'s talk',
            paragraph: 'Have questions? We\'ll be happy to advise and present our offer.',
            phone_label: 'Phone',
            email_label: 'Email'
        },
        footer: {
            copyright: '© 2026 Sinerize. All rights reserved.'
        }
    },

    de: {
        nav: {
            product: 'Produkt',
            faq: 'FAQ',
            contact: 'Kontakt'
        },
        hero: {
            title: 'Mehr Google-Bewertungen.\nMit nur einer Berührung.',
            subtitle: 'Helfen Sie Ihren Kunden, in wenigen Sekunden eine Google-Bewertung mit einer Premium-NFC-Karte zu hinterlassen.',
            contact: 'Kontakt',
            learnMore: 'Mehr erfahren'
        },
        features: {
            title1: 'Keine App nötig',
            desc1: 'Kunden müssen nichts installieren. Einfach das Handy anhalten.',
            title2: 'Funktioniert mit jedem Handy',
            desc2: 'Kompatibel mit den meisten Smartphones mit NFC.',
            title3: 'Sichere Technologie',
            desc3: 'Kein Zugriff auf Kundendaten, nur Bewertungslink.',
            title4: 'Mehr Bewertungen',
            desc4: 'Mehr Bewertungen = mehr Vertrauen und besseres Google-Ranking.',
            title5: 'Personalisierung',
            desc5: 'Ihr Logo, Farben und Firmendaten auf der Karte.',
            title6: 'Langlebig',
            desc6: 'Wasserfest, kratzfest, für jahrelangen Einsatz.'
        },
        workflow: {
            eyebrow: 'Wie funktioniert es?',
            heading: 'Ablauf in 3 Schritten',
            step1_title: '1. Karte erhalten',
            step1_desc: 'Bestellen Sie eine personalisierte Karte mit Ihrem Logo.',
            step2_title: '2. Handy anhalten',
            step2_desc: 'Kunde hält das Handy nach der Dienstleistung an die NFC-Karte.',
            step3_title: '3. Bewertung abgeben',
            step3_desc: 'Das Google-Bewertungsfenster öffnet sich automatisch.'
        },
        custom: {
            eyebrow: 'Individuelle Lösungen',
            heading: 'Sie brauchen mehr?',
            paragraph: 'Wir entwickeln und implementieren maßgeschneiderte NFC-Lösungen für Ihr Unternehmen. Kontaktieren Sie uns für Details.'
        },
        seo: {
            eyebrow: 'Warum Sinerize?',
            heading: 'Mehr Google-Bewertungen mit nur einer NFC-Karte',
            paragraph1: 'Mit der Google-Bewertungskarte von Sinerize können Kunden Ihre Bewertungsseite mit nur einer Berührung öffnen und schneller eine Bewertung hinterlassen.',
            paragraph2: 'Ideal für Restaurants, Hotels, Salons, Praxen, Fitnessstudios und lokale Unternehmen, die mehr Vertrauen und Sichtbarkeit aufbauen möchten.'
        },
        contact: {
            eyebrow: 'Kontakt',
            heading: 'Lassen Sie uns sprechen',
            paragraph: 'Sie haben Fragen? Wir beraten Sie gerne und unterbreiten ein Angebot.',
            phone_label: 'Telefon',
            email_label: 'E-Mail'
        },
        footer: {
            copyright: '© 2026 Sinerize. Alle Rechte vorbehalten.'
        }
    },

    ru: {
        nav: {
            product: 'Продукт',
            faq: 'FAQ',
            contact: 'Контакты'
        },
        hero: {
            title: 'Больше отзывов Google.\nОдно касание.',
            subtitle: 'Помогите клиентам оставить отзыв Google за несколько секунд с помощью премиальной NFC-карты.',
            contact: 'Связаться',
            learnMore: 'Подробнее'
        },
        features: {
            title1: 'Без приложения',
            desc1: 'Клиенту не нужно ничего устанавливать. Просто поднесите телефон.',
            title2: 'Работает с любым телефоном',
            desc2: 'Совместимо с большинством смартфонов с NFC.',
            title3: 'Безопасная технология',
            desc3: 'Нет доступа к данным клиента, только ссылка для отзыва.',
            title4: 'Больше отзывов',
            desc4: 'Больше отзывов = больше доверия и выше позиция в Google.',
            title5: 'Персонализация',
            desc5: 'Ваш логотип, цвета и данные компании на карте.',
            title6: 'Долговечность',
            desc6: 'Водонепроницаемая, устойчива к царапинам, прослужит долгие годы.'
        },
        workflow: {
            eyebrow: 'Как это работает?',
            heading: 'Процесс в 3 шага',
            step1_title: '1. Получите карту',
            step1_desc: 'Закажите персонализированную карту с вашим логотипом.',
            step2_title: '2. Поднесите телефон',
            step2_desc: 'Клиент подносит телефон к NFC-карте после услуги.',
            step3_title: '3. Оставьте отзыв',
            step3_desc: 'Окно для отзыва Google откроется автоматически.'
        },
        custom: {
            eyebrow: 'Индивидуальные решения',
            heading: 'Нужно что-то особенное?',
            paragraph: 'Разработаем и внедрим индивидуальные NFC-решения для вашей компании. Свяжитесь с нами для обсуждения.'
        },
        seo: {
            eyebrow: 'Почему Sinerize?',
            heading: 'Получайте больше отзывов Google с помощью NFC-карты',
            paragraph1: 'Карта отзывов Google от Sinerize позволяет клиентам открыть страницу отзывов одним касанием телефона, что помогает получать больше настоящих отзывов и укреплять репутацию компании.',
            paragraph2: 'Подходит для ресторанов, салонов, гостиниц, клиник, фитнес-клубов и любого локального бизнеса.'
        },
        contact: {
            eyebrow: 'Контакты',
            heading: 'Давайте обсудим',
            paragraph: 'Есть вопросы? Мы с радостью проконсультируем и предложим решение.',
            phone_label: 'Телефон',
            email_label: 'E-mail'
        },
        footer: {
            copyright: '© 2026 Sinerize. Все права защищены.'
        }
    }
};


const siteTranslations = {
  "en": {
    "nav_bots": "Automation",
    "nav_contact": "Contact",
    "home_title": "Less routine.\nMore business.",
    "home_subtitle": "NFC products, business automation and visual production. Practical tools and creative solutions for your business.",
    "explore": "Explore products",
    "contact_cta": "Contact us",
    "solutions_eyebrow": "Our products",
    "solutions_heading": "Different tools.\nOne purpose.",
    "solutions_intro": "Make more time for what matters to your business.",
    "nfc_category": "NFC products",
    "nfc_desc": "More Google reviews with one tap. Cards, stands and keychains, with custom designs for your business.",
    "nfc_link": "Explore NFC Cards",
    "bots_category": "Business automation",
    "bots_heading": "Bots & automation",
    "bots_desc": "Automate publications, mailings and routine tasks in Facebook and Telegram with dedicated desktop apps.",
    "bots_link": "Explore bots",
    "automation_explore": "Explore automation & bots",
    "home_steps_eyebrow": "Simple from the start",
    "home_steps_heading": "Made for everyday business.",
    "home_step1_title": "Choose your solution",
    "home_step1_desc": "An NFC product, an automation tool or a visual project for your business.",
    "home_step2_title": "Talk to us",
    "home_step2_desc": "Tell us what you need. We will help you find the right option and get started.",
    "home_step3_title": "Get to work",
    "home_step3_desc": "Put your product or project to work: collect reviews, automate tasks or present your business.",
    "bots_title": "Your tasks.\nOn autopilot.",
    "bots_subtitle": "Desktop bots for Facebook and Telegram. Automate publications, mailings and account activity, and keep control of your workflow.",
    "platforms": "For macOS & Windows",
    "catalog_eyebrow": "Our bots",
    "catalog_heading": "Less clicking.\nMore getting done.",
    "available": "Available",
    "fb_desc": "One app for Facebook publications and automatic account activity. Prepare your resources, select profiles and run tasks manually or on a schedule.",
    "fb_feature1": "Automatic publishing to groups",
    "fb_feature2": "Automatic account warm-up",
    "fb_feature3": "Profiles, group lists and publication texts",
    "fb_feature4": "Scheduled tasks and activity log",
    "tg_desc": "Manage Telegram mailings from one app. Select accounts and chats, prepare text and photos, and set individual intervals for your tasks.",
    "tg_feature1": "Text and photo mailings to chats",
    "tg_feature2": "Select one, several or all accounts",
    "tg_feature3": "Individual intervals and scheduled tasks",
    "tg_feature4": "One-round or timed operation, activity log",
    "ask_bot": "Ask about this bot",
    "purchase_options": "Available by subscription or full buyout.",
    "languages": "Interface: English, Polski, Deutsch, Русский",
    "development_eyebrow": "Coming next",
    "development_heading": "More bots.\nOn the way.",
    "development_intro": "We are expanding the lineup. These products are still in development and are not available for purchase yet.",
    "development": "In development",
    "unavailable": "Currently unavailable",
    "development_desc": "This bot is in development. We will share its features and purchase options when it is ready.",
    "bots_steps_eyebrow": "How to get started",
    "bots_steps_heading": "From task to automation.",
    "bots_step1_title": "Tell us your task",
    "bots_step1_desc": "What platform do you use, and what would you like to automate?",
    "bots_step2_title": "Choose your bot",
    "bots_step2_desc": "We will explain the features, requirements and purchase options.",
    "bots_step3_title": "Set up and run",
    "bots_step3_desc": "Add your accounts and resources, choose intervals and start your tasks. Scheduled tasks run while the app is open.",
    "contact_eyebrow": "Contact",
    "contact_heading": "Let's work together.",
    "contact_paragraph": "Interested in a product or need help choosing? Contact us to discuss the details.",
    "bots_contact_heading": "Make room for more.",
    "bots_contact_paragraph": "Tell us what you want to automate. We will help you choose a bot and explain how to get started.",
    "phone": "Phone",
    "email": "Email",
    "footer": "© 2026 Sinerize. All rights reserved.",
    "home_meta_title": "Sinerize | NFC, Bots & Visual Production",
    "home_meta_desc": "NFC Google Review Cards, Facebook and Telegram bots, websites and visual content. Explore Sinerize products and services for business.",
    "bots_meta_title": "Sinerize | Bots & Business Automation",
    "bots_meta_desc": "Facebook Bot and Telegram Bot for macOS and Windows: automatic publications, mailings, account warm-up and scheduled tasks. More bots are in development.",
    "contact_title": "Let's discuss\nyour next step.",
    "contact_intro": "Tell us what you need. Select a category, leave your email and describe your task. Your phone number is optional.",
    "form_title": "Send a request",
    "form_close": "Close form",
    "contact_invite_heading": "Get in touch\nto place an order.",
    "contact_invite_desc": "Choose a category and tell us about your task. We will help you find a solution.",
    "form_name": "Name or company (optional)",
    "form_email": "Your email",
    "form_phone": "Phone (optional)",
    "form_category": "Category",
    "form_category_prompt": "Choose a category",
    "form_automation": "Automation & bots",
    "form_nfc": "NFC Cards",
    "form_other": "Another task",
    "form_product": "Product or service",
    "form_product_prompt": "Help me choose",
    "form_message": "Tell us about your task",
    "form_send": "Send request",
    "form_sending": "Sending…",
    "form_success": "Thank you! Your request has been received. We will reply by email.",
    "form_error": "We could not send your request. Your text is saved in this form. Please try again or email us directly.",
    "form_privacy": "We use your contact details only to respond to your request.",
    "contact_meta_title": "Sinerize | Contact",
    "contact_meta_desc": "Contact Sinerize about automation, bots, NFC products or visual production. Choose a category and send your request.",
    "nav_nfc": "NFC Cards",
    "nav_visual": "Visual Production",
    "visual_category": "Creative solutions",
    "visual_card_title": "Visual production",
    "visual_card_desc": "Websites, graphics, presentations, animation and video. Visual content in the format your idea needs.",
    "visual_link": "See our work",
    "visual_title": "Your ideas.\nMade visible.",
    "visual_subtitle": "From a website to a campaign visual. We create graphics, presentations, animation and video that bring your ideas to life.",
    "discuss_project": "Discuss your project",
    "visual_services_eyebrow": "What we create",
    "visual_services_heading": "Any format.\nYour own character.",
    "visual_services_intro": "A single visual or a complete project. We adapt the format, style and scope to your task.",
    "visual_service1_title": "Websites & landing pages",
    "visual_service1_desc": "A clear structure, distinctive design and layouts that work on desktop and mobile. From a product page to a business website.",
    "visual_service2_title": "Graphics & visual content",
    "visual_service2_desc": "Banners, social media content, product visuals, brand graphics and print materials. A consistent look across the formats you use.",
    "visual_service3_title": "Video, motion & presentations",
    "visual_service3_desc": "Product videos, animated graphics and presentations. We shape the story, rhythm and visual language around what you want to communicate.",
    "visual_custom_heading": "Something outside the box?",
    "visual_custom_desc": "Bring an idea, a reference or simply a task. We can combine formats and develop a visual direction for your project.",
    "visual_steps_eyebrow": "The process",
    "visual_steps_heading": "From idea to final result.",
    "visual_step1_title": "Share your idea",
    "visual_step1_desc": "Tell us about your task, audience and preferred style. References are welcome.",
    "visual_step2_title": "Agree on the direction",
    "visual_step2_desc": "We discuss the concept, deliverables, timing and cost before starting production.",
    "visual_step3_title": "Create & refine",
    "visual_step3_desc": "We develop the project, agree on adjustments and prepare the finished result in the required formats.",
    "visual_meta_title": "Sinerize | Visual Production",
    "visual_meta_desc": "Websites, landing pages, graphics, banners, presentations, animation and video. Visual production by Sinerize for your business and ideas.",
    "pf_eyebrow": "Portfolio",
    "pf_heading": "Selected work.",
    "pf_intro": "Real projects we designed: websites, online shops and apps. Open any project to see more.",
    "pf_view": "View project",
    "pf_gallery": "Project gallery",
    "pf_ranek_kind": "Coffee chain · Kraków",
    "pf_ranek_desc": "A loud, cheerful website with online ordering for a chain of coffee shops. Menu, pre-orders, a loyalty club and an offer for companies.",
    "pf_ranek_t1": "8 pages",
    "pf_ranek_t2": "Online ordering",
    "pf_bialy_rys_kind": "Barbershop & tattoo studio · Biała Podlaska",
    "pf_bialy_rys_desc": "A dark, confident studio website for barbering, tattoo, permanent make-up and massage, with quick online booking.",
    "pf_bialy_rys_t1": "Landing + 7 pages",
    "pf_bialy_rys_t2": "Online booking",
    "pf_platek_kind": "Plant shop & florist · Warsaw",
    "pf_platek_desc": "A calm, editorial shop for house plants, bouquets and workshops, with product pages, a care guide and a filterable catalogue.",
    "pf_platek_t1": "8 pages",
    "pf_platek_t2": "Online shop",
    "pf_pilot_kind": "CRM app · macOS & iPhone",
    "pf_pilot_desc": "A personal CRM to run the whole business from one place: recruiting, AI video, tasks, finances in złoty and dollars, and a voice assistant.",
    "pf_pilot_t1": "7 sections",
    "pf_pilot_t2": "Product design",
    "pf_sinerize_kind": "Studio website · this site",
    "pf_sinerize_desc": "Our own multilingual website: NFC review cards, business automation and visual production, with a request form on every page.",
    "pf_sinerize_t1": "5 pages + form",
    "pf_sinerize_t2": "EN · PL · DE · RU",
    "pf_dev_web": "Desktop · Tablet · Mobile",
    "pf_dev_app": "Mac · iPad · iPhone"
  },
  "pl": {
    "nav_bots": "Automatyzacja",
    "nav_contact": "Kontakt",
    "home_title": "Mniej rutyny.\nWięcej biznesu.",
    "home_subtitle": "Produkty NFC, automatyzacja biznesu i produkcja wizualna. Praktyczne narzędzia i kreatywne rozwiązania dla Twojej firmy.",
    "explore": "Poznaj produkty",
    "contact_cta": "Skontaktuj się z nami",
    "solutions_eyebrow": "Nasze produkty",
    "solutions_heading": "Różne narzędzia.\nJeden cel.",
    "solutions_intro": "Zyskaj więcej czasu na to, co ważne dla Twojej firmy.",
    "nfc_category": "Produkty NFC",
    "nfc_desc": "Więcej opinii Google po jednym zbliżeniu telefonu. Karty, stojaki i breloki z projektem dla Twojej firmy.",
    "nfc_link": "Zobacz NFC Cards",
    "bots_category": "Automatyzacja biznesu",
    "bots_heading": "Boty i automatyzacja",
    "bots_desc": "Automatyzuj publikacje, wysyłkę wiadomości i rutynowe zadania w Facebooku i Telegramie za pomocą aplikacji desktopowych.",
    "bots_link": "Zobacz boty",
    "automation_explore": "Poznaj automatyzację i boty",
    "home_steps_eyebrow": "Prosto od początku",
    "home_steps_heading": "Dla codziennej pracy firmy.",
    "home_step1_title": "Wybierz rozwiązanie",
    "home_step1_desc": "Produkt NFC, narzędzie do automatyzacji lub projekt wizualny dla Twojej firmy.",
    "home_step2_title": "Porozmawiaj z nami",
    "home_step2_desc": "Powiedz, czego potrzebujesz. Pomożemy dobrać rozwiązanie i rozpocząć pracę.",
    "home_step3_title": "Zacznij działać",
    "home_step3_desc": "Wykorzystaj produkt lub projekt: zbieraj opinie, automatyzuj zadania lub zaprezentuj swoją firmę.",
    "bots_title": "Twoje zadania.\nNa autopilocie.",
    "bots_subtitle": "Boty desktopowe do Facebooka i Telegrama. Automatyzuj publikacje, wysyłkę wiadomości i aktywność kont, zachowując kontrolę nad pracą.",
    "platforms": "Na macOS i Windows",
    "catalog_eyebrow": "Nasze boty",
    "catalog_heading": "Mniej klikania.\nWięcej działania.",
    "available": "Dostępny",
    "fb_desc": "Jedna aplikacja do publikowania na Facebooku i automatycznej aktywności kont. Przygotuj materiały, wybierz profile i uruchamiaj zadania ręcznie lub według harmonogramu.",
    "fb_feature1": "Automatyczne publikowanie w grupach",
    "fb_feature2": "Automatyczna aktywność kont",
    "fb_feature3": "Profile, listy grup i teksty publikacji",
    "fb_feature4": "Harmonogram zadań i dziennik działań",
    "tg_desc": "Zarządzaj wysyłką wiadomości w Telegramie z jednej aplikacji. Wybierz konta i czaty, przygotuj tekst i zdjęcia oraz ustaw indywidualne odstępy.",
    "tg_feature1": "Wysyłka tekstów i zdjęć do czatów",
    "tg_feature2": "Wybór jednego, kilku lub wszystkich kont",
    "tg_feature3": "Indywidualne odstępy i harmonogramy",
    "tg_feature4": "Jeden cykl lub praca przez określony czas, dziennik",
    "ask_bot": "Zapytaj o tego bota",
    "purchase_options": "Dostępny w subskrypcji lub z możliwością pełnego wykupu.",
    "languages": "Interfejs: English, Polski, Deutsch, Русский",
    "development_eyebrow": "Wkrótce",
    "development_heading": "Kolejne boty.\nJuż w drodze.",
    "development_intro": "Rozwijamy ofertę. Te produkty są jeszcze w trakcie tworzenia i nie są dostępne w sprzedaży.",
    "development": "W przygotowaniu",
    "unavailable": "Obecnie niedostępny",
    "development_desc": "Ten bot jest w przygotowaniu. Funkcje i warunki zakupu przedstawimy, gdy będzie gotowy.",
    "bots_steps_eyebrow": "Jak zacząć",
    "bots_steps_heading": "Od zadania do automatyzacji.",
    "bots_step1_title": "Opisz swoje zadanie",
    "bots_step1_desc": "Z jakiej platformy korzystasz i co chcesz zautomatyzować?",
    "bots_step2_title": "Wybierz bota",
    "bots_step2_desc": "Omówimy funkcje, wymagania i warunki zakupu.",
    "bots_step3_title": "Skonfiguruj i uruchom",
    "bots_step3_desc": "Dodaj konta i materiały, ustaw odstępy i uruchom zadania. Harmonogram działa, gdy aplikacja jest otwarta.",
    "contact_eyebrow": "Kontakt",
    "contact_heading": "Zacznijmy współpracę.",
    "contact_paragraph": "Interesuje Cię produkt lub potrzebujesz pomocy w wyborze? Skontaktuj się z nami, aby omówić szczegóły.",
    "bots_contact_heading": "Zyskaj czas na więcej.",
    "bots_contact_paragraph": "Powiedz, co chcesz zautomatyzować. Pomożemy wybrać bota i wyjaśnimy, jak zacząć.",
    "phone": "Telefon",
    "email": "E-mail",
    "footer": "© 2026 Sinerize. Wszelkie prawa zastrzeżone.",
    "home_meta_title": "Sinerize | NFC, boty i produkcja wizualna",
    "home_meta_desc": "Karty NFC do opinii Google, boty do Facebooka i Telegrama, strony internetowe i treści wizualne. Poznaj ofertę Sinerize.",
    "bots_meta_title": "Sinerize | Boty i automatyzacja biznesu",
    "bots_meta_desc": "Facebook Bot i Telegram Bot na macOS i Windows: automatyczne publikacje, wysyłka wiadomości, aktywność kont i harmonogramy. Kolejne boty w przygotowaniu.",
    "contact_title": "Porozmawiajmy\no Twoim projekcie.",
    "contact_intro": "Powiedz, czego potrzebujesz. Wybierz kategorię, podaj e-mail i opisz zadanie. Numer telefonu jest opcjonalny.",
    "form_title": "Wyślij zapytanie",
    "form_close": "Zamknij formularz",
    "contact_invite_heading": "Skontaktuj się z nami,\naby złożyć zamówienie.",
    "contact_invite_desc": "Wybierz kategorię i opowiedz o zadaniu. Pomożemy dobrać rozwiązanie.",
    "form_name": "Imię lub firma (opcjonalnie)",
    "form_email": "Twój e-mail",
    "form_phone": "Telefon (opcjonalnie)",
    "form_category": "Kategoria",
    "form_category_prompt": "Wybierz kategorię",
    "form_automation": "Automatyzacja i boty",
    "form_nfc": "Karty NFC",
    "form_other": "Inne zadanie",
    "form_product": "Produkt lub usługa",
    "form_product_prompt": "Pomóżcie mi wybrać",
    "form_message": "Opisz swoje zadanie",
    "form_send": "Wyślij zapytanie",
    "form_sending": "Wysyłanie…",
    "form_success": "Dziękujemy! Otrzymaliśmy zapytanie. Odpowiemy e-mailem.",
    "form_error": "Nie udało się wysłać zapytania. Treść pozostała w formularzu. Spróbuj ponownie lub napisz bezpośrednio.",
    "form_privacy": "Dane kontaktowe wykorzystujemy wyłącznie do odpowiedzi na zapytanie.",
    "contact_meta_title": "Sinerize | Kontakt",
    "contact_meta_desc": "Skontaktuj się z Sinerize w sprawie automatyzacji, botów, NFC lub produkcji wizualnej. Wybierz kategorię i wyślij zapytanie.",
    "nav_nfc": "NFC Cards",
    "nav_visual": "Produkcja wizualna",
    "visual_category": "Rozwiązania kreatywne",
    "visual_card_title": "Produkcja wizualna",
    "visual_card_desc": "Strony internetowe, grafika, prezentacje, animacje i wideo. Treści wizualne w formacie dopasowanym do Twojego pomysłu.",
    "visual_link": "Zobacz realizacje",
    "visual_title": "Twoje pomysły.\nW widocznej formie.",
    "visual_subtitle": "Od strony internetowej po materiały kampanii. Tworzymy grafikę, prezentacje, animacje i wideo, które nadają Twoim pomysłom formę.",
    "discuss_project": "Porozmawiajmy o projekcie",
    "visual_services_eyebrow": "Co tworzymy",
    "visual_services_heading": "Dowolny format.\nTwój charakter.",
    "visual_services_intro": "Pojedynczy materiał lub cały projekt. Dopasujemy format, styl i zakres do Twojego zadania.",
    "visual_service1_title": "Strony i landing page",
    "visual_service1_desc": "Przejrzysta struktura, wyrazisty projekt i układy na komputer i telefon. Od strony produktu po witrynę firmy.",
    "visual_service2_title": "Grafika i treści wizualne",
    "visual_service2_desc": "Banery, treści do social mediów, wizualizacje produktów, grafika marki i materiały do druku. Spójny wygląd w potrzebnych formatach.",
    "visual_service3_title": "Wideo, animacje i prezentacje",
    "visual_service3_desc": "Filmy produktowe, animowana grafika i prezentacje. Dopasujemy narrację, rytm i język wizualny do Twojego przekazu.",
    "visual_custom_heading": "Coś niestandardowego?",
    "visual_custom_desc": "Przynieś pomysł, inspirację lub po prostu zadanie. Możemy połączyć formaty i opracować kierunek wizualny dla Twojego projektu.",
    "visual_steps_eyebrow": "Jak pracujemy",
    "visual_steps_heading": "Od pomysłu do efektu.",
    "visual_step1_title": "Opowiedz o pomyśle",
    "visual_step1_desc": "Opisz zadanie, odbiorców i preferowany styl. Możesz przesłać inspiracje.",
    "visual_step2_title": "Ustalmy kierunek",
    "visual_step2_desc": "Przed rozpoczęciem omówimy koncepcję, materiały końcowe, termin i koszt.",
    "visual_step3_title": "Tworzymy i dopracowujemy",
    "visual_step3_desc": "Tworzymy projekt, uzgadniamy poprawki i przygotowujemy gotowy efekt w potrzebnych formatach.",
    "visual_meta_title": "Sinerize | Produkcja wizualna",
    "visual_meta_desc": "Strony internetowe, landing page, grafika, banery, prezentacje, animacje i wideo. Produkcja wizualna Sinerize dla Twojego biznesu.",
    "pf_eyebrow": "Portfolio",
    "pf_heading": "Wybrane projekty.",
    "pf_intro": "Prawdziwe projekty, które zaprojektowaliśmy: strony, sklepy internetowe i aplikacje. Otwórz dowolny projekt, aby zobaczyć więcej.",
    "pf_view": "Zobacz projekt",
    "pf_gallery": "Galeria projektu",
    "pf_ranek_kind": "Sieć kawiarni · Kraków",
    "pf_ranek_desc": "Głośna, radosna strona z zamówieniami online dla sieci kawiarni. Menu, zamówienia z wyprzedzeniem, klub lojalnościowy i oferta dla firm.",
    "pf_ranek_t1": "8 stron",
    "pf_ranek_t2": "Zamówienia online",
    "pf_bialy_rys_kind": "Barber i studio tatuażu · Biała Podlaska",
    "pf_bialy_rys_desc": "Ciemna, pewna siebie strona studia barberingu, tatuażu, makijażu permanentnego i masażu z szybką rezerwacją online.",
    "pf_bialy_rys_t1": "Landing + 7 stron",
    "pf_bialy_rys_t2": "Rezerwacja online",
    "pf_platek_kind": "Sklep z roślinami i kwiaciarnia · Warszawa",
    "pf_platek_desc": "Spokojny, magazynowy sklep z roślinami, bukietami i warsztatami: karty produktów, poradnik pielęgnacji i katalog z filtrami.",
    "pf_platek_t1": "8 stron",
    "pf_platek_t2": "Sklep internetowy",
    "pf_pilot_kind": "Aplikacja CRM · macOS i iPhone",
    "pf_pilot_desc": "Osobisty CRM do prowadzenia całego biznesu w jednym miejscu: rekrutacja, wideo AI, zadania, finanse w złotych i dolarach oraz asystent głosowy.",
    "pf_pilot_t1": "7 sekcji",
    "pf_pilot_t2": "Projekt produktu",
    "pf_sinerize_kind": "Strona studia · ta strona",
    "pf_sinerize_desc": "Nasza wielojęzyczna strona: karty NFC do opinii, automatyzacja biznesu i produkcja wizualna, z formularzem zapytania na każdej stronie.",
    "pf_sinerize_t1": "5 stron + formularz",
    "pf_sinerize_t2": "EN · PL · DE · RU",
    "pf_dev_web": "Desktop · Tablet · Mobile",
    "pf_dev_app": "Mac · iPad · iPhone"
  },
  "de": {
    "nav_bots": "Automatisierung",
    "nav_contact": "Kontakt",
    "home_title": "Weniger Routine.\nMehr Business.",
    "home_subtitle": "NFC-Produkte, Business-Automatisierung und visuelle Produktion. Praktische Tools und kreative Lösungen für Ihr Unternehmen.",
    "explore": "Produkte entdecken",
    "contact_cta": "Kontakt aufnehmen",
    "solutions_eyebrow": "Unsere Produkte",
    "solutions_heading": "Verschiedene Tools.\nEin Ziel.",
    "solutions_intro": "Mehr Zeit für das, was für Ihr Unternehmen zählt.",
    "nfc_category": "NFC-Produkte",
    "nfc_desc": "Mehr Google-Bewertungen mit einer Berührung. Karten, Aufsteller und Schlüsselanhänger im Design Ihres Unternehmens.",
    "nfc_link": "NFC Cards entdecken",
    "bots_category": "Business-Automatisierung",
    "bots_heading": "Bots & Automatisierung",
    "bots_desc": "Automatisieren Sie Beiträge, Nachrichten und Routineaufgaben in Facebook und Telegram mit eigenen Desktop-Apps.",
    "bots_link": "Bots entdecken",
    "automation_explore": "Automatisierung & Bots entdecken",
    "home_steps_eyebrow": "Einfach von Anfang an",
    "home_steps_heading": "Für den Geschäftsalltag.",
    "home_step1_title": "Lösung auswählen",
    "home_step1_desc": "Ein NFC-Produkt, ein Automatisierungstool oder ein visuelles Projekt für Ihr Unternehmen.",
    "home_step2_title": "Mit uns sprechen",
    "home_step2_desc": "Erzählen Sie uns von Ihrem Bedarf. Wir helfen bei Auswahl und Einrichtung.",
    "home_step3_title": "Loslegen",
    "home_step3_desc": "Produkt oder Projekt einsetzen: Bewertungen sammeln, Aufgaben automatisieren oder Ihr Unternehmen präsentieren.",
    "bots_title": "Ihre Aufgaben.\nAuf Autopilot.",
    "bots_subtitle": "Desktop-Bots für Facebook und Telegram. Automatisieren Sie Beiträge, Nachrichten und Kontoaktivitäten und behalten Sie die Kontrolle.",
    "platforms": "Für macOS & Windows",
    "catalog_eyebrow": "Unsere Bots",
    "catalog_heading": "Weniger klicken.\nMehr erledigen.",
    "available": "Verfügbar",
    "fb_desc": "Eine App für Facebook-Beiträge und automatische Kontoaktivitäten. Materialien vorbereiten, Profile auswählen und Aufgaben manuell oder nach Zeitplan starten.",
    "fb_feature1": "Automatisches Veröffentlichen in Gruppen",
    "fb_feature2": "Automatische Kontoaktivitäten",
    "fb_feature3": "Profile, Gruppenlisten und Beitragstexte",
    "fb_feature4": "Zeitpläne und Aktivitätsprotokoll",
    "tg_desc": "Telegram-Nachrichten in einer App verwalten. Konten und Chats auswählen, Texte und Fotos vorbereiten und individuelle Intervalle festlegen.",
    "tg_feature1": "Texte und Fotos an Chats senden",
    "tg_feature2": "Einzelne, mehrere oder alle Konten auswählen",
    "tg_feature3": "Individuelle Intervalle und Zeitpläne",
    "tg_feature4": "Ein Durchlauf oder zeitgesteuerter Betrieb, Protokoll",
    "ask_bot": "Zu diesem Bot anfragen",
    "purchase_options": "Als Abo oder zum vollständigen Kauf erhältlich.",
    "languages": "Oberfläche: English, Polski, Deutsch, Русский",
    "development_eyebrow": "Demnächst",
    "development_heading": "Weitere Bots.\nIn Arbeit.",
    "development_intro": "Wir erweitern das Angebot. Diese Produkte werden noch entwickelt und sind derzeit nicht erhältlich.",
    "development": "In Entwicklung",
    "unavailable": "Derzeit nicht verfügbar",
    "development_desc": "Dieser Bot wird noch entwickelt. Funktionen und Kaufoptionen stellen wir vor, sobald er fertig ist.",
    "bots_steps_eyebrow": "So starten Sie",
    "bots_steps_heading": "Von der Aufgabe zur Automatisierung.",
    "bots_step1_title": "Aufgabe beschreiben",
    "bots_step1_desc": "Welche Plattform nutzen Sie und was möchten Sie automatisieren?",
    "bots_step2_title": "Bot auswählen",
    "bots_step2_desc": "Wir erklären Funktionen, Voraussetzungen und Kaufoptionen.",
    "bots_step3_title": "Einrichten und starten",
    "bots_step3_desc": "Konten und Materialien hinzufügen, Intervalle festlegen und starten. Zeitpläne laufen bei geöffneter App.",
    "contact_eyebrow": "Kontakt",
    "contact_heading": "Lassen Sie uns zusammenarbeiten.",
    "contact_paragraph": "Interesse an einem Produkt oder Fragen zur Auswahl? Kontaktieren Sie uns für die Details.",
    "bots_contact_heading": "Mehr Zeit für mehr.",
    "bots_contact_paragraph": "Erzählen Sie uns, was Sie automatisieren möchten. Wir helfen bei der Auswahl und beim Einstieg.",
    "phone": "Telefon",
    "email": "E-Mail",
    "footer": "© 2026 Sinerize. Alle Rechte vorbehalten.",
    "home_meta_title": "Sinerize | NFC, Bots & visuelle Produktion",
    "home_meta_desc": "NFC-Karten für Google-Bewertungen, Facebook- und Telegram-Bots, Websites und visuelle Inhalte. Entdecken Sie Sinerize.",
    "bots_meta_title": "Sinerize | Bots & Business-Automatisierung",
    "bots_meta_desc": "Facebook Bot und Telegram Bot für macOS und Windows: Beiträge, Nachrichten, Kontoaktivitäten und Zeitpläne automatisieren. Weitere Bots in Entwicklung.",
    "contact_title": "Sprechen wir\nüber Ihr Vorhaben.",
    "contact_intro": "Wählen Sie eine Kategorie, hinterlassen Sie Ihre E-Mail-Adresse und beschreiben Sie Ihre Aufgabe. Die Telefonnummer ist optional.",
    "form_title": "Anfrage senden",
    "form_close": "Formular schließen",
    "contact_invite_heading": "Kontaktieren Sie uns\nfür Ihre Bestellung.",
    "contact_invite_desc": "Wählen Sie eine Kategorie und beschreiben Sie Ihre Aufgabe. Wir helfen bei der passenden Lösung.",
    "form_name": "Name oder Firma (optional)",
    "form_email": "Ihre E-Mail-Adresse",
    "form_phone": "Telefon (optional)",
    "form_category": "Kategorie",
    "form_category_prompt": "Kategorie auswählen",
    "form_automation": "Automatisierung & Bots",
    "form_nfc": "NFC-Karten",
    "form_other": "Andere Aufgabe",
    "form_product": "Produkt oder Leistung",
    "form_product_prompt": "Helfen Sie mir bei der Auswahl",
    "form_message": "Beschreiben Sie Ihre Aufgabe",
    "form_send": "Anfrage senden",
    "form_sending": "Wird gesendet…",
    "form_success": "Vielen Dank! Ihre Anfrage wurde angenommen. Wir antworten per E-Mail.",
    "form_error": "Ihre Anfrage konnte nicht gesendet werden. Ihr Text bleibt im Formular. Versuchen Sie es erneut oder schreiben Sie uns direkt.",
    "form_privacy": "Wir nutzen Ihre Kontaktdaten ausschließlich, um auf Ihre Anfrage zu antworten.",
    "contact_meta_title": "Sinerize | Kontakt",
    "contact_meta_desc": "Kontaktieren Sie Sinerize zu Automatisierung, Bots, NFC oder visueller Produktion. Kategorie auswählen und Anfrage senden.",
    "nav_nfc": "NFC Cards",
    "nav_visual": "Visuelle Produktion",
    "visual_category": "Kreative Lösungen",
    "visual_card_title": "Visuelle Produktion",
    "visual_card_desc": "Websites, Grafik, Präsentationen, Animation und Video. Visuelle Inhalte im passenden Format für Ihre Idee.",
    "visual_link": "Unsere Arbeiten",
    "visual_title": "Ihre Ideen.\nSichtbar gemacht.",
    "visual_subtitle": "Von der Website bis zum Kampagnenmotiv. Wir gestalten Grafiken, Präsentationen, Animationen und Videos, die Ihre Ideen zum Leben erwecken.",
    "discuss_project": "Projekt besprechen",
    "visual_services_eyebrow": "Was wir gestalten",
    "visual_services_heading": "Jedes Format.\nIhr eigener Stil.",
    "visual_services_intro": "Ein einzelnes Motiv oder ein komplettes Projekt. Format, Stil und Umfang richten sich nach Ihrer Aufgabe.",
    "visual_service1_title": "Websites & Landingpages",
    "visual_service1_desc": "Klare Struktur, eigenständiges Design und Layouts für Desktop und Mobilgeräte. Von der Produktseite bis zur Firmenwebsite.",
    "visual_service2_title": "Grafik & visuelle Inhalte",
    "visual_service2_desc": "Banner, Social-Media-Inhalte, Produktvisuals, Markengrafiken und Druckmaterialien. Ein einheitlicher Look über alle Formate.",
    "visual_service3_title": "Video, Animation & Präsentationen",
    "visual_service3_desc": "Produktvideos, animierte Grafiken und Präsentationen. Geschichte, Rhythmus und Bildsprache passend zu Ihrer Botschaft.",
    "visual_custom_heading": "Eine besondere Idee?",
    "visual_custom_desc": "Bringen Sie eine Idee, eine Referenz oder einfach eine Aufgabe mit. Wir verbinden Formate und entwickeln eine visuelle Richtung für Ihr Projekt.",
    "visual_steps_eyebrow": "Unser Ablauf",
    "visual_steps_heading": "Von der Idee zum Ergebnis.",
    "visual_step1_title": "Idee teilen",
    "visual_step1_desc": "Beschreiben Sie Aufgabe, Zielgruppe und Stil. Referenzen sind willkommen.",
    "visual_step2_title": "Richtung abstimmen",
    "visual_step2_desc": "Vor Produktionsbeginn besprechen wir Konzept, Ergebnisse, Zeitplan und Kosten.",
    "visual_step3_title": "Gestalten & verfeinern",
    "visual_step3_desc": "Wir entwickeln das Projekt, stimmen Anpassungen ab und liefern das Ergebnis in den benötigten Formaten.",
    "visual_meta_title": "Sinerize | Visuelle Produktion",
    "visual_meta_desc": "Websites, Landingpages, Grafik, Banner, Präsentationen, Animation und Video. Visuelle Produktion von Sinerize für Ihr Unternehmen.",
    "pf_eyebrow": "Portfolio",
    "pf_heading": "Ausgewählte Projekte.",
    "pf_intro": "Echte Projekte, die wir gestaltet haben: Websites, Onlineshops und Apps. Öffnen Sie ein Projekt, um mehr zu sehen.",
    "pf_view": "Projekt ansehen",
    "pf_gallery": "Projektgalerie",
    "pf_ranek_kind": "Café-Kette · Krakau",
    "pf_ranek_desc": "Eine laute, fröhliche Website mit Online-Bestellung für eine Café-Kette. Speisekarte, Vorbestellungen, Treueclub und ein Angebot für Firmen.",
    "pf_ranek_t1": "8 Seiten",
    "pf_ranek_t2": "Online-Bestellung",
    "pf_bialy_rys_kind": "Barbershop & Tattoostudio · Biała Podlaska",
    "pf_bialy_rys_desc": "Eine dunkle, selbstbewusste Studio-Website für Barbering, Tattoo, Permanent Make-up und Massage mit schneller Online-Buchung.",
    "pf_bialy_rys_t1": "Landing + 7 Seiten",
    "pf_bialy_rys_t2": "Online-Buchung",
    "pf_platek_kind": "Pflanzenladen & Florist · Warschau",
    "pf_platek_desc": "Ein ruhiger, redaktioneller Shop für Zimmerpflanzen, Sträuße und Workshops mit Produktseiten, Pflegeratgeber und filterbarem Katalog.",
    "pf_platek_t1": "8 Seiten",
    "pf_platek_t2": "Onlineshop",
    "pf_pilot_kind": "CRM-App · macOS & iPhone",
    "pf_pilot_desc": "Ein persönliches CRM, um das ganze Geschäft an einem Ort zu steuern: Recruiting, KI-Video, Aufgaben, Finanzen in Złoty und Dollar und ein Sprachassistent.",
    "pf_pilot_t1": "7 Bereiche",
    "pf_pilot_t2": "Produktdesign",
    "pf_sinerize_kind": "Studio-Website · diese Seite",
    "pf_sinerize_desc": "Unsere eigene mehrsprachige Website: NFC-Bewertungskarten, Geschäftsautomatisierung und visuelle Produktion, mit Anfrageformular auf jeder Seite.",
    "pf_sinerize_t1": "5 Seiten + Formular",
    "pf_sinerize_t2": "EN · PL · DE · RU",
    "pf_dev_web": "Desktop · Tablet · Mobil",
    "pf_dev_app": "Mac · iPad · iPhone"
  },
  "ru": {
    "nav_bots": "Автоматизация",
    "nav_contact": "Контакты",
    "home_title": "Меньше рутины.\nБольше дела.",
    "home_subtitle": "NFC-продукты, автоматизация бизнеса и визуальное производство. Практичные инструменты и креативные решения для вашего дела.",
    "explore": "Смотреть продукты",
    "contact_cta": "Связаться",
    "solutions_eyebrow": "Наши продукты",
    "solutions_heading": "Разные инструменты.\nОдна цель.",
    "solutions_intro": "Освободите время для того, что важно вашему бизнесу.",
    "nfc_category": "NFC-продукты",
    "nfc_desc": "Больше отзывов Google в одно касание. Карты, подставки и брелоки с индивидуальным дизайном для вашего бизнеса.",
    "nfc_link": "Подробнее о NFC Cards",
    "bots_category": "Автоматизация бизнеса",
    "bots_heading": "Боты и автоматизация",
    "bots_desc": "Автоматизируйте публикации, рассылки и рутинные задачи в Facebook и Telegram с помощью отдельных приложений.",
    "bots_link": "Подробнее о ботах",
    "automation_explore": "Подробнее об автоматизации и ботах",
    "home_steps_eyebrow": "Просто с первого шага",
    "home_steps_heading": "Для повседневных задач бизнеса.",
    "home_step1_title": "Выберите решение",
    "home_step1_desc": "NFC-продукт, инструмент автоматизации или визуальный проект для вашего бизнеса.",
    "home_step2_title": "Обсудите с нами",
    "home_step2_desc": "Расскажите о своей задаче. Поможем подобрать решение и начать работу.",
    "home_step3_title": "Начните пользоваться",
    "home_step3_desc": "Используйте результат: собирайте отзывы, автоматизируйте задачи или представляйте свой бизнес.",
    "bots_title": "Ваши задачи.\nНа автопилоте.",
    "bots_subtitle": "Боты для Facebook и Telegram. Автоматизируйте публикации, рассылки и прокачку аккаунтов, сохраняя контроль над работой.",
    "platforms": "Для macOS и Windows",
    "catalog_eyebrow": "Наши боты",
    "catalog_heading": "Меньше кликов.\nБольше результата.",
    "available": "Доступен",
    "fb_desc": "Одно приложение для публикаций в Facebook и автоматической прокачки аккаунтов. Подготовьте материалы, выберите профили и запускайте задачи вручную или по расписанию.",
    "fb_feature1": "Автопубликация в группах",
    "fb_feature2": "Автоматическая прокачка аккаунтов",
    "fb_feature3": "Профили, списки групп и тексты публикаций",
    "fb_feature4": "Расписание задач и журнал действий",
    "tg_desc": "Управляйте рассылками в Telegram из одного приложения. Выбирайте аккаунты и чаты, готовьте текст и фотографии, настраивайте индивидуальные интервалы.",
    "tg_feature1": "Рассылка текстов и фотографий в чаты",
    "tg_feature2": "Выбор одного, нескольких или всех аккаунтов",
    "tg_feature3": "Индивидуальные интервалы и расписания",
    "tg_feature4": "Один круг или работа заданное время, журнал действий",
    "ask_bot": "Узнать о покупке",
    "purchase_options": "Доступен по подписке или в полный выкуп.",
    "languages": "Интерфейс: English, Polski, Deutsch, Русский",
    "development_eyebrow": "Скоро",
    "development_heading": "Больше ботов.\nУже в работе.",
    "development_intro": "Мы расширяем линейку. Эти продукты ещё в разработке и пока недоступны для покупки.",
    "development": "В разработке",
    "unavailable": "Пока недоступен",
    "development_desc": "Бот в процессе создания. Расскажем о функциях и условиях покупки, когда он будет готов.",
    "bots_steps_eyebrow": "Как начать",
    "bots_steps_heading": "От задачи к автоматизации.",
    "bots_step1_title": "Расскажите о задаче",
    "bots_step1_desc": "С какой платформой вы работаете и что хотите автоматизировать?",
    "bots_step2_title": "Выберите бота",
    "bots_step2_desc": "Расскажем о функциях, требованиях и условиях покупки.",
    "bots_step3_title": "Настройте и запустите",
    "bots_step3_desc": "Добавьте аккаунты и материалы, задайте интервалы и запустите задачи. Расписание работает, пока приложение открыто.",
    "contact_eyebrow": "Контакты",
    "contact_heading": "Давайте работать вместе.",
    "contact_paragraph": "Интересует продукт или нужна помощь с выбором? Свяжитесь с нами, чтобы обсудить детали.",
    "bots_contact_heading": "Освободите время для большего.",
    "bots_contact_paragraph": "Расскажите, что хотите автоматизировать. Поможем выбрать бота и объясним, как начать.",
    "phone": "Телефон",
    "email": "E-mail",
    "footer": "© 2026 Sinerize. Все права защищены.",
    "home_meta_title": "Sinerize | NFC, боты и визуальное производство",
    "home_meta_desc": "NFC-карты для отзывов Google, боты для Facebook и Telegram, сайты и визуальный контент. Продукты и услуги Sinerize для бизнеса.",
    "bots_meta_title": "Sinerize | Боты и автоматизация бизнеса",
    "bots_meta_desc": "Facebook Bot и Telegram Bot для macOS и Windows: автопубликации, рассылки, прокачка аккаунтов и расписания. Другие боты в разработке.",
    "contact_title": "Давайте обсудим\nвашу задачу.",
    "contact_intro": "Выберите категорию, оставьте email и опишите задачу. Номер телефона можно указать по желанию.",
    "form_title": "Оставить заявку",
    "form_close": "Закрыть форму",
    "contact_invite_heading": "Свяжитесь с нами\nдля заказа.",
    "contact_invite_desc": "Выберите категорию и расскажите о задаче. Поможем подобрать решение.",
    "form_name": "Имя или компания (необязательно)",
    "form_email": "Ваш email",
    "form_phone": "Телефон (по желанию)",
    "form_category": "Категория",
    "form_category_prompt": "Выберите категорию",
    "form_automation": "Автоматизация и боты",
    "form_nfc": "NFC Карточки",
    "form_other": "Другая задача",
    "form_product": "Продукт или услуга",
    "form_product_prompt": "Нужна помощь с выбором",
    "form_message": "Расскажите о задаче",
    "form_send": "Отправить заявку",
    "form_sending": "Отправляем…",
    "form_success": "Спасибо! Заявка принята. Ответим вам по email.",
    "form_error": "Не удалось отправить заявку. Текст остался в форме. Попробуйте ещё раз или напишите нам напрямую.",
    "form_privacy": "Контактные данные используются только для ответа на ваш запрос.",
    "contact_meta_title": "Sinerize | Контакты",
    "contact_meta_desc": "Свяжитесь с Sinerize по вопросам автоматизации, ботов, NFC-карточек или визуального производства. Выберите категорию и отправьте заявку.",
    "nav_nfc": "NFC Карточки",
    "nav_visual": "Визуальное производство",
    "visual_category": "Креативные решения",
    "visual_card_title": "Визуальное производство",
    "visual_card_desc": "Сайты, графика, презентации, анимация и видео. Визуальный контент в том формате, который нужен вашей идее.",
    "visual_link": "Смотреть работы",
    "visual_title": "Ваши идеи.\nВизуальная форма.",
    "visual_subtitle": "От сайта до визуала для кампании. Создаём графику, презентации, анимацию и видео, которые превращают ваши идеи в готовый результат.",
    "discuss_project": "Обсудить проект",
    "visual_services_eyebrow": "Что создаём",
    "visual_services_heading": "Любой формат.\nВаш характер.",
    "visual_services_intro": "Один визуал или целый проект. Подберём формат, стиль и объём под вашу задачу.",
    "visual_service1_title": "Сайты и лендинги",
    "visual_service1_desc": "Понятная структура, выразительный дизайн и адаптация под компьютер и телефон. От страницы продукта до сайта компании.",
    "visual_service2_title": "Графика и визуал",
    "visual_service2_desc": "Баннеры, контент для соцсетей, визуалы продуктов, графика бренда и печатные материалы. Единый стиль в нужных вам форматах.",
    "visual_service3_title": "Видео, анимация и презентации",
    "visual_service3_desc": "Продуктовые видео, анимированная графика и презентации. Выстраиваем историю, ритм и визуальный язык под ваш замысел.",
    "visual_custom_heading": "Задача вне шаблонов?",
    "visual_custom_desc": "Приходите с идеей, референсом или просто задачей. Объединим форматы и найдём визуальное направление для вашего проекта.",
    "visual_steps_eyebrow": "Как работаем",
    "visual_steps_heading": "От идеи до результата.",
    "visual_step1_title": "Расскажите об идее",
    "visual_step1_desc": "Опишите задачу, аудиторию и желаемый стиль. Можно прислать референсы.",
    "visual_step2_title": "Согласуем направление",
    "visual_step2_desc": "До начала работы обсудим концепцию, форматы результата, сроки и стоимость.",
    "visual_step3_title": "Создаём и дорабатываем",
    "visual_step3_desc": "Разрабатываем проект, согласуем правки и готовим результат в нужных форматах.",
    "visual_meta_title": "Sinerize | Визуальное производство",
    "visual_meta_desc": "Сайты, лендинги, графика, баннеры, презентации, анимация и видео. Визуальное производство Sinerize для вашего бизнеса и идей.",
    "pf_eyebrow": "Портфолио",
    "pf_heading": "Наши работы.",
    "pf_intro": "Реальные проекты, которые мы спроектировали: сайты, интернет-магазины и приложения. Откройте любой проект, чтобы посмотреть подробнее.",
    "pf_view": "Смотреть проект",
    "pf_gallery": "Галерея проекта",
    "pf_ranek_kind": "Сеть кофеен · Краков",
    "pf_ranek_desc": "Яркий, весёлый сайт с онлайн-заказом для сети кофеен. Меню, предзаказ, клуб лояльности и предложение для компаний.",
    "pf_ranek_t1": "8 страниц",
    "pf_ranek_t2": "Онлайн-заказ",
    "pf_bialy_rys_kind": "Барбершоп и тату-студия · Бяла-Подляска",
    "pf_bialy_rys_desc": "Тёмный, уверенный сайт студии барберинга, тату, перманентного макияжа и массажа с быстрой онлайн-записью.",
    "pf_bialy_rys_t1": "Лендинг + 7 страниц",
    "pf_bialy_rys_t2": "Онлайн-запись",
    "pf_platek_kind": "Магазин растений и флорист · Варшава",
    "pf_platek_desc": "Спокойный журнальный магазин комнатных растений, букетов и мастер-классов: карточки товаров, гид по уходу и каталог с фильтрами.",
    "pf_platek_t1": "8 страниц",
    "pf_platek_t2": "Интернет-магазин",
    "pf_pilot_kind": "CRM-приложение · macOS и iPhone",
    "pf_pilot_desc": "Личная CRM, чтобы вести весь бизнес в одном месте: рекрутинг, ИИ-видео, задачи, финансы в злотых и долларах и голосовой помощник.",
    "pf_pilot_t1": "7 разделов",
    "pf_pilot_t2": "Продуктовый дизайн",
    "pf_sinerize_kind": "Сайт студии · этот сайт",
    "pf_sinerize_desc": "Наш собственный многоязычный сайт: NFC-карточки для отзывов, автоматизация бизнеса и визуальное производство, с формой заявки на каждой странице.",
    "pf_sinerize_t1": "5 страниц + форма",
    "pf_sinerize_t2": "EN · PL · DE · RU",
    "pf_dev_web": "Компьютер · планшет · телефон",
    "pf_dev_app": "Mac · iPad · iPhone"
  }
};
for (const lang of Object.keys(siteTranslations)) translations[lang].site = siteTranslations[lang];

const languageSwitcher = document.querySelector('.language-switcher');
const languageButton = document.querySelector('.language-current');
const languageOptions = document.querySelectorAll('[data-language]');
const navigation = document.querySelector('nav');
const navigationToggle = document.querySelector('.nav-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function translateValue(lang, key) {
    return key.split('.').reduce((value, part) => value?.[part], translations[lang]);
}

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const value = translateValue(lang, element.dataset.i18n);
        if (typeof value !== 'string') return;
        if (element.hasAttribute('data-i18n-lines') || element.tagName === 'H1') {
            const lines = value.split('\n');
            element.replaceChildren();
            lines.forEach((line, index) => {
                if (index) element.append(document.createElement('br'));
                element.append(document.createTextNode(line));
            });
        } else {
            element.textContent = value;
        }
    });
    languageButton.textContent = `${lang.toUpperCase()} ▾`;
    languageOptions.forEach(option => option.setAttribute('aria-pressed', String(option.dataset.language === lang)));
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const value = translateValue(lang, element.dataset.i18nAria);
        if (value) element.setAttribute('aria-label', value);
    });

    const page = document.body.dataset.page;
    if (['home', 'bots', 'visual', 'contact'].includes(page)) {
        const title = siteTranslations[lang][`${page}_meta_title`];
        const description = siteTranslations[lang][`${page}_meta_desc`];
        document.title = title;
        document.querySelector('meta[name="description"]').content = description;
        document.querySelector('meta[property="og:title"]').content = title;
        document.querySelector('meta[property="og:description"]').content = description;
        document.querySelector('meta[name="twitter:title"]').content = title;
        document.querySelector('meta[name="twitter:description"]').content = description;
    }
    document.dispatchEvent(new Event('sinerize:languagechange'));
}

function closeLanguageMenu() {
    languageSwitcher.classList.remove('open');
    languageButton.setAttribute('aria-expanded', 'false');
}

function closeNavigation() {
    navigation.classList.remove('menu-open');
    navigationToggle.setAttribute('aria-expanded', 'false');
}

let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('language') || 'en'; } catch { /* Storage may be unavailable. */ }
applyTranslations(Object.hasOwn(translations, savedLanguage) ? savedLanguage : 'en');

languageButton.addEventListener('click', () => {
    closeNavigation();
    const open = languageSwitcher.classList.toggle('open');
    languageButton.setAttribute('aria-expanded', String(open));
});

languageOptions.forEach(option => option.addEventListener('click', () => {
    const lang = option.dataset.language;
    applyTranslations(lang);
    try { localStorage.setItem('language', lang); } catch { /* Keep the current selection in this page. */ }
    closeLanguageMenu();
    languageButton.focus();
}));

navigationToggle.addEventListener('click', () => {
    closeLanguageMenu();
    const open = navigation.classList.toggle('menu-open');
    navigationToggle.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', event => {
    if (!languageSwitcher.contains(event.target)) closeLanguageMenu();
    if (!navigation.contains(event.target)) closeNavigation();
});
document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (languageSwitcher.classList.contains('open')) { closeLanguageMenu(); languageButton.focus(); }
    if (navigation.classList.contains('menu-open')) { closeNavigation(); navigationToggle.focus(); }
});

// Preserve the existing cubic scroll transition, with an offset for the fixed header.
let scrollFrame;
function smoothScrollTo(targetY, duration = 1000) {
    cancelAnimationFrame(scrollFrame);
    if (reducedMotion.matches) { window.scrollTo(0, targetY); return; }
    const startY = window.scrollY;
    const startTime = performance.now();
    function animate(time) {
        const progress = Math.min((time - startTime) / duration, 1);
        const ease = progress < .5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
        window.scrollTo(0, startY + (targetY - startY) * ease);
        if (progress < 1) scrollFrame = requestAnimationFrame(animate);
    }
    scrollFrame = requestAnimationFrame(animate);
}
function stopScroll() { cancelAnimationFrame(scrollFrame); }
window.addEventListener('wheel', stopScroll, { passive: true });
window.addEventListener('touchstart', stopScroll, { passive: true });
document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', event => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    closeNavigation();
    const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 88);
    smoothScrollTo(targetY);
    history.replaceState(null, '', href);
}));

const revealElements = document.querySelectorAll('.feature, .workflow-card, .custom-solutions, .solution-card, .bot-product, .creative-service');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
    revealElements.forEach(element => element.classList.add('reveal-pending'));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
    }), { threshold: .08 });
    revealElements.forEach(element => observer.observe(element));
}

document.body.classList.add('page-loaded');
window.addEventListener('pageshow', () => document.body.classList.remove('page-leaving'));
document.querySelectorAll('a[href]').forEach(link => link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank' || link.hasAttribute('download') || link.hasAttribute('data-inquiry-open')) return;
    const rawHref = link.getAttribute('href');
    if (!rawHref || rawHref.startsWith('#')) return;
    const url = new URL(link.href, window.location.href);
    if (!['http:', 'https:'].includes(url.protocol) || url.origin !== location.origin) return;
    closeNavigation();
    if (reducedMotion.matches) return;
    event.preventDefault();
    document.body.classList.add('page-leaving');
    setTimeout(() => { window.location.href = url.href; }, 250);
}));

// Keep previously shared NFC section links working after the move to its own page.
if (document.body.dataset.page === 'home' && ['#details', '#custom'].includes(location.hash)) {
    window.location.replace(`nfc.html${location.hash}`);
}

if (location.hash === '#contact' && document.body.dataset.page !== 'contact') {
    window.location.replace('contact.html');
}

const inquiryForm = document.querySelector('#inquiry-form');
if (inquiryForm) {
    const dialog = document.querySelector('#inquiry-dialog');
    const category = inquiryForm.elements.category;
    const product = inquiryForm.elements.product;
    const productField = document.querySelector('#product-field');
    const button = inquiryForm.querySelector('button[type="submit"]');
    const buttonLabel = button.querySelector('[data-i18n]');
    const status = inquiryForm.querySelector('.form-status');
    const products = {
        automation: [['facebook', 'Facebook Bot'], ['telegram', 'Telegram Bot']],
        nfc: [['classic', 'Classic NFC Card'], ['stand', 'Wooden Stand'], ['keychain', 'NFC Keychain'], ['custom', 'Custom Design']],
        visual: [['website', 'visual_service1_title'], ['graphics', 'visual_service2_title'], ['motion', 'visual_service3_title']]
    };
    const formText = key => siteTranslations[document.documentElement.lang][key];
    function updateProducts() {
        const previous = product.value;
        product.replaceChildren(new Option(formText('form_product_prompt'), ''));
        (products[category.value] || []).forEach(([value, label]) => {
            product.add(new Option(label.startsWith('visual_') ? formText(label) : label, value));
        });
        productField.hidden = !products[category.value];
        if ([...product.options].some(option => option.value === previous)) product.value = previous;
    }
    category.addEventListener('change', updateProducts);
    document.addEventListener('sinerize:languagechange', updateProducts);
    const query = new URLSearchParams(location.search);
    if ([...category.options].some(option => option.value === query.get('category'))) category.value = query.get('category');
    updateProducts();
    if ([...product.options].some(option => option.value === query.get('product'))) product.value = query.get('product');
    function openInquiry(trigger) {
        const href = trigger?.getAttribute('href');
        const params = href ? new URL(href, location.href).searchParams : query;
        const nextCategory = params.get('category');
        if ([...category.options].some(option => option.value === nextCategory)) {
            category.value = nextCategory;
            updateProducts();
            product.value = [...product.options].some(option => option.value === params.get('product')) ? params.get('product') : '';
        }
        closeNavigation();
        closeLanguageMenu();
        dialog.showModal();
        document.documentElement.classList.add('inquiry-open');
    }
    document.querySelectorAll('[data-inquiry-open]').forEach(trigger => trigger.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        openInquiry(trigger);
    }));
    dialog.querySelector('[data-inquiry-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }});
    dialog.addEventListener('close', () => document.documentElement.classList.remove('inquiry-open'));
    if (document.body.dataset.page === 'contact' && query.has('category')) openInquiry(null);
    let requestId = crypto.randomUUID();
    inquiryForm.addEventListener('submit', async event => {
        event.preventDefault();
        if (button.disabled || !inquiryForm.reportValidity()) return;
        button.disabled = true;
        inquiryForm.setAttribute('aria-busy', 'true');
        buttonLabel.dataset.i18n = 'site.form_sending';
        buttonLabel.textContent = formText('form_sending');
        status.textContent = '';
        delete status.dataset.i18n;
        status.classList.remove('is-error');
        try {
            const data = Object.fromEntries(new FormData(inquiryForm));
            // Honeypot: bots fill the hidden "website" field; pretend success and send nothing.
            if (!data.website) {
                const productLabel = product.value ? product.options[product.selectedIndex].text : 'Help choosing';
                const categoryLabel = category.options[category.selectedIndex].text;
                const sent = await fetch('https://formsubmit.co/ajax/sinerize.eng@gmail.com', {
                    method:'POST', headers:{'Content-Type':'application/json',Accept:'application/json'},
                    body:JSON.stringify({
                        _subject:`Sinerize — new request: ${product.value ? productLabel : categoryLabel}`,
                        _template:'table', _captcha:'false', _replyto:data.email,
                        name:data.name || '—', email:data.email, phone:data.phone || 'Not provided',
                        category:categoryLabel, product:productLabel, message:data.message,
                        language:document.documentElement.lang, page:location.href, request_id:requestId
                    }),
                    signal:AbortSignal.timeout(20000)
                });
                const delivery = await sent.json();
                if (!sent.ok || !(delivery.success === true || delivery.success === 'true')) throw new Error('Request rejected');
            }
            status.dataset.i18n = 'site.form_success';
            status.textContent = formText('form_success');
            inquiryForm.reset();
            updateProducts();
            requestId = crypto.randomUUID();
            status.focus();
        } catch {
            status.dataset.i18n = 'site.form_error';
            status.textContent = formText('form_error');
            status.classList.add('is-error');
            status.focus();
        } finally {
            button.disabled = false;
            inquiryForm.removeAttribute('aria-busy');
            buttonLabel.dataset.i18n = 'site.form_send';
            buttonLabel.textContent = formText('form_send');
        }
    });
}
