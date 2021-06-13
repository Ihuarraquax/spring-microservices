const products = [
    {
        gameName: 'Frostpunk',
        company: '11bit',
        platform: 'PC',
        releaseYear: 2017,
        distribution: 'Elektroniczna',
        description: 'Frostpunk to gra polskiego studia 11 bit. Produkcja przenosi gracza do alternatywnej rzeczywistości w XIX wieku, kiedy ludzkości grozi zagłada. Ziemię nawiedziła ponowna epoka lodowcowa, która spowodowała, że człowiek musi walczyć o przetrwanie w niezwykle trudnych warunkach.',
        genre: 'Symulacje, Strategia',
        imageSrc: 'https://static.muve.pl/uploads/product-cover/0042/2418/poster-art-1.jpg',
        count: 300,
        price: 100.50,
    },
    {
        gameName: 'Wiedźmin III: Dziki Gon',
        company: 'CD PROJEKT RED',
        platform: 'PC',
        releaseYear: 2015,
        distribution: 'Tradycyjna',
        description: 'Wiedźmin 3: Dziki Gon to trzecia i najbardziej rozchwytywana gra serii. Produkcja ponownie przenosi graczy do fantastycznego świata stworzonego przez Andrzeja Sapkowskiego. Poznajemy kontynuację historii Geralta z Rivii, który ponownie musi chwycić za miecz. W trakcie rozgrywki poszukujemy utraconej miłości Geralta, zajmujemy się inwazją Nilfgaardu na Królestwa Północy i mamy wiele innych, poważnych, wiedźmińskich obowiązków. Zanurz się w świat pełen magii i potworów! ',
        genre: 'Akcja, Przygodowe, RPG',
        imageSrc: 'https://static.muve.pl/uploads/product-cover/0021/9696/wiedzmin3-digi-3.jpg',
        count: 300,
        price: 99.99,
    },
    {
        gameName: 'Wiedźmin III: Dziki Gon',
        company: 'CD PROJEKT RED',
        platform: 'PS4',
        releaseYear: 2015,
        distribution: 'Tradycyjna',
        description: 'Wiedźmin 3: Dziki Gon to trzecia i najbardziej rozchwytywana gra serii. Produkcja ponownie przenosi graczy do fantastycznego świata stworzonego przez Andrzeja Sapkowskiego. Poznajemy kontynuację historii Geralta z Rivii, który ponownie musi chwycić za miecz. W trakcie rozgrywki poszukujemy utraconej miłości Geralta, zajmujemy się inwazją Nilfgaardu na Królestwa Północy i mamy wiele innych, poważnych, wiedźmińskich obowiązków. Zanurz się w świat pełen magii i potworów! ',
        genre: 'Akcja, Przygodowe, RPG',
        imageSrc: 'https://static.muve.pl/uploads/product-cover/0021/9696/wiedzmin3-digi-3.jpg',
        count: 300,
        price: 189.99,
    },
    {
        gameName: 'Wiedźmin III: Dziki Gon',
        company: 'CD PROJEKT RED',
        platform: 'Xbox One',
        releaseYear: 2015,
        distribution: 'Tradycyjna',
        description: 'Wiedźmin 3: Dziki Gon to trzecia i najbardziej rozchwytywana gra serii. Produkcja ponownie przenosi graczy do fantastycznego świata stworzonego przez Andrzeja Sapkowskiego. Poznajemy kontynuację historii Geralta z Rivii, który ponownie musi chwycić za miecz. W trakcie rozgrywki poszukujemy utraconej miłości Geralta, zajmujemy się inwazją Nilfgaardu na Królestwa Północy i mamy wiele innych, poważnych, wiedźmińskich obowiązków. Zanurz się w świat pełen magii i potworów! ',
        genre: 'Akcja, Przygodowe, RPG',
        imageSrc: 'https://static.muve.pl/uploads/product-cover/0021/9696/wiedzmin3-digi-3.jpg',
        count: 300,
        price: 189.99,
    },
    {
        gameName: 'Enter the Gungeon',
        company: 'Dodge Roll',
        platform: 'PC',
        releaseYear: 2016,
        distribution: 'Steam',
        description: 'Enter the Gungeon to połączenie ostrej strzelanki z przemierzaniem lochów. Przedstawia losy grupy strzelających, zgarniających łup, wykonujących uniki z przewrotem i wywracających stoły wyrzutków, którzy dążą do odkupienia poprzez zdobycie największego skarbu Lochu Giwer: giwery zdolnej zabić przeszłość. Wybierz swojego bohatera i dotrzyj na samo dno Lochu Giwer, przebijając się przez wszystkie niebezpieczne piętra o zmiennym układzie, na których aż się roi od zabójczo uroczych broniumarłych i straszliwych bossów. Zbieraj cenne łupy, odkrywaj sekrety lochu i kupuj od szukających łatwego zarobku kupców i sklepikarzy potężne przedmioty, które dadzą ci przewagę.',
        genre: 'Bullet-Hell, Rogue-like akcji, Rogue-like, Indie',
        imageSrc: 'https://steamcdn-a.akamaihd.net/steam/apps/311690/ss_9d3f304b18e8cd1cf6ac4a886bec474e0b677800.jpg?t=1575923806',
        count: 300,
        price: 53.99,
    },
    {
        gameName: 'Exit the Gungeon',
        company: 'Dodge Roll',
        platform: 'PC',
        releaseYear: 2020,
        distribution: 'Steam',
        description: 'tuopis',
        imageSrc: 'https://steamcdn-a.akamaihd.net/steam/apps/1209490/ss_49b51258cc0e0989ea13517f8d693aa734e04827.jpg?t=1588707294',
        count: 300,
        price: 35.99,
    },
    {
        gameName: 'Monster Train',
        company: 'Shiny Shoe',
        platform: 'PC',
        releaseYear: 2020,
        distribution: 'Steam',
        description: 'tuopis',
        genre: 'Strategy, Card Game, Deckbuilding, Roguelike ',
        imageSrc: 'https://steamcdn-a.akamaihd.net/steam/apps/1102190/ss_edce778e9006c559cc347542ba2a61ed1461c945.jpg?t=1590688515',
        count: 300,
        price: 100.50,
    },
    {
        gameName: 'Terraria',
        company: 'Re-Logic',
        platform: 'PC',
        releaseYear: 2011,
        distribution: 'Tradycyjna',
        description: 'Kop, walcz, odkrywaj, buduj! Nic nie jest niemożliwe w tej przygodowej grze akcji. Świat to twoje płótno, a ziemia to twoja farba. \
    Łap za narzędzia i ruszaj! Twórz broń, by walczyć przeciwko zróżnicowanym przeciwnikom w równie licznych biomach. Kop coraz głębiej, by odnajdywać nowe narzędzia, pieniądze oraz inne równie przydatne rzeczy. Zdobywaj surowce, dzięki którym możesz stworzyć wszystko, co może okazać się przydatne przy kreowaniu twojego własnego świata. Możesz zbudować dom, fortecę bądź nawet zamek. Z czasem twoje budowle zaczną gościć nowych lokatorów, którzy będą oferować ci masę różnego rodzaju sprzętu, który pomoże ci podczas twoich wpraw. \
    Lecz strzeż się, czeka na ciebie jeszcze więcej wyzwań... Jesteś gotów podjąć się tego zadania?\
    Ważniejsze cechy:\
    Sandboxowy styl rozgrywki\
    Losowo generowane otoczenie\
    Darmowe aktualizacje',
        genre: 'Akcja, Przygodowe, Niezależne, RPG',
        imageSrc: 'https://steamcdn-a.akamaihd.net/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1590092560',
        count: 300,
        price: 35.99,
    },
    {
        gameName: 'Terraria',
        company: 'Re-Logic',
        platform: 'Xbox',
        releaseYear: 2011,
        distribution: 'Tradycyjna',
        description: 'Kop, walcz, odkrywaj, buduj! Nic nie jest niemożliwe w tej przygodowej grze akcji. Świat to twoje płótno, a ziemia to twoja farba. \
    Łap za narzędzia i ruszaj! Twórz broń, by walczyć przeciwko zróżnicowanym przeciwnikom w równie licznych biomach. Kop coraz głębiej, by odnajdywać nowe narzędzia, pieniądze oraz inne równie przydatne rzeczy. Zdobywaj surowce, dzięki którym możesz stworzyć wszystko, co może okazać się przydatne przy kreowaniu twojego własnego świata. Możesz zbudować dom, fortecę bądź nawet zamek. Z czasem twoje budowle zaczną gościć nowych lokatorów, którzy będą oferować ci masę różnego rodzaju sprzętu, który pomoże ci podczas twoich wpraw. \
    Lecz strzeż się, czeka na ciebie jeszcze więcej wyzwań... Jesteś gotów podjąć się tego zadania?\
    Ważniejsze cechy:\
    Sandboxowy styl rozgrywki\
    Losowo generowane otoczenie\
    Darmowe aktualizacje',
        genre: 'Akcja, Przygodowe, Niezależne, RPG',
        imageSrc: 'https://steamcdn-a.akamaihd.net/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1590092560',
        count: 300,
        price: 35.99,
    },
    {
        gameName: 'Terraria',
        company: '505 games srl',
        platform: 'Android',
        releaseYear: 2011,
        distribution: 'Tradycyjna',
        description: 'Kop, walcz, odkrywaj, buduj! Nic nie jest niemożliwe w tej przygodowej grze akcji. Świat to twoje płótno, a ziemia to twoja farba. \
    Łap za narzędzia i ruszaj! Twórz broń, by walczyć przeciwko zróżnicowanym przeciwnikom w równie licznych biomach. Kop coraz głębiej, by odnajdywać nowe narzędzia, pieniądze oraz inne równie przydatne rzeczy. Zdobywaj surowce, dzięki którym możesz stworzyć wszystko, co może okazać się przydatne przy kreowaniu twojego własnego świata. Możesz zbudować dom, fortecę bądź nawet zamek. Z czasem twoje budowle zaczną gościć nowych lokatorów, którzy będą oferować ci masę różnego rodzaju sprzętu, który pomoże ci podczas twoich wpraw. \
    Lecz strzeż się, czeka na ciebie jeszcze więcej wyzwań... Jesteś gotów podjąć się tego zadania?\
    Ważniejsze cechy:\
    Sandboxowy styl rozgrywki\
    Losowo generowane otoczenie\
    Darmowe aktualizacje',
        genre: 'Akcja, Przygodowe, Niezależne, RPG',
        imageSrc: 'https://steamcdn-a.akamaihd.net/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1590092560',
        count: 300,
        price: 23.99,
    },
    {
        gameName: 'Demoncrawl',
        company: 'Therefore Games',
        platform: 'PC',
        releaseYear: 2019,
        distribution: 'Steam',
        description: 'Kop, walcz, odkrywaj, buduj! Nic nie jest niemożliwe w tej przygodowej grze akcji. Świat to twoje płótno, a ziemia to twoja farba. \
    Łap za narzędzia i ruszaj! Twórz broń, by walczyć przeciwko zróżnicowanym przeciwnikom w równie licznych biomach. Kop coraz głębiej, by odnajdywać nowe narzędzia, pieniądze oraz inne równie przydatne rzeczy. Zdobywaj surowce, dzięki którym możesz stworzyć wszystko, co może okazać się przydatne przy kreowaniu twojego własnego świata. Możesz zbudować dom, fortecę bądź nawet zamek. Z czasem twoje budowle zaczną gościć nowych lokatorów, którzy będą oferować ci masę różnego rodzaju sprzętu, który pomoże ci podczas twoich wpraw. \
    Lecz strzeż się, czeka na ciebie jeszcze więcej wyzwań... Jesteś gotów podjąć się tego zadania?\
    Ważniejsze cechy:\
    Sandboxowy styl rozgrywki\
    Losowo generowane otoczenie\
    Darmowe aktualizacje',
        genre: 'Przygodowe, Niezależne, RPG, Strategie',
        imageSrc: 'https://steamcdn-a.akamaihd.net/steam/apps/1141220/ss_293ed8f1713c17f7faa0127120e9e07b4632d837.jpg?t=1591115672',
        count: 300,
        price: 53.99,
    }
]
module.exports = products;