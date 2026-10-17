import { ElectionMeta } from '../types.ts';

export const ELECTIONS_DATA: Record<1920 | 1946 | 1990, ElectionMeta> = {
  1920: {
    year: 1920,
    title: 'Volby do Poslanecké sněmovny 1920',
    subtitle: 'První parlamentní volby v nově zrozené Československé republice',
    date: '18. a 25. dubna 1920',
    turnout: '89,6 %',
    stakes: 'Rozhodovalo se o samotném charakteru mladého státu: zvítězí socialistická vize nového řádu, agrárně-venkovský konzervatismus, nebo občansko-demokratická a národně-konzervativní vize státu?',
    atmosphereQuote: '„Pryč od Vídně, pryč od Říma! Republika musí být sociálně spravedlivá a svobodná!“ – dobové heslo',
    historicalContext: `V dubnu 1920 se konaly vůbec první parlamentní volby samostatného Československa podle nové demokratické ústavy z února 1920, které nahradily dosavadní nevolené Revoluční národní shromáždění. Po rozpadu habsburské monarchie a kruté světové válce čelila republika obrovským výzvám: hyperinflaci, nedostatku potravin a uhlí, radikalizaci dělnictva ovlivněného bolševickou revolucí v Rusku a napětí s početnou německou a maďarskou menšinou, které se ocitly v novém státě nedobrovolně.

Mezi hlavní témata patřila pozemková reforma (rozdělení šlechtických velkostatků), odluka církve od státu, 8hodinová pracovní doba a postavení Slovenska v novém unitárním státě. Zároveň to byly první celostátní volby v naší historii, v nichž měly ženy plné a rovné volební právo.`,
    outcomeSummary: `Volby přinesly triumf levice. Sociální demokraté (ČSDSD) vedení Vlastimilem Tusarem získali přes 25,7 % hlasů a stali se nejsilnější stranou. Společně s německou sociální demokracií (DSAP) měla levice v parlamentu téměř většinu. Tusar sestavil koaliční vládu „rudozelené koalice“ (sociální demokraté a agrárníci).

Již na podzim 1920 však v ČSDSD propukl hluboký rozkol mezi demokratickým křídlem a radikální leninskou levicí, což vedlo k pádu vlády, generální stávce a v květnu 1921 k založení Komunistické strany Československa (KSČ). Moc následně převzala úřednická vláda Jana Černého a posléze tzv. Pětka v čele s agrárníkem Antonínem Švehlou.`,
    parties: [
      {
        id: 'cssd',
        shortName: 'ČSDSD (Soc. dem.)',
        fullName: 'Československá sociálně demokratická strana dělnická',
        ideology: 'Demokratický socialismus, odborové hnutí',
        leaders: ['Vlastimil Tusar', 'Rudolf Bechyně', 'Bohumír Šmeral'],
        color: '#dc2626',
        historicalPercentage: 25.7,
        historicalSeats: 74,
        description: 'Dominantní politická síla průmyslového dělnictva a městského proletariátu, která vzešla z voleb 1920 jako nejsilnější strana nového státu. Hájila sociální spravedlnost, radikální pozemkovou reformu, zavedení 8hodinové pracovní doby, progresivní zdanění a postupné zestátnění klíčového průmyslu a dolů. Vedení v čele s ministerským předsedou Vlastimilem Tusarem a Rudolfem Bechyněm stálo na pozicích demokratického parlamentarismu a loajality k republice. Uvnitř strany však již silně vřelo radikální marxistické křídlo (Bohumír Šmeral, Antonín Zápotocký), které se po rozkolu na podzim 1920 odštěpilo a založilo KSČ.',
        programHighlight: 'Socializace velkých podniků, 8hodinový pracovní den, sociální pojištění a odluka církve od státu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1'
      },
      {
        id: 'rszml',
        shortName: 'RSČV (Agrárníci)',
        fullName: 'Republikánská strana československého venkova',
        ideology: 'Agrarismus, venkovský konzervatismus, ochranářství',
        leaders: ['Antonín Švehla', 'František Udržal', 'Karel Prášek'],
        color: '#16a34a',
        historicalPercentage: 9.7,
        historicalSeats: 28,
        description: 'Klíčový politický pilíř meziválečné československé demokracie a nejsilnější nesocialistická formace. Její hlavní voličskou základnu tvořili samostatní rolníci, sedláci, venkovská inteligence a družstevníci. Pod pragmatickým vedením Antonína Švehly strana kombinovala obranu soukromého vlastnictví půdy a agrární cla s důslednou státotvorností a sociálním smírem. Společně se slovenskými agrárníky (kandidujícími v rámci Slovenské národní a rolnické strany) vytvořili po volbách poslanecký klub o celkem 40 poslancích (13,7 % hlasů). Byla motorem pozemkové reformy, která měla půdu šlechtických velkostatků rozdělit venkovskému lidu, avšak odmítala jakékoliv socialistické experimenty a kolektivizaci.',
        programHighlight: 'Půda do rukou rolníků, agrární cla proti levnému dovozu, zachování křesťanských tradic a řádu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Republik%C3%A1nsk%C3%A1_strana_zem%C4%9Bd%C4%9Blsk%C3%A9ho_a_malorolnick%C3%A9ho_lidu'
      },
      {
        id: 'csl',
        shortName: 'ČSL (Lidovci)',
        fullName: 'Československá strana lidová',
        ideology: 'Křesťanský socialismus, křesťanská demokracie, katolicismus',
        leaders: ['Jan Šrámek', 'Bohumil Stašek', 'Alois Kříž'],
        color: '#eab308',
        historicalPercentage: 7.5,
        historicalSeats: 21,
        description: 'Hlavní politický reprezentant katolicky orientovaného obyvatelstva, především malorolníků, venkovských řemeslníků, drobných úředníků a věřících dělníků na Moravě a ve východních Čechách. Vznikla v lednu 1919 sloučením katolických proudů pod vedením monsignora Jana Šrámka. Ve volbách 1920 kandidovala na společné kandidátce se SĽS, s níž získala celkem 11,3 % hlasů a 33 křesel (z toho 21 připadlo ČSL). V napjaté atmosféře mladé republiky důsledně bránila pozice církve, církevní školy, náboženství ve školních osnovách a nedotknutelnost rodiny, přičemž v hospodářské oblasti razila křesťansko-sociální učení a solidaritu.',
        programHighlight: 'Obrana katolické církve proti sekularismu, podpora církevního školství a rodinná politika.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/KDU-%C4%8CSL'
      },
      {
        id: 'csns',
        shortName: 'ČSS (Socialisté)',
        fullName: 'Československá strana socialistická',
        ideology: 'Národní socialismus, vlastenectví, reformismus',
        leaders: ['Václav Klofáč', 'Jiří Stříbrný', 'Emil Franke'],
        color: '#f97316',
        historicalPercentage: 8.1,
        historicalSeats: 24,
        description: 'Středolevicová reformní strana s výrazným vlasteneckým profilem, orientovaná především na městskou inteligenci, úřednictvo, živnostníky a uvědomělé dělníky. Vznikla již před válkou jako národně sociální strana pod vedením Václava Klofáče. Hlásala socialismus zbavený marxistického internacionalismu a třídního boje, který stavěla na svébytném národním a humanistickém základě v tradici T. G. Masaryka. Patřila k nejradikálnějším zastáncům odluky církve od státu, sekulární školy a unitárního československého státu.',
        programHighlight: 'Socializace bez marxistického dogmatismu, jednotný národní stát a radikální protikatolický postoj.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_n%C3%A1rodn%C4%9B_socialistick%C3%A1'
      },
      {
        id: 'csnd',
        shortName: 'ČsND (Národní dem.)',
        fullName: 'Československá národní demokracie',
        ideology: 'Národní liberalismus, konzervatismus, hospodářský liberalismus',
        leaders: ['Karel Kramář', 'Alois Rašín', 'Viktor Dyk'],
        color: '#2563eb',
        historicalPercentage: 6.3,
        historicalSeats: 19,
        description: 'Tradiční národně-liberální a konzervativní formace vedená Karlem Kramářem a prvním ministrem financí Aloisem Rašínem. Oporu nacházela u velkoprůmyslu, bankovního sektoru, velkoobchodu a národovecké měšťanské inteligence. Prosazovala hospodářský liberalismus, pevnou a stabilní měnu, striktní rozpočtovou disciplínu a ochranu soukromého podnikání. Byla nekompromisně protibolševická, prosazovala nostrifikaci (přenesení sídel podniků ze zahraničí do ČSR), přísný unitární stát a zahraničněpolitickou orientaci na Francii.',
        programHighlight: 'Silná a stabilní měna, ochrana soukromého vlastnictví, nostrifikace podniků a spojenectví s Francií.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_n%C3%A1rodn%C3%AD_demokracie'
      },
      {
        id: 'dsap',
        shortName: 'DSAP (Něm. soc. dem.)',
        fullName: 'Deutsche sozialdemokratische Arbeiterpartei',
        ideology: 'Sociální demokracie, práva německojazyčné menšiny',
        leaders: ['Ludwig Czech', 'Josef Seliger'],
        color: '#b91c1c',
        historicalPercentage: 11.1,
        historicalSeats: 31,
        description: 'Nejsilnější politická strana německé menšiny v ČSR a celkově třetí nejsilnější poslanecký klub po volbách 1920. Reprezentovala německojazyčné dělnictvo v průmyslovém pohraničí (Sudetech). Ačkoliv byla ideově spřízněna s českou sociální demokracií a hájila marxistický program a dělnická práva, v otázce státoprávní zpočátku odmítala vznik unitárního Československa a požadovala právo na sebeurčení a národnostní samosprávu. Postupně pod vedením Ludwiga Czecha přešla k loajální spolupráci a stala se pilířem demokratického tábora.',
        programHighlight: 'Socialismus, národnostní rovnoprávnost pro Němce, odmítnutí čechoslovakismu a podpora autonomie.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/N%C4%9Bmeck%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1_v_%C4%8Ceskoslovensk%C3%A9_republice'
      },
      {
        id: 'bdl',
        shortName: 'BdL (Něm. agrárníci)',
        fullName: 'Bund der Landwirte',
        ideology: 'Německý agrarismus, ochrana venkova',
        leaders: ['Franz Spina', 'Wolfgang Zierhut'],
        color: '#15803d',
        historicalPercentage: 3.9,
        historicalSeats: 11,
        description: 'Konzervativní stavovská organizace sdružující německé rolníky, sedláky a venkovské majitele půdy v Sudetech. V roce 1920 se ostře vymezovala proti pozemkové reformě, kterou vnímala jako pokus o počeštění pohraničí a nespravedlivé vyvlastnění německých velkostatků bez tržní náhrady. Žádala ochranu zemědělské výroby a hospodářská cla. Pod vedením Franze Spiny se v druhé polovině 20. let stala průkopníkem tzv. německého aktivismu – vstoupila do československé vlády a loajálně spolupracovala na rozvoji státu.',
        programHighlight: 'Obrana německého venkova, odmítání konfiskace půdy bez spravedlivé náhrady, dovozní cla.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Bund_der_Landwirte'
      },
      {
        id: 'sls',
        shortName: 'SĽS (Ľudovci)',
        fullName: 'Slovenská ľudová strana',
        ideology: 'Slovenský autonomismus, křesťanský konzervatismus',
        leaders: ['Andrej Hlinka', 'Ferdiš Juriga', 'Florián Tománek'],
        color: '#854d0e',
        historicalPercentage: 3.8,
        historicalSeats: 12,
        description: 'Autonomistické hnutí reprezentující katolické slovenské obyvatelstvo, vedené charismatickým katolickým knězem Andrejem Hlinkou. Ve volbách 1920 kandidovala na společné kandidátce s českou lidovou stranou pod hlavičkou ČSL (získala 12 mandátů a cca 3,8 % celostátních hlasů), brzy se však plně osamostatnila. Hlásala nedílnou národní svébytnost Slováků, bojovala proti pražskému centralismu a ideologii jednotného „československého národa“. Žádala plné naplnění Pittsburské dohody, zákonodárnou autonomii pro Slovensko a důslednou ochranu katolické víry před pražským laicismem.',
        programHighlight: 'Zákonodárná autonomie Slovenska, obrana katolické církve proti pražskému laicismu a čechoslovakismu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Hlinkova_slovensk%C3%A1_%C4%BEudov%C3%A1_strana'
      }
    ],
    questions: [
      {
        id: 1,
        title: 'Pozemková reforma a velkostatky',
        category: 'Hospodářství a půda',
        statement: 'Rozsáhlé velkostatky šlechty a církve by měly být státem vyvlastněny a rozděleny mezi bezzemky a drobné rolníky.',
        historicalNote: 'Po vzniku Československa vlastnila šlechta a církev většinu zemědělské a lesní půdy. Řešilo se, zda má nová republika provést zábor velkostatků a půdu přerozdělit drobným hospodářům k nápravě historických poměrů, anebo chránit nedotknutelnost soukromého vlastnictví a zachovat efektivitu velkých zemědělských celků.',
        context: 'Po vzniku Československa vlastnila šlechta a církev většinu zemědělské a lesní půdy. Řešilo se, zda má nová republika provést zábor velkostatků a půdu přerozdělit drobným hospodářům k nápravě historických poměrů, anebo chránit nedotknutelnost soukromého vlastnictví a zachovat efektivitu velkých zemědělských celků.',
        partyStances: { cssd: 1, rszml: 1, csl: 0, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 2,
        title: 'Socializace klíčového průmyslu',
        category: 'Socializace a průmysl',
        statement: 'Klíčové uhelné doly, energetika a velké velkokapitálové podniky by měly být převedeny do veřejného vlastnictví pod správu pracujících.',
        historicalNote: 'V poválečné vlně roku 1920 rezonovalo volání po tzv. socializaci strategického průmyslu. Spor se vedl o to, zda má stát převzít uhelné doly a energetiku do veřejného vlastnictví ve prospěch zaměstnanců, či zda ponechat strategická odvětví v soukromých rukou kvůli investicím a efektivnímu hospodaření.',
        context: 'V poválečné vlně roku 1920 rezonovalo volání po tzv. socializaci strategického průmyslu. Spor se vedl o to, zda má stát převzít uhelné doly a energetiku do veřejného vlastnictví ve prospěch zaměstnanců, či zda ponechat strategická odvětví v soukromých rukou kvůli investicím a efektivnímu hospodaření.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 3,
        title: 'Osmihodinová pracovní doba',
        category: 'Sociální práva',
        statement: 'Zákonná pracovní doba by měla činit nanejvýš 8 hodin denně a stát by měl dbát na její dodržování u všech zaměstnavatelů.',
        historicalNote: 'Zákon o osmihodinové pracovní době z prosince 1918 patřil k významným sociálním reformám mladé republiky. Diskuse se točila kolem důslednosti jeho uplatňování a případného udělování výjimek – zejména v zemědělství během sezónních žní a v nepřetržitých provozech, kde hrozilo narušení výroby.',
        context: 'Zákon o osmihodinové pracovní době z prosince 1918 patřil k významným sociálním reformám mladé republiky. Diskuse se točila kolem důslednosti jeho uplatňování a případného udělování výjimek – zejména v zemědělství během sezónních žní a v nepřetržitých provozech, kde hrozilo narušení výroby.',
        partyStances: { cssd: 1, rszml: -1, csl: 0, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 4,
        title: 'Odluka církve od státu',
        category: 'Církev a stát',
        statement: 'Stát by měl být oddělen od římskokatolické církve a historická církevní privilegia by měla být odstraněna.',
        historicalNote: 'Po pádu monarchie sílily požadavky na sekularizaci veřejného života a heslo „Pryč od Říma“. Řešila se otázka, zda má nová republika oddělit veřejný život od vlivu církve a omezit její historická privilegia, anebo zachovat respekt k tradičním náboženským institucím a jejich majetku.',
        context: 'Po pádu monarchie sílily požadavky na sekularizaci veřejného života a heslo „Pryč od Říma“. Řešila se otázka, zda má nová republika oddělit veřejný život od vlivu církve a omezit její historická privilegia, anebo zachovat respekt k tradičním náboženským institucím a jejich majetku.',
        partyStances: { cssd: 1, rszml: 0, csl: -1, csns: 1, csnd: 0, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 5,
        title: 'Náboženská výchova ve školách',
        category: 'Školství a víra',
        statement: 'Náboženská výchova a křesťanské hodnoty by měly zůstat součástí vzdělávání mládeže na školách.',
        historicalNote: 'Ve školství probíhal spor o charakter výuky. Diskutovalo se o tom, zda má škola vychovávat žáky v tradičních křesťanských morálních zásadách s náboženskou výchovou, nebo zda má být výuka čistě laická a založená na vědeckém poznání bez vlivu církví.',
        context: 'Ve školství probíhal spor o charakter výuky. Diskutovalo se o tom, zda má škola vychovávat žáky v tradičních křesťanských morálních zásadách s náboženskou výchovou, nebo zda má být výuka čistě laická a založená na vědeckém poznání bez vlivu církví.',
        partyStances: { cssd: -1, rszml: 0, csl: 1, csns: -1, csnd: 0, dsap: -1, bdl: 1, sls: 1 }
      },
      {
        id: 6,
        title: 'Slovenská autonomie',
        category: 'Státoprávní uspořádání',
        statement: 'Slovensku by měla být udělena zákonodárná a správní autonomie s vlastním sněmem podle zásad Pittsburské dohody.',
        historicalNote: 'Zahraniční odboj podepsal v roce 1918 Pittsburskou dohodu předpokládající slovenskou samosprávu. V době vzniku ústavy 1920 se řešilo, zda Slovensku poskytnout vlastní zákonodárný sněm a správu, nebo zda je pro udržení stability a celistvosti mladého státu vhodnější centralizovaná správa v Praze.',
        context: 'Zahraniční odboj podepsal v roce 1918 Pittsburskou dohodu předpokládající slovenskou samosprávu. V době vzniku ústavy 1920 se řešilo, zda Slovensku poskytnout vlastní zákonodárný sněm a správu, nebo zda je pro udržení stability a celistvosti mladého státu vhodnější centralizovaná správa v Praze.',
        partyStances: { cssd: -1, rszml: -1, csl: 0, csns: -1, csnd: -1, dsap: 0, bdl: 0, sls: 1 }
      },
      {
        id: 7,
        title: 'Idea čechoslovakismu',
        category: 'Národní identita',
        statement: 'Češi a Slováci by měli být vnímáni jako jeden společný státotvorný národ československý s jedním státním jazykem.',
        historicalNote: 'Ústava z února 1920 definovala jednotný „národ československý“. Šlo o státotvorný koncept, který měl zajistit Slovanům většinu vůči početným národnostním menšinám, narážel však na otázku svébytnosti a rovnoprávnosti samostatného slovenského národa.',
        context: 'Ústava z února 1920 definovala jednotný „národ československý“. Šlo o státotvorný koncept, který měl zajistit Slovanům většinu vůči početným národnostním menšinám, narážel však na otázku svébytnosti a rovnoprávnosti samostatného slovenského národa.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: -1 }
      },
      {
        id: 8,
        title: 'Samospráva menšin a německý jazyk',
        category: 'Národnostní menšiny',
        statement: 'Německá a maďarská menšina by měla mít v oblastech s převahou svého obyvatelstva samosprávu a jejich jazyk by měl mít rovnocenné postavení.',
        historicalNote: 'V novém státě žily početné menšiny Němců a Maďarů. Vedla se debata, nakolik nová republika umožní pohraničním regionům s převahou německého obyvatelstva samosprávu a uznání jejich jazyka, a nakolik má prosazovat jednotnou suverenitu československého státu.',
        context: 'V novém státě žily početné menšiny Němců a Maďarů. Vedla se debata, nakolik nová republika umožní pohraničním regionům s převahou německého obyvatelstva samosprávu a uznání jejich jazyka, a nakolik má prosazovat jednotnou suverenitu československého státu.',
        partyStances: { cssd: 0, rszml: -1, csl: -1, csns: -1, csnd: -1, dsap: 1, bdl: 1, sls: 0 }
      },
      {
        id: 9,
        title: 'Měnová politika a deflace',
        category: 'Měnová politika',
        statement: 'Stát by měl uplatňovat přísnou rozpočtovou disciplínu k udržení stabilní měny, i kdyby to dočasně omezilo hospodářský růst.',
        historicalNote: 'Poválečná střední Evropa čelila hospodářským otřesům a znehodnocení měny. Československo volilo mezi přísnou měnovou politikou s pevnou korunou (která chránila úspory a stabilitu, ale ztěžovala export) a expanzivnější politikou podporující okamžitou zaměstnanost a výrobu.',
        context: 'Poválečná střední Evropa čelila hospodářským otřesům a znehodnocení měny. Československo volilo mezi přísnou měnovou politikou s pevnou korunou (která chránila úspory a stabilitu, ale ztěžovala export) a expanzivnější politikou podporující okamžitou zaměstnanost a výrobu.',
        partyStances: { cssd: -1, rszml: 0, csl: 0, csns: -1, csnd: 1, dsap: -1, bdl: 0, sls: 0 }
      },
      {
        id: 10,
        title: 'Nostrifikace podniků',
        category: 'Hospodářský nacionalismus',
        statement: 'Podniky působící na našem území by měly mít své sídlo i vedení v Československu namísto zahraničí.',
        historicalNote: 'Mnohé klíčové akciové společnosti a banky v novém státě byly administrativně navázány na Vídeň či Budapešť. Zvažovalo se, zda právně vyžadovat přesun sídel a vedení do ČSR (tzv. nostrifikace) k posílení hospodářské nezávislosti, či ponechat volnější mezinárodní kapitálové toky.',
        context: 'Mnohé klíčové akciové společnosti a banky v novém státě byly administrativně navázány na Vídeň či Budapešť. Zvažovalo se, zda právně vyžadovat přesun sídel a vedení do ČSR (tzv. nostrifikace) k posílení hospodářské nezávislosti, či ponechat volnější mezinárodní kapitálové toky.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: 1 }
      },
      {
        id: 11,
        title: 'Zemědělská cla a ochrana trhu',
        category: 'Zemědělství a cla',
        statement: 'Domácí zemědělci by měli být chráněni před levnější zahraniční konkurencí pomocí cel na dovoz obilí a potravin.',
        historicalNote: 'Poválečný trh řešil rozpor mezi zájmy venkova a měst. Ochranná cla pomáhala domácím hospodářům udržet rentabilní ceny produkce proti levnějšímu dovozu, avšak pro městské obyvatelstvo znamenala zvýšení cen základních potravin.',
        context: 'Poválečný trh řešil rozpor mezi zájmy venkova a měst. Ochranná cla pomáhala domácím hospodářům udržet rentabilní ceny produkce proti levnějšímu dovozu, avšak pro městské obyvatelstvo znamenala zvýšení cen základních potravin.',
        partyStances: { cssd: -1, rszml: 1, csl: 1, csns: -1, csnd: 1, dsap: -1, bdl: 1, sls: 1 }
      },
      {
        id: 12,
        title: 'Spojenectví s Francií',
        category: 'Zahraniční politika',
        statement: 'Bezpečnost Československa by měla být primárně postavena na spojenecké smlouvě s Francií.',
        historicalNote: 'Československo hledalo záruky své nezávislosti v novém poválečném uspořádání. Řešilo se, zda zahraniční orientaci primárně opřít o vojenské spojenectví s Francií a versailleský mírový systém, či spíše hledat širší mezinárodní spolupráci v rámci Společnosti národů.',
        context: 'Československo hledalo záruky své nezávislosti v novém poválečném uspořádání. Řešilo se, zda zahraniční orientaci primárně opřít o vojenské spojenectví s Francií a versailleský mírový systém, či spíše hledat širší mezinárodní spolupráci v rámci Společnosti národů.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: 0 }
      },
      {
        id: 13,
        title: 'Diplomatické vztahy se Sovětským Ruskem',
        category: 'Vztah k Sovětskému Rusku',
        statement: 'Československo by mělo diplomaticky uznat sovětské Rusko a navázat s ním oficiální vztahy.',
        historicalNote: 'V roce 1920 se řešil postoj evropských zemí k uspořádání v Rusku po revoluci. Vedl se spor o to, zda novou vládu v Moskvě diplomaticky uznat a otevřít hospodářské styky, nebo zachovat zdrženlivost z obavy o mezinárodní stabilitu.',
        context: 'V roce 1920 se řešil postoj evropských zemí k uspořádání v Rusku po revoluci. Vedl se spor o to, zda novou vládu v Moskvě diplomaticky uznat a otevřít hospodářské styky, nebo zachovat zdrženlivost z obavy o mezinárodní stabilitu.',
        partyStances: { cssd: 0, rszml: -1, csl: -1, csns: -1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 14,
        title: 'Výsady pro československé legionáře',
        category: 'Zásluhy o stát',
        statement: 'Českoslovenští legionáři by měli mít přednostní právo na uplatnění ve státní správě a na další sociální výhody.',
        historicalNote: 'Legionáři byli vnímáni jako klíčoví zakladatelé a obránci republiky. Diskutovalo se o tom, zda by jim měl stát zajistit zvláštní výhody jako projev uznání za zásluhy, nebo zda má v demokratické republice platit pro všechny občany rovná soutěž o státní pozice.',
        context: 'Legionáři byli vnímáni jako klíčoví zakladatelé a obránci republiky. Diskutovalo se o tom, zda by jim měl stát zajistit zvláštní výhody jako projev uznání za zásluhy, nebo zda má v demokratické republice platit pro všechny občany rovná soutěž o státní pozice.',
        partyStances: { cssd: 1, rszml: 1, csl: 0, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: -1 }
      },
      {
        id: 15,
        title: 'Jednokomorový parlament versus Senát',
        category: 'Parlament a Senát',
        statement: 'Parlament by měl mít pouze jednu komoru namísto zřízení druhé komory v podobě Senátu.',
        historicalNote: 'Při tvorbě nové ústavy stála otázka struktury parlamentu. Zvažovalo se, zda má mít zákonodárný sbor pouze jednu přímo volenou komoru vyjadřující bezprostřední vůli lidu, anebo zda zřídit druhou komoru (Senát) jako uvážlivou pojistku pro důkladnější posuzování zákonů.',
        context: 'Při tvorbě nové ústavy stála otázka struktury parlamentu. Zvažovalo se, zda má mít zákonodárný sbor pouze jednu přímo volenou komoru vyjadřující bezprostřední vůli lidu, anebo zda zřídit druhou komoru (Senát) jako uvážlivou pojistku pro důkladnější posuzování zákonů.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      }
    ],
    expandedQuestions: [
      {
        id: 1,
        title: 'Pozemková reforma a velkostatky',
        category: 'Hospodářství a půda',
        statement: 'Rozsáhlé velkostatky šlechty a církve by měly být státem vyvlastněny a rozděleny mezi bezzemky a drobné rolníky.',
        historicalNote: 'Po vzniku Československa vlastnila šlechta a církev většinu zemědělské a lesní půdy. Řešilo se, zda má nová republika provést zábor velkostatků a půdu přerozdělit drobným hospodářům k nápravě historických poměrů, anebo chránit nedotknutelnost soukromého vlastnictví a zachovat efektivitu velkých zemědělských celků.',
        context: 'Po vzniku Československa vlastnila šlechta a církev většinu zemědělské a lesní půdy. Řešilo se, zda má nová republika provést zábor velkostatků a půdu přerozdělit drobným hospodářům k nápravě historických poměrů, anebo chránit nedotknutelnost soukromého vlastnictví a zachovat efektivitu velkých zemědělských celků.',
        partyStances: { cssd: 1, rszml: 1, csl: 0, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 2,
        title: 'Socializace klíčového průmyslu',
        category: 'Socializace a průmysl',
        statement: 'Klíčové uhelné doly, energetika a velké velkokapitálové podniky by měly být převedeny do veřejného vlastnictví pod správu pracujících.',
        historicalNote: 'V poválečné vlně roku 1920 rezonovalo volání po tzv. socializaci strategického průmyslu. Spor se vedl o to, zda má stát převzít uhelné doly a energetiku do veřejného vlastnictví ve prospěch zaměstnanců, či zda ponechat strategická odvětví v soukromých rukou kvůli investicím a efektivnímu hospodaření.',
        context: 'V poválečné vlně roku 1920 rezonovalo volání po tzv. socializaci strategického průmyslu. Spor se vedl o to, zda má stát převzít uhelné doly a energetiku do veřejného vlastnictví ve prospěch zaměstnanců, či zda ponechat strategická odvětví v soukromých rukou kvůli investicím a efektivnímu hospodaření.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 3,
        title: 'Osmihodinová pracovní doba',
        category: 'Sociální práva',
        statement: 'Zákonná pracovní doba by měla činit nanejvýš 8 hodin denně a stát by měl dbát na její dodržování u všech zaměstnavatelů.',
        historicalNote: 'Zákon o osmihodinové pracovní době z prosince 1918 patřil k významným sociálním reformám mladé republiky. Diskuse se točila kolem důslednosti jeho uplatňování a případného udělování výjimek – zejména v zemědělství během sezónních žní a v nepřetržitých provozech, kde hrozilo narušení výroby.',
        context: 'Zákon o osmihodinové pracovní době z prosince 1918 patřil k významným sociálním reformám mladé republiky. Diskuse se točila kolem důslednosti jeho uplatňování a případného udělování výjimek – zejména v zemědělství během sezónních žní a v nepřetržitých provozech, kde hrozilo narušení výroby.',
        partyStances: { cssd: 1, rszml: -1, csl: 0, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 4,
        title: 'Odluka církve od státu',
        category: 'Církev a stát',
        statement: 'Stát by měl být oddělen od římskokatolické církve a historická církevní privilegia by měla být odstraněna.',
        historicalNote: 'Po pádu monarchie sílily požadavky na sekularizaci veřejného života a heslo „Pryč od Říma“. Řešila se otázka, zda má nová republika oddělit veřejný život od vlivu církve a omezit její historická privilegia, anebo zachovat respekt k tradičním náboženským institucím a jejich majetku.',
        context: 'Po pádu monarchie sílily požadavky na sekularizaci veřejného života a heslo „Pryč od Říma“. Řešila se otázka, zda má nová republika oddělit veřejný život od vlivu církve a omezit její historická privilegia, anebo zachovat respekt k tradičním náboženským institucím a jejich majetku.',
        partyStances: { cssd: 1, rszml: 0, csl: -1, csns: 1, csnd: 0, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 5,
        title: 'Náboženská výchova ve školách',
        category: 'Školství a víra',
        statement: 'Náboženská výchova a křesťanské hodnoty by měly zůstat součástí vzdělávání mládeže na školách.',
        historicalNote: 'Ve školství probíhal spor o charakter výuky. Diskutovalo se o tom, zda má škola vychovávat žáky v tradičních křesťanských morálních zásadách s náboženskou výchovou, nebo zda má být výuka čistě laická a založená na vědeckém poznání bez vlivu církví.',
        context: 'Ve školství probíhal spor o charakter výuky. Diskutovalo se o tom, zda má škola vychovávat žáky v tradičních křesťanských morálních zásadách s náboženskou výchovou, nebo zda má být výuka čistě laická a založená na vědeckém poznání bez vlivu církví.',
        partyStances: { cssd: -1, rszml: 0, csl: 1, csns: -1, csnd: 0, dsap: -1, bdl: 1, sls: 1 }
      },
      {
        id: 6,
        title: 'Slovenská autonomie',
        category: 'Státoprávní uspořádání',
        statement: 'Slovensku by měla být udělena zákonodárná a správní autonomie s vlastním sněmem podle zásad Pittsburské dohody.',
        historicalNote: 'Zahraniční odboj podepsal v roce 1918 Pittsburskou dohodu předpokládající slovenskou samosprávu. V době vzniku ústavy 1920 se řešilo, zda Slovensku poskytnout vlastní zákonodárný sněm a správu, nebo zda je pro udržení stability a celistvosti mladého státu vhodnější centralizovaná správa v Praze.',
        context: 'Zahraniční odboj podepsal v roce 1918 Pittsburskou dohodu předpokládající slovenskou samosprávu. V době vzniku ústavy 1920 se řešilo, zda Slovensku poskytnout vlastní zákonodárný sněm a správu, nebo zda je pro udržení stability a celistvosti mladého státu vhodnější centralizovaná správa v Praze.',
        partyStances: { cssd: -1, rszml: -1, csl: 0, csns: -1, csnd: -1, dsap: 0, bdl: 0, sls: 1 }
      },
      {
        id: 7,
        title: 'Idea čechoslovakismu',
        category: 'Národní identita',
        statement: 'Češi a Slováci by měli být vnímáni jako jeden společný státotvorný národ československý s jedním státním jazykem.',
        historicalNote: 'Ústava z února 1920 definovala jednotný „národ československý“. Šlo o státotvorný koncept, který měl zajistit Slovanům většinu vůči početným národnostním menšinám, narážel však na otázku svébytnosti a rovnoprávnosti samostatného slovenského národa.',
        context: 'Ústava z února 1920 definovala jednotný „národ československý“. Šlo o státotvorný koncept, který měl zajistit Slovanům většinu vůči početným národnostním menšinám, narážel však na otázku svébytnosti a rovnoprávnosti samostatného slovenského národa.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: -1 }
      },
      {
        id: 8,
        title: 'Samospráva menšin a německý jazyk',
        category: 'Národnostní menšiny',
        statement: 'Německá a maďarská menšina by měla mít v oblastech s převahou svého obyvatelstva samosprávu a jejich jazyk by měl mít rovnocenné postavení.',
        historicalNote: 'V novém státě žily početné menšiny Němců a Maďarů. Vedla se debata, nakolik nová republika umožní pohraničním regionům s převahou německého obyvatelstva samosprávu a uznání jejich jazyka, a nakolik má prosazovat jednotnou suverenitu československého státu.',
        context: 'V novém státě žily početné menšiny Němců a Maďarů. Vedla se debata, nakolik nová republika umožní pohraničním regionům s převahou německého obyvatelstva samosprávu a uznání jejich jazyka, a nakolik má prosazovat jednotnou suverenitu československého státu.',
        partyStances: { cssd: 0, rszml: -1, csl: -1, csns: -1, csnd: -1, dsap: 1, bdl: 1, sls: 0 }
      },
      {
        id: 9,
        title: 'Měnová politika a deflace',
        category: 'Měnová politika',
        statement: 'Stát by měl uplatňovat přísnou rozpočtovou disciplínu k udržení stabilní měny, i kdyby to dočasně omezilo hospodářský růst.',
        historicalNote: 'Poválečná střední Evropa čelila hospodářským otřesům a znehodnocení měny. Československo volilo mezi přísnou měnovou politikou s pevnou korunou (která chránila úspory a stabilitu, ale ztěžovala export) a expanzivnější politikou podporující okamžitou zaměstnanost a výrobu.',
        context: 'Poválečná střední Evropa čelila hospodářským otřesům a znehodnocení měny. Československo volilo mezi přísnou měnovou politikou s pevnou korunou (která chránila úspory a stabilitu, ale ztěžovala export) a expanzivnější politikou podporující okamžitou zaměstnanost a výrobu.',
        partyStances: { cssd: -1, rszml: 0, csl: 0, csns: -1, csnd: 1, dsap: -1, bdl: 0, sls: 0 }
      },
      {
        id: 10,
        title: 'Nostrifikace podniků',
        category: 'Hospodářský nacionalismus',
        statement: 'Podniky působící na našem území by měly mít své sídlo i vedení v Československu namísto zahraničí.',
        historicalNote: 'Mnohé klíčové akciové společnosti a banky v novém státě byly administrativně navázány na Vídeň či Budapešť. Zvažovalo se, zda právně vyžadovat přesun sídel a vedení do ČSR (tzv. nostrifikace) k posílení hospodářské nezávislosti, či ponechat volnější mezinárodní kapitálové toky.',
        context: 'Mnohé klíčové akciové společnosti a banky v novém státě byly administrativně navázány na Vídeň či Budapešť. Zvažovalo se, zda právně vyžadovat přesun sídel a vedení do ČSR (tzv. nostrifikace) k posílení hospodářské nezávislosti, či ponechat volnější mezinárodní kapitálové toky.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: 1 }
      },
      {
        id: 11,
        title: 'Zemědělská cla a ochrana trhu',
        category: 'Zemědělství a cla',
        statement: 'Domácí zemědělci by měli být chráněni před levnější zahraniční konkurencí pomocí cel na dovoz obilí a potravin.',
        historicalNote: 'Poválečný trh řešil rozpor mezi zájmy venkova a měst. Ochranná cla pomáhala domácím hospodářům udržet rentabilní ceny produkce proti levnějšímu dovozu, avšak pro městské obyvatelstvo znamenala zvýšení cen základních potravin.',
        context: 'Poválečný trh řešil rozpor mezi zájmy venkova a měst. Ochranná cla pomáhala domácím hospodářům udržet rentabilní ceny produkce proti levnějšímu dovozu, avšak pro městské obyvatelstvo znamenala zvýšení cen základních potravin.',
        partyStances: { cssd: -1, rszml: 1, csl: 1, csns: -1, csnd: 1, dsap: -1, bdl: 1, sls: 1 }
      },
      {
        id: 12,
        title: 'Spojenectví s Francií',
        category: 'Zahraniční politika',
        statement: 'Bezpečnost Československa by měla být primárně postavena na spojenecké smlouvě s Francií.',
        historicalNote: 'Československo hledalo záruky své nezávislosti v novém poválečném uspořádání. Řešilo se, zda zahraniční orientaci primárně opřít o vojenské spojenectví s Francií a versailleský mírový systém, či spíše hledat širší mezinárodní spolupráci v rámci Společnosti národů.',
        context: 'Československo hledalo záruky své nezávislosti v novém poválečném uspořádání. Řešilo se, zda zahraniční orientaci primárně opřít o vojenské spojenectví s Francií a versailleský mírový systém, či spíše hledat širší mezinárodní spolupráci v rámci Společnosti národů.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: 0 }
      },
      {
        id: 13,
        title: 'Diplomatické vztahy se Sovětským Ruskem',
        category: 'Vztah k Sovětskému Rusku',
        statement: 'Československo by mělo diplomaticky uznat sovětské Rusko a navázat s ním oficiální vztahy.',
        historicalNote: 'V roce 1920 se řešil postoj evropských zemí k uspořádání v Rusku po revoluci. Vedl se spor o to, zda novou vládu v Moskvě diplomaticky uznat a otevřít hospodářské styky, nebo zachovat zdrženlivost z obavy o mezinárodní stabilitu.',
        context: 'V roce 1920 se řešil postoj evropských zemí k uspořádání v Rusku po revoluci. Vedl se spor o to, zda novou vládu v Moskvě diplomaticky uznat a otevřít hospodářské styky, nebo zachovat zdrženlivost z obavy o mezinárodní stabilitu.',
        partyStances: { cssd: 0, rszml: -1, csl: -1, csns: -1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 14,
        title: 'Výsady pro československé legionáře',
        category: 'Zásluhy o stát',
        statement: 'Českoslovenští legionáři by měli mít přednostní právo na uplatnění ve státní správě a na další sociální výhody.',
        historicalNote: 'Legionáři byli vnímáni jako klíčoví zakladatelé a obránci republiky. Diskutovalo se o tom, zda by jim měl stát zajistit zvláštní výhody jako projev uznání za zásluhy, nebo zda má v demokratické republice platit pro všechny občany rovná soutěž o státní pozice.',
        context: 'Legionáři byli vnímáni jako klíčoví zakladatelé a obránci republiky. Diskutovalo se o tom, zda by jim měl stát zajistit zvláštní výhody jako projev uznání za zásluhy, nebo zda má v demokratické republice platit pro všechny občany rovná soutěž o státní pozice.',
        partyStances: { cssd: 1, rszml: 1, csl: 0, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: -1 }
      },
      {
        id: 15,
        title: 'Jednokomorový parlament versus Senát',
        category: 'Parlament a Senát',
        statement: 'Parlament by měl mít pouze jednu komoru namísto zřízení druhé komory v podobě Senátu.',
        historicalNote: 'Při tvorbě nové ústavy stála otázka struktury parlamentu. Zvažovalo se, zda má mít zákonodárný sbor pouze jednu přímo volenou komoru vyjadřující bezprostřední vůli lidu, anebo zda zřídit druhou komoru (Senát) jako uvážlivou pojistku pro důkladnější posuzování zákonů.',
        context: 'Při tvorbě nové ústavy stála otázka struktury parlamentu. Zvažovalo se, zda má mít zákonodárný sbor pouze jednu přímo volenou komoru vyjadřující bezprostřední vůli lidu, anebo zda zřídit druhou komoru (Senát) jako uvážlivou pojistku pro důkladnější posuzování zákonů.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 16,
        title: 'Dávka z majetku (Mimořádné zdanění bohatství)',
        category: 'Daně a finance',
        statement: 'Stát by měl zavést jednorázovou progresivní daň z většího majetku a válečných zisků, aby stáhl přebytečné peníze z oběhu a vyrovnal dluhy.',
        historicalNote: 'Po vzniku Československa panovala hrozba inflace kvůli množství znehodnocených peněz z dob války. Dávka z majetku a z přírůstku na majetku měla stabilizovat měnu a stáhnout přebytečné oběživo. Zvažovalo se, zda je takový zásah do majetku nezbytný pro stabilitu měny a snížení státního dluhu, nebo zda nepřiměřeně zatíží sedláky, podnikatele a majitele nemovitostí.',
        context: 'Po vzniku Československa panovala hrozba inflace kvůli množství znehodnocených peněz z dob války. Dávka z majetku a z přírůstku na majetku měla stabilizovat měnu a stáhnout přebytečné oběživo. Zvažovalo se, zda je takový zásah do majetku nezbytný pro stabilitu měny a snížení státního dluhu, nebo zda nepřiměřeně zatíží sedláky, podnikatele a majitele nemovitostí.',
        partyStances: { cssd: 1, rszml: -1, csl: 0, csns: 1, csnd: 1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 17,
        title: 'Zrušení celibátu učitelek',
        category: 'Práva žen a školství',
        statement: 'Učitelky by měly mít právo se vdát a založit rodinu, aniž by tím automaticky ztratily místo ve státní škole.',
        historicalNote: 'Za dob monarchie platil pro učitelky celibát, což v praxi znamenalo, že sňatkem automaticky přišly o své zaměstnání. V novém státě se vedla společenská debata, zda tuto omezující praxi zrušit a umožnit jim kombinovat pedagogickou dráhu s rodinným životem, nebo zda si výchova dětí žádá výlučnou oddanost povolání.',
        context: 'Za dob monarchie platil pro učitelky celibát, což v praxi znamenalo, že sňatkem automaticky přišly o své zaměstnání. V novém státě se vedla společenská debata, zda tuto omezující praxi zrušit a umožnit jim kombinovat pedagogickou dráhu s rodinným životem, nebo zda si výchova dětí žádá výlučnou oddanost povolání.',
        partyStances: { cssd: 1, rszml: 1, csl: -1, csns: 1, csnd: 1, dsap: 1, bdl: 0, sls: -1 }
      },
      {
        id: 18,
        title: 'Odstranění šlechtických titulů',
        category: 'Rovnost a občanská práva',
        statement: 'Stát by neměl tolerovat další užívání aristokratických titulů, protože v demokratické republice by si měli být všichni rovni bez ohledu na původ.',
        historicalNote: 'S koncem Rakouska-Uherska se formoval vztah nové demokratické republiky k domácí aristokracii. Diskutovalo se o tom, zda historické šlechtické tituly ponechat jako tradici a projev kontinuity, nebo jejich užívání zrušit a postavit mimo zákon ve jménu občanské rovnosti.',
        context: 'S koncem Rakouska-Uherska se formoval vztah nové demokratické republiky k domácí aristokracii. Diskutovalo se o tom, zda historické šlechtické tituly ponechat jako tradici a projev kontinuity, nebo jejich užívání zrušit a postavit mimo zákon ve jménu občanské rovnosti.',
        partyStances: { cssd: 1, rszml: 1, csl: 0, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 19,
        title: 'Státní podpora bytových družstev a ochrana nájemníků',
        category: 'Bydlení a sociální péče',
        statement: 'Stát by měl chránit nájemníky regulací nájmů a finančně podporovat výstavbu dostupných bytů.',
        historicalNote: 'Poválečná léta přinesla nedostatek ubytování, který dopadal především na chudší vrstvy ve městech. Zvažovalo se, zda má stát více zasáhnout do trhu s bydlením regulací cen nájemného a přímou podporou stavebních družstev, nebo zda situaci vyřeší soukromý trh a soutěž.',
        context: 'Poválečná léta přinesla nedostatek ubytování, který dopadal především na chudší vrstvy ve městech. Zvažovalo se, zda má stát více zasáhnout do trhu s bydlením regulací cen nájemného a přímou podporou stavebních družstev, nebo zda situaci vyřeší soukromý trh a soutěž.',
        partyStances: { cssd: 1, rszml: 0, csl: 1, csns: 1, csnd: -1, dsap: 1, bdl: 0, sls: 1 }
      },
      {
        id: 20,
        title: 'Prohibiční tendence (Omezování alkoholu)',
        category: 'Veřejné zdraví a společnost',
        statement: 'Stát by měl omezit výrobu a prodej alkoholických nápojů a regulovat provoz hostinců.',
        historicalNote: 'Po válce se diskutovalo o potírání alkoholismu po vzoru americké prohibice. Zvažovalo se, zda omezit výrobu i prodej alkoholických nápojů a regulovat hostince v zájmu veřejného zdraví, anebo zachovat volnost obchodu a respektovat společenské zvyklosti.',
        context: 'Po válce se diskutovalo o potírání alkoholismu po vzoru americké prohibice. Zvažovalo se, zda omezit výrobu i prodej alkoholických nápojů a regulovat hostince v zájmu veřejného zdraví, anebo zachovat volnost obchodu a respektovat společenské zvyklosti.',
        partyStances: { cssd: 1, rszml: -1, csl: 0, csns: 1, csnd: 0, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 21,
        title: 'Nahrazení stálé armády milicemi',
        category: 'Obrana a bezpečnost',
        statement: 'Československo by se mělo vyhnout budování stálé armády a nahradit ji systémem dobrovolnických či lidových milicí.',
        historicalNote: 'Zkušenosti z první světové války vyvolaly ve společnosti antimilitaristické nálady. Diskutovalo se o tom, zda je k obraně mladého státu nezbytné vybudovat stálou profesionální armádu, anebo zda by postačoval systém dobrovolnických lidových milicí.',
        context: 'Zkušenosti z první světové války vyvolaly ve společnosti antimilitaristické nálady. Diskutovalo se o tom, zda je k obraně mladého státu nezbytné vybudovat stálou profesionální armádu, anebo zda by postačoval systém dobrovolnických lidových milicí.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: -1, csnd: -1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 22,
        title: 'Nemocenské a úrazové pojištění rolníků',
        category: 'Sociální zabezpečení',
        statement: 'Státní sociální pojištění by se mělo rozšířit i na samostatně hospodařící rolníky, nikoliv chránit pouze dělníky v továrnách.',
        historicalNote: 'Vznikající státní systém sociálního a nemocenského zabezpečení původně pokrýval primárně průmyslové dělnictvo z velkých měst. Zákonodárci řešili, zda je spravedlivé a rozpočtově únosné tento záchytný systém rozšířit na venkov.',
        context: 'Vznikající státní systém sociálního a nemocenského zabezpečení původně pokrýval primárně průmyslové dělnictvo z velkých měst. Zákonodárci řešili, zda je spravedlivé a rozpočtově únosné tento záchytný systém rozšířit na venkov.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: -1, dsap: 1, bdl: 1, sls: 1 }
      },
      {
        id: 23,
        title: 'Volební právo vojáků',
        category: 'Volební právo',
        statement: 'Vojáci v činné službě by neměli mít volební právo, aby se předešlo politizaci ozbrojených složek.',
        historicalNote: 'Při tvorbě ústavy se řešilo, zda připustit vojáky k volebním urnám. Názory stály mezi obavou, že volební agitace v kasárnách armádu vnitřně naruší, a demokratickým principem, podle něhož by uniforma neměla nikoho připravit o základní občanská práva.',
        context: 'Při tvorbě ústavy se řešilo, zda připustit vojáky k volebním urnám. Názory stály mezi obavou, že volební agitace v kasárnách armádu vnitřně naruší, a demokratickým principem, podle něhož by uniforma neměla nikoho připravit o základní občanská práva.',
        partyStances: { cssd: -1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: 1, sls: 1 }
      },
      {
        id: 24,
        title: 'Zrovnoprávnění nemanželských dětí',
        category: 'Rovnost a rodinné právo',
        statement: 'Zákon by měl zajistit, aby nemanželské děti měly v dědickém právu stejné postavení jako děti narozené v manželském svazku.',
        historicalNote: 'Dědičné a občanské právo pocházející z doby monarchie děti svobodných matek znevýhodňovalo. Společnost se přela, zda zachovat specifické postavení dětí z manželských svazků coby ochrany tradiční rodiny, nebo vyžadovat právní rovnost dětí bez ohledu na způsob jejich zrození.',
        context: 'Dědičné a občanské právo pocházející z doby monarchie děti svobodných matek znevýhodňovalo. Společnost se přela, zda zachovat specifické postavení dětí z manželských svazků coby ochrany tradiční rodiny, nebo vyžadovat právní rovnost dětí bez ohledu na způsob jejich zrození.',
        partyStances: { cssd: 1, rszml: 0, csl: -1, csns: 1, csnd: 0, dsap: 1, bdl: 0, sls: -1 }
      },
      {
        id: 25,
        title: 'Zastoupení menšin ve státní správě',
        category: 'Státní správa a menšiny',
        statement: 'Místa úředníků, policistů a soudců v pohraničí by se měla obsazovat loajálními občany Československa i za cenu toho, že budou uvolněni dosavadní zaměstnanci německé národnosti.',
        historicalNote: 'V oblastech státu obývaných převážně německou menšinou nadále sloužila většina původních německy mluvících úředníků. Stát zvažoval, do jaké míry by se tyto strategické posty měly obměnit za nové státotvorné občany, aby republika potvrdila svou moc a zajistila loajalitu státního aparátu.',
        context: 'V oblastech státu obývaných převážně německou menšinou nadále sloužila většina původních německy mluvících úředníků. Stát zvažoval, do jaké míry by se tyto strategické posty měly obměnit za nové státotvorné občany, aby republika potvrdila svou moc a zajistila loajalitu státního aparátu.',
        partyStances: { cssd: 0, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: 0 }
      },
      {
        id: 26,
        title: 'Financování církví státem (Kongrua)',
        category: 'Církev a finance',
        statement: 'Stát by měl přestat hradit platy duchovních z veřejných peněz; toto finanční zabezpečení by mělo přejít na samotné církve.',
        historicalNote: 'V době vzniku republiky existoval systém, kdy stát církvím z rozpočtu doplácel na platy duchovních. Řešilo se, zda by stát měl z pozice svobody vyznání tento náklad zrušit a nechat farnosti, ať se financují samy, nebo zda zachovat dosavadní garanci z obavy o životní úroveň kněžích.',
        context: 'V době vzniku republiky existoval systém, kdy stát církvím z rozpočtu doplácel na platy duchovních. Řešilo se, zda by stát měl z pozice svobody vyznání tento náklad zrušit a nechat farnosti, ať se financují samy, nebo zda zachovat dosavadní garanci z obavy o životní úroveň kněžích.',
        partyStances: { cssd: 1, rszml: 0, csl: -1, csns: 1, csnd: 0, dsap: 1, bdl: 0, sls: -1 }
      },
      {
        id: 27,
        title: 'Trest smrti',
        category: 'Spravedlnost a trestní právo',
        statement: 'Trest smrti by se v novém demokratickém trestním zákoníku měl zrušit jako nehumánní přežitek a nahradit doživotním trestem.',
        historicalNote: 'Během tvorby nového československého trestního práva se objevilo dilema, zda si má budovaná demokracie ponechat právo popravovat zločince z důvodu odstrašení a udržení pořádku, nebo tento trest zrušit v duchu budovaného humanismu.',
        context: 'Během tvorby nového československého trestního práva se objevilo dilema, zda si má budovaná demokracie ponechat právo popravovat zločince z důvodu odstrašení a udržení pořádku, nebo tento trest zrušit v duchu budovaného humanismu.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 28,
        title: 'Znárodnění železnic',
        category: 'Doprava a infrastruktura',
        statement: 'Zbytky soukromých železničních drah a související infrastruktury by se měly postupně přesunout do vlastnictví státu.',
        historicalNote: 'Vedle hlavních tahů v zemi nadále fungovala řada komerčních a zemských železnic. Diskutovalo se o tom, zda by nová republika měla z bezpečnostních a strategických důvodů více převzít železniční síť do vlastních rukou, nebo ponechat prostor volnému trhu a komerčním majitelům.',
        context: 'Vedle hlavních tahů v zemi nadále fungovala řada komerčních a zemských železnic. Diskutovalo se o tom, zda by nová republika měla z bezpečnostních a strategických důvodů více převzít železniční síť do vlastních rukou, nebo ponechat prostor volnému trhu a komerčním majitelům.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: 0, sls: 1 }
      },
      {
        id: 29,
        title: 'Autonomie a majetek německých univerzit',
        category: 'Školství a menšiny',
        statement: 'Německé univerzitě v Praze by mělo zůstat její dosavadní postavení i historický majetek a stát by jej neměl převádět ve prospěch české univerzity.',
        historicalNote: 'Během prvních let ČSR se řešilo, komu náleží univerzitní budovy (např. Karolinum), které v té době z velké části vlastnila nebo spravovala německá část pražské univerzity. Zákonodárci zvažovali, zda majetek částečně převést českým institucím, nebo respektovat samosprávu a postavení starých akademických celků.',
        context: 'Během prvních let ČSR se řešilo, komu náleží univerzitní budovy (např. Karolinum), které v té době z velké části vlastnila nebo spravovala německá část pražské univerzity. Zákonodárci zvažovali, zda majetek částečně převést českým institucím, nebo respektovat samosprávu a postavení starých akademických celků.',
        partyStances: { cssd: 0, rszml: -1, csl: 0, csns: -1, csnd: -1, dsap: 1, bdl: 1, sls: 1 }
      },
      {
        id: 30,
        title: 'Omezení stávkového práva státních zaměstnanců',
        category: 'Práce a veřejná správa',
        statement: 'Zaměstnanci v klíčové státní infrastruktuře, jako jsou železnice a pošty, by neměli mít povoleno stávkovat, aby neohrozili chod republiky.',
        historicalNote: 'Některé stávky zaměstnanců na počátku existence Československa, motivované požadavky na zlepšení platových a sociálních podmínek v době poválečné drahoty, způsobovaly komplikace v zásobování a dopravě. Státní představitelé stáli před rozhodnutím, zda je zajištění spolehlivého chodu státu nadřazeno, nebo zda lze omezit dělnické právo stávkovat.',
        context: 'Některé stávky zaměstnanců na počátku existence Československa, motivované požadavky na zlepšení platových a sociálních podmínek v době poválečné drahoty, způsobovaly komplikace v zásobování a dopravě. Státní představitelé stáli před rozhodnutím, zda je zajištění spolehlivého chodu státu nadřazeno, nebo zda lze omezit dělnické právo stávkovat.',
        partyStances: { cssd: -1, rszml: 1, csl: 1, csns: -1, csnd: 1, dsap: -1, bdl: 1, sls: 0 }
      },
      {
        id: 31,
        title: 'Rovnoprávnost civilních sňatků',
        category: 'Rodinné a občanské právo',
        statement: 'Civilní sňatek na úřadě by měl mít stejnou právní platnost jako sňatek uzavřený v kostele.',
        historicalNote: 'Za monarchie byl občanský sňatek určen pro osoby bez vyznání. Manželská novela z roku 1919 zavedla fakultativní civilní sňatek, kdy si snoubenci mohli zvolit mezi sňatkem na úřadě a v kostele.',
        context: 'Za monarchie byl občanský sňatek určen pro osoby bez vyznání. Manželská novela z roku 1919 zavedla fakultativní civilní sňatek, kdy si snoubenci mohli zvolit mezi sňatkem na úřadě a v kostele.',
        partyStances: { cssd: 1, rszml: 1, csl: -1, csns: 1, csnd: 1, dsap: 1, bdl: 0, sls: -1 }
      },
      {
        id: 32,
        title: 'Výjimky ze zákonné pracovní doby pro rolníky',
        category: 'Zemědělství a práce',
        statement: 'Ochrana pracovníků v podobě osmihodinové pracovní doby by v zemědělství neměla platit plošně; mělo by se umožnit nařizování přesčasů během probíhajících žní.',
        historicalNote: 'Jako jedno ze svých prvních rozhodnutí zavedlo Československo osmihodinovou pracovní dobu. Okamžitě se však řešilo, zda pravidlo vytvořené pro moderní továrny lze stejně uplatňovat na statcích, kde je nutné přizpůsobovat pracovní tempo sezóně a záchraně plodin.',
        context: 'Jako jedno ze svých prvních rozhodnutí zavedlo Československo osmihodinovou pracovní dobu. Okamžitě se však řešilo, zda pravidlo vytvořené pro moderní továrny lze stejně uplatňovat na statcích, kde je nutné přizpůsobovat pracovní tempo sezóně a záchraně plodin.',
        partyStances: { cssd: -1, rszml: 1, csl: 1, csns: -1, csnd: 1, dsap: -1, bdl: 1, sls: 1 }
      },
      {
        id: 33,
        title: 'Odškodnění za rakouské válečné půjčky',
        category: 'Finance a válečné dluhy',
        statement: 'Stát by měl občanům proplatit staré rakouské válečné dluhopisy, do kterých vložili své úspory.',
        historicalNote: 'Rakousko-Uhersko financovalo válku půjčkami od vlastního obyvatelstva formou dluhopisů. Nově vzniklé Československo stálo před rozhodnutím, zda tyto závazky za neexistující stát vůči občanům převezme a zatíží státní rozpočet, nebo zda je nechá propadnout.',
        context: 'Rakousko-Uhersko financovalo válku půjčkami od vlastního obyvatelstva formou dluhopisů. Nově vzniklé Československo stálo před rozhodnutím, zda tyto závazky za neexistující stát vůči občanům převezme a zatíží státní rozpočet, nebo zda je nechá propadnout.',
        partyStances: { cssd: -1, rszml: 0, csl: 1, csns: -1, csnd: -1, dsap: 1, bdl: 1, sls: 1 }
      },
      {
        id: 34,
        title: 'Financování menšinového školství',
        category: 'Školství a menšiny',
        statement: 'Stát by měl z rozpočtu cíleně financovat výstavbu českých škol v příhraničních oblastech, a to i v obcích, kde žije menší množství českých dětí.',
        historicalNote: 'V převážně německy mluvících sudetských oblastech chyběly budovy a kapacity pro české vzdělávání. Na vládní úrovni se rozhodovalo, zda tam cíleně investovat do nových českých škol jako formy demonstrace vlivu na hranicích, nebo zda to odmítnout jako nehospodárné.',
        context: 'V převážně německy mluvících sudetských oblastech chyběly budovy a kapacity pro české vzdělávání. Na vládní úrovni se rozhodovalo, zda tam cíleně investovat do nových českých škol jako formy demonstrace vlivu na hranicích, nebo zda to odmítnout jako nehospodárné.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: 0 }
      },
      {
        id: 35,
        title: 'Zrušení svátků katolických svatých',
        category: 'Svátky a tradice',
        statement: 'Státem uznané dny volna na katolické svátky by měly být zrušeny a v kalendáři by je měly nahradit svátky vzniku republiky či výročí spojená s reformační tradicí.',
        historicalNote: 'Tvorba nového kalendáře oficiálních svátků vyvolala debatu ohledně duchovního směřování státu. Zatímco část společnosti vnímala státní svátky jako nutný odklon od rakouské katolické tradice, jiní hájili zvyklosti a kulturní kořeny, na které byl běžný lid zvyklý.',
        context: 'Tvorba nového kalendáře oficiálních svátků vyvolala debatu ohledně duchovního směřování státu. Zatímco část společnosti vnímala státní svátky jako nutný odklon od rakouské katolické tradice, jiní hájili zvyklosti a kulturní kořeny, na které byl běžný lid zvyklý.',
        partyStances: { cssd: 1, rszml: 0, csl: -1, csns: 1, csnd: 0, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 36,
        title: 'Zdanění piva a cukru',
        category: 'Daně a spotřeba',
        statement: 'Vláda by měla navýšit příjmy státního rozpočtu zdaněním piva a cukru, i kdyby to vedlo ke zdražení těchto produktů pro běžné občany.',
        historicalNote: 'Ve snaze pokrýt vyšší státní výdaje hledala nová republika nové zdroje příjmů. Objevily se návrhy na navýšení spotřebních daní na hojně užívané produkty. Rozhodovalo se, zda je vyrovnaný rozpočet důležitější než ochrana dostupných cen pro nejchudší obyvatele.',
        context: 'Ve snaze pokrýt vyšší státní výdaje hledala nová republika nové zdroje příjmů. Objevily se návrhy na navýšení spotřebních daní na hojně užívané produkty. Rozhodovalo se, zda je vyrovnaný rozpočet důležitější než ochrana dostupných cen pro nejchudší obyvatele.',
        partyStances: { cssd: -1, rszml: -1, csl: 0, csns: -1, csnd: 1, dsap: -1, bdl: -1, sls: 0 }
      },
      {
        id: 37,
        title: 'Domovské právo pro uprchlíky z Haliče',
        category: 'Občanství a uprchlíci',
        statement: 'Stát by měl umožnit snadné udělení občanství (domovského práva) židovským uprchlíkům z Haliče, kteří zde nalezli útočiště na počátku války.',
        historicalNote: 'V důsledku pohybu vojsk prchlo z frontové Haliče do českých zemí větší množství chudých obyvatel, kteří zde přečkali válečné roky. Nový stát po válce balancoval mezi humanistickým závazkem poskytnout těmto válkou zasaženým uprchlíkům integraci do společnosti a domácími tlaky, které požadovaly jejich vyhoštění k uvolnění kapacity bydlení.',
        context: 'V důsledku pohybu vojsk prchlo z frontové Haliče do českých zemí větší množství chudých obyvatel, kteří zde přečkali válečné roky. Nový stát po válce balancoval mezi humanistickým závazkem poskytnout těmto válkou zasaženým uprchlíkům integraci do společnosti a domácími tlaky, které požadovaly jejich vyhoštění k uvolnění kapacity bydlení.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: 0, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 38,
        title: 'Zákaz podávání alkoholu mladistvým',
        category: 'Veřejné zdraví a mládež',
        statement: 'Stát by měl zákonem zakázat podávání a prodej alkoholických nápojů dětem a mladistvým.',
        historicalNote: 'Do vzniku republiky neexistovalo zákonné věkové omezení pro prodej a konzumaci alkoholu. Řešilo se, zda by měl stát zákonem chránit dospívající a zakázat podávání alkoholu mladistvým, anebo zda má regulace zůstat v odpovědnosti rodin a hostinských.',
        context: 'Do vzniku republiky neexistovalo zákonné věkové omezení pro prodej a konzumaci alkoholu. Řešilo se, zda by měl stát zákonem chránit dospívající a zakázat podávání alkoholu mladistvým, anebo zda má regulace zůstat v odpovědnosti rodin a hostinských.',
        partyStances: { cssd: 1, rszml: 0, csl: 1, csns: 1, csnd: 1, dsap: 1, bdl: 0, sls: 1 }
      },
      {
        id: 39,
        title: 'Délka povinné vojenské služby (zkrácení na 14 měsíců)',
        category: 'Obrana a bezpečnost',
        statement: 'Délka povinné vojenské služby by měla být zkrácena z dosavadních dvou let (24 měsíců) na 14 měsíců.',
        historicalNote: 'Při přijímání branného zákona na jaře 1920 se o úplném zrušení branné povinnosti neuvažovalo, neboť nová republika potřebovala zajistit obranu svých dosud neklidných hranic. Zásadní spor se vedl o délku prezenční služby: na jedné straně stál požadavek na dvouletou službu (24 měsíců) pro zajištění důkladného výcviku a stálé bojeschopnosti, na druhé straně požadavek na zkrácení na 14 měsíců z důvodu úspor státního rozpočtu a snahy, aby odvedenci dlouhodobě nechyběli v zemědělství a hospodářství.',
        context: 'Při přijímání branného zákona na jaře 1920 se o úplném zrušení branné povinnosti neuvažovalo, neboť nová republika potřebovala zajistit obranu svých dosud neklidných hranic. Zásadní spor se vedl o délku prezenční služby: na jedné straně stál požadavek na dvouletou službu (24 měsíců) pro zajištění důkladného výcviku a stálé bojeschopnosti, na druhé straně požadavek na zkrácení na 14 měsíců z důvodu úspor státního rozpočtu a snahy, aby odvedenci dlouhodobě nechyběli v zemědělství a hospodářství.',
        partyStances: { cssd: 1, rszml: 0, csl: 0, csns: -1, csnd: -1, dsap: 1, bdl: 1, sls: 1 }
      },
      {
        id: 40,
        title: 'Uzákonění rozvodu manželství',
        category: 'Rodinné a občanské právo',
        statement: 'Stát by měl všem občanům umožnit úřední rozvod manželství s právem uzavřít nový sňatek.',
        historicalNote: 'Dosavadní rakouské právo katolikům neumožňovalo rozvod (tzv. rozluku), který by dovoloval uzavřít nové manželství. Nová úprava čelila sporu, zda upřednostnit světské právo na rozvod, nebo se držet náboženské zásady nerozlučitelnosti rodiny.',
        context: 'Dosavadní rakouské právo katolikům neumožňovalo rozvod (tzv. rozluku), který by dovoloval uzavřít nové manželství. Nová úprava čelila sporu, zda upřednostnit světské právo na rozvod, nebo se držet náboženské zásady nerozlučitelnosti rodiny.',
        partyStances: { cssd: 1, rszml: 0, csl: -1, csns: 1, csnd: 1, dsap: 1, bdl: 0, sls: -1 }
      }
    ],
    electionSystem: {
      body: 'Parlament se skládal ze dvou komor: Poslanecké sněmovny (300 mandátů) a Senátu (150 mandátů). V dubnu 1920 se však fakticky obsadilo jen 281 poslaneckých a 142 senátorských křesel. Kvůli tehdy neuzavřeným hranicím a sporům se totiž nevolilo na Těšínsku, Hlučínsku, Vitorazsku ani na Podkarpatské Rusi.',
      system: 'Poměrný systém ve 23 vícemandátových krajích (pro sněmovnu). Pro přepočet se v prvním skrutiniu používala Hareova kvóta, ve druhém a třetím Hagenbach-Bischoffova. Pro zisk mandátu v kraji neexistovala žádná umělá uzavírací klauzule, stačilo dosáhnout volebního čísla. Hlasovalo se pomocí přísně vázaných kandidátních listin bez možnosti kroužkování.',
      franchise: 'Všeobecné a rovné volební právo pro muže i ženy (poprvé v historii bez omezujícího majetkového censu). Věk pro volbu do Sněmovny byl stanoven na 21 let, pro Senát na 26 let. Podmínkou bylo státní občanství a bydliště v obci alespoň po dobu 3 měsíců.',
      eligibility: 'Do Poslanecké sněmovny mohl kandidovat občan od 30 let věku, do Senátu až od 45 let.',
      trivia: [
        'Volební povinnost: Účast u voleb byla ze zákona povinná. Kdo se bez vážného důvodu (nemoc, věk nad 70 let, vzdálenost přes 100 km) nedostavil k urnám, riskoval pokutu od 20 do 5 000 Kč nebo vězení až na 1 měsíc.',
        'Zákaz alkoholu: V den voleb i den předcházející platil v celé republice přísný zákaz nalévání a prodeje jakéhokoli alkoholu.',
        'První účast žen: Ženy tvořily více než 53 % všech zapsaných voličů. Do parlamentu bylo poprvé zvoleno celkem 16 žen (13 poslankyň a 3 senátorky).',
        'Národnostní rozmanitost: Německé a maďarské strany získaly přes 30 % všech poslaneckých mandátů, což věrně odráželo etnické složení nového státu.'
      ]
    }
  },
  1946: {
    year: 1946,
    title: 'Volby do Ústavodárného shromáždění 1946',
    subtitle: 'Poslední částečně svobodné volby před čtyřiceti lety komunistické totality',
    date: '26. května 1946',
    turnout: '94,0 %',
    stakes: 'Rozhodovalo se o geopolitickém a mocenském směřování země: zůstane Československo pluralitní demokracií a mostem na Západ, nebo se stane součástí sovětské sféry vlivu s omezenou suverenitou?',
    atmosphereQuote: '„Se Sovětským svazem na věčné časy a nikdy jinak!“ vs. „Za svobodu a křesťanskou kulturu!“',
    historicalContext: `Volby v květnu 1946 probíhaly v jedinečné a vypjaté atmosféře těsně po skončení druhé světové války. V zemi panovala vděčnost Sovětskému svazu za osvobození od nacistické okupace a zároveň rozhořčení ze zrady západních mocností v Mnichově 1938. 

Politická scéna byla zásadně omezena systémem tzv. Národní fronty: předválečné pravicové strany (především agrárníci a národní sjednocení) byly zakázány pod záminkou kolaborace. Probíhal masový odsun téměř 3 milionů Němců, konfiskace jejich majetku a osidlování pohraničí. Klíčový těžký průmysl, doly a banky byly již od října 1945 znárodněny Benešovými dekrety. Komunisté (KSČ) pod vedením Klementa Gottwalda vystupovali v roli vlastenců hájících drobné živnostníky a sedláky, zatímco demokratické strany (ČSNS, ČSL a slovenská Demokratická strana) se snažily bránit zbytek občanských svobod a parlamentní pluralitu.`,
    outcomeSummary: `KSČ v českých zemích drtivě zvítězila se ziskem 40,17 % hlasů (celostátně 31,05 %). Na Slovensku však došlo k politickému zemětřesení: nekomunistická Demokratická strana (DS) získala 62 % hlasů a porazila slovenské komunisty. 

Klement Gottwald se stal předsedou koaliční vlády Národní fronty. Komunisté obsadili klíčová ministerstva vnitra (SNB), informací, zemědělství a financí. Vítězství demokratů na Slovensku komunisté neutralizovali tzv. třetí pražskou dohodou, která omezila pravomoci slovenských orgánů. Výsledek voleb 1946 otevřel komunistům přímou cestu k ovládnutí bezpečnostního aparátu a k definitivnímu uchvácení moci během komunistického převratu v únoru 1948.`,
    parties: [
      {
        id: 'ksc',
        shortName: 'KSČ',
        fullName: 'Komunistická strana Československa',
        ideology: 'Marxismus-leninismus, lidová demokracie, sovětská orientace',
        leaders: ['Klement Gottwald', 'Rudolf Slánský', 'Václav Kopecký'],
        color: '#dc2626',
        historicalPercentage: 31.05,
        historicalSeats: 93,
        description: 'Jednoznačný vítěz voleb v českých zemích (přes 40 % hlasů), který těžil z obrovské prestiže SSSR jako osvoboditele a z traumatické paměti mnichovské zrady. Pod vedením Klementa Gottwalda a Rudolfa Slánského vystupovala strana v umírněném, vlasteneckém tónu a slibovala specifickou „československou cestu k socialismu“ bez kolchozů a násilné kolektivizace. Oslovila dělnictvo, bezzemky osidlující vysídlené pohraničí i část inteligence. Držela v rukou klíčová ministerstva vnitra (bezpečnostní složky) a informací, což jí umožnilo systematicky připravovat půdu pro převrat v únoru 1948.',
        programHighlight: 'Pevné spojenectví se SSSR, dvouletý plán obnovy, příděl půdy v pohraničí rolníkům a monopol Národní fronty.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_%C4%8Ceskoslovenska'
      },
      {
        id: 'csns',
        shortName: 'ČSNS',
        fullName: 'Československá strana národně socialistická',
        ideology: 'Národní socialismus, masarykovská demokracie, vlastenectví',
        leaders: ['Petr Zenkl', 'Prokop Drtina', 'Hubert Ripka'],
        color: '#f97316',
        historicalPercentage: 18.37,
        historicalSeats: 55,
        description: 'Hlavní česká nekomunistická a protitotalitní síla poválečného období, která navazovala na myšlenkový odkaz zakladatelů státu T. G. Masaryka a prezidenta Edvarda Beneše. Jejími čelnými představiteli byli Petr Zenkl, ministr spravedlnosti Prokop Drtina a ministr zahraničního obchodu Hubert Ripka. Opírala se o úředníky, učitele, živnostníky a svobodomyslnou městskou inteligenci. Důsledně bránila nezávislost soudnictví, svobodu tisku a parlamentní pluralitu. Hájila soukromé vlastnictví drobných a středních podniků a odmítala další vlny znárodňování po dekretech z roku 1945.',
        programHighlight: 'Zastavení dalšího znárodňování, právní stát, ochrana živností a rovnováha mezi Východem a Západem.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_n%C3%A1rodn%C4%9B_socialistick%C3%A1'
      },
      {
        id: 'csl',
        shortName: 'ČSL (Lidovci)',
        fullName: 'Československá strana lidová',
        ideology: 'Křesťanská demokracie, křesťanský socialismus',
        leaders: ['Jan Šrámek', 'František Hála', 'Adolf Procházka'],
        color: '#eab308',
        historicalPercentage: 15.64,
        historicalSeats: 46,
        description: 'Tradiční křesťanskodemokratická strana, která byla jedinou povolenou nelevicovou formací v českých zemích v rámci Národní fronty. V čele stál zkušený předválečný politik a premiér exilové vlády v Londýně msgre. Jan Šrámek a František Hála. Silnou oporu měla na moravském venkově, mezi katolickými rolníky, věřícími a řemeslníky. Byla jedním z hlavních útočišť bývalých voličů zakázané agrární strany. Vystupovala jako nekompromisní obránce náboženské svobody, církevních škol a rodinných hodnot a varovala před marxistickou totalitou a protikřesťanským materialismem.',
        programHighlight: 'Obrana křesťanských rodinných hodnot, ochrana soukromého vlastnictví a svobodné volby bez diktátu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/KDU-%C4%8CSL'
      },
      {
        id: 'ds',
        shortName: 'DS',
        fullName: 'Demokratická strana',
        ideology: 'Občanská demokracie, křesťanství, slovenská samospráva',
        leaders: ['Jozef Lettrich', 'Ján Ursíny', 'Matej Josko'],
        color: '#2563eb',
        historicalPercentage: 14.07,
        historicalSeats: 43,
        description: 'Slovenský fenomén a symbol odporu proti totalitě ve volbách 1946. Vznikla během Slovenského národního povstání a před volbami uzavřela přelomovou tzv. Aprílovou dohodu, která sjednotila slovenské evangelíky i většinové katolíky do jednoho mohutného občanského bloku pod vedením Jozefa Lettricha a Jána Ursínyho. Na Slovensku dosáhla senzačního triumfu se ziskem 62 % hlasů a drtivě porazila komunisty. Hájila principy západní parlamentní demokracie, tržní hospodářství a slovenskou samosprávu. Právě proto se stala hlavním terčem komunistických provokací, infiltrací StB a následné likvidace.',
        programHighlight: 'Slovenská národní samospráva, obnova tržních principů, svoboda vyznání a hráz proti bolševismu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Demokratick%C3%A1_strana_(Slovensko)'
      },
      {
        id: 'cssd',
        shortName: 'ČSSD',
        fullName: 'Československá sociální demokracie',
        ideology: 'Demokratický socialismus, odborové hnutí',
        leaders: ['Zdeněk Fierlinger', 'Bohumil Laušman', 'Václav Majer'],
        color: '#ea580c',
        historicalPercentage: 12.05,
        historicalSeats: 37,
        description: 'Historická dělnická strana, která se po návratu z exilu ocitla v hlubokém ideovém a personálním rozkolu. Levicové křídlo pod vedením Zdeňka Fierlingera nekriticky spolupracovalo s komunisty a prosazovalo těsný marxistický blok, zatímco demokratické křídlo vedené Václavem Majerem usilovalo o uchování nezávislého demokratického socialismu a spojenectví s národními socialisty a lidovci. Tento vnitřní rozpor stranu fatálně paralyzoval a vedl k volebnímu zklamání (pouhých 12 % hlasů). V únoru 1948 byla strana prokomunistickým křídlem násilně sloučena s KSČ.',
        programHighlight: 'Hospodářské plánování, sociální jistoty pracujících, zachování parlamentních procedur.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1'
      },
      {
        id: 'kss',
        shortName: 'KSS',
        fullName: 'Komunistická strana Slovenska',
        ideology: 'Marxismus-leninismus, státní socialismus, centralismus',
        leaders: ['Viliam Široký', 'Gustáv Husák', 'Karol Šmidke'],
        color: '#991b1b',
        historicalPercentage: 6.89,
        historicalSeats: 21,
        description: 'Nominálně samostatná, ve skutečnosti však plně podřízená slovenská odnož KSČ vedená Viliamem Širokým, Gustávem Husákem a Karolem Šmidkem. Těžila ze své účasti v Slovenském národním povstání, avšak v hluboce věřícím slovenském prostředí utrpěla od Demokratické strany drtivou volební porážku (získala jen 30 % hlasů na Slovensku). Poražení slovenští komunisté se odmítli smířit s výsledkem a ve spojení s Gottwaldovým pražským ústředím prosadili třetí pražskou dohodu, která radikálně okleštila pravomoci slovenských orgánů a podřídila Sbor pověřenců centrální vládě.',
        programHighlight: 'Socializace, centralizace moci v rukou komunistů a potlačení vlivu církve na Slovensku.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_Slovenska_(1939)'
      }
    ],
    questions: [
      {
        id: 1,
        category: 'Zahraniční orientace',
        statement: 'Zahraniční a bezpečnostní politika ČSR by měla stát na trvalém spojenectví se Sovětským svazem jako záruce proti případnému německému revanšismu.',
        historicalNote: 'Po zkušenostech s mnichovskou dohodou a osvobození Rudou armádou byla otázka bezpečnosti klíčová. Zvažovalo se, zda opřít obranu státu primárně o spojenectví se Sovětským svazem, anebo zda se vyvarovat jednostranné zahraničněpolitické závislosti.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 2,
        category: 'Most mezi světy',
        statement: 'Československo by mělo usilovat o pozici mostu mezi Východem a Západem a zachovat politické i obchodní vztahy s USA a Velkou Británií.',
        historicalNote: 'V poválečné mezinárodní situaci se řešilo budoucí postavení Československa. Diskutovalo se o možnosti působit jako politický i hospodářský most mezi západními demokraciemi a východním blokem, nebo zda je taková pozice v rozděleném světě dlouhodobě udržitelná.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 3,
        category: 'Odsun a právní stát',
        statement: 'Při odsunu a potrestání kolaborantů by měl stát důsledně dbát na právní stát a předcházet mimosoudnímu násilí.',
        historicalNote: 'Poválečný odsun německého obyvatelstva a trestání kolaborace provázely i excesy a mimosoudní násilí. Řešilo se, nakolik má stát přísně vymáhat dodržování právního řádu a řádných soudních postupů i za cenu zpomalení celého procesu.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 4,
        category: 'Hranice znárodnění',
        statement: 'Další vlna znárodňování by měla být zastavena; soukromé řemeslo, maloobchod a střední firmy by měly zůstat v soukromých rukou.',
        historicalNote: 'Po první vlně znárodnění z podzimu 1945 vyvstala otázka budoucího rozsahu soukromého sektoru. Diskutovalo se o tom, zda má být soukromé vlastnictví drobných dílen, živností a maloobchodu garantováno, nebo zda má socializace hospodářství pokračovat i v dalších oblastech.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 5,
        category: 'Další vlna socializace',
        statement: 'Stát by měl v další etapě převzít také velkoobchod, zahraniční obchod a průmyslové podniky s více než 50 zaměstnanci.',
        historicalNote: 'Po znárodnění klíčového průmyslu a bank se řešila hranice pro další převod podniků do státních rukou. Zvažovalo se, zda je pro efektivitu a plánování hospodářství nutné zestátnit i střední podniky a zahraniční obchod, anebo ponechat prostor soukromé iniciativě.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 0, kss: 1 }
      },
      {
        id: 6,
        category: 'Zákaz pravicových stran',
        statement: 'Zákaz předválečné agrární strany a dalších pravicových subjektů byl opodstatněným krokem na ochranu republiky před kolaborací.',
        historicalNote: 'Po osvobození byla činnost některých předválečných politických stran zakázána s poukazem na podíl jejich představitelů na událostech let 1938–1939. Část společnosti to vnímala jako nutnou očistu politického života, jiní v tom spatřovali nedemokratické omezení politické plurality.',
        partyStances: { ksc: 1, csns: 1, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 7,
        category: 'Kultura a svoboda tisku',
        statement: 'Kultura, tisk a rozhlas by měly být vyňaty z vlivu soukromého kapitálu a spravovány státem či veřejnými institucemi.',
        historicalNote: 'Po roce 1945 se proměnil mediální prostor – soukromé vydávání novin bylo zakázáno a tisk směly vydávat jen schválené organizace. Řešilo se, nakolik má mít stát kontrolu nad šířením informací a kulturou, a nakolik má být zachována nezávislost a názorová pluralita.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 8,
        category: 'Plánované hospodářství',
        statement: 'Hospodářství by mělo být usměrňováno státním plánem (Dvouletkou) a volný trh by měl ustoupit potřebám celku.',
        historicalNote: 'Poválečná obnova hospodářství otevřela otázku způsobu řízení ekonomiky. Zvažovalo se, nakolik má hospodářský život určovat centrální státní plánování, a jaký prostor má zůstat tržním mechanismům a svobodnému podnikání.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 9,
        category: 'Církev a školství',
        statement: 'Církevní školy a svoboda náboženského vyučování by měly být v nové ústavě zaručeny.',
        historicalNote: 'V rámci přípravy nové poválečné ústavy se střetávaly rozdílné pohledy na postavení církví ve vzdělávání. Řešilo se, zda zachovat církevní školy a náboženskou výuku jako součást svobody vyznání, nebo zda vybudovat jednotné laické školství spravované výhradně státem.',
        partyStances: { ksc: -1, csns: 0, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 10,
        category: 'Postavení Slovenska',
        statement: 'Slovenské národní orgány (SNR a Sbor pověřenců) by měly mít širokou autonomii a centrální vláda v Praze by neměla omezovat slovenskou samosprávu.',
        historicalNote: 'Vztah mezi českými zeměmi a Slovenskem patřil k ústředním otázkám státoprávního uspořádání. Diskutovalo se o tom, zda má mít Slovensko širokou autonomii s vlastními zákonodárnými a výkonnými orgány, nebo zda má převažovat centralizovaná správa řízená z Prahy.',
        partyStances: { ksc: -1, csns: -1, csl: 0, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 11,
        category: 'Bezpečnostní složky',
        statement: 'Sbor národní bezpečnosti (SNB) a vojenské zpravodajství by měly být apolitické a neměly by podléhat vlivu jedné dominantní strany.',
        historicalNote: 'Po válce vznikl nový Sbor národní bezpečnosti. Zásadní otázkou bylo, jak zajistit striktní nestrannost a profesionalitu policie i armádního zpravodajství, aby bezpečnostní aparát nemohl být využíván k politickému vlivu.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 12,
        category: 'Lidové soudnictví a retribuce',
        statement: 'Mimořádné lidové soudy pro potrestání zrádců a kolaborantů by měly postupovat rychle bez zbytečných procedurálních průtahů.',
        historicalNote: 'Poválečné retribuční soudnictví mělo zajistit rychlé potrestání nacistických zločinců a kolaborantů. Stály proti sobě požadavky na rychlost a přísnost na jedné straně a obavy z porušování procesních práv a rizika politického zneužití na straně druhé.',
        partyStances: { ksc: 1, csns: 0, csl: -1, ds: -1, cssd: 0, kss: 1 }
      },
      {
        id: 13,
        category: 'Odbory a závodní rady',
        statement: 'Jednotné odborové hnutí (ROH) a závodní rady by měly mít právo spolurozhodovat o chodu podniků a kontrolovat vedení firem.',
        historicalNote: 'Poválečná legislativa přiznala závodním radám a odborům významné pravomoci. Diskutovalo se o tom, nakolik mají zaměstnanci prostřednictvím odborů spolurozhodovat o vedení podniků, a kde končí pravomoci vlastníků či manažerů.',
        partyStances: { ksc: 1, csns: 0, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 14,
        category: 'Monopol Národní fronty',
        statement: 'Systém Národní fronty, kde působí pouze povolené vládní strany, představuje vhodnou záruku poválečné národní jednoty.',
        historicalNote: 'Koncept Národní fronty vycházel z myšlenky poválečné jednoty a vyloučení předválečné stranické roztříštěnosti. Stály proti sobě argumenty zdůrazňující potřebu stability při obnově státu a námitky, že zákaz opozičních stran omezuje základní demokratickou soutěž.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 15,
        category: 'Bílé lístky jako protest',
        statement: 'Voličům by mělo být umožněno odevzdat prázdný bílý volební lístek jako legitimní projev nesouhlasu s nabídkou Národní fronty.',
        historicalNote: 'Vzhledem k tomu, že k volbám byly připuštěny pouze strany Národní fronty, zvažovala se možnost volby prázdného lístku. Řešilo se, zda má volič mít formální nástroj, jak odmítnout celou nabízenou politickou reprezentaci, nebo zda má volit pouze z navržených kandidátek.',
        partyStances: { ksc: -1, csns: 0, csl: 0, ds: 1, cssd: 0, kss: -1 }
      }
    ],
    expandedQuestions: [
      {
        id: 1,
        title: 'Trvalé spojenectví se Sovětským svazem',
        category: 'Zahraniční orientace',
        statement: 'Zahraniční a bezpečnostní politika ČSR by měla stát na trvalém spojenectví se Sovětským svazem jako záruce proti případnému německému revanšismu.',
        historicalNote: 'Po zkušenostech s mnichovskou dohodou a osvobození Rudou armádou byla otázka bezpečnosti klíčová. Zvažovalo se, zda opřít obranu státu primárně o spojenectví se Sovětským svazem, anebo zda se vyvarovat jednostranné zahraničněpolitické závislosti.',
        context: 'Po zkušenostech s mnichovskou dohodou a osvobození Rudou armádou byla otázka bezpečnosti klíčová. Zvažovalo se, zda opřít obranu státu primárně o spojenectví se Sovětským svazem, anebo zda se vyvarovat jednostranné zahraničněpolitické závislosti.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 2,
        title: 'Most mezi Východem a Západem',
        category: 'Most mezi světy',
        statement: 'Československo by mělo usilovat o pozici mostu mezi Východem a Západem a zachovat politické i obchodní vztahy s USA a Velkou Británií.',
        historicalNote: 'V poválečné mezinárodní situaci se řešilo budoucí postavení Československa. Diskutovalo se o možnosti působit jako politický i hospodářský most mezi západními demokraciemi a východním blokem, nebo zda je taková pozice v rozděleném světě dlouhodobě udržitelná.',
        context: 'V poválečné mezinárodní situaci se řešilo budoucí postavení Československa. Diskutovalo se o možnosti působit jako politický i hospodářský most mezi západními demokraciemi a východním blokem, nebo zda je taková pozice v rozděleném světě dlouhodobě udržitelná.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 3,
        title: 'Právní stát a proces odsunu',
        category: 'Odsun a právní stát',
        statement: 'Při odsunu a potrestání kolaborantů by měl stát důsledně dbát na právní stát a předcházet mimosoudnímu násilí.',
        historicalNote: 'Poválečný odsun německého obyvatelstva a trestání kolaborace provázely i excesy a mimosoudní násilí. Řešilo se, nakolik má stát přísně vymáhat dodržování právního řádu a řádných soudních postupů i za cenu zpomalení celého procesu.',
        context: 'Poválečný odsun německého obyvatelstva a trestání kolaborace provázely i excesy a mimosoudní násilí. Řešilo se, nakolik má stát přísně vymáhat dodržování právního řádu a řádných soudních postupů i za cenu zpomalení celého procesu.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 4,
        title: 'Garance soukromého sektoru a řemesel',
        category: 'Hranice znárodnění',
        statement: 'Další vlna znárodňování by měla být zastavena; soukromé řemeslo, maloobchod a střední firmy by měly zůstat v soukromých rukou.',
        historicalNote: 'Po první vlně znárodnění z podzimu 1945 vyvstala otázka budoucího rozsahu soukromého sektoru. Diskutovalo se o tom, zda má být soukromé vlastnictví drobných dílen, živností a maloobchodu garantováno, nebo zda má socializace hospodářství pokračovat i v dalších oblastech.',
        context: 'Po první vlně znárodnění z podzimu 1945 vyvstala otázka budoucího rozsahu soukromého sektoru. Diskutovalo se o tom, zda má být soukromé vlastnictví drobných dílen, živností a maloobchodu garantováno, nebo zda má socializace hospodářství pokračovat i v dalších oblastech.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 5,
        title: 'Znárodnění velkoobchodu a podniků nad 50 zaměstnanců',
        category: 'Další vlna socializace',
        statement: 'Stát by měl v další etapě převzít také velkoobchod, zahraniční obchod a průmyslové podniky s více než 50 zaměstnanci.',
        historicalNote: 'Po znárodnění klíčového průmyslu a bank se řešila hranice pro další převod podniků do státních rukou. Zvažovalo se, zda je pro efektivitu a plánování hospodářství nutné zestátnit i střední podniky a zahraniční obchod, anebo ponechat prostor soukromé iniciativě.',
        context: 'Po znárodnění klíčového průmyslu a bank se řešila hranice pro další převod podniků do státních rukou. Zvažovalo se, zda je pro efektivitu a plánování hospodářství nutné zestátnit i střední podniky a zahraniční obchod, anebo ponechat prostor soukromé iniciativě.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 0, kss: 1 }
      },
      {
        id: 6,
        title: 'Zákaz pravicových stran z první republiky',
        category: 'Zákaz pravicových stran',
        statement: 'Zákaz předválečné agrární strany a dalších pravicových subjektů byl opodstatněným krokem na ochranu republiky před kolaborací.',
        historicalNote: 'Po osvobození byla činnost některých předválečných politických stran zakázána s poukazem na podíl jejich představitelů na událostech let 1938–1939. Část společnosti to vnímala jako nutnou očistu politického života, jiní v tom spatřovali nedemokratické omezení politické plurality.',
        context: 'Po osvobození byla činnost některých předválečných politických stran zakázána s poukazem na podíl jejich představitelů na událostech let 1938–1939. Část společnosti to vnímala jako nutnou očistu politického života, jiní v tom spatřovali nedemokratické omezení politické plurality.',
        partyStances: { ksc: 1, csns: 1, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 7,
        title: 'Veřejná správa kultury a tisku',
        category: 'Kultura a svoboda tisku',
        statement: 'Kultura, tisk a rozhlas by měly být vyňaty z vlivu soukromého kapitálu a spravovány státem či veřejnými institucemi.',
        historicalNote: 'Po roce 1945 se proměnil mediální prostor – soukromé vydávání novin bylo zakázáno a tisk směly vydávat jen schválené organizace. Řešilo se, nakolik má mít stát kontrolu nad šířením informací a kulturou, a nakolik má být zachována nezávislost a názorová pluralita.',
        context: 'Po roce 1945 se proměnil mediální prostor – soukromé vydávání novin bylo zakázáno a tisk směly vydávat jen schválené organizace. Řešilo se, nakolik má mít stát kontrolu nad šířením informací a kulturou, a nakolik má být zachována nezávislost a názorová pluralita.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 8,
        title: 'Centrální plánování (Dvouletka)',
        category: 'Plánované hospodářství',
        statement: 'Hospodářství by mělo být usměrňováno státním plánem (Dvouletkou) a volný trh by měl ustoupit potřebám celku.',
        historicalNote: 'Poválečná obnova hospodářství otevřela otázku způsobu řízení ekonomiky. Zvažovalo se, nakolik má hospodářský život určovat centrální státní plánování, a jaký prostor má zůstat tržním mechanismům a svobodnému podnikání.',
        context: 'Poválečná obnova hospodářství otevřela otázku způsobu řízení ekonomiky. Zvažovalo se, nakolik má hospodářský život určovat centrální státní plánování, a jaký prostor má zůstat tržním mechanismům a svobodnému podnikání.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 9,
        title: 'Církevní školy a náboženská výuka v ústavě',
        category: 'Církev a školství',
        statement: 'Církevní školy a svoboda náboženského vyučování by měly být v nové ústavě zaručeny.',
        historicalNote: 'V rámci přípravy nové poválečné ústavy se střetávaly rozdílné pohledy na postavení církví ve vzdělávání. Řešilo se, zda zachovat církevní školy a náboženskou výuku jako součást svobody vyznání, nebo zda vybudovat jednotné laické školství spravované výhradně státem.',
        context: 'V rámci přípravy nové poválečné ústavy se střetávaly rozdílné pohledy na postavení církví ve vzdělávání. Řešilo se, zda zachovat církevní školy a náboženskou výuku jako součást svobody vyznání, nebo zda vybudovat jednotné laické školství spravované výhradně státem.',
        partyStances: { ksc: -1, csns: 0, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 10,
        title: 'Autonomie slovenských národních orgánů',
        category: 'Postavení Slovenska',
        statement: 'Slovenské národní orgány (SNR a Sbor pověřenců) by měly mít širokou autonomii a centrální vláda v Praze by neměla omezovat slovenskou samosprávu.',
        historicalNote: 'Vztah mezi českými zeměmi a Slovenskem patřil k ústředním otázkám státoprávního uspořádání. Diskutovalo se o tom, zda má mít Slovensko širokou autonomii s vlastními zákonodárnými a výkonnými orgány, nebo zda má převažovat centralizovaná správa řízená z Prahy.',
        context: 'Vztah mezi českými zeměmi a Slovenskem patřil k ústředním otázkám státoprávního uspořádání. Diskutovalo se o tom, zda má mít Slovensko širokou autonomii s vlastními zákonodárnými a výkonnými orgány, nebo zda má převažovat centralizovaná správa řízená z Prahy.',
        partyStances: { ksc: -1, csns: -1, csl: 0, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 11,
        title: 'Apolitické bezpečnostní složky (SNB)',
        category: 'Bezpečnostní složky',
        statement: 'Sbor národní bezpečnosti (SNB) a vojenské zpravodajství by měly být apolitické a neměly by podléhat vlivu jedné dominantní strany.',
        historicalNote: 'Po válce vznikl nový Sbor národní bezpečnosti. Zásadní otázkou bylo, jak zajistit striktní nestrannost a profesionalitu policie i armádního zpravodajství, aby bezpečnostní aparát nemohl být využíván k politickému vlivu.',
        context: 'Po válce vznikl nový Sbor národní bezpečnosti. Zásadní otázkou bylo, jak zajistit striktní nestrannost a profesionalitu policie i armádního zpravodajství, aby bezpečnostní aparát nemohl být využíván k politickému vlivu.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 12,
        title: 'Rychlost mimořádných lidových soudů',
        category: 'Lidové soudnictví a retribuce',
        statement: 'Mimořádné lidové soudy pro potrestání zrádců a kolaborantů by měly postupovat rychle bez zbytečných procedurálních průtahů.',
        historicalNote: 'Poválečné retribuční soudnictví mělo zajistit rychlé potrestání nacistických zločinců a kolaborantů. Stály proti sobě požadavky na rychlost a přísnost na jedné straně a obavy z porušování procesních práv a rizika politického zneužití na straně druhé.',
        context: 'Poválečné retribuční soudnictví mělo zajistit rychlé potrestání nacistických zločinců a kolaborantů. Stály proti sobě požadavky na rychlost a přísnost na jedné straně a obavy z porušování procesních práv a rizika politického zneužití na straně druhé.',
        partyStances: { ksc: 1, csns: 0, csl: -1, ds: -1, cssd: 0, kss: 1 }
      },
      {
        id: 13,
        title: 'Spolurozhodování odborů a závodních rad',
        category: 'Odbory a závodní rady',
        statement: 'Jednotné odborové hnutí (ROH) a závodní rady by měly mít právo spolurozhodovat o chodu podniků a kontrolovat vedení firem.',
        historicalNote: 'Poválečná legislativa přiznala závodním radám a odborům významné pravomoci. Diskutovalo se o tom, nakolik mají zaměstnanci prostřednictvím odborů spolurozhodovat o vedení podniků, a kde končí pravomoci vlastníků či manažerů.',
        context: 'Poválečná legislativa přiznala závodním radám a odborům významné pravomoci. Diskutovalo se o tom, nakolik mají zaměstnanci prostřednictvím odborů spolurozhodovat o vedení podniků, a kde končí pravomoci vlastníků či manažerů.',
        partyStances: { ksc: 1, csns: 0, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 14,
        title: 'Systém povolených stran Národní fronty',
        category: 'Monopol Národní fronty',
        statement: 'Systém Národní fronty, kde působí pouze povolené vládní strany, představuje vhodnou záruku poválečné národní jednoty.',
        historicalNote: 'Koncept Národní fronty vycházel z myšlenky poválečné jednoty a vyloučení předválečné stranické roztříštěnosti. Stály proti sobě argumenty zdůrazňující potřebu stability při obnově státu a námitky, že zákaz opozičních stran omezuje základní demokratickou soutěž.',
        context: 'Koncept Národní fronty vycházel z myšlenky poválečné jednoty a vyloučení předválečné stranické roztříštěnosti. Stály proti sobě argumenty zdůrazňující potřebu stability při obnově státu a námitky, že zákaz opozičních stran omezuje základní demokratickou soutěž.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 15,
        title: 'Právo volit prázdným bílým lístkem',
        category: 'Bílé lístky jako protest',
        statement: 'Voličům by mělo být umožněno odevzdat prázdný bílý volební lístek jako legitimní projev nesouhlasu s nabídkou Národní fronty.',
        historicalNote: 'Vzhledem k tomu, že k volbám byly připuštěny pouze strany Národní fronty, zvažovala se možnost volby prázdného lístku. Řešilo se, zda má volič mít formální nástroj, jak odmítnout celou nabízenou politickou reprezentaci, nebo zda má volit pouze z navržených kandidátek.',
        context: 'Vzhledem k tomu, že k volbám byly připuštěny pouze strany Národní fronty, zvažovala se možnost volby prázdného lístku. Řešilo se, zda má volič mít formální nástroj, jak odmítnout celou nabízenou politickou reprezentaci, nebo zda má volit pouze z navržených kandidátek.',
        partyStances: { ksc: -1, csns: 0, csl: 0, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 16,
        title: 'Velikost přídělů půdy v pohraničí',
        category: 'Zemědělství a osidlování',
        statement: 'Zkonfiskovaná půda v pohraničí by měla být rozdělena na menší příděly pro co nejvyšší počet bezzemků namísto vytváření větších selských statků.',
        historicalNote: 'Při osidlování pohraničí po odsunu německého obyvatelstva se rozhodovalo o výměře přidělovaných zemědělských usedlostí. Jeden přístup prosazoval parcelaci půdy na menší rodinná hospodářství do 13 hektarů, aby vlastní půdu získalo co nejvíce drobných rolníků a zemědělských dělníků. Druhý přístup upozorňoval, že příliš malé statky nebudou hospodářsky soběstačné, a doporučoval vytvářet větší, ekonomicky silnější selské grunty.',
        context: 'Při osidlování pohraničí po odsunu německého obyvatelstva se rozhodovalo o výměře přidělovaných zemědělských usedlostí. Jeden přístup prosazoval parcelaci půdy na menší rodinná hospodářství do 13 hektarů, aby vlastní půdu získalo co nejvíce drobných rolníků a zemědělských dělníků. Druhý přístup upozorňoval, že příliš malé statky nebudou hospodářsky soběstačné, a doporučoval vytvářet větší, ekonomicky silnější selské grunty.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 0, kss: 1 }
      },
      {
        id: 17,
        title: 'Zachování zemského zřízení Čech a Moravy se Slezskem',
        category: 'Státní správa a samospráva',
        statement: 'V nové ústavě by mělo být zachováno historické zemské zřízení Čech a Moravy se Slezskem namísto rozdělení státu na menší kraje.',
        historicalNote: 'Při přípravě nové poválečné ústavy se vedla debata o budoucím územněsprávním členění českých zemí. Jeden pohled hájil zachování historických zemí a zemských národních výborů v Praze a Brně jako záruky regionální samosprávy a tradice. Druhý pohled prosazoval zrušení zemí a jejich nahrazení menšími kraji, které měly přiblížit správu občanům a posílit jednotné řízení státu.',
        context: 'Při přípravě nové poválečné ústavy se vedla debata o budoucím územněsprávním členění českých zemí. Jeden pohled hájil zachování historických zemí a zemských národních výborů v Praze a Brně jako záruky regionální samosprávy a tradice. Druhý pohled prosazoval zrušení zemí a jejich nahrazení menšími kraji, které měly přiblížit správu občanům a posílit jednotné řízení státu.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 0, cssd: 0, kss: -1 }
      },
      {
        id: 18,
        title: 'Uvolnění vázaných vkladů z měnové reformy',
        category: 'Měnová politika a finance',
        statement: 'Stát by měl občanům rychleji uvolnit peněžní úspory zmrazené na vázaných vkladech při měnové reformě z roku 1945.',
        historicalNote: 'Měnová reforma z listopadu 1945 nahradila okupační platidla novou korunou a většinu hotovosti i úspor obyvatelstva uzamkla na takzvaných vázaných vkladech. V roce 1946 se zvažovalo, zda tyto prostředky střadatelům a drobným podnikatelům ve větší míře vyplatit k oživení spotřeby a soukromých investic, nebo je ponechat zablokované kvůli obavám z přebytečné kupní síly a růstu inflace.',
        context: 'Měnová reforma z listopadu 1945 nahradila okupační platidla novou korunou a většinu hotovosti i úspor obyvatelstva uzamkla na takzvaných vázaných vkladech. V roce 1946 se zvažovalo, zda tyto prostředky střadatelům a drobným podnikatelům ve větší míře vyplatit k oživení spotřeby a soukromých investic, nebo je ponechat zablokované kvůli obavám z přebytečné kupní síly a růstu inflace.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 19,
        title: 'Zrušení přídělového systému na potraviny',
        category: 'Zásobování a vnitřní obchod',
        statement: 'Přídělový systém potravinových a šatenkových lístků by měl být postupně opuštěn ve prospěch neomezeného prodeje zboží v obchodech.',
        historicalNote: 'Poválečné zásobování domácností stálo na přídělovém systému lístků a úředně stanovených spotřebitelských cenách. Diskutovalo se o tom, zda lístkový systém v dohledné době odbourat a uvolnit tvorbu cen, která by motivovala výrobce k vyšším dodávkám zboží na pulty, anebo zachovat řízený příděl jako pojistku rovnoměrného a cenově dostupného zásobování všech vrstev obyvatelstva.',
        context: 'Poválečné zásobování domácností stálo na přídělovém systému lístků a úředně stanovených spotřebitelských cenách. Diskutovalo se o tom, zda lístkový systém v dohledné době odbourat a uvolnit tvorbu cen, která by motivovala výrobce k vyšším dodávkám zboží na pulty, anebo zachovat řízený příděl jako pojistku rovnoměrného a cenově dostupného zásobování všech vrstev obyvatelstva.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 20,
        title: 'Přesídlování maďarské menšiny na práce do Čech',
        category: 'Národnostní menšiny',
        statement: 'Obyvatelé maďarské národnosti z jižního Slovenska by neměli být nuceně převáženi na zemědělské práce do českého pohraničí.',
        historicalNote: 'Po válce pozbyli občané maďarské národnosti československé státní občanství. Vzhledem k tomu, že vítězné mocnosti neschválily jejich jednostranný odsun, přistoupily úřady k pracovnímu náboru a nucenému vnitřnímu přesídlování maďarských obyvatel do vylidněného českého pohraničí. Diskutovalo se o tom, zda je toto opatření oprávněným krokem k zajištění pracovních sil a oslabení menšiny u hranic, nebo zda jde o nepřijatelný zásah do lidských a rodinných práv.',
        context: 'Po válce pozbyli občané maďarské národnosti československé státní občanství. Vzhledem k tomu, že vítězné mocnosti neschválily jejich jednostranný odsun, přistoupily úřady k pracovnímu náboru a nucenému vnitřnímu přesídlování maďarských obyvatel do vylidněného českého pohraničí. Diskutovalo se o tom, zda je toto opatření oprávněným krokem k zajištění pracovních sil a oslabení menšiny u hranic, nebo zda jde o nepřijatelný zásah do lidských a rodinných práv.',
        partyStances: { ksc: -1, csns: -1, csl: 1, ds: 0, cssd: -1, kss: -1 }
      },
      {
        id: 21,
        title: 'Samostatnost skautských a mládežnických spolků',
        category: 'Společnost a mládež',
        statement: 'Tradiční mládežnické organizace, jako jsou Junák nebo Orel, by měly fungovat samostatně mimo jednotný státní svaz mládeže.',
        historicalNote: 'Po roce 1945 vznikly zastřešující organizace Svaz české mládeže a Svaz slovenské mládeže. Řešilo se, zda by veškerá mimoškolní výchova mladé generace měla být organizačně sjednocena pod těmito svazy, nebo zda si mají historické spolky s vlastním hodnotovým zaměřením uchovat plnou nezávislost a vlastní identitu.',
        context: 'Po roce 1945 vznikly zastřešující organizace Svaz české mládeže a Svaz slovenské mládeže. Řešilo se, zda by veškerá mimoškolní výchova mladé generace měla být organizačně sjednocena pod těmito svazy, nebo zda si mají historické spolky s vlastním hodnotovým zaměřením uchovat plnou nezávislost a vlastní identitu.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 22,
        title: 'Pravomoci národních výborů vůči úřednické správě',
        category: 'Státní správa a samospráva',
        statement: 'Místní a okresní správa by měla být převedena z politicky obsazovaných národních výborů zpět na odborně vzdělané a nestranické úředníky.',
        historicalNote: 'Na konci války převzaly veřejnou správu v obcích, okresech a zemích národní výbory, které nahradily prvorepublikový systém okresních hejtmanů a státních úřadů. Zvažovalo se, zda národní výbory ponechat jako výlučné orgány státní moci a samosprávy v regionech, nebo zda obnovit roli profesionálního úřednického aparátu v zájmu odbornosti a správní nestrannosti.',
        context: 'Na konci války převzaly veřejnou správu v obcích, okresech a zemích národní výbory, které nahradily prvorepublikový systém okresních hejtmanů a státních úřadů. Zvažovalo se, zda národní výbory ponechat jako výlučné orgány státní moci a samosprávy v regionech, nebo zda obnovit roli profesionálního úřednického aparátu v zájmu odbornosti a správní nestrannosti.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 23,
        title: 'Rozpuštění ozbrojených závodních milicí',
        category: 'Bezpečnost a průmysl',
        statement: 'Ozbrojené závodní milice v průmyslových podnicích by měly být zrušeny.',
        historicalNote: 'V květnu 1945 vznikly v mnoha továrnách ozbrojené dělnické oddíly, které měly chránit průmyslové objekty před poškozením a rabováním. V mírových poměrech roku 1946 se vedl spor o to, zda tyto ozbrojené jednotky v závodech nadále udržovat jako pojistku ochrany znárodněného průmyslu, nebo je odzbrojit a ponechat oprávnění k držení zbraní pouze policii a armádě.',
        context: 'V květnu 1945 vznikly v mnoha továrnách ozbrojené dělnické oddíly, které měly chránit průmyslové objekty před poškozením a rabováním. V mírových poměrech roku 1946 se vedl spor o to, zda tyto ozbrojené jednotky v závodech nadále udržovat jako pojistku ochrany znárodněného průmyslu, nebo je odzbrojit a ponechat oprávnění k držení zbraní pouze policii a armádě.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 24,
        title: 'Převod konfiskovaných domů v pohraničí do osobního vlastnictví',
        category: 'Bydlení a osidlování',
        statement: 'Zkonfiskované rodinné domy v pohraničí by měly být z dočasné národní správy převedeny do osobního vlastnictví jednotlivých osídlenců.',
        historicalNote: 'Po vysídlení německého obyvatelstva spravoval stát v pohraničí statisíce opuštěných rodinných domů, do nichž přicházeli noví osídlenci z vnitrozemí. V roce 1946 se řešilo, zda tyto domky rychle prodat do plného soukromého vlastnictví nových obyvatel pro posílení jejich trvalého vztahu k regionu, nebo zda bytový fond ponechat v nájemní správě obcí a družstev.',
        context: 'Po vysídlení německého obyvatelstva spravoval stát v pohraničí statisíce opuštěných rodinných domů, do nichž přicházeli noví osídlenci z vnitrozemí. V roce 1946 se řešilo, zda tyto domky rychle prodat do plného soukromého vlastnictví nových obyvatel pro posílení jejich trvalého vztahu k regionu, nebo zda bytový fond ponechat v nájemní správě obcí a družstev.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 25,
        title: 'Podpora zaměstnanosti vdaných žen',
        category: 'Rodina a pracovní trh',
        statement: 'Stát by měl budováním veřejných jeslí a jídelen podporovat nástup vdaných žen do zaměstnání.',
        historicalNote: 'Poválečné hospodářství se po odsunu německého obyvatelstva potýkalo s nedostatkem pracovních sil v průmyslu i zemědělství. Jeden pohled prosazoval zapojení žen do výroby za pomoci rozvoje veřejných služeb péče o děti a domácnost. Druhý přístup kladl důraz na tradiční roli matky v rodině a požadoval, aby rodinu dokázal finančně zajistit příjem manžela.',
        context: 'Poválečné hospodářství se po odsunu německého obyvatelstva potýkalo s nedostatkem pracovních sil v průmyslu i zemědělství. Jeden pohled prosazoval zapojení žen do výroby za pomoci rozvoje veřejných služeb péče o děti a domácnost. Druhý přístup kladl důraz na tradiční roli matky v rodině a požadoval, aby rodinu dokázal finančně zajistit příjem manžela.',
        partyStances: { ksc: 1, csns: 1, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 26,
        title: 'Omezení výdajů na armádu v době poválečné obnovy',
        category: 'Obrana a státní rozpočet',
        statement: 'Výdaje ze státního rozpočtu na armádu by měly být v době poválečné obnovy sníženy ve prospěch hospodářských a sociálních potřeb.',
        historicalNote: 'Budování a vyzbrojování poválečné československé armády představovalo v roce 1946 jednu z největších položek státního rozpočtu. V diskusi o rozpočtových prioritách stála na jedné straně snaha omezit vojenské výdaje a uvolnit finance i mladé odvedence pro obnovu válkou poškozeného hospodářství, na straně druhé požadavek na udržení silného a početného vojska.',
        context: 'Budování a vyzbrojování poválečné československé armády představovalo v roce 1946 jednu z největších položek státního rozpočtu. V diskusi o rozpočtových prioritách stála na jedné straně snaha omezit vojenské výdaje a uvolnit finance i mladé odvedence pro obnovu válkou poškozeného hospodářství, na straně druhé požadavek na udržení silného a početného vojska.',
        partyStances: { ksc: -1, csns: -1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 27,
        title: 'Volební právo od 18 let',
        category: 'Volební právo a mládež',
        statement: 'Právo volit by mělo zůstat zachováno již od 18 let věku, přestože plné občanské zletilosti občané dosahují až v 21 letech.',
        historicalNote: 'Před volbami v roce 1946 byla věková hranice pro aktivní volební právo snížena z prvorepublikových 21 let na 18 let, zatímco plná právní způsobilost v občanském životě zůstala na 21 letech. Jeden přístup toto snížení obhajoval tím, že mládež prokázala svou vyspělost za války a podílí se na obnově státu. Druhý přístup namítal, že osmnáctiletí voliči snáze podléhají politické agitaci a volební právo by mělo být spojeno až s plnou občanskou zletilostí.',
        context: 'Před volbami v roce 1946 byla věková hranice pro aktivní volební právo snížena z prvorepublikových 21 let na 18 let, zatímco plná právní způsobilost v občanském životě zůstala na 21 letech. Jeden přístup toto snížení obhajoval tím, že mládež prokázala svou vyspělost za války a podílí se na obnově státu. Druhý přístup namítal, že osmnáctiletí voliči snáze podléhají politické agitaci a volební právo by mělo být spojeno až s plnou občanskou zletilostí.',
        partyStances: { ksc: 1, csns: 1, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 28,
        title: 'Daňové zrovnoprávnění živnostníků a družstev',
        category: 'Daně a podnikání',
        statement: 'Soukromí živnostníci a obchodníci by měli mít stejné daňové podmínky jako výrobní a spotřební družstva.',
        historicalNote: 'V poválečném hospodářství působily vedle sebe soukromé živnosti a rozrůstající se sektor družstevnictví. Spor se vedl o daňovou politiku státu: zda mají být družstva daňově a úvěrově zvýhodňována jako forma společného hospodaření, nebo zda má stát zajistit rovné daňové zatížení pro všechny podnikatelské subjekty bez ohledu na formu vlastnictví.',
        context: 'V poválečném hospodářství působily vedle sebe soukromé živnosti a rozrůstající se sektor družstevnictví. Spor se vedl o daňovou politiku státu: zda mají být družstva daňově a úvěrově zvýhodňována jako forma společného hospodaření, nebo zda má stát zajistit rovné daňové zatížení pro všechny podnikatelské subjekty bez ohledu na formu vlastnictví.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 29,
        title: 'Obnova Senátu v nové ústavě',
        category: 'Ústava a parlament',
        statement: 'Nová ústava by měla obnovit druhou komoru parlamentu v podobě Senátu jako pojistku při schvalování zákonů.',
        historicalNote: 'Hlavním úkolem voleného Ústavodárného národního shromáždění bylo vypracování nové ústavy. V debatách o podobě zákonodárného sboru se řešilo, zda zachovat poválečný jednokomorový parlament, který umožňuje rychlé přijímání zákonů bez průtahů, anebo se vrátit k prvorepublikovému dvoukomorovému systému se Senátem, jenž by sloužil jako odborná protiváha a pojistka proti unáhleným rozhodnutím.',
        context: 'Hlavním úkolem voleného Ústavodárného národního shromáždění bylo vypracování nové ústavy. V debatách o podobě zákonodárného sboru se řešilo, zda zachovat poválečný jednokomorový parlament, který umožňuje rychlé přijímání zákonů bez průtahů, anebo se vrátit k prvorepublikovému dvoukomorovému systému se Senátem, jenž by sloužil jako odborná protiváha a pojistka proti unáhleným rozhodnutím.',
        partyStances: { ksc: -1, csns: 0, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 30,
        title: 'Zachování víceletých gymnázií',
        category: 'Školství a vzdělávání',
        statement: 'Nižší ročníky víceletých gymnázií by měly zůstat zachovány namísto zavedení povinné jednotné školy pro všechny žáky do 15 let.',
        historicalNote: 'Jedním z hlavních školských témat roku 1946 byl návrh na zavedení takzvané jednotné školy, která by sloučila měšťanské školy a nižší stupně gymnázií do jednoho společného vzdělávacího proudu pro děti od 11 do 15 let. Jeden přístup zdůrazňoval rovné šance na vzdělání pro děti ze všech sociálních vrstev, druhý upozorňoval na riziko poklesu úrovně výuky a ztrátu včasné přípravy nadaných žáků.',
        context: 'Jedním z hlavních školských témat roku 1946 byl návrh na zavedení takzvané jednotné školy, která by sloučila měšťanské školy a nižší stupně gymnázií do jednoho společného vzdělávacího proudu pro děti od 11 do 15 let. Jeden přístup zdůrazňoval rovné šance na vzdělání pro děti ze všech sociálních vrstev, druhý upozorňoval na riziko poklesu úrovně výuky a ztrátu včasné přípravy nadaných žáků.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 31,
        title: 'Rozdělování nadměrných bytů ve městech',
        category: 'Bydlení a vlastnictví',
        statement: 'Národní výbory by měly mít právo rozdělit větší soukromé byty a nastěhovat do nich další nájemníky k řešení poválečné bytové nouze.',
        historicalNote: 'V důsledku válečného poškození měst a útlumu stavebnictví panoval v roce 1946 v celé republice nedostatek bytů. Diskutovalo se o tom, zda mají mít místní úřady pravomoc označit vícepokojové byty za nadměrné a přikázat do nich podnájemníky, nebo zda má být soukromí rodin a nedotknutelnost bytu chráněna a bytová krize řešena jen novou výstavbou.',
        context: 'V důsledku válečného poškození měst a útlumu stavebnictví panoval v roce 1946 v celé republice nedostatek bytů. Diskutovalo se o tom, zda mají mít místní úřady pravomoc označit vícepokojové byty za nadměrné a přikázat do nich podnájemníky, nebo zda má být soukromí rodin a nedotknutelnost bytu chráněna a bytová krize řešena jen novou výstavbou.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 32,
        title: 'Zrušení všeobecné pracovní povinnosti',
        category: 'Pracovní trh a právo',
        statement: 'Stát by měl v době míru upustit od nařizování pracovní povinnosti občanům.',
        historicalNote: 'Prezidentský dekret z podzimu 1945 zavedl všeobecnou pracovní povinnost, která úřadům umožňovala přikázat občanům práci v odvětvích trpících nedostatkem pracovních sil, zejména v hornictví, zemědělství a stavebnictví. Vedla se debata, zda je tento administrativní nástroj potřebný pro poválečnou obnovu země, nebo zda jde o zásah do osobní svobody, který by měl být nahrazen dobrovolným náborem a mzdovou motivací.',
        context: 'Prezidentský dekret z podzimu 1945 zavedl všeobecnou pracovní povinnost, která úřadům umožňovala přikázat občanům práci v odvětvích trpících nedostatkem pracovních sil, zejména v hornictví, zemědělství a stavebnictví. Vedla se debata, zda je tento administrativní nástroj potřebný pro poválečnou obnovu země, nebo zda jde o zásah do osobní svobody, který by měl být nahrazen dobrovolným náborem a mzdovou motivací.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 33,
        title: 'Přesun průmyslových strojů z českého pohraničí na Slovensko',
        category: 'Průmysl a regionální rozvoj',
        statement: 'Část průmyslového zařízení z opuštěných továren v českém pohraničí by měla být přesunuta na Slovensko k podpoře jeho industrializace.',
        historicalNote: 'Po vysídlení německého obyvatelstva zůstala v českém pohraničí řada průmyslových závodů bez dostatku pracovních sil, zatímco na Slovensku přetrvával přebytek pracovní síly v zemědělství. Zvažovalo se, zda přemístit část strojního vybavení z českých zemí na Slovensko a podpořit tak vyrovnání hospodářské úrovně obou částí republiky, anebo ponechat výrobní kapacity v původních průmyslových oblastech.',
        context: 'Po vysídlení německého obyvatelstva zůstala v českém pohraničí řada průmyslových závodů bez dostatku pracovních sil, zatímco na Slovensku přetrvával přebytek pracovní síly v zemědělství. Zvažovalo se, zda přemístit část strojního vybavení z českých zemí na Slovensko a podpořit tak vyrovnání hospodářské úrovně obou částí republiky, anebo ponechat výrobní kapacity v původních průmyslových oblastech.',
        partyStances: { ksc: 1, csns: -1, csl: 0, ds: 1, cssd: 0, kss: 1 }
      },
      {
        id: 34,
        title: 'Platové ohodnocení úředníků a inteligence',
        category: 'Práce a mzdy',
        statement: 'Platy státních úředníků, učitelů a technické inteligence by měly být zvýšeny, aby lépe odrážely požadovanou odbornou kvalifikaci.',
        historicalNote: 'Poválečné úpravy mezd a cen vedly ke sblížení příjmů mezi manuálními pracovníky a duševně pracujícími zaměstnanci. Diskutovalo se o tom, zda je toto vyrovnávání mzdových rozdílů spravedlivým oceněním fyzické práce v průmyslu a zemědělství, nebo zda nižší ohodnocení kvalifikované práce demotivuje vzdělané odborníky a oslabuje chod státní správy i školství.',
        context: 'Poválečné úpravy mezd a cen vedly ke sblížení příjmů mezi manuálními pracovníky a duševně pracujícími zaměstnanci. Diskutovalo se o tom, zda je toto vyrovnávání mzdových rozdílů spravedlivým oceněním fyzické práce v průmyslu a zemědělství, nebo zda nižší ohodnocení kvalifikované práce demotivuje vzdělané odborníky a oslabuje chod státní správy i školství.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 35,
        title: 'Sjednocení zdravotního a sociálního pojištění',
        category: 'Sociální zabezpečení',
        statement: 'Dosavadní samostatné pojišťovny jednotlivých profesních skupin by měly být sloučeny do jedné celostátní národní pojišťovny.',
        historicalNote: 'Meziválečný systém sociálního a nemocenského pojištění byl rozdělen podle profesních stavů, přičemž úředníci, horníci či dělníci měli vlastní pojišťovací ústavy s různou výší příspěvků i dávek. V roce 1946 se řešilo, zda vybudovat jednotné celostátní pojištění se stejnými podmínkami pro všechny občany, nebo zachovat samosprávné profesní pojišťovny a nabytá práva jednotlivých skupin pojištěnců.',
        context: 'Meziválečný systém sociálního a nemocenského pojištění byl rozdělen podle profesních stavů, přičemž úředníci, horníci či dělníci měli vlastní pojišťovací ústavy s různou výší příspěvků i dávek. V roce 1946 se řešilo, zda vybudovat jednotné celostátní pojištění se stejnými podmínkami pro všechny občany, nebo zachovat samosprávné profesní pojišťovny a nabytá práva jednotlivých skupin pojištěnců.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 36,
        title: 'Vyplacení náhrad za majetek znárodněný v roce 1945',
        category: 'Majetek a finance',
        statement: 'Bezúhonným československým občanům a drobným akcionářům by měla být vyplacena finanční náhrada za podniky a akcie znárodněné v roce 1945.',
        historicalNote: 'Prezidentské dekrety o znárodnění klíčového průmyslu a bank z října 1945 počítaly s tím, že zatímco kolaborantům a osobám německé či maďarské národnosti se majetek zabavuje bez náhrady, loajálním československým občanům bude za znárodněný majetek vyplaceno odškodnění. V roce 1946 se vedl spor o to, zda má stát tyto náhrady původním vlastníkům a střadatelům skutečně vyplácet, nebo zda by výplata odškodného příliš zatížila státní finance a znárodněné podniky.',
        context: 'Prezidentské dekrety o znárodnění klíčového průmyslu a bank z října 1945 počítaly s tím, že zatímco kolaborantům a osobám německé či maďarské národnosti se majetek zabavuje bez náhrady, loajálním československým občanům bude za znárodněný majetek vyplaceno odškodnění. V roce 1946 se vedl spor o to, zda má stát tyto náhrady původním vlastníkům a střadatelům skutečně vyplácet, nebo zda by výplata odškodného příliš zatížila státní finance a znárodněné podniky.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 37,
        title: 'Rozdělování zemědělské techniky',
        category: 'Zemědělství a družstevnictví',
        statement: 'Nové a zkonfiskované traktory by měly být přednostně umisťovány do společných strojních stanic a družstev namísto prodeje jednotlivým rolníkům.',
        historicalNote: 'Mechanizace zemědělství byla v roce 1946 považována za důležitý předpoklad k překonání úbytku pracovních sil na venkově. Řešila se otázka distribuce nedostatkových zemědělských strojů: zda traktory a mlátičky soustředit ve státních strojních stanicích a družstvech, odkud by si je zemědělci půjčovali, nebo zda umožnit jejich přímý nákup do soukromého vlastnictví samostatně hospodařících sedláků.',
        context: 'Mechanizace zemědělství byla v roce 1946 považována za důležitý předpoklad k překonání úbytku pracovních sil na venkově. Řešila se otázka distribuce nedostatkových zemědělských strojů: zda traktory a mlátičky soustředit ve státních strojních stanicích a družstvech, odkud by si je zemědělci půjčovali, nebo zda umožnit jejich přímý nákup do soukromého vlastnictví samostatně hospodařících sedláků.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 38,
        title: 'Vrácení majetku obětem nacistické perzekuce',
        category: 'Spravedlnost a restituce',
        statement: 'Majetek zabavený v době okupace obětem rasové a politické perzekuce by měl být vrácen původním vlastníkům bez ohledu na zájmy nynějších národních správců.',
        historicalNote: 'Po válce se přeživší oběti nacistické perzekuce domáhaly navrácení svých domů, živností a podniků zabavených během okupace. Mnohé z těchto majetků však mezitím přešly pod národní správu. Zákonodárci řešili, zda prosadit vrácení majetku původním majitelům a jejich dědicům, anebo zda část podniků ponechat v rukou dosazených národních správců či státu.',
        context: 'Po válce se přeživší oběti nacistické perzekuce domáhaly navrácení svých domů, živností a podniků zabavených během okupace. Mnohé z těchto majetků však mezitím přešly pod národní správu. Zákonodárci řešili, zda prosadit vrácení majetku původním majitelům a jejich dědicům, anebo zda část podniků ponechat v rukou dosazených národních správců či státu.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 0, cssd: 0, kss: -1 }
      },
      {
        id: 39,
        title: 'Pravomoci prezidenta republiky v nové ústavě',
        category: 'Ústava a státní zřízení',
        statement: 'V nové ústavě by měly zůstat zachovány silné pravomoci prezidenta republiky vůči vládě a parlamentu podle tradice první republiky.',
        historicalNote: 'Při přípravách nové ústavy se diskutovalo o postavení hlavy státu. Jeden ústavní koncept prosazoval zachování silného postavení prezidenta republiky s právem jmenovat vysoké úředníky, vracet zákony a rozpouštět parlament jako nadstranické pojistky stability. Druhý koncept usiloval o omezení prezidentských pravomocí a soustředění výkonné i zákonodárné moci do rukou vlády a jednokomorového parlamentu.',
        context: 'Při přípravách nové ústavy se diskutovalo o postavení hlavy státu. Jeden ústavní koncept prosazoval zachování silného postavení prezidenta republiky s právem jmenovat vysoké úředníky, vracet zákony a rozpouštět parlament jako nadstranické pojistky stability. Druhý koncept usiloval o omezení prezidentských pravomocí a soustředění výkonné i zákonodárné moci do rukou vlády a jednokomorového parlamentu.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 40,
        title: 'Ochrana církevního pozemkového majetku',
        category: 'Církev a majetek',
        statement: 'Pozemkový a lesní majetek církví by měl být vyňat z vyvlastňování velkostatků.',
        historicalNote: 'V souvislosti s úvahami o revizi pozemkové reformy a dalším omezení velkostatků se řešilo postavení církevní půdy a lesů. Jeden pohled zastával názor, že církevní majetek slouží k financování farností, charitativní péče a kulturních památek, a měl by proto zůstat zachován. Druhý pohled požadoval, aby se na církevní velkostatky vztahovala stejná pravidla vyvlastnění a parcelace jako na ostatní velkou pozemkovou držbu.',
        context: 'V souvislosti s úvahami o revizi pozemkové reformy a dalším omezení velkostatků se řešilo postavení církevní půdy a lesů. Jeden pohled zastával názor, že církevní majetek slouží k financování farností, charitativní péče a kulturních památek, a měl by proto zůstat zachován. Druhý pohled požadoval, aby se na církevní velkostatky vztahovala stejná pravidla vyvlastnění a parcelace jako na ostatní velkou pozemkovou držbu.',
        partyStances: { ksc: -1, csns: -1, csl: 1, ds: 1, cssd: -1, kss: -1 }
      }
    ],
    electionSystem: {
      body: 'Ústavodárné národní shromáždění (jednokomorový parlament o celkových 300 poslancích). Poměr mandátů nebyl pevně daný, ale odvodil se až z volební účasti – nakonec připadlo 231 křesel na české země a 69 na Slovensko. Hlavním úkolem sboru bylo vypracování nové poválečné ústavy.',
      system: 'Poměrný volební systém ve 28 krajích. Kandidovat směly výhradně povolené strany sdružené v Národní frontě (4 v českých zemích, 4 na Slovensku). Všechny ostatní opoziční strany byly zakázány. Hlasovalo se vázanými kandidátkami.',
      franchise: 'Všichni českoslovenští státní občané od 18 let (věk byl snížen z předválečných 21 let). Z volebního práva však byli na základě dekretů zcela vyloučeni občané německé a maďarské národnosti a osoby označené za kolaboranty a zrádce.',
      eligibility: 'Každý občan s aktivním volebním právem, který dosáhl věku 21 let a byl zařazen na schválenou kandidátní listinu jedné ze stran Národní fronty.',
      trivia: [
        'Volební povinnost: I v roce 1946 byla účast u voleb pro oprávněné voliče povinná pod sankcí pokuty nebo vězení.',
        'Institut bílých lístků: Voliči, kteří nesouhlasili s nabídkou povolených stran Národní fronty, mohli do obálky vložit čistý bílý lístek. Celostátně jich bylo vhozeno zhruba 32 tisíc (0,45 % všech hlasů).',
        'Zákaz pravice: Tradiční a nejsilnější prvorepublikové strany – agrárníci (RSČV) a národní demokraté (ČsND) – měly zakázáno obnovit činnost.',
        'Slovenský paradox: Ačkoliv komunisté na Slovensku volby drtivě prohráli (vyhrála Demokratická strana s 62 %), tzv. třetí pražská dohoda podepsaná brzy po volbách účelově podřídila slovenské orgány (Sbor pověřenců) centrální pražské vládě řízené Klementem Gottwaldem.'
      ]
    }
  },
  1990: {
    year: 1990,
    title: 'Volby do Federálního shromáždění 1990',
    subtitle: 'První svobodné a demokratické volby po 44 letech nadvlády jedné strany',
    date: '8. a 9. června 1990',
    turnout: '96,8 %',
    stakes: 'Rozhodovalo se o definitivním potvrzení pádu totality, tempu a charakteru ekonomické transformace a o budoucím soužití Čechů a Slováků ve společném státě.',
    atmosphereQuote: '„Strany jsou pro straníky, Občanské fórum je pro všechny!“ – volební heslo OF',
    historicalContext: `V červnu 1990 zažilo Československo první skutečně svobodné volby od roku 1946. V euforické atmosféře po sametové revoluci (listopad 1989), zrušení článku 4 Ústavy o vedoucí úloze KSČ a zvolení Václava Havla prezidentem se k volebním urnám dostavilo neuvěřitelných 96,8 % oprávněných voličů.

Volby fungovaly především jako plebiscit o odmítnutí čtyřicetileté komunistické totality. Za širokým deštníkem revolučních hnutí (Občanské fórum v Česku, Verejnosť proti násiliu na Slovensku) se však již rýsovaly klíčové střety: Jak rychle přejít na tržní ekonomiku? Má se zvolit radikální cesta (Václav Klaus) nebo opatrnější sociální varianta (Valtr Komárek)? Jak se vypořádat s exponenty totality a tajnou policií StB (lustrace)? A jak uspořádat vztahy mezi Čechy a Slováky po vypjaté „pomlčkové válce“?`,
    outcomeSummary: `Občanské fórum (OF) v Česku získalo drtivých 53,15 % hlasů do Sněmovny lidu FS (celostátně 36,05 %), zatímco na Slovensku zvítězila Verejnosť proti násiliu (VPN) s 32,54 %. Komunistická strana (KSČS) skončila s 13,6 % druhá, což potvrdilo přítomnost nezanedbatelného postkomunistického elektorátu. Výrazného úspěchu dosáhlo na Moravě moravistické Hnutí za samosprávnou demokracii (HSD-SMS) s více než 10 % hlasů do Sněmovny lidu v ČR.

Byla vytvořena koaliční federální vláda v čele s Marianem Čalfou (OF/VPN). Volby roku 1990 potvrdily návrat Československa k demokracii, ale mandát na dva roky předznamenal dramatické události: rozpad revolučních hnutí, spor o kuponovou privatizaci a následný rozpad společného státu v roce 1992.`,
    parties: [
      {
        id: 'of',
        shortName: 'OF',
        fullName: 'Občanské fórum',
        ideology: 'Široké antiautoritářské hnutí, liberální demokracie, tržní reformy',
        leaders: ['Václav Klaus', 'Jiří Dienstbier', 'Jan Urban', 'Petr Pithart'],
        color: '#2563eb',
        historicalPercentage: 36.05,
        historicalSeats: 68,
        description: 'Široké spontánní občanské hnutí, které se zrodilo během studentských a divadelních demonstrací v listopadu 1989 jako hlavní mluvčí sametové revoluce. Sjednotilo disidenty z Charty 77, reformní komunisty z roku 1968, nezávislé ekonomy i nestranické osobnosti. V čele stáli Václav Klaus, Jiří Dienstbier, Jan Urban či Petr Pithart. V prvních svobodných volbách v červnu 1990 triumfovalo se ziskem 53 % hlasů v ČR. Jeho prioritou byla obnova pluralitní demokracie, právního státu a rychlý návrat Československa do svobodné Evropy prostřednictvím zásadní transformace centrálně plánované ekonomiky na tržní hospodářství.',
        programHighlight: 'Návrat do Evropy, právní stát, rychlá privatizace a tržní ekonomika, svoboda jednotlivce.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Ob%C4%8Dansk%C3%A9_f%C3%B3rum'
      },
      {
        id: 'vpn',
        shortName: 'VPN',
        fullName: 'Verejnosť proti násiliu',
        ideology: 'Občanské demokratické hnutí, humanismus, reformismus',
        leaders: ['Fedor Gál', 'Vladimír Mečiar', 'Marián Čalfa', 'Milan Kňažko'],
        color: '#0284c7',
        historicalPercentage: 8.56,
        historicalSeats: 19,
        description: 'Slovenský revoluční partner Občanského fóra, který vedl sametovou revoluci na Slovensku a v červnu 1990 tam s přehledem vyhrál volby (získal 32,5 % hlasů). Vzniklo v bratislavské Umelecké besedě a jeho vůdčími postavami byli sociolog Fedor Gál, charismatický herec Milan Kňažko, premiér Vladimír Mečiar a federální premiér Marián Čalfa. Hnutí prosazovalo demokratizaci, lidská práva a integraci do evropských struktur, přičemž kladlo důraz na zrovnoprávnění slovenské národní identity v moderní federaci a na sociální citlivost ekonomických reforem v podmínkách zranitelného slovenského průmyslu.',
        programHighlight: 'Demokratizace společnosti, federalismus s respektem k slovenské svébytnosti a sociálně citlivá transformace.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Verejno%C4%BE_proti_n%C3%A1siliu'
      },
      {
        id: 'kscs',
        shortName: 'KSČS',
        fullName: 'Komunistická strana Československa',
        ideology: 'Demokratický socialismus, reformní komunismus, obhajoba socialismu',
        leaders: ['Ladislav Adamec', 'Vasil Mohorita', 'Jiří Svoboda'],
        color: '#dc2626',
        historicalPercentage: 13.59,
        historicalSeats: 23,
        description: 'Původní státostrana, která po listopadu 1989 ztratila ústavní monopol na moc a ocitla se v opozici. Prošla taktickou federalizací (vznikla KSČM v Česku a KSS na Slovensku) a do jejího čela se postavili Ladislav Adamec, Vasil Mohorita a filmový režisér Jiří Svoboda. Volební zisk přes 13,5 % hlasů potvrdil existenci silného disciplinovaného elektorátu bývalých členů, aparátčíků i občanů obávajících se kapitalismu. Strana nabízela reformní komunismus a demokratický socialismus, bránila sociální jistoty a varovala před masovou nezaměstnaností, plošnými lustracemi a výprodejem národního bohatství zahraničnímu kapitálu.',
        programHighlight: 'Zachování sociálních jistot, odpor k divoké privatizaci a plošným lustracím, vojenská neutralita.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_%C4%8Ceskoslovenska'
      },
      {
        id: 'kdu',
        shortName: 'KDU / KDH',
        fullName: 'Křesťanská a demokratická unie (ČR) / KDH (SR)',
        ideology: 'Křesťanská demokracie, sociálně-tržní hospodářství, etika',
        leaders: ['Josef Bartončík', 'Ján Čarnogurský', 'Václav Benda'],
        color: '#eab308',
        historicalPercentage: 10.84,
        historicalSeats: 20,
        description: 'Předvolební koalice křesťanskodemokratických sil v ČSFR. V českých zemích tvořila KDU volební svazek tradiční Československé strany lidové (ČSL), Křesťanskodemokratické strany Václava Bendy (KDS) a nezávislých křesťanů. Těsně před volbami v době volebního moratoria ji těžce zasáhla aféra jejího lídra Josefa Bartončíka, obviněného z tajné spolupráce s StB. Na Slovensku naopak samostatné KDH vedené disidentem Jánem Čarnogurským zaznamenalo obrovský úspěch (druhá nejsilnější strana s 19 % hlasů). Hnutí hájilo křesťanskou etiku, restituce zabaveného majetku, ochranu tradiční rodiny a sociálně-tržní hospodářství.',
        programHighlight: 'Restituce církevního a soukromého majetku, ochrana rodiny, křesťanská morálka a sociálně-tržní řád.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/KDU-%C4%8CSL'
      },
      {
        id: 'hsd_sms',
        shortName: 'HSD-SMS',
        fullName: 'Hnutí za samosprávnou demokracii – Společnost pro Moravu a Slezsko',
        ideology: 'Moravský regionalismus, samospráva, decentralizace',
        leaders: ['Boleslav Bárta', 'Jaroslav Mezník'],
        color: '#9333ea',
        historicalPercentage: 5.39,
        historicalSeats: 9,
        description: 'Fenomenální překvapení voleb 1990 a svébytný hlas Moravy a Slezska. Vzniklo na vlně odporu proti centralistickému řízení z Prahy a za jeho raketovým vzestupem stál brněnský psycholog a disident Boleslav Bárta. Na Moravě získalo masovou podporu (v Jihomoravském kraji téměř 30 % hlasů) a celostátně obsadilo 9 křesel ve Sněmovně lidu a 16 mandátů v České národní radě. Požadovalo nápravu zrušení zemského zřízení z roku 1949, obnovu moravskoslezské samosprávy, zemský sněm, daňovou autonomii a přeměnu ČSFR na trojspolkovou federaci (Čechy, Morava a Slezsko, Slovensko).',
        programHighlight: 'Obnova moravskoslezské samosprávy, trojfederace (Čechy, Morava a Slezsko, Slovensko) a zemský sněm.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Hnut%C3%AD_za_samospr%C3%A1vnou_demokracii_%E2%80%93_Spole%C4%8Dnost_pro_Moravu_a_Slezsko'
      },
      {
        id: 'sns',
        shortName: 'SNS',
        fullName: 'Slovenská národná strana',
        ideology: 'Slovenský nacionalismus, suverenita',
        leaders: ['Víťazoslav Móric', 'Stanislav Pánis'],
        color: '#84cc16',
        historicalPercentage: 3.67,
        historicalSeats: 6,
        description: 'Národně orientovaná strana, která se přihlásila k odkazu historické SNS z 19. století a rychle obsadila radikální křídlo slovenské politické scény. V jejím čele stáli Víťazoslav Móric a Stanislav Pánis. V prvních volbách získala 14 % hlasů na Slovensku a jako jediná relevantní parlamentní formace otevřeně zpochybňovala smysl společného československého státu. Požadovala úplné osamostatnění Slovenska, uzákonění slovenštiny jako jediného úředního jazyka bez výjimek pro menšiny a svrchovanou slovenskou reprezentaci v mezinárodních institucích.',
        programHighlight: 'Plná státní suverenita Slovenska, slovenština jako jediný úřední jazyk a samostatné vystupování v zahraničí.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Slovensk%C3%A1_n%C3%A1rodn%C3%A1_strana'
      },
      {
        id: 'css',
        shortName: 'ČSS (Socialisté)',
        fullName: 'Československá strana socialistická',
        ideology: 'Středový sociální liberalismus, reformismus',
        leaders: ['Jiří Vyvadil', 'Milan Nevima'],
        color: '#ea580c',
        historicalPercentage: 2.68,
        historicalSeats: 0,
        description: 'Historická národně-sociální strana, která v dobách komunistického režimu přežívala v Národní frontě jako satelitní formace. V listopadu 1989 však sehrála slavnou roli, když se její vedení postavilo režimu a propůjčilo balkón svého nakladatelství Melantrich na Václavském náměstí Václavu Havlovi a Občanskému fóru pro masové demonstrace. Ve svobodné soutěži v červnu 1990 ji vedli Jiří Vyvadil a Milan Nevima. Nabízela středový národní reformismus, obranu sociálních práv a zájmy zaměstnanců, avšak se ziskem 2,7 % hlasů v ČR těsně nepřekročila nově zavedenou 5% uzavírací klauzuli.',
        programHighlight: 'Postupná sociálně-tržní transformace, posílení národní hrdosti a ochrana zaměstnanců.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_socialistick%C3%A1'
      },
      {
        id: 'sz',
        shortName: 'SZ (Zelení)',
        fullName: 'Strana zelených',
        ideology: 'Environmentální politika, ekologie, antinukleární hnutí',
        leaders: ['Aleš Šulc', 'Jaroslav Slanec'],
        color: '#16a34a',
        historicalPercentage: 3.1,
        historicalSeats: 0,
        description: 'Ekologická formace zrozená bezprostředně po sametové revoluci v reakci na katastrofální ekologickou bilanci čtyřicetileté komunistické vlády – zdevastované ovzduší, kyselé deště, zničené lesy v Krušných horách a chronicky nemocné děti v uhelných pánvích severních Čech. Zpočátku se těšila masivním sympatiím veřejnosti, před volbami ji však oslabily vnitřní spory a ideová neujasněnost mezi pravicovými a levicovými proudy. S výsledkem 3,1 % hlasů zůstala těsně pod 5% hranicí, avšak její témata ochrany klimatu a čistého vzduchu zásadně ovlivnila vládní program nového kabinetu.',
        programHighlight: 'Okamžité zastavení těžby uhlí v severních Čechách, ochrana ovzduší a pitné vody jako vládní priorita.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Strana_zelen%C3%BDch'
      }
    ],
    questions: [
      {
        id: 1,
        title: 'Tempo ekonomické transformace',
        category: 'Ekonomická transformace',
        statement: 'Přechod na tržní hospodářství by měl proběhnout rychle, i za cenu dočasného poklesu životní úrovně obyvatel.',
        historicalNote: 'Při přechodu od centrálně plánované ekonomiky k tržnímu hospodářství se v roce 1990 řešila strategie a tempo reforem. Zvažovalo se, zda provést rychlé uvolnění cen a tržních vztahů za cenu krátkodobých sociálních otřesů, anebo zvolit postupnější přechod rozložený do delšího období.',
        context: 'Při přechodu od centrálně plánované ekonomiky k tržnímu hospodářství se v roce 1990 řešila strategie a tempo reforem. Zvažovalo se, zda provést rychlé uvolnění cen a tržních vztahů za cenu krátkodobých sociálních otřesů, anebo zvolit postupnější přechod rozložený do delšího období.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 0, hsd_sms: 0, sns: -1, css: -1, sz: 0 }
      },
      {
        id: 2,
        title: 'Kuponová privatizace',
        category: 'Ekonomika a privatizace',
        statement: 'Akcie státních podniků by měly být občanům nabídnuty prostřednictvím investičních kuponů za symbolický poplatek.',
        historicalNote: 'Kuponová privatizace byla navržena jako metoda rychlého převodu velkého množství státních podniků do soukromých rukou při nedostatku domácího kapitálu. Řešilo se, zda je toto masové zapojení občanů vhodnou cestou k nalezení nových vlastníků, nebo zda upřednostnit standardní prodeje podniků konkrétním kupcům.',
        context: 'Kuponová privatizace byla navržena jako metoda rychlého převodu velkého množství státních podniků do soukromých rukou při nedostatku domácího kapitálu. Řešilo se, zda je toto masové zapojení občanů vhodnou cestou k nalezení nových vlastníků, nebo zda upřednostnit standardní prodeje podniků konkrétním kupcům.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: -1, sz: 0 }
      },
      {
        id: 3,
        title: 'Státní ochrana zaměstnanosti',
        category: 'Sociální jistoty a práce',
        statement: 'Stát by měl v době ekonomických změn bránit vzniku vyšší nezaměstnanosti dotováním ohrožených podniků.',
        historicalNote: 'S přípravou hospodářských reforem panovaly obavy ze zavírání neefektivních provozů a ztráty pracovních míst. Diskutovalo se o tom, do jaké míry má stát aktivně tlumit dopady trhu a udržovat zaměstnanost v ohrožených odvětvích a regionech, či zda nechat plně působit tržní prostředí.',
        context: 'S přípravou hospodářských reforem panovaly obavy ze zavírání neefektivních provozů a ztráty pracovních míst. Diskutovalo se o tom, do jaké míry má stát aktivně tlumit dopady trhu a udržovat zaměstnanost v ohrožených odvětvích a regionech, či zda nechat plně působit tržní prostředí.',
        partyStances: { of: -1, vpn: 0, kscs: 1, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 4,
        title: 'Lustrace a očista veřejného života',
        category: 'Vyrovnání s minulostí',
        statement: 'Bývalí spolupracovníci StB a vysocí funkcionáři minulého režimu by měli být zákonem vyloučeni z veřejných funkcí.',
        historicalNote: 'V otázce vyrovnání se s minulostí se zvažovalo zavedení lustračních pravidel pro státní správu, justici a veřejnoprávní média. Na jedné straně stála snaha očistit státní a bezpečnostní orgány od pracovníků represivního aparátu, na straně druhé obavy z uplatnění principu kolektivní viny a z nespolehlivosti dochovaných archivních záznamů.',
        context: 'V otázce vyrovnání se s minulostí se zvažovalo zavedení lustračních pravidel pro státní správu, justici a veřejnoprávní média. Na jedné straně stála snaha očistit státní a bezpečnostní orgány od pracovníků represivního aparátu, na straně druhé obavy z uplatnění principu kolektivní viny a z nespolehlivosti dochovaných archivních záznamů.',
        partyStances: { of: 1, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: -1, sz: 0 }
      },
      {
        id: 5,
        title: 'Zákaz Komunistické strany',
        category: 'Politický systém a demokracie',
        statement: 'Komunistická strana by měla být postavena mimo zákon.',
        historicalNote: 'Po skončení vlády jedné strany vyvstala otázka dalšího právního působení dosavadní vládnoucí strany. Jeden pohled požadoval její zákaz a vyloučení z politického života z důvodu odpovědnosti za předchozí čtyřicetileté období, druhý pohled prosazoval její ponechání v demokratické politické soutěži podle nových ústavních pravidel.',
        context: 'Po skončení vlády jedné strany vyvstala otázka dalšího právního působení dosavadní vládnoucí strany. Jeden pohled požadoval její zákaz a vyloučení z politického života z důvodu odpovědnosti za předchozí čtyřicetileté období, druhý pohled prosazoval její ponechání v demokratické politické soutěži podle nových ústavních pravidel.',
        partyStances: { of: 0, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: 0, sz: 0 }
      },
      {
        id: 6,
        title: 'Restituce soukromého majetku občanů',
        category: 'Vlastnictví a restituce',
        statement: 'Majetek zabavený občanům po únoru 1948 by měl být v rámci restitucí vrácen původním vlastníkům nebo jejich dědicům.',
        historicalNote: 'Při nápravě majetkových křivd minulého režimu se vedla debata o rozsahu a formě restitucí domů, živností a polností. Řešila se otázka, zda vrátit původní majetek v naturální podobě i za cenu majetkoprávních sporů a nejistoty stávajících uživatelů, anebo poskytnout pouze finanční odškodnění či majetek nevracet.',
        context: 'Při nápravě majetkových křivd minulého režimu se vedla debata o rozsahu a formě restitucí domů, živností a polností. Řešila se otázka, zda vrátit původní majetek v naturální podobě i za cenu majetkoprávních sporů a nejistoty stávajících uživatelů, anebo poskytnout pouze finanční odškodnění či majetek nevracet.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: 0, sz: 1 }
      },
      {
        id: 7,
        title: 'Zachování silné federace',
        category: 'Státoprávní uspořádání',
        statement: 'Československá federace by měla mít silné společné pravomoci v hospodářské, měnové a zahraniční politice.',
        historicalNote: 'Debata o státoprávním uspořádání řešila rozdělení kompetencí mezi federálními orgány v Praze a národními vládami v obou republikách. Jeden přístup kladl důraz na silné společné federální instituce pro zachování jednotného hospodářského prostoru a soudržnosti státu, druhý požadoval přesun většiny pravomocí na úroveň národních republik.',
        context: 'Debata o státoprávním uspořádání řešila rozdělení kompetencí mezi federálními orgány v Praze a národními vládami v obou republikách. Jeden přístup kladl důraz na silné společné federální instituce pro zachování jednotného hospodářského prostoru a soudržnosti státu, druhý požadoval přesun většiny pravomocí na úroveň národních republik.',
        partyStances: { of: 1, vpn: 0, kscs: 1, kdu: 1, hsd_sms: 1, sns: -1, css: 1, sz: 1 }
      },
      {
        id: 8,
        title: 'Státní suverenita Slovenska',
        category: 'Státoprávní uspořádání',
        statement: 'Slovensko by mělo získat plnou národní suverenitu a vytvořit s Českou republikou pouze volné soustátí nebo samostatný stát.',
        historicalNote: 'Po uvolnění politických poměrů a sporu o nový název republiky se otevřela diskuse o postavení Slovenska. Zvažovalo se, zda má Slovensko usilovat o vlastní mezinárodní subjektivitu v podobě volné konfederace či plné státní samostatnosti, nebo zda pokračovat ve společném federálním státě.',
        context: 'Po uvolnění politických poměrů a sporu o nový název republiky se otevřela diskuse o postavení Slovenska. Zvažovalo se, zda má Slovensko usilovat o vlastní mezinárodní subjektivitu v podobě volné konfederace či plné státní samostatnosti, nebo zda pokračovat ve společném federálním státě.',
        partyStances: { of: -1, vpn: -1, kscs: -1, kdu: -1, hsd_sms: -1, sns: 1, css: -1, sz: -1 }
      },
      {
        id: 9,
        title: 'Zemská samospráva pro Moravu a Slezsko',
        category: 'Státoprávní uspořádání',
        statement: 'V rámci Československa by mělo být obnoveno historické zemské zřízení pro Moravu a Slezsko s vlastním sněmem a rozpočtem.',
        historicalNote: 'Při hledání nové podoby vnitřního členění státu vyvstala otázka nápravy zrušení Moravskoslezské země z roku 1949. Diskutovalo se o tom, zda obnovit zemskou samosprávu Moravy a Slezska a přeměnit stát na trojspolkovou federaci, anebo zachovat dvojčlennou federaci České a Slovenské republiky.',
        context: 'Při hledání nové podoby vnitřního členění státu vyvstala otázka nápravy zrušení Moravskoslezské země z roku 1949. Diskutovalo se o tom, zda obnovit zemskou samosprávu Moravy a Slezska a přeměnit stát na trojspolkovou federaci, anebo zachovat dvojčlennou federaci České a Slovenské republiky.',
        partyStances: { of: -1, vpn: 0, kscs: 0, kdu: 0, hsd_sms: 1, sns: 0, css: 1, sz: 0 }
      },
      {
        id: 10,
        title: 'Členství v Evropském společenství',
        category: 'Zahraniční politika',
        statement: 'Československo by mělo usilovat o plné členství v Evropském společenství.',
        historicalNote: 'Evropské společenství (ES) bylo přímým institucionálním předchůdcem dnešní Evropské unie (ta vznikla až Maastrichtskou smlouvou v roce 1992). V době rozpadu východního bloku hledalo Československo nové mezinárodní a hospodářské ukotvení pod heslem „Zpátky do Evropy“. Část politického spektra spatřovala v členství v ES přirozený civilizační cíl a záruku stability, zatímco kritičtější hlasy nabádaly k opatrnosti před jednostrannou hospodářskou závislostí.',
        context: 'Evropské společenství (ES) bylo přímým institucionálním předchůdcem dnešní Evropské unie (ta vznikla až Maastrichtskou smlouvou v roce 1992). V době rozpadu východního bloku hledalo Československo své nové zahraničněpolitické a hospodářské ukotvení v rámci hesla „Zpátky do Evropy“. Jeden proud považoval plné zapojení do západoevropské integrace za klíčový civilizační a ekonomický cíl, druhý varoval před jednostrannou závislostí na západoevropských strukturách.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: 0, sz: 0 }
      },
      {
        id: 11,
        title: 'Vojenská neutralita Československa',
        category: 'Zahraniční a bezpečnostní politika',
        statement: 'Československo by mělo vyhlásit trvalou vojenskou neutralitu a nevstupovat do žádných vojenských aliancí.',
        historicalNote: 'Jako jedna z možností budoucího mezinárodního postavení země byla v roce 1990 zvažována trvalá vojenská neutralita po vzoru Rakouska či Švýcarska. Diskutovalo se o tom, zda by neutralita zajistila státu nezávislost mezi velmocemi, anebo zda bezpečnost země vyžaduje zapojení do širší západní či celoevropské bezpečnostní struktury.',
        context: 'Jako jedna z možností budoucího mezinárodního postavení země byla v roce 1990 zvažována trvalá vojenská neutralita po vzoru Rakouska či Švýcarska. Diskutovalo se o tom, zda by neutralita zajistila státu nezávislost mezi velmocemi, anebo zda bezpečnost země vyžaduje zapojení do širší západní či celoevropské bezpečnostní struktury.',
        partyStances: { of: -1, vpn: -1, kscs: 1, kdu: -1, hsd_sms: 0, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 12,
        title: 'Rychlý odchod sovětských vojsk',
        category: 'Zahraniční a bezpečnostní politika',
        statement: 'Odchod sovětských vojsk z československého území by měl proběhnout v nejbližším možném termínu bez ohledu na další mezinárodní jednání.',
        historicalNote: 'Od srpna 1968 pobývala na území státu početná sovětská vojenská posádka. Na jaře 1990 se řešilo, jak rychle a za jakých logistických i diplomatických podmínek má proběhnout její úplné stažení a zda lze akceptovat odklady zdůvodňované bytovými a přepravními obtížemi sovětské strany.',
        context: 'Od srpna 1968 pobývala na území státu početná sovětská vojenská posádka. Na jaře 1990 se řešilo, jak rychle a za jakých logistických i diplomatických podmínek má proběhnout její úplné stažení a zda lze akceptovat odklady zdůvodňované bytovými a přepravními obtížemi sovětské strany.',
        partyStances: { of: 1, vpn: 1, kscs: 0, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 13,
        title: 'Priorita ochrany životního prostředí',
        category: 'Ekologie a životní prostředí',
        statement: 'Zlepšení stavu životního prostředí a čistoty ovzduší by mělo mít přednost před tempem průmyslové výroby.',
        historicalNote: 'Dlouhodobé znečištění ovzduší, vod a lesů z těžkého průmyslu a hnědouhelných elektráren představovalo v roce 1990 vážný zdravotní i ekologický problém. Diskuse se vedla o tom, zda okamžitě omezit nejekologičtější provozy a těžbu i za cenu hospodářských ztrát, nebo zda upřednostnit zachování výroby a řešit ekologii až postupně.',
        context: 'Dlouhodobé znečištění ovzduší, vod a lesů z těžkého průmyslu a hnědouhelných elektráren představovalo v roce 1990 vážný zdravotní i ekologický problém. Diskuse se vedla o tom, zda okamžitě omezit nejekologičtější provozy a těžbu i za cenu hospodářských ztrát, nebo zda upřednostnit zachování výroby a řešit ekologii až postupně.',
        partyStances: { of: 1, vpn: 1, kscs: 0, kdu: 1, hsd_sms: 1, sns: 0, css: 1, sz: 1 }
      },
      {
        id: 14,
        title: 'Zpřísnění podmínek pro interrupce',
        category: 'Etika a zdravotnictví',
        statement: 'Zákonné podmínky pro umělá přerušení těhotenství by měly být zpřísněny.',
        historicalNote: 'V debatách o hodnotovém směřování společnosti po roce 1989 se střetávaly rozdílné pohledy na potratovou legislativu přijatou v polovině 80. let. Jeden pohled požadoval právní ochranu počatého života a omezení interrupcí pouze na závažné zdravotní důvody, druhý pohled hájil zachování práva ženy na svobodné rozhodnutí.',
        context: 'V debatách o hodnotovém směřování společnosti po roce 1989 se střetávaly rozdílné pohledy na potratovou legislativu přijatou v polovině 80. let. Jeden pohled požadoval právní ochranu počatého života a omezení interrupcí pouze na závažné zdravotní důvody, druhý pohled hájil zachování práva ženy na svobodné rozhodnutí.',
        partyStances: { of: -1, vpn: -1, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: -1, sz: -1 }
      },
      {
        id: 15,
        title: 'Občanská hnutí oproti politickým stranám',
        category: 'Politický systém a demokracie',
        statement: 'Hlavní roli v politickém životě by měla hrát široká občanská hnutí namísto klasických ideologických stran.',
        historicalNote: 'Po pádu monopolu jedné strany se v roce 1990 řešila podoba vznikajícího politického systému. Diskutovalo se o tom, zda jsou pro přechod k demokracii vhodnější široká nadstranická hnutí sdružující osobnosti různých názorů, nebo zda je pro parlamentní demokracii žádoucí soutěž standardních politických stran s vyhraněným programem.',
        context: 'Po pádu monopolu jedné strany se v roce 1990 řešila podoba vznikajícího politického systému. Diskutovalo se o tom, zda jsou pro přechod k demokracii vhodnější široká nadstranická hnutí sdružující osobnosti různých názorů, nebo zda je pro parlamentní demokracii žádoucí soutěž standardních politických stran s vyhraněným programem.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: -1, hsd_sms: 1, sns: -1, css: -1, sz: 0 }
      }
    ],
    expandedQuestions: [
      {
        id: 1,
        title: 'Tempo ekonomické transformace',
        category: 'Ekonomická transformace',
        statement: 'Přechod na tržní hospodářství by měl proběhnout rychle, i za cenu dočasného poklesu životní úrovně obyvatel.',
        historicalNote: 'Při přechodu od centrálně plánované ekonomiky k tržnímu hospodářství se v roce 1990 řešila strategie a tempo reforem. Zvažovalo se, zda provést rychlé uvolnění cen a tržních vztahů za cenu krátkodobých sociálních otřesů, anebo zvolit postupnější přechod rozložený do delšího období.',
        context: 'Při přechodu od centrálně plánované ekonomiky k tržnímu hospodářství se v roce 1990 řešila strategie a tempo reforem. Zvažovalo se, zda provést rychlé uvolnění cen a tržních vztahů za cenu krátkodobých sociálních otřesů, anebo zvolit postupnější přechod rozložený do delšího období.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 0, hsd_sms: 0, sns: -1, css: -1, sz: 0 }
      },
      {
        id: 2,
        title: 'Kuponová privatizace',
        category: 'Ekonomika a privatizace',
        statement: 'Akcie státních podniků by měly být občanům nabídnuty prostřednictvím investičních kuponů za symbolický poplatek.',
        historicalNote: 'Kuponová privatizace byla navržena jako metoda rychlého převodu velkého množství státních podniků do soukromých rukou při nedostatku domácího kapitálu. Řešilo se, zda je toto masové zapojení občanů vhodnou cestou k nalezení nových vlastníků, nebo zda upřednostnit standardní prodeje podniků konkrétním kupcům.',
        context: 'Kuponová privatizace byla navržena jako metoda rychlého převodu velkého množství státních podniků do soukromých rukou při nedostatku domácího kapitálu. Řešilo se, zda je toto masové zapojení občanů vhodnou cestou k nalezení nových vlastníků, nebo zda upřednostnit standardní prodeje podniků konkrétním kupcům.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: -1, sz: 0 }
      },
      {
        id: 3,
        title: 'Státní ochrana zaměstnanosti',
        category: 'Sociální jistoty a práce',
        statement: 'Stát by měl v době ekonomických změn bránit vzniku vyšší nezaměstnanosti dotováním ohrožených podniků.',
        historicalNote: 'S přípravou hospodářských reforem panovaly obavy ze zavírání neefektivních provozů a ztráty pracovních míst. Diskutovalo se o tom, do jaké míry má stát aktivně tlumit dopady trhu a udržovat zaměstnanost v ohrožených odvětvích a regionech, či zda nechat plně působit tržní prostředí.',
        context: 'S přípravou hospodářských reforem panovaly obavy ze zavírání neefektivních provozů a ztráty pracovních míst. Diskutovalo se o tom, do jaké míry má stát aktivně tlumit dopady trhu a udržovat zaměstnanost v ohrožených odvětvích a regionech, či zda nechat plně působit tržní prostředí.',
        partyStances: { of: -1, vpn: 0, kscs: 1, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 4,
        title: 'Lustrace a očista veřejného života',
        category: 'Vyrovnání s minulostí',
        statement: 'Bývalí spolupracovníci StB a vysocí funkcionáři minulého režimu by měli být zákonem vyloučeni z veřejných funkcí.',
        historicalNote: 'V otázce vyrovnání se s minulostí se zvažovalo zavedení lustračních pravidel pro státní správu, justici a veřejnoprávní média. Na jedné straně stála snaha očistit státní a bezpečnostní orgány od pracovníků represivního aparátu, na straně druhé obavy z uplatnění principu kolektivní viny a z nespolehlivosti dochovaných archivních záznamů.',
        context: 'V otázce vyrovnání se s minulostí se zvažovalo zavedení lustračních pravidel pro státní správu, justici a veřejnoprávní média. Na jedné straně stála snaha očistit státní a bezpečnostní orgány od pracovníků represivního aparátu, na straně druhé obavy z uplatnění principu kolektivní viny a z nespolehlivosti dochovaných archivních záznamů.',
        partyStances: { of: 1, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: -1, sz: 0 }
      },
      {
        id: 5,
        title: 'Zákaz Komunistické strany',
        category: 'Politický systém a demokracie',
        statement: 'Komunistická strana by měla být postavena mimo zákon.',
        historicalNote: 'Po skončení vlády jedné strany vyvstala otázka dalšího právního působení dosavadní vládnoucí strany. Jeden pohled požadoval její zákaz a vyloučení z politického života z důvodu odpovědnosti za předchozí čtyřicetileté období, druhý pohled prosazoval její ponechání v demokratické politické soutěži podle nových ústavních pravidel.',
        context: 'Po skončení vlády jedné strany vyvstala otázka dalšího právního působení dosavadní vládnoucí strany. Jeden pohled požadoval její zákaz a vyloučení z politického života z důvodu odpovědnosti za předchozí čtyřicetileté období, druhý pohled prosazoval její ponechání v demokratické politické soutěži podle nových ústavních pravidel.',
        partyStances: { of: 0, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: 0, sz: 0 }
      },
      {
        id: 6,
        title: 'Restituce soukromého majetku občanů',
        category: 'Vlastnictví a restituce',
        statement: 'Majetek zabavený občanům po únoru 1948 by měl být v rámci restitucí vrácen původním vlastníkům nebo jejich dědicům.',
        historicalNote: 'Při nápravě majetkových křivd minulého režimu se vedla debata o rozsahu a formě restitucí domů, živností a polností. Řešila se otázka, zda vrátit původní majetek v naturální podobě i za cenu majetkoprávních sporů a nejistoty stávajících uživatelů, anebo poskytnout pouze finanční odškodnění či majetek nevracet.',
        context: 'Při nápravě majetkových křivd minulého režimu se vedla debata o rozsahu a formě restitucí domů, živností a polností. Řešila se otázka, zda vrátit původní majetek v naturální podobě i za cenu majetkoprávních sporů a nejistoty stávajících uživatelů, anebo poskytnout pouze finanční odškodnění či majetek nevracet.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: 0, sz: 1 }
      },
      {
        id: 7,
        title: 'Zachování silné federace',
        category: 'Státoprávní uspořádání',
        statement: 'Československá federace by měla mít silné společné pravomoci v hospodářské, měnové a zahraniční politice.',
        historicalNote: 'Debata o státoprávním uspořádání řešila rozdělení kompetencí mezi federálními orgány v Praze a národními vládami v obou republikách. Jeden přístup kladl důraz na silné společné federální instituce pro zachování jednotného hospodářského prostoru a soudržnosti státu, druhý požadoval přesun většiny pravomocí na úroveň národních republik.',
        context: 'Debata o státoprávním uspořádání řešila rozdělení kompetencí mezi federálními orgány v Praze a národními vládami v obou republikách. Jeden přístup kladl důraz na silné společné federální instituce pro zachování jednotného hospodářského prostoru a soudržnosti státu, druhý požadoval přesun většiny pravomocí na úroveň národních republik.',
        partyStances: { of: 1, vpn: 0, kscs: 1, kdu: 1, hsd_sms: 1, sns: -1, css: 1, sz: 1 }
      },
      {
        id: 8,
        title: 'Státní suverenita Slovenska',
        category: 'Státoprávní uspořádání',
        statement: 'Slovensko by mělo získat plnou národní suverenitu a vytvořit s Českou republikou pouze volné soustátí nebo samostatný stát.',
        historicalNote: 'Po uvolnění politických poměrů a sporu o nový název republiky se otevřela diskuse o postavení Slovenska. Zvažovalo se, zda má Slovensko usilovat o vlastní mezinárodní subjektivitu v podobě volné konfederace či plné státní samostatnosti, nebo zda pokračovat ve společném federálním státě.',
        context: 'Po uvolnění politických poměrů a sporu o nový název republiky se otevřela diskuse o postavení Slovenska. Zvažovalo se, zda má Slovensko usilovat o vlastní mezinárodní subjektivitu v podobě volné konfederace či plné státní samostatnosti, nebo zda pokračovat ve společném federálním státě.',
        partyStances: { of: -1, vpn: -1, kscs: -1, kdu: -1, hsd_sms: -1, sns: 1, css: -1, sz: -1 }
      },
      {
        id: 9,
        title: 'Zemská samospráva pro Moravu a Slezsko',
        category: 'Státoprávní uspořádání',
        statement: 'V rámci Československa by mělo být obnoveno historické zemské zřízení pro Moravu a Slezsko s vlastním sněmem a rozpočtem.',
        historicalNote: 'Při hledání nové podoby vnitřního členění státu vyvstala otázka nápravy zrušení Moravskoslezské země z roku 1949. Diskutovalo se o tom, zda obnovit zemskou samosprávu Moravy a Slezska a přeměnit stát na trojspolkovou federaci, anebo zachovat dvojčlennou federaci České a Slovenské republiky.',
        context: 'Při hledání nové podoby vnitřního členění státu vyvstala otázka nápravy zrušení Moravskoslezské země z roku 1949. Diskutovalo se o tom, zda obnovit zemskou samosprávu Moravy a Slezska a přeměnit stát na trojspolkovou federaci, anebo zachovat dvojčlennou federaci České a Slovenské republiky.',
        partyStances: { of: -1, vpn: 0, kscs: 0, kdu: 0, hsd_sms: 1, sns: 0, css: 1, sz: 0 }
      },
      {
        id: 10,
        title: 'Členství v Evropském společenství',
        category: 'Zahraniční politika',
        statement: 'Československo by mělo usilovat o plné členství v Evropském společenství.',
        historicalNote: 'Evropské společenství (ES) bylo přímým institucionálním předchůdcem dnešní Evropské unie (ta vznikla až Maastrichtskou smlouvou v roce 1992). V době rozpadu východního bloku hledalo Československo nové mezinárodní a hospodářské ukotvení pod heslem „Zpátky do Evropy“. Část politického spektra spatřovala v členství v ES přirozený civilizační cíl a záruku stability, zatímco kritičtější hlasy nabádaly k opatrnosti před jednostrannou hospodářskou závislostí.',
        context: 'Evropské společenství (ES) bylo přímým institucionálním předchůdcem dnešní Evropské unie (ta vznikla až Maastrichtskou smlouvou v roce 1992). V době rozpadu východního bloku hledalo Československo své nové zahraničněpolitické a hospodářské ukotvení v rámci hesla „Zpátky do Evropy“. Jeden proud považoval plné zapojení do západoevropské integrace za klíčový civilizační a ekonomický cíl, druhý varoval před jednostrannou závislostí na západoevropských strukturách.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: 0, sz: 0 }
      },
      {
        id: 11,
        title: 'Vojenská neutralita Československa',
        category: 'Zahraniční a bezpečnostní politika',
        statement: 'Československo by mělo vyhlásit trvalou vojenskou neutralitu a nevstupovat do žádných vojenských aliancí.',
        historicalNote: 'Jako jedna z možností budoucího mezinárodního postavení země byla v roce 1990 zvažována trvalá vojenská neutralita po vzoru Rakouska či Švýcarska. Diskutovalo se o tom, zda by neutralita zajistila státu nezávislost mezi velmocemi, anebo zda bezpečnost země vyžaduje zapojení do širší západní či celoevropské bezpečnostní struktury.',
        context: 'Jako jedna z možností budoucího mezinárodního postavení země byla v roce 1990 zvažována trvalá vojenská neutralita po vzoru Rakouska či Švýcarska. Diskutovalo se o tom, zda by neutralita zajistila státu nezávislost mezi velmocemi, anebo zda bezpečnost země vyžaduje zapojení do širší západní či celoevropské bezpečnostní struktury.',
        partyStances: { of: -1, vpn: -1, kscs: 1, kdu: -1, hsd_sms: 0, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 12,
        title: 'Rychlý odchod sovětských vojsk',
        category: 'Zahraniční a bezpečnostní politika',
        statement: 'Odchod sovětských vojsk z československého území by měl proběhnout v nejbližším možném termínu bez ohledu na další mezinárodní jednání.',
        historicalNote: 'Od srpna 1968 pobývala na území státu početná sovětská vojenská posádka. Na jaře 1990 se řešilo, jak rychle a za jakých logistických i diplomatických podmínek má proběhnout její úplné stažení a zda lze akceptovat odklady zdůvodňované bytovými a přepravními obtížemi sovětské strany.',
        context: 'Od srpna 1968 pobývala na území státu početná sovětská vojenská posádka. Na jaře 1990 se řešilo, jak rychle a za jakých logistických i diplomatických podmínek má proběhnout její úplné stažení a zda lze akceptovat odklady zdůvodňované bytovými a přepravními obtížemi sovětské strany.',
        partyStances: { of: 1, vpn: 1, kscs: 0, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 13,
        title: 'Priorita ochrany životního prostředí',
        category: 'Ekologie a životní prostředí',
        statement: 'Zlepšení stavu životního prostředí a čistoty ovzduší by mělo mít přednost před tempem průmyslové výroby.',
        historicalNote: 'Dlouhodobé znečištění ovzduší, vod a lesů z těžkého průmyslu a hnědouhelných elektráren představovalo v roce 1990 vážný zdravotní i ekologický problém. Diskuse se vedla o tom, zda okamžitě omezit nejekologičtější provozy a těžbu i za cenu hospodářských ztrát, nebo zda upřednostnit zachování výroby a řešit ekologii až postupně.',
        context: 'Dlouhodobé znečištění ovzduší, vod a lesů z těžkého průmyslu a hnědouhelných elektráren představovalo v roce 1990 vážný zdravotní i ekologický problém. Diskuse se vedla o tom, zda okamžitě omezit nejekologičtější provozy a těžbu i za cenu hospodářských ztrát, nebo zda upřednostnit zachování výroby a řešit ekologii až postupně.',
        partyStances: { of: 1, vpn: 1, kscs: 0, kdu: 1, hsd_sms: 1, sns: 0, css: 1, sz: 1 }
      },
      {
        id: 14,
        title: 'Zpřísnění podmínek pro interrupce',
        category: 'Etika a zdravotnictví',
        statement: 'Zákonné podmínky pro umělá přerušení těhotenství by měly být zpřísněny.',
        historicalNote: 'V debatách o hodnotovém směřování společnosti po roce 1989 se střetávaly rozdílné pohledy na potratovou legislativu přijatou v polovině 80. let. Jeden pohled požadoval právní ochranu počatého života a omezení interrupcí pouze na závažné zdravotní důvody, druhý pohled hájil zachování práva ženy na svobodné rozhodnutí.',
        context: 'V debatách o hodnotovém směřování společnosti po roce 1989 se střetávaly rozdílné pohledy na potratovou legislativu přijatou v polovině 80. let. Jeden pohled požadoval právní ochranu počatého života a omezení interrupcí pouze na závažné zdravotní důvody, druhý pohled hájil zachování práva ženy na svobodné rozhodnutí.',
        partyStances: { of: -1, vpn: -1, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: -1, sz: -1 }
      },
      {
        id: 15,
        title: 'Občanská hnutí oproti politickým stranám',
        category: 'Politický systém a demokracie',
        statement: 'Hlavní roli v politickém životě by měla hrát široká občanská hnutí namísto klasických ideologických stran.',
        historicalNote: 'Po pádu monopolu jedné strany se v roce 1990 řešila podoba vznikajícího politického systému. Diskutovalo se o tom, zda jsou pro přechod k demokracii vhodnější široká nadstranická hnutí sdružující osobnosti různých názorů, nebo zda je pro parlamentní demokracii žádoucí soutěž standardních politických stran s vyhraněným programem.',
        context: 'Po pádu monopolu jedné strany se v roce 1990 řešila podoba vznikajícího politického systému. Diskutovalo se o tom, zda jsou pro přechod k demokracii vhodnější široká nadstranická hnutí sdružující osobnosti různých názorů, nebo zda je pro parlamentní demokracii žádoucí soutěž standardních politických stran s vyhraněným programem.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: -1, hsd_sms: 1, sns: -1, css: -1, sz: 0 }
      },
      {
        id: 16,
        title: 'Plošná finanční podpora rodin s dětmi',
        category: 'Rodinná a sociální politika',
        statement: 'Stát by měl i v době ekonomických reforem zachovat plošnou finanční podporu rodin s dětmi.',
        historicalNote: 'V souvislosti s přechodem k tržnímu hospodářství a rušením cenových dotací panovaly obavy z poklesu životní úrovně rodin s dětmi. Řešilo se, zda zachovat dosavadní systém plošných přídavků na děti a zvýhodněných novomanželských půjček ze státního rozpočtu, anebo sociální dávky zúžit jen na příjmově nejslabší domácnosti.',
        context: 'V souvislosti s přechodem k tržnímu hospodářství a rušením cenových dotací panovaly obavy z poklesu životní úrovně rodin s dětmi. Řešilo se, zda zachovat dosavadní systém plošných přídavků na děti a zvýhodněných novomanželských půjček ze státního rozpočtu, anebo sociální dávky zúžit jen na příjmově nejslabší domácnosti.',
        partyStances: { of: 0, vpn: 0, kscs: 1, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 17,
        title: 'Zabavení majetku Komunistické strany',
        category: 'Vyrovnání s minulostí',
        statement: 'Majetek Komunistické strany získaný v době jejího monopolu na moc by měl být bez náhrady převeden do vlastnictví státu.',
        historicalNote: 'Během čtyřiceti let vlády jedné strany získal stranický aparát do svého vlastnictví či trvalého užívání rozsáhlý nemovitý majetek, nakladatelství, tiskárny a rekreační objekty. Na jaře 1990 se vedl spor o to, zda tento majetek zákonem vyvlastnit ve prospěch státu pro účely školství a zdravotnictví, nebo zda jde o zásah do majetkových práv politické strany.',
        context: 'Během čtyřiceti let vlády jedné strany získal stranický aparát do svého vlastnictví či trvalého užívání rozsáhlý nemovitý majetek, nakladatelství, tiskárny a rekreační objekty. Na jaře 1990 se vedl spor o to, zda tento majetek zákonem vyvlastnit ve prospěch státu pro účely školství a zdravotnictví, nebo zda jde o zásah do majetkových práv politické strany.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 18,
        title: 'Zrušení trestu smrti',
        category: 'Justice a lidská práva',
        statement: 'Trest smrti by měl být v našem právním řádu zrušen.',
        historicalNote: 'Na jaře 1990 probíhala v parlamentu i ve společnosti diskuse o návrhu na zrušení trestu smrti. Jeden pohled zdůrazňoval nedotknutelnost lidského života, riziko neodčinitelného justičního omylu a mezinárodní závazky v oblasti lidských práv. Druhý pohled poukazoval na obavy veřejnosti z rostoucí násilné kriminality a požadoval zachování nejvyššího trestu pro pachatele nejzávažnějších vražd.',
        context: 'Na jaře 1990 probíhala v parlamentu i ve společnosti diskuse o návrhu na zrušení trestu smrti. Jeden pohled zdůrazňoval nedotknutelnost lidského života, riziko neodčinitelného justičního omylu a mezinárodní závazky v oblasti lidských práv. Druhý pohled poukazoval na obavy veřejnosti z rostoucí násilné kriminality a požadoval zachování nejvyššího trestu pro pachatele nejzávažnějších vražd.',
        partyStances: { of: 1, vpn: 1, kscs: 0, kdu: 1, hsd_sms: 0, sns: -1, css: 0, sz: 1 }
      },
      {
        id: 19,
        title: 'Útlum a konverze zbrojního průmyslu',
        category: 'Průmysl a zahraniční obchod',
        statement: 'Výroba těžkých zbraní v československých podnicích by měla být utlumena a nahrazena civilní produkcí.',
        historicalNote: 'Československo patřilo před rokem 1989 k významným světovým vývozcům tanků a vojenské techniky, přičemž velká část zbrojovek sídlila na středním Slovensku. V roce 1990 se řešilo, zda zbrojní výrobu z etických a zahraničněpolitických důvodů utlumit a továrny přeorientovat na civilní programy, anebo výrobu zbraní zachovat v zájmu udržení zaměstnanosti a příjmů ze zahraničního obchodu.',
        context: 'Československo patřilo před rokem 1989 k významným světovým vývozcům tanků a vojenské techniky, přičemž velká část zbrojovek sídlila na středním Slovensku. V roce 1990 se řešilo, zda zbrojní výrobu z etických a zahraničněpolitických důvodů utlumit a továrny přeorientovat na civilní programy, anebo výrobu zbraní zachovat v zájmu udržení zaměstnanosti a příjmů ze zahraničního obchodu.',
        partyStances: { of: 1, vpn: 0, kscs: -1, kdu: 0, hsd_sms: 0, sns: -1, css: 0, sz: 1 }
      },
      {
        id: 20,
        title: 'Dostavba jaderné elektrárny Temelín',
        category: 'Energetika a ekologie',
        statement: 'Výstavba jaderné elektrárny Temelín by měla být zastavena.',
        historicalNote: 'Po zkušenostech s černobylskou havárií a pod vlivem znečištěného ovzduší z uhelných elektráren se v roce 1990 vedl spor o budoucnost rozestavěné jaderné elektrárny Temelín. Jeden přístup požadoval zastavení stavby kvůli bezpečnostním rizikům a nevyřešenému ukládání jaderného odpadu. Druhý přístup prosazoval dokončení elektrárny jako výkonného zdroje energie, který umožní odstavit dožívající hnědouhelné elektrárny.',
        context: 'Po zkušenostech s černobylskou havárií a pod vlivem znečištěného ovzduší z uhelných elektráren se v roce 1990 vedl spor o budoucnost rozestavěné jaderné elektrárny Temelín. Jeden přístup požadoval zastavení stavby kvůli bezpečnostním rizikům a nevyřešenému ukládání jaderného odpadu. Druhý přístup prosazoval dokončení elektrárny jako výkonného zdroje energie, který umožní odstavit dožívající hnědouhelné elektrárny.',
        partyStances: { of: 0, vpn: 0, kscs: -1, kdu: 0, hsd_sms: 0, sns: -1, css: -1, sz: 1 }
      },
      {
        id: 21,
        title: 'Prodej státních podniků zahraničnímu kapitálu',
        category: 'Ekonomika a privatizace',
        statement: 'Stát by měl umožnit prodej velkých československých průmyslových podniků zahraničním investorům.',
        historicalNote: 'Při hledání cest, jak modernizovat zastaralý průmysl, se diskutovalo o roli cizího kapitálu. Jeden ekonomický směr prosazoval přímý vstup zahraničních firem do československých továren jako zdroj moderních technologií, investic a přístupu na světové trhy. Druhý směr varoval před levným výprodejem národního bohatství a ztrátou domácí kontroly nad důležitými podniky.',
        context: 'Při hledání cest, jak modernizovat zastaralý průmysl, se diskutovalo o roli cizího kapitálu. Jeden ekonomický směr prosazoval přímý vstup zahraničních firem do československých továren jako zdroj moderních technologií, investic a přístupu na světové trhy. Druhý směr varoval před levným výprodejem národního bohatství a ztrátou domácí kontroly nad důležitými podniky.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 0, hsd_sms: 0, sns: -1, css: -1, sz: -1 }
      },
      {
        id: 22,
        title: 'Daňové úlevy pro začínající živnostníky',
        category: 'Daně a podnikání',
        statement: 'Začínající drobní živnostníci a řemeslníci by měli být v prvních letech podnikání zvýhodněni daňovými úlevami.',
        historicalNote: 'Na jaře 1990 byl přijat zákon, který občanům po čtyřiceti letech znovu umožnil soukromě podnikat. V diskusi o nastavení daňových podmínek jeden přístup prosazoval dočasné daňové úlevy a dostupné úvěry, aby v zemi rychle vyrostla vrstva drobných živnostníků a služeb. Druhý přístup požadoval plné a progresivní zdanění soukromého podnikání, aby stát nepřišel o rozpočtové příjmy a nevznikaly velké majetkové rozdíly.',
        context: 'Na jaře 1990 byl přijat zákon, který občanům po čtyřiceti letech znovu umožnil soukromě podnikat. V diskusi o nastavení daňových podmínek jeden přístup prosazoval dočasné daňové úlevy a dostupné úvěry, aby v zemi rychle vyrostla vrstva drobných živnostníků a služeb. Druhý přístup požadoval plné a progresivní zdanění soukromého podnikání, aby stát nepřišel o rozpočtové příjmy a nevznikaly velké majetkové rozdíly.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: 1, sz: 0 }
      },
      {
        id: 23,
        title: 'Navrácení pozemkového majetku církvím',
        category: 'Církev a restituce',
        statement: 'Církvím a řeholním řádům by měla být vrácena zemědělská půda a lesy zabavené po roce 1948.',
        historicalNote: 'Zatímco na navrácení některých klášterních a charitativních budov panovala na jaře 1990 širší shoda, spor se vedl o církevní lesy a zemědělskou půdu. Jeden pohled požadoval navrácení veškerého církevního hospodářského majetku, aby se církve staly ekonomicky soběstačnými a nezávislými na státu. Druhý pohled doporučoval ponechat půdu a lesy v rukou státu a obcí a financovat činnost církví nadále ze státního rozpočtu.',
        context: 'Zatímco na navrácení některých klášterních a charitativních budov panovala na jaře 1990 širší shoda, spor se vedl o církevní lesy a zemědělskou půdu. Jeden pohled požadoval navrácení veškerého církevního hospodářského majetku, aby se církve staly ekonomicky soběstačnými a nezávislými na státu. Druhý pohled doporučoval ponechat půdu a lesy v rukou státu a obcí a financovat činnost církví nadále ze státního rozpočtu.',
        partyStances: { of: 0, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: -1, sz: 0 }
      },
      {
        id: 24,
        title: 'Státní financování soukromých a církevních škol',
        category: 'Školství a vzdělávání',
        statement: 'Nově zakládané církevní a soukromé školy by měly mít nárok na dotace ze státního rozpočtu za stejných podmínek jako školy státní.',
        historicalNote: 'Při novelizaci školského zákona na jaře 1990 byl ukončen dosavadní státní monopol na vzdělávání a povolen vznik nestátních škol. Diskutovalo se o tom, zda má stát soukromé a církevní školy finančně podporovat podle počtu žáků stejně jako školy veřejné, aby byly dostupné všem rodinám, nebo zda by veřejné peníze měly směřovat výhradně do státního školství.',
        context: 'Při novelizaci školského zákona na jaře 1990 byl ukončen dosavadní státní monopol na vzdělávání a povolen vznik nestátních škol. Diskutovalo se o tom, zda má stát soukromé a církevní školy finančně podporovat podle počtu žáků stejně jako školy veřejné, aby byly dostupné všem rodinám, nebo zda by veřejné peníze měly směřovat výhradně do státního školství.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: 0, sz: 0 }
      },
      {
        id: 25,
        title: 'Zrušení povinné vojenské služby',
        category: 'Obrana a armáda',
        statement: 'Povinná základní vojenská služba by měla být postupně zrušena a nahrazena plně profesionální armádou.',
        historicalNote: 'Na jaře 1990 byla uzákoněna možnost náhradní civilní služby a základní vojenská služba se zkrátila z 24 na 18 měsíců. V předvolební debatě se řešilo, zda by mělo Československo v dalších letech směřovat k úplnému zrušení branné povinnosti a vybudování menší profesionální armády, nebo zda je pro obranu státu potřeba zachovat všeobecný odvodní systém.',
        context: 'Na jaře 1990 byla uzákoněna možnost náhradní civilní služby a základní vojenská služba se zkrátila z 24 na 18 měsíců. V předvolební debatě se řešilo, zda by mělo Československo v dalších letech směřovat k úplnému zrušení branné povinnosti a vybudování menší profesionální armády, nebo zda je pro obranu státu potřeba zachovat všeobecný odvodní systém.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 0, hsd_sms: 1, sns: -1, css: 1, sz: 1 }
      },
      {
        id: 26,
        title: 'Jazyková práva národnostních menšin na úřadech',
        category: 'Národnostní menšiny',
        statement: 'Národnostním menšinám by mělo být v obcích s jejich početným zastoupením zaručeno právo používat v úředním styku mateřský jazyk.',
        historicalNote: 'Otázka jazykového zákona patřila v roce 1990 k výrazným tématům, zejména na národnostně smíšeném jižním Slovensku. Jeden přístup prosazoval právo početné maďarské a dalších menšin komunikovat s místními úřady ve svém jazyce a mít dvojjazyčné nápisy. Druhý přístup požadoval uzákonění slovenštiny jako jediného úředního jazyka na celém území Slovenska bez výjimek.',
        context: 'Otázka jazykového zákona patřila v roce 1990 k výrazným tématům, zejména na národnostně smíšeném jižním Slovensku. Jeden přístup prosazoval právo početné maďarské a dalších menšin komunikovat s místními úřady ve svém jazyce a mít dvojjazyčné nápisy. Druhý přístup požadoval uzákonění slovenštiny jako jediného úředního jazyka na celém území Slovenska bez výjimek.',
        partyStances: { of: 1, vpn: 1, kscs: 1, kdu: 0, hsd_sms: 1, sns: -1, css: 0, sz: 1 }
      },
      {
        id: 27,
        title: 'Zrušení finančního přerozdělování mezi republikami',
        category: 'Federace a rozpočet',
        statement: 'Každá republika ve federaci by měla hospodařit s daněmi vybranými na svém území bez finančního přerozdělování mezi českými zeměmi a Slovenskem.',
        historicalNote: 'Při sestavování rozpočtů v roce 1990 vyvstal spor o přerozdělování daňových výnosů prostřednictvím federálního rozpočtu. Jeden pohled prosazoval zásadu, aby si každá část státu financovala své výdaje pouze z prostředků, které na svém území vybere. Druhý pohled upozorňoval, že struktura průmyslu vznikala centrálními rozhodnutími celé federace, a vyžadoval zachování finanční solidarity mezi republikami.',
        context: 'Při sestavování rozpočtů v roce 1990 vyvstal spor o přerozdělování daňových výnosů prostřednictvím federálního rozpočtu. Jeden pohled prosazoval zásadu, aby si každá část státu financovala své výdaje pouze z prostředků, které na svém území vybere. Druhý pohled upozorňoval, že struktura průmyslu vznikala centrálními rozhodnutími celé federace, a vyžadoval zachování finanční solidarity mezi republikami.',
        partyStances: { of: 1, vpn: -1, kscs: -1, kdu: 0, hsd_sms: 1, sns: 1, css: 0, sz: 0 }
      },
      {
        id: 28,
        title: 'Podpora rodinných farem oproti velkým družstvům',
        category: 'Zemědělství a venkov',
        statement: 'Stát by měl v zemědělství finančně upřednostnit vznik soukromých rodinných farem před zachováním velkých zemědělských družstev.',
        historicalNote: 'V roce 1990 obhospodařovala většinu půdy velká jednotná zemědělská družstva a státní statky. Vedla se debata o budoucí podobě venkova: zda má stát dotačně a úvěrově podpořit návrat k menším soukromým selským hospodářstvím, která obnoví osobní vztah k půdě a krajině, nebo zda je hospodářsky účelnější zachovat velkovýrobní družstevní celky.',
        context: 'V roce 1990 obhospodařovala většinu půdy velká jednotná zemědělská družstva a státní statky. Vedla se debata o budoucí podobě venkova: zda má stát dotačně a úvěrově podpořit návrat k menším soukromým selským hospodářstvím, která obnoví osobní vztah k půdě a krajině, nebo zda je hospodářsky účelnější zachovat velkovýrobní družstevní celky.',
        partyStances: { of: 1, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 0, sns: -1, css: -1, sz: 1 }
      },
      {
        id: 29,
        title: 'Deregulace nájemného v bytech',
        category: 'Bydlení a sociální politika',
        statement: 'Státem regulované nájemné v bytech by mělo být postupně uvolněno na tržní úroveň.',
        historicalNote: 'Výše nájemného ve státních a podnikových bytech zůstávala po desetiletí administrativně zmrazena a nepokrývala náklady na opravy zchátralého bytového fondu. V roce 1990 se řešilo, zda nájemné postupně uvolnit k tržním cenám a zajistit tak prostředky na údržbu domů, nebo zda zachovat státní regulaci nájmů na nízké úrovni jako součást sociální ochrany domácností.',
        context: 'Výše nájemného ve státních a podnikových bytech zůstávala po desetiletí administrativně zmrazena a nepokrývala náklady na opravy zchátralého bytového fondu. V roce 1990 se řešilo, zda nájemné postupně uvolnit k tržním cenám a zajistit tak prostředky na údržbu domů, nebo zda zachovat státní regulaci nájmů na nízké úrovni jako součást sociální ochrany domácností.',
        partyStances: { of: 1, vpn: 0, kscs: -1, kdu: -1, hsd_sms: -1, sns: -1, css: -1, sz: -1 }
      },
      {
        id: 30,
        title: 'Malá privatizace – přednost zaměstnanců před dražbami',
        category: 'Ekonomika a privatizace',
        statement: 'Při privatizaci obchodů a provozoven služeb by měli mít dosavadní zaměstnanci přednostní právo na jejich odkup před veřejnými dražbami.',
        historicalNote: 'Při přípravě takzvané malé privatizace se střetly dvě představy o převodu prodejen, restaurací a provozoven služeb do soukromých rukou. První představa prosazovala přednostní prodej nebo pronájem stávajícím pracovním kolektivům za odhadní cenu. Druhá představa trvala na otevřených veřejných dražbách přístupných všem zájemcům bez zvýhodnění dosavadního personálu.',
        context: 'Při přípravě takzvané malé privatizace se střetly dvě představy o převodu prodejen, restaurací a provozoven služeb do soukromých rukou. První představa prosazovala přednostní prodej nebo pronájem stávajícím pracovním kolektivům za odhadní cenu. Druhá představa trvala na otevřených veřejných dražbách přístupných všem zájemcům bez zvýhodnění dosavadního personálu.',
        partyStances: { of: -1, vpn: -1, kscs: 1, kdu: 0, hsd_sms: 0, sns: 0, css: 1, sz: 0 }
      },
      {
        id: 31,
        title: 'Přímá volba prezidenta republiky občany',
        category: 'Ústava a hlava státu',
        statement: 'Prezident republiky by měl být v budoucí ústavě volen přímo občany namísto volby parlamentem.',
        historicalNote: 'V souvislosti s přípravou nové demokratické ústavy se diskutovalo o způsobu výběru hlavy státu. Jeden ústavní pohled prosazoval zavedení přímé volby prezidenta všemi oprávněnými voliči, což mělo hlavě státu zajistit silný a na politických stranách nezávislý mandát. Druhý pohled hájil prvorepublikovou tradici nepřímé volby prezidenta poslanci parlamentu jako součást parlamentní demokracie.',
        context: 'V souvislosti s přípravou nové demokratické ústavy se diskutovalo o způsobu výběru hlavy státu. Jeden ústavní pohled prosazoval zavedení přímé volby prezidenta všemi oprávněnými voliči, což mělo hlavě státu zajistit silný a na politických stranách nezávislý mandát. Druhý pohled hájil prvorepublikovou tradici nepřímé volby prezidenta poslanci parlamentu jako součást parlamentní demokracie.',
        partyStances: { of: -1, vpn: 0, kscs: 1, kdu: -1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 32,
        title: 'Povolení soukromých televizních a rozhlasových stanic',
        category: 'Média a kultura',
        statement: 'Vysílací frekvence pro televizi a rozhlas by měly být zpřístupněny soukromým komerčním stanicím.',
        historicalNote: 'Po zrušení cenzury začaly v roce 1990 vycházet četné nezávislé noviny a časopisy, avšak televizní a rozhlasové vysílání zůstávalo v rukou státu. Diskutovalo se o tom, zda vysílací frekvence otevřít soukromým provozovatelům pro posílení mediální konkurence, nebo zda ponechat elektronická média výhradně jako veřejnoprávní službu v zájmu ochrany kulturní úrovně vysílání.',
        context: 'Po zrušení cenzury začaly v roce 1990 vycházet četné nezávislé noviny a časopisy, avšak televizní a rozhlasové vysílání zůstávalo v rukou státu. Diskutovalo se o tom, zda vysílací frekvence otevřít soukromým provozovatelům pro posílení mediální konkurence, nebo zda ponechat elektronická média výhradně jako veřejnoprávní službu v zájmu ochrany kulturní úrovně vysílání.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 0, hsd_sms: 1, sns: -1, css: 0, sz: 0 }
      },
      {
        id: 33,
        title: 'Ukončení členství v Radě vzájemné hospodářské pomoci (RVHP)',
        category: 'Zahraniční obchod',
        statement: 'Československo by mělo ukončit své členství v Radě vzájemné hospodářské pomoci (RVHP).',
        historicalNote: 'V roce 1990 byla většina československého zahraničního obchodu a dodávek surovin stále vázána na východní blok v rámci RVHP a účtována v převoditelných rublech. Řešila se otázka, zda tuto organizaci opustit a přejít na obchodování ve volně směnitelných měnách za světové ceny, anebo v transformované RVHP setrvat kvůli zachování východních odbytišť pro domácí průmysl a levnějších dodávek surovin.',
        context: 'V roce 1990 byla většina československého zahraničního obchodu a dodávek surovin stále vázána na východní blok v rámci RVHP a účtována v převoditelných rublech. Řešila se otázka, zda tuto organizaci opustit a přejít na obchodování ve volně směnitelných měnách za světové ceny, anebo v transformované RVHP setrvat kvůli zachování východních odbytišť pro domácí průmysl a levnějších dodávek surovin.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 0, sns: -1, css: -1, sz: 0 }
      },
      {
        id: 34,
        title: 'Většinový volební systém oproti poměrnému',
        category: 'Ústava a volební systém',
        statement: 'Poslanci parlamentu by měli být voleni většinovým systémem v jednomandátových obvodech namísto volby stranických kandidátních listin.',
        historicalNote: 'Při tvorbě volebních pravidel v roce 1990 se vedl spor o to, jakým způsobem se mají volit poslanci. Jeden návrh prosazoval většinový systém, v němž občané v každém obvodu volí přímo konkrétní osobnost a kandidát s nejvyšším počtem hlasů získává mandát. Druhý návrh hájil poměrné zastoupení stranických kandidátních listin, které zajišťuje, že složení parlamentu odpovídá celkovému podílu hlasů pro jednotlivé politické proudy.',
        context: 'Při tvorbě volebních pravidel v roce 1990 se vedl spor o to, jakým způsobem se mají volit poslanci. Jeden návrh prosazoval většinový systém, v němž občané v každém obvodu volí přímo konkrétní osobnost a kandidát s nejvyšším počtem hlasů získává mandát. Druhý návrh hájil poměrné zastoupení stranických kandidátních listin, které zajišťuje, že složení parlamentu odpovídá celkovému podílu hlasů pro jednotlivé politické proudy.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: -1, hsd_sms: -1, sns: -1, css: -1, sz: -1 }
      },
      {
        id: 35,
        title: 'Posílení pravomocí policie při potírání kriminality',
        category: 'Bezpečnost a právo',
        statement: 'Pravomoci policie při kontrole a zadržování podezřelých osob by měly být posíleny.',
        historicalNote: 'Po rozsáhlé prezidentské amnestii z ledna 1990, při níž byla propuštěna velká část vězňů, vzrostly ve společnosti obavy z pouliční a majetkové trestné činnosti. V předvolební kampani se diskutovalo o tom, zda posílit pravomoci bezpečnostních složek k rychlému obnovení veřejného pořádku, nebo zda by rozšíření policejních pravomocí ohrozilo nabyté občanské svobody.',
        context: 'Po rozsáhlé prezidentské amnestii z ledna 1990, při níž byla propuštěna velká část vězňů, vzrostly ve společnosti obavy z pouliční a majetkové trestné činnosti. V předvolební kampani se diskutovalo o tom, zda posílit pravomoci bezpečnostních složek k rychlému obnovení veřejného pořádku, nebo zda by rozšíření policejních pravomocí ohrozilo nabyté občanské svobody.',
        partyStances: { of: -1, vpn: -1, kscs: 1, kdu: 0, hsd_sms: 0, sns: 1, css: 1, sz: -1 }
      },
      {
        id: 36,
        title: 'Devalvace koruny před zavedením směnitelnosti',
        category: 'Měnová politika a finance',
        statement: 'Kurz československé koruny vůči západním měnám by měl být před zavedením vnitřní směnitelnosti devalvován.',
        historicalNote: 'Příprava na zavedení vnitřní směnitelnosti koruny a zrušení devizových příslibů vyvolala v roce 1990 spor o nastavení měnového kurzu. Jeden ekonomický pohled prosazoval devalvaci koruny, která by zvýhodnila československé vývozce na světových trzích a vyrovnala nabídku s poptávkou po cizích měnách. Druhý pohled varoval, že oslabení koruny občanům prodraží dovážené zboží i cestování a umožní levný skup domácího majetku zahraničními zájemci.',
        context: 'Příprava na zavedení vnitřní směnitelnosti koruny a zrušení devizových příslibů vyvolala v roce 1990 spor o nastavení měnového kurzu. Jeden ekonomický pohled prosazoval devalvaci koruny, která by zvýhodnila československé vývozce na světových trzích a vyrovnala nabídku s poptávkou po cizích měnách. Druhý pohled varoval, že oslabení koruny občanům prodraží dovážené zboží i cestování a umožní levný skup domácího majetku zahraničními zájemci.',
        partyStances: { of: 1, vpn: 0, kscs: -1, kdu: 0, hsd_sms: 0, sns: -1, css: -1, sz: 0 }
      },
      {
        id: 37,
        title: 'Omluva za poválečný odsun sudetských Němců',
        category: 'Historie a zahraniční vztahy',
        statement: 'Československo by se mělo oficiálně omluvit za poválečný odsun sudetských Němců.',
        historicalNote: 'Na přelomu let 1989 a 1990 vyvolalo ve společnosti rozporuplné reakce prohlášení vyjadřující morální lítost nad poválečným vysídlením německého obyvatelstva. Jeden postoj považoval omluvu za uplatnění principu kolektivní viny za důležité gesto k vyrovnání se s vlastní historií a k dobrým sousedským vztahům s Německem. Druhý postoj omluvu odmítal s poukazem na předchozí nacistické zločiny a obavu z otevření majetkových požadavků vysídlenců.',
        context: 'Na přelomu let 1989 a 1990 vyvolalo ve společnosti rozporuplné reakce prohlášení vyjadřující morální lítost nad poválečným vysídlením německého obyvatelstva. Jeden postoj považoval omluvu za uplatnění principu kolektivní viny za důležité gesto k vyrovnání se s vlastní historií a k dobrým sousedským vztahům s Německem. Druhý postoj omluvu odmítal s poukazem na předchozí nacistické zločiny a obavu z otevření majetkových požadavků vysídlenců.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 0, hsd_sms: 0, sns: -1, css: -1, sz: 0 }
      },
      {
        id: 38,
        title: 'Soukromé lékařské ordinace a zdravotní pojišťovny',
        category: 'Zdravotnictví',
        statement: 'Lékařům by mělo být umožněno otevírat si soukromé ordinace hrazené z veřejného zdravotního pojištění.',
        historicalNote: 'Československé zdravotnictví fungovalo do roku 1990 v podobě státních ústavů národního zdraví financovaných přímo ze státního rozpočtu, přičemž pacienti neměli svobodnou volbu lékaře. V debatě o reformě péče o zdraví stála na jedné straně snaha oddělit financování zdravotnictví od státu zavedením zdravotních pojišťoven a soukromých lékařských praxí, na druhé straně obava ze zhoršení dostupnosti bezplatné lékařské péče.',
        context: 'Československé zdravotnictví fungovalo do roku 1990 v podobě státních ústavů národního zdraví financovaných přímo ze státního rozpočtu, přičemž pacienti neměli svobodnou volbu lékaře. V debatě o reformě péče o zdraví stála na jedné straně snaha oddělit financování zdravotnictví od státu zavedením zdravotních pojišťoven a soukromých lékařských praxí, na druhé straně obava ze zhoršení dostupnosti bezplatné lékařské péče.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: 0, sz: 0 }
      },
      {
        id: 39,
        title: 'Snížení 5% hranice pro vstup do parlamentu',
        category: 'Volební systém a demokracie',
        statement: 'Pětiprocentní hranice hlasů potřebná pro vstup politických stran do Federálního shromáždění by měla být snížena.',
        historicalNote: 'Volební zákon pro červen 1990 poprvé zavedl uzavírací klauzuli, podle níž musela politická strana pro zisk mandátů ve Federálním shromáždění překročit hranici 5 % hlasů v jedné z republik. Jeden pohled tuto hranici hájil jako pojistku proti roztříštěnosti parlamentu a nestabilitě vlád, druhý pohled ji kritizoval jako překážku, která vyřazuje menší politické strany a způsobuje propadnutí statisíců hlasů voličů.',
        context: 'Volební zákon pro červen 1990 poprvé zavedl uzavírací klauzuli, podle níž musela politická strana pro zisk mandátů ve Federálním shromáždění překročit hranici 5 % hlasů v jedné z republik. Jeden pohled tuto hranici hájil jako pojistku proti roztříštěnosti parlamentu a nestabilitě vlád, druhý pohled ji kritizoval jako překážku, která vyřazuje menší politické strany a způsobuje propadnutí statisíců hlasů voličů.',
        partyStances: { of: -1, vpn: -1, kscs: -1, kdu: -1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 40,
        title: 'Celní ochrana domácího zemědělství',
        category: 'Zemědělství a obchod',
        statement: 'Domácí zemědělci by měli být před levnějším dovozem potravin ze zahraničí chráněni dovozními cly.',
        historicalNote: 'S otevíráním hranic a přechodem na tržní hospodářství se řešila otázka ochrany československého zemědělství. Jeden přístup požadoval zachování celní ochrany pro domácí zemědělce, aby republika zůstala potravinově soběstačná a nebyla ohrožena dotovanými přebytky ze západní Evropy. Druhý přístup upřednostňoval otevření trhu zahraniční konkurenci, která by snížila ceny potravin pro spotřebitele.',
        context: 'S otevíráním hranic a přechodem na tržní hospodářství se řešila otázka ochrany československého zemědělství. Jeden přístup požadoval zachování celní ochrany pro domácí zemědělce, aby republika zůstala potravinově soběstačná a nebyla ohrožena dotovanými přebytky ze západní Evropy. Druhý přístup upřednostňoval otevření trhu zahraniční konkurenci, která by snížila ceny potravin pro spotřebitele.',
        partyStances: { of: -1, vpn: -1, kscs: 1, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      }
    ],
    electionSystem: {
      body: 'Volilo se do dvou komor Federálního shromáždění ČSFR: Sněmovny lidu (150 poslanců) a Sněmovny národů (150 poslanců). Občan zároveň volil i do republikových parlamentů – České národní rady (200 poslanců) nebo Slovenské národní rady (150 poslanců).',
      system: 'Poměrný systém ve 12 vícemandátových krajích. Poprvé byla zavedena uzavírací klauzule 5 % pro vstup do FS a ČNR (pro SNR platila mírnější hranice 3 %). Pro přepočet hlasů se použila Hagenbach-Bischoffova kvóta. Voliči měli poprvé k dispozici preferenční hlasy (kroužkování až 4 kandidátů).',
      franchise: 'Všichni občané bez rozdílu národnosti, kteří v den voleb dosáhli věku 18 let. Volební účast již nebyla povinná.',
      eligibility: 'Každý občan s aktivním volebním právem od 21 let.',
      trivia: [
        'Zkrácené volební období: Parlament byl zvolen pouze na přechodné 2leté období (1990–1992), jehož cílem bylo vytvořit novou demokratickou ústavu a nastartovat ekonomické reformy.',
        'Mimořádně vysoká účast: K urnám dorazilo 96,8 % voličů, což představuje historický rekord ve svobodných volbách v našich moderních dějinách.',
        'Aféra Bartončík: Těsně před volbami v době volebního moratoria obvinil náměstek ministra vnitra Jan Ruml předsedu lidovců Josefa Bartončíka ze spolupráce s StB, což mělo citelný dopad na výsledek KDU.',
        'Síla kroužkování: Voliči hned v prvních volbách hojně využívali preferenční hlasy, díky čemuž se z nižších míst na volitelná křesla posunula řada známých disidentů a nezávislých osobností.'
      ]
    }
  }
};
