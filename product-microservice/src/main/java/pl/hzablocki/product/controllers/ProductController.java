package pl.hzablocki.product.controllers;

import org.springframework.web.bind.annotation.*;
import pl.hzablocki.product.model.Product;
import pl.hzablocki.product.repositories.ProductRepository;

import java.util.LinkedList;
import java.util.List;

@RestController
@CrossOrigin(origins = "", allowedHeaders = "*")
public class ProductController {

    private final ProductRepository repository;
    private static List<Product> cart = new LinkedList<>();

    public ProductController(ProductRepository repository) {
        this.repository = repository;
        Product product = new Product();
        product.setGameName("Frostpunk");
        product.setCompany("11bit");
        product.setPlatform("PC");
        product.setReleaseYear(2017);
        product.setDistribution("Elektroniczna");
        product.setDescription("Frostpunk to gra polskiego studia 11 bit. Produkcja przenosi gracza do alternatywnej rzeczywistości w XIX wieku, kiedy ludzkości grozi zagłada. Ziemię nawiedziła ponowna epoka lodowcowa, która spowodowała, że człowiek musi walczyć o przetrwanie w niezwykle trudnych warunkach.");
        product.setGenre("Symulacje, Strategia");
        product.setImageSrc("https://static.muve.pl/uploads/product-cover/0042/2418/poster-art-1.jpg");
        product.setCount(300);
        product.setPrice(100.50);
        repository.save(product);


        product = new Product();
        product.setGameName("Wiedźmin III: Dziki Gon");
        product.setCompany("CD PROJEKT RED");
        product.setPlatform("PC");
        product.setReleaseYear(2015);
        product.setDistribution("Tradycyjna");
        product.setDescription("Wiedźmin 3: Dziki Gon to trzecia i najbardziej rozchwytywana gra serii. Produkcja ponownie przenosi graczy do fantastycznego świata stworzonego przez Andrzeja Sapkowskiego. Poznajemy kontynuację historii Geralta z Rivii, który ponownie musi chwycić za miecz. W trakcie rozgrywki poszukujemy utraconej miłości Geralta, zajmujemy się inwazją Nilfgaardu na Królestwa Północy i mamy wiele innych, poważnych, wiedźmińskich obowiązków. Zanurz się w świat pełen magii i potworów! ");
        product.setGenre("Akcja, Przygodowe, RPG");
        product.setImageSrc("https://static.muve.pl/uploads/product-cover/0021/9696/wiedzmin3-digi-3.jpg");
        product.setCount(300);
        product.setPrice(99.99);
        repository.save(product);

        product = new Product();
        product.setGameName("Wiedźmin III: Dziki Gon");
        product.setCompany("CD PROJEKT RED");
        product.setPlatform("PS4");
        product.setReleaseYear(2015);
        product.setDistribution("Tradycyjna");
        product.setDescription("Wiedźmin 3: Dziki Gon to trzecia i najbardziej rozchwytywana gra serii. Produkcja ponownie przenosi graczy do fantastycznego świata stworzonego przez Andrzeja Sapkowskiego. Poznajemy kontynuację historii Geralta z Rivii, który ponownie musi chwycić za miecz. W trakcie rozgrywki poszukujemy utraconej miłości Geralta, zajmujemy się inwazją Nilfgaardu na Królestwa Północy i mamy wiele innych, poważnych, wiedźmińskich obowiązków. Zanurz się w świat pełen magii i potworów! ");
        product.setGenre("Akcja, Przygodowe, RPG");
        product.setImageSrc("https://static.muve.pl/uploads/product-cover/0021/9696/wiedzmin3-digi-3.jpg");
        product.setCount(300);
        product.setPrice(99.99);
        repository.save(product);


        product = new Product();
        product.setGameName("Wiedźmin III: Dziki Gon");
        product.setCompany("CD PROJEKT RED");
        product.setPlatform("Xbox One");
        product.setReleaseYear(2015);
        product.setDistribution("Tradycyjna");
        product.setDescription("Wiedźmin 3: Dziki Gon to trzecia i najbardziej rozchwytywana gra serii. Produkcja ponownie przenosi graczy do fantastycznego świata stworzonego przez Andrzeja Sapkowskiego. Poznajemy kontynuację historii Geralta z Rivii, który ponownie musi chwycić za miecz. W trakcie rozgrywki poszukujemy utraconej miłości Geralta, zajmujemy się inwazją Nilfgaardu na Królestwa Północy i mamy wiele innych, poważnych, wiedźmińskich obowiązków. Zanurz się w świat pełen magii i potworów! ");
        product.setGenre("Akcja, Przygodowe, RPG");
        product.setImageSrc("https://static.muve.pl/uploads/product-cover/0021/9696/wiedzmin3-digi-3.jpg");
        product.setCount(300);
        product.setPrice(99.99);
        repository.save(product);

        product = new Product();
        product.setGameName("Demoncrawl");
        product.setCompany("Therefore Games");
        product.setPlatform("PC");
        product.setReleaseYear(2017);
        product.setDistribution("Steam");
        product.setDescription("Kop, walcz, odkrywaj, buduj! Nic nie jest niemożliwe w tej przygodowej grze akcji. Świat to twoje płótno, a ziemia to twoja farba. Łap za narzędzia i ruszaj! Twórz broń, by walczyć przeciwko zróżnicowanym przeciwnikom w równie licznych biomach. Kop coraz głębiej, by odnajdywać nowe narzędzia, pieniądze oraz inne równie przydatne rzeczy. Zdobywaj surowce, dzięki którym możesz stworzyć wszystko, co może okazać się przydatne przy kreowaniu twojego własnego świata. Możesz zbudować dom, fortecę bądź nawet zamek. Z czasem twoje budowle zaczną gościć nowych lokatorów, którzy będą oferować ci masę różnego rodzaju sprzętu, który pomoże ci podczas twoich wpraw. Lecz strzeż się czeka na ciebie jeszcze więcej wyzwań Jesteś gotów podjąć się tego zadania Ważniejsze cechy Sandboxowy styl rozgrywki Losowo generowane otoczenie Darmowe aktualizacje");
        product.setGenre("Przygodowe, Niezależne, RPG, Strategie");
        product.setImageSrc("https://steamcdn-a.akamaihd.net/steam/apps/1141220/ss_293ed8f1713c17f7faa0127120e9e07b4632d837.jpg?t=1591115672");
        product.setCount(300);
        product.setPrice(100.50);
        repository.save(product);

        product = new Product();
        product.setGameName("Enter the Gungeon");
        product.setCompany("Dodge Roll");
        product.setPlatform("PC");
        product.setReleaseYear(2017);
        product.setDistribution("Steam");
        product.setDescription("Enter the Gungeon to połączenie ostrej strzelanki z przemierzaniem lochów. Przedstawia losy grupy strzelających, zgarniających łup, wykonujących uniki z przewrotem i wywracających stoły wyrzutków, którzy dążą do odkupienia poprzez zdobycie największego skarbu Lochu Giwer: giwery zdolnej zabić przeszłość. Wybierz swojego bohatera i dotrzyj na samo dno Lochu Giwer, przebijając się przez wszystkie niebezpieczne piętra o zmiennym układzie, na których aż się roi od zabójczo uroczych broniumarłych i straszliwych bossów. Zbieraj cenne łupy, odkrywaj sekrety lochu i kupuj od szukających łatwego zarobku kupców i sklepikarzy potężne przedmioty, które dadzą ci przewagę.");
        product.setGenre("Bullet-Hell, Rogue-like akcji, Rogue-like, Indie");
        product.setImageSrc("https://steamcdn-a.akamaihd.net/steam/apps/311690/ss_9d3f304b18e8cd1cf6ac4a886bec474e0b677800.jpg?t=1575923806");
        product.setCount(300);
        product.setPrice(100.50);
        repository.save(product);


        product = new Product();
        product.setGameName("Exit the Gungeon");
        product.setCompany("Dodge Roll");
        product.setPlatform("PC");
        product.setReleaseYear(2020);
        product.setDistribution("Steam");
        product.setDescription("tuopis");
        product.setGenre("Bullet-Hell, Rogue-like akcji, Rogue-like, Indie");
        product.setImageSrc("https://steamcdn-a.akamaihd.net/steam/apps/1209490/ss_49b51258cc0e0989ea13517f8d693aa734e04827.jpg?t=1588707294");
        product.setCount(300);
        product.setPrice(100.50);
        repository.save(product);

        product = new Product();
        product.setGameName("Monster Train");
        product.setCompany("Shiny Shoe");
        product.setPlatform("PC");
        product.setReleaseYear(2020);
        product.setDistribution("Steam");
        product.setDescription("tuopis");
        product.setGenre("Strategy, Card Game, Deckbuilding, Roguelike");
        product.setImageSrc("https://steamcdn-a.akamaihd.net/steam/apps/1102190/ss_edce778e9006c559cc347542ba2a61ed1461c945.jpg?t=1590688515");
        product.setCount(300);
        product.setPrice(100.50);
        repository.save(product);

        product = new Product();
        product.setGameName("Terraria");
        product.setCompany("Re-Logic");
        product.setPlatform("PC");
        product.setReleaseYear(2011);
        product.setDistribution("Tradycyjna");
        product.setDescription("Kop, walcz, odkrywaj, buduj! Nic nie jest niemożliwe w tej przygodowej grze akcji. Świat to twoje płótno, a ziemia to twoja farba. Łap za narzędzia i ruszaj! Twórz broń, by walczyć przeciwko zróżnicowanym przeciwnikom w równie licznych biomach. Kop coraz głębiej, by odnajdywać nowe narzędzia, pieniądze oraz inne równie przydatne rzeczy. Zdobywaj surowce, dzięki którym możesz stworzyć wszystko, co może okazać się przydatne przy kreowaniu twojego własnego świata. Możesz zbudować dom, fortecę bądź nawet zamek. Z czasem twoje budowle zaczną gościć nowych lokatorów, którzy będą oferować ci masę różnego rodzaju sprzętu, który pomoże ci podczas twoich wpraw. Lecz strzeż się, czeka na ciebie jeszcze więcej wyzwań... Jesteś gotów podjąć się tego zadania?");
        product.setGenre("Akcja, Przygodowe, Niezależne, RPG");
        product.setImageSrc("https://steamcdn-a.akamaihd.net/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1590092560");
        product.setCount(300);
        product.setPrice(100.50);
        repository.save(product);

        product = new Product();
        product.setGameName("Terraria");
        product.setCompany("Re-Logic");
        product.setPlatform("XBOX");
        product.setReleaseYear(2011);
        product.setDistribution("Tradycyjna");
        product.setDescription("Kop, walcz, odkrywaj, buduj! Nic nie jest niemożliwe w tej przygodowej grze akcji. Świat to twoje płótno, a ziemia to twoja farba. Łap za narzędzia i ruszaj! Twórz broń, by walczyć przeciwko zróżnicowanym przeciwnikom w równie licznych biomach. Kop coraz głębiej, by odnajdywać nowe narzędzia, pieniądze oraz inne równie przydatne rzeczy. Zdobywaj surowce, dzięki którym możesz stworzyć wszystko, co może okazać się przydatne przy kreowaniu twojego własnego świata. Możesz zbudować dom, fortecę bądź nawet zamek. Z czasem twoje budowle zaczną gościć nowych lokatorów, którzy będą oferować ci masę różnego rodzaju sprzętu, który pomoże ci podczas twoich wpraw. Lecz strzeż się, czeka na ciebie jeszcze więcej wyzwań... Jesteś gotów podjąć się tego zadania?");
        product.setGenre("Akcja, Przygodowe, Niezależne, RPG");
        product.setImageSrc("https://steamcdn-a.akamaihd.net/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1590092560");
        product.setCount(300);
        product.setPrice(100.50);
        repository.save(product);


        product = new Product();
        product.setGameName("Terraria");
        product.setCompany("Re-Logic");
        product.setPlatform("Android");
        product.setReleaseYear(2011);
        product.setDistribution("Tradycyjna");
        product.setDescription("Kop, walcz, odkrywaj, buduj! Nic nie jest niemożliwe w tej przygodowej grze akcji. Świat to twoje płótno, a ziemia to twoja farba. Łap za narzędzia i ruszaj! Twórz broń, by walczyć przeciwko zróżnicowanym przeciwnikom w równie licznych biomach. Kop coraz głębiej, by odnajdywać nowe narzędzia, pieniądze oraz inne równie przydatne rzeczy. Zdobywaj surowce, dzięki którym możesz stworzyć wszystko, co może okazać się przydatne przy kreowaniu twojego własnego świata. Możesz zbudować dom, fortecę bądź nawet zamek. Z czasem twoje budowle zaczną gościć nowych lokatorów, którzy będą oferować ci masę różnego rodzaju sprzętu, który pomoże ci podczas twoich wpraw. Lecz strzeż się, czeka na ciebie jeszcze więcej wyzwań... Jesteś gotów podjąć się tego zadania?");
        product.setGenre("Akcja, Przygodowe, Niezależne, RPG");
        product.setImageSrc("https://steamcdn-a.akamaihd.net/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.jpg?t=1590092560");
        product.setCount(300);
        product.setPrice(100.50);
        repository.save(product);
    }

    @GetMapping()
    List<Product> all(@RequestParam(name = "platform") String platform) {

        if (platform == null || platform.equals("")) {
            return repository.findAll();
        }

        return repository.findAllByPlatform(platform);
    }

    @PostMapping("/products")
    Product newProduct(@RequestBody Product newProduct) {
        return repository.save(newProduct);
    }

    @GetMapping("/products/{id}/addToCart")
    Product addToCart(@PathVariable Long id) throws Exception {
        Product product = one(id);
        cart.add(product);
        return product;
    }

    @DeleteMapping("/products/{id}/removeFromCart")
    Product removeFromCart(@PathVariable Long id) throws Exception {
        Product product = one(id);
        cart.remove(product);
        return product;
    }


    @GetMapping("/products/{id}")
    Product one(@PathVariable Long id) throws Exception {
        return repository.findById(id)
                .orElseThrow(() -> new Exception());
    }

    @PutMapping("/products/{id}")
    Product replaceProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return repository.findById(id)
                .map(Product -> {
                    Product.setGameName(newProduct.getGameName());
                    Product.setDescription(newProduct.getDescription());
                    return repository.save(Product);
                })
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return repository.save(newProduct);
                });
    }

    @DeleteMapping("/products/{id}")
    void deleteProduct(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
