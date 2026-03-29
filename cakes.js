const cakes = [ //<--- opis ogólny, błąd 404, telefon, (usunąć listki, przyciąć, nałożyć lukier)
	{
		name: 'Frappuccino',
		desc: 'Przepyszne ciasto przekładane. Kakaowy biszkopt, dżem z czarnego bzu lub czarnej porzeczki, krem kajmakowy z mascarpone, krem kawowy śmietanowy, biszkopty. Mocno nasączone kawą z amaretto. Delikatne, wilgotne, idealne. Bardzo polecam!\nWaga około 3200 g.',
		price: '160 zł',
		images: ['Frappuccino 1.jpg', 'Frappuccino 2.jpg', 'Frappuccino 3.jpg', 'Frappuccino 4.jpg', 'Frappuccino 5.jpg', 'Frappuccino 6.jpg', 'Frappuccino 7.jpg', 'Frappuccino 8.jpg'],
	},
	{
		name: 'Karpatka',
		desc: 'Pyszna klasyczna polska karpatka. Dwa blaty parzonego ciasta przełożone aksamitnym kremem budyniowo-maślanym. Całość oprószona cukrem pudrem.\nWaga około 2600 g.',
		price: '100 zł',
		images: ['Karpatka 1.jpg', 'Karpatka 2.jpg', 'Karpatka 3.jpg'],
	},
	{
		name: 'Krówka bananowa bez pieczenia',
		desc: 'Pyszne ciasto na herbatnikach z masą budyniową, kajmakiem, bitą śmietaną i bananami. Wspaniałe połączenie smaków.\nWaga około 3700 g.',
		price: '120 zł',
		images: ['Krówka bananowa bez pieczenia 1.jpg', 'Krówka bananowa bez pieczenia 2.jpg', 'Krówka bananowa bez pieczenia 3.jpg'],
	},
	{
		name: 'Kruche z malinami i budyniową pianką',
		desc: 'Kruche ciasto przełożone delikatną waniliową pianką budyniową z malinami. Całość tworzy niesamowity efekt smakowy. Inną opcją jest równie pyszna wersja z rabarbarem.\nWaga około 2400 g.',
		price: '110 zł',
		images: ['Kruche z malinami i budyniową pianką 1.jpg'/*, 'Kruche z malinami i budyniową pianką 2.jpg'*/, 'Kruche z malinami i budyniową pianką 3.jpg', 'Kruche z malinami i budyniową pianką 4.jpg'],
	},
	{
		name: 'Kubanka',
		desc: 'Pyszne, wilgotne, kremowe ciasto przekładane z nutą alkoholu (rumu). Biszkopt, masa z nutellą, powidła śliwkowe, herbatniki, bita śmietana, czekolada. Czego chcieć więcej?\nWaga około 2600 g.',
		price: '130 zł',
		images: ['Kubanka 1.jpg', 'Kubanka 2.jpg'],
	},
	{
		name: 'Makowiec Sylwii',
		desc: 'Makowiec zawijany z domową masą makową, z dużą ilością bakalii (migdały, rodzynki, skórka pomarańczowa), z prawdziwym miodem i sokiem z pomarańczy. Pyszny, wilgotny, idealny na swięta.\nWaga około 1100 g.',
		price: '75 zł',
		images: ['Makowiec Sylwii 1.jpg', 'Makowiec Sylwii 2.jpg', 'Makowiec Sylwii 3.jpg', 'Makowiec Sylwii 4.jpg'],
	},
	{
		name: 'Malinowa chmurka',
		desc: 'Przepyszny przekładaniec: delikatny kruchy spód, duża ilość malin zatopionych w galaretce, kremowa masa śmietankowa, chrupiąca beza z płatkami migdałów. Nic dodać nic ująć - ideał. Cena dotyczy malin mrożonych, w przypadku świeżych, może być wyższa. Możliwe również wersje z innymi owocami (wiśnie, brzoskwinie, gruszki, banany, ...).\nWaga około 3500 g.',
		price: '160 zł',
		images: ['Malinowa chmurka 1.jpg', 'Malinowa chmurka 2.jpg'],
	},
	/*{
		name: 'Marchewkowe z orzechami',
		desc: '<...>',
		price: '<...> zł',
		images: ['Marchewkowe z orzechami 1.jpg', 'Marchewkowe z orzechami 2.jpg', 'Marchewkowe z orzechami 3.jpg'],
	},*/
	/*{
		name: 'Orzeźwiające ciasto cytrynowe',
		desc: '<...>',
		price: '<...> zł',
		images: ['Orzeźwiające ciasto cytrynowe 1.jpg', 'Orzeźwiające ciasto cytrynowe 2.jpg', 'Orzeźwiające ciasto cytrynowe 3.jpg'],
	},*/
	{
		name: 'Pani Walewska',
		desc: 'Ciasto, nie bez powodu, zwane również pychotką. Kruche blaty, dżem porzeczkowy, beza z płatkami migdałów, a pomiędzy nimi delikatna masa kremowa. Wspaniała kombinacja smaków. Równie pyszne w wersji jesiennej z orzechami włoskimi i powidłami śliwkowymi.\nWaga około 2600 g.',
		price: '120 zł',
		images: ['Pani walewska 1.jpg', 'Pani walewska 2.jpg'],
	},
	/*{
		name: 'Pleśniak',
		desc: '...\nWaga około 2500 g.',
		price: '100 zł',
		images: ['Pleśniak.jpg', 'Pleśniak.jpg'],
	},*/
	{
		name: 'Pychotka malinowa',
		desc: 'Dwa cienkie blaty kruchego ciasta z frużeliną malinową i świeżymi malinami przełożone delikatnym kremem budyniowo-maślanym, wykończone kruchutką bezą z płatkami migdałów. Wyjątkowo pyszne, eleganckie i efektowne ciasto.\nWaga około 2800 g.',
		price: '180 zł',
		images: ['Pychotka malinowa 1.jpg', 'Pychotka malinowa 2.jpg'],
	},
	{
		name: 'Sernik mango z morzem borówek',
		desc: 'Pyszne połączenie kremowego sernika na zimno o smaku mango i borówek amerykańskich zatopionych w lazurowej galaretce. Doskonały, intensywny w smaku, orzeźwiający deser.\nWielkość 24x37 cm.\nWaga około 4700 g.',
		price: '120 zł',
		images: ['Sernik mango z borówkami na zimno 1.jpg', 'Sernik mango z borówkami na zimno 2.jpg', 'Sernik mango z borówkami na zimno 3.jpg', 'Sernik mango z borówkami na zimno 4.jpg'],
	},
	{
		name: 'Sernik Sylwii',
		desc: 'Pyszny, idealnie wyważony smakowo, nieprzesłodzony sernik z rodzynkami (lub bez). Na spodzie z herbatników, z nutą cytryny, wykończony lukrem.\nWaga około 3000 g.',
		price: '120 zł',
		images: ['Sernik Sylwii 1.jpg'/*, 'Sernik Sylwii 2.jpg'*/, 'Sernik Sylwii 3.jpg'],
	},
	{
		name: 'Sernik z jabłkami',
		desc: 'Pyszny sernik na warstwie świeżych jabłek i kruchego ciasta, wykończony lukrem. Tylko kilka smaków, a jaki wspaniały efekt.\nWaga około 3200 g.',
		price: '120 zł',
		images: ['Sernik z jabłkami 1.jpg'/*, 'Sernik z jabłkami 2.jpg'*/, 'Sernik z jabłkami 3.jpg'],
	},
	{
		name: 'Sernik z malinowym wirem',
		desc: 'Sernik z dodatkiem mascarpone, na czekoladowym spodzie brownie, wykończony malinowym musem. Równie pyszny jak piękny.\nWaga około 3300 g.',
		price: '160 zł',
		images: ['Sernik z malinowym wirem 1.jpg', 'Sernik z malinowym wirem 2.jpg', 'Sernik z malinowym wirem 3.jpg', 'Sernik z malinowym wirem 4.jpg'],
	},
	{
		name: 'Sernik złota rosa',
		desc: 'Pyszny, delikatny, kremowy sernik na kruchym spodzie, wykończony pianą z cudownymi złotymi kropelkami rosy.\nWaga około 3000 g.',
		price: '120 zł',
		images: ['Sernik złota rosa 1.jpg', 'Sernik złota rosa 2.jpg'],
	},
	{
		name: 'Snickers',
		desc: 'Kruche miodowe blaty przekłądane budyniem i kajmakiem, wykończone pyszną karmelową polewą z orzechami włoskimi. W tańszej wersji można je zastąpić orzeszkami ziemnymi. Wspaniałe ciasto na wszelkie uroczystości.\nWaga około 2800 g.',
		price: '130 zł',
		images: ['Snickers 1.jpg', 'Snickers 2.jpg', 'Snickers 3.jpg'],
	},
];