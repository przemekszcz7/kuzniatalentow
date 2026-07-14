import { CourseOffer, NewsItem, WhyUsItem } from './types';
import { 
  GraduationCap, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  TrendingUp, 
  FileText,
  ShieldCheck,
  CheckCircle,
  Lightbulb,
  Award,
  HelpCircle,
  Clock
} from 'lucide-react';

export const COURSE_OFFERS: CourseOffer[] = [
  {
    id: 'teachers',
    title: 'Szkolenia dla nauczycieli',
    shortDescription: 'Nowoczesne metody dydaktyczne, awans zawodowy, praca z uczniem o specjalnych potrzebach i innowacyjne podejście do lekcji.',
    fullDescription: 'Profesjonalne szkolenia skierowane do kadry pedagogicznej wszystkich etapów edukacyjnych. Skupiamy się na praktycznych narzędziach, nowoczesnych technologiach w klasie oraz metodologii wspierającej zaangażowanie uczniów. Omawiamy również procedury awansu zawodowego oraz radzenie sobie w trudnych sytuacjach wychowawczych.',
    iconName: 'GraduationCap',
    targetGroup: 'Nauczyciele, dyrektorzy szkół, pedagodzy i psycholodzy szkolni',
    duration: '4-8 godzin dydaktycznych (zależnie od modułu)',
    benefits: [
      'Gotowe scenariusze lekcji i materiały warsztatowe',
      'Certyfikat ukończenia szkolenia honorowany przez placówki oświatowe',
      'Praktyczna wiedza zgodna z aktualnymi wytycznymi Ministerstwa Edukacji Narodowej'
    ]
  },
  {
    id: 'workshops',
    title: 'Warsztaty rozwojowe',
    shortDescription: 'Rozwijanie kreatywności, asertywności, radzenia sobie ze stresem oraz budowania poczucia własnej wartości i pewności siebie.',
    fullDescription: 'Intensywne zajęcia warsztatowe nastawione na głęboką autorefleksję i rozwój osobisty. Uczestnicy pracują w bezpiecznej atmosferze nad przełamywaniem barier komunikacyjnych, budowaniem zdrowej asertywności oraz radzeniem sobie z codziennymi napięciami i stresem zawodowym.',
    iconName: 'Users',
    targetGroup: 'Wszystkie osoby pragnące podnieść jakość swojego życia osobistego i zawodowego',
    duration: '1-2 dni (sesje weekendowe lub popołudniowe)',
    benefits: [
      'Indywidualny feedback od doświadczonych trenerów',
      'Poznanie technik relaksacyjnych i kontroli emocjonalnej',
      'Narzędzia do tworzenia własnych planów rozwoju'
    ]
  },
  {
    id: 'lifeskills',
    title: 'Kompetencje miękkie (Life Skills)',
    shortDescription: 'Komunikacja interpersonalna, praca w zespole, rozwiązywanie konfliktów i zarządzanie czasem w życiu codziennym.',
    fullDescription: 'Rozwój tzw. umiejętności życiowych (Life Skills), które stanowią fundament sukcesu w XXI wieku. Szkolenie obejmuje aktywne słuchanie, asertywną komunikację, techniki negocjacyjne, budowanie silnych i zaufanych relacji oraz efektywną współpracę w zróżnicowanych zespołach.',
    iconName: 'HeartHandshake',
    targetGroup: 'Młodzież, studenci, pracownicy firm oraz liderzy zespołów',
    duration: '6 godzin szkoleniowych',
    benefits: [
      'Wzrost pewności siebie w kontaktach biznesowych i prywatnych',
      'Zmniejszenie liczby nieporozumień w komunikacji zespołowej',
      'Poznanie metod skutecznej mediacji i rozwiązywania sporów'
    ]
  },
  {
    id: 'modern_education',
    title: 'Edukacja nowoczesna',
    shortDescription: 'Wykorzystanie AI, interaktywnych platform edukacyjnych oraz grywalizacji w codziennym procesie dydaktycznym.',
    fullDescription: 'Wejdź w świat nowoczesnej edukacji cyfrowej. Uczymy jak bezpiecznie i efektywnie wykorzystywać sztuczną inteligencję (np. Gemini), tworzyć interaktywne quizy, wdrożyć elementy grywalizacji (gamification) oraz zainteresować uczniów nauką przedmiotów ścisłych i humanistycznych za pomocą multimediów.',
    iconName: 'Sparkles',
    targetGroup: 'Nauczyciele, szkoleniowcy, twórcy kursów online, entuzjaści EdTech',
    duration: '5 godzin intensywnej praktyki przy komputerze',
    benefits: [
      'Biegłość w obsłudze nowoczesnych aplikacji edukacyjnych',
      'Dostęp do zamkniętej bazy zasobów i promptów AI dla edukacji',
      'Wiedza jak motywować cyfrowe pokolenia (Gen Z i Gen Alpha)'
    ]
  },
  {
    id: 'career_dev',
    title: 'Rozwój zawodowy',
    shortDescription: 'Budowanie marki osobistej, przygotowanie do rekrutacji, planowanie ścieżki kariery oraz techniki efektywnej prezentacji.',
    fullDescription: 'Kompleksowy program przygotowujący do dynamicznych zmian na rynku pracy. Pomagamy określić mocne strony (talenty), stworzyć przyciągające uwagę CV oraz profil LinkedIn, a także przejść przez symulację rozmowy kwalifikacyjnej. Uczymy również profesjonalnych prezentacji i wystąpień publicznych.',
    iconName: 'TrendingUp',
    targetGroup: 'Osoby zmieniające branżę (reskilling), poszukujące pracy lub awansu',
    duration: '8 godzin (podzielone na teorię i warsztaty praktyczne)',
    benefits: [
      'Profesjonalny audyt dotychczasowych dokumentów aplikacyjnych',
      'Pokonanie stresu przed wystąpieniami publicznymi',
      'Jasno zdefiniowana, realna ścieżka rozwoju zawodowego'
    ]
  },
  {
    id: 'projects_edu',
    title: 'Projekty edukacyjne',
    shortDescription: 'Jak pisać, realizować i rozliczać innowacyjne projekty edukacyjne współfinansowane ze środków krajowych oraz unijnych.',
    fullDescription: 'Szkolenie dla liderów i koordynatorów, którzy chcą pozyskiwać fundusze na działania edukacyjne i społeczne. Krok po kroku przechodzimy przez proces tworzenia wniosku projektowego, planowania budżetu, zarządzania ryzykiem oraz poprawnej sprawozdawczości i rozliczania grantów.',
    iconName: 'FileText',
    targetGroup: 'Przedstawiciele NGO, pracownicy samorządowi, dyrektorzy szkół',
    duration: '10 godzin szkoleniowych',
    benefits: [
      'Praktyczna analiza przykładowych wniosków, które otrzymały dofinansowanie',
      'Konsultacja własnego pomysłu na projekt podczas szkolenia',
      'Zrozumienie zawiłości formalno-prawnych funduszy unijnych i krajowych'
    ]
  }
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: 'why-1',
    title: 'Doświadczeni trenerzy',
    description: 'Nasi wykładowcy to praktycy z wieloletnim stażem, eksperci w swoich dziedzinach, którzy łączą teorię z bogatym doświadczeniem życiowym.',
    iconName: 'Award'
  },
  {
    id: 'why-2',
    title: 'Praktyczne szkolenia',
    description: 'Minimum wykładów, maksimum działania. Kładziemy nacisk na ćwiczenia, case study i warsztaty dające umiejętności gotowe do wdrożenia.',
    iconName: 'CheckCircle'
  },
  {
    id: 'why-3',
    title: 'Nowoczesne metody',
    description: 'Wykorzystujemy techniki aktywizujące, gry szkoleniowe, design thinking oraz najnowsze technologie wspierające proces przyswajania wiedzy.',
    iconName: 'Lightbulb'
  },
  {
    id: 'why-4',
    title: 'Rozwój kompetencji',
    description: 'Pomagamy wszechstronnie rozwijać zarówno wiedzę twardą, jak i niezbędne na dzisiejszym rynku pracy elastyczne kompetencje miękkie.',
    iconName: 'TrendingUp'
  },
  {
    id: 'why-5',
    title: 'Indywidualne podejście',
    description: 'Słuchamy potrzeb uczestników. Dostosowujemy tempo zajęć, przykłady i materiały pomocnicze do specyfiki konkretnej grupy szkoleniowej.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'why-6',
    title: 'Wysoka jakość usług',
    description: 'Dbamy o każdy detal: od profesjonalnych materiałów po komfortową atmosferę sprzyjającą kreatywnej nauce i wymianie doświadczeń.',
    iconName: 'ShieldCheck'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Rozwijanie Life Skills w edukacji',
    date: '10 Czerwca 2026',
    category: 'Sukces szkoleniowy',
    summary: 'Podczas szkolenia uczestnicy zdobywali praktyczną wiedzę oraz narzędzia wspierające rozwój kompetencji życiowych w pracy edukacyjnej.',
    content: `Podczas intensywnego szkolenia „Rozwijanie life skills w edukacji” nasi uczestnicy mieli okazję zagłębić się w kluczowe aspekty kształtowania kompetencji przyszłości u dzieci i młodzieży.\n\nSzkolenie koncentrowało się wokół takich tematów jak rozwijanie odporności psychicznej, kreatywnego myślenia, asertywności oraz skutecznej komunikacji w grupie rówieśniczej. Trenerzy zaprezentowali innowacyjne, gotowe do natychmiastowego wdrożenia narzędzia wspierające codzienny proces nauczania.\n\nUczestnicy zgodnie podkreślali, że zdobyte umiejętności oraz zaprezentowane scenariusze warsztatów pozwolą im skuteczniej wspierać uczniów w budowaniu postaw niezbędnych we współczesnym świecie. Serdecznie dziękujemy wszystkim obecnym za fantastyczną energię, inspirujące dyskusje i aktywne zaangażowanie!`,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'news-2',
    title: 'Sztuczna Inteligencja w pracy nauczyciela',
    date: '28 Maja 2026',
    category: 'Nowe technologie',
    summary: 'Jak mądrze i kreatywnie wdrożyć modele językowe AI w przygotowywanie materiałów edukacyjnych oraz angażowanie uczniów.',
    content: `Sztuczna inteligencja zmienia oblicze edukacji na naszych oczach. Na warsztatach „AI w klasie” przeanalizowaliśmy praktyczne zastosowania generatywnych asystentów AI w pracy dydaktycznej.\n\nUczestnicy dowiedzieli się, jak tworzyć precyzyjne prompty (zapytania), automatyzować rutynowe zadania, przygotowywać spersonalizowane quizy oraz generować inspirujące materiały lekcyjne w zaledwie kilka minut. Rozmawialiśmy również o etycznym wymiarze technologii AI i o tym, jak uczyć młodzież odpowiedzialnego korzystania z tych narzędzi.\n\nPraktyczny charakter zajęć pozwolił każdemu nauczycielowi samodzielnie przetestować omawiane platformy i stworzyć swój pierwszy interaktywny projekt lekcyjny wspomagany przez sztuczną inteligencję.`,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'news-3',
    title: 'Zarządzanie czasem i stresem w pracy lidera',
    date: '12 Maja 2026',
    category: 'Rozwój osobisty',
    summary: 'Podsumowanie warsztatów z budowania odporności psychicznej oraz efektywnego planowania zadań pod presją czasu.',
    content: `Liderzy zespołów, menedżerowie oraz dyrektorzy szkół na co dzień mierzą się z ogromną presją odpowiedzialności i czasu. Nasz najnowszy warsztat poświęciliśmy sztuce balansu i efektywności osobistej.\n\nPod kierunkiem certyfikowanego trenera biznesu, uczestnicy opanowali metody priorytetyzacji zadań (np. Macierz Eisenhowera, technika Pomodoro w ujęciu menedżerskim) oraz poznali biologiczne i psychologiczne mechanizmy stresu. W drugiej części szkolenia skupiliśmy się na technikach szybkiej regeneracji, uważności (mindfulness) oraz asertywności w relacjach zawodowych.\n\nUczestnicy opuścili salę szkoleniową ze spersonalizowanymi planami poprawy efektywności i ochrony przed wypaleniem zawodowym.`,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80'
  }
];

export const WORKING_HOURS = [
  { day: 'Poniedziałek', hours: '08:00 – 16:00' },
  { day: 'Wtorek', hours: '08:00 – 16:00' },
  { day: 'Środa', hours: '08:00 – 16:00' },
  { day: 'Czwartek', hours: '08:00 – 16:00' },
  { day: 'Piątek', hours: '08:00 – 16:00' },
  { day: 'Sobota', hours: '09:00 – 13:00' },
  { day: 'Niedziela', hours: 'Zamknięte', isClosed: true }
];
