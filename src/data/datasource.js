const millsData = (function test () {
  const shipListsTitle = [
    'Canadian Registry List',
    'Canada Steamship Lines Fleet List',
    'Mills List',
    'Ship Owners List',
    'Wallace List',
    'Snider\'s Schooner Days Index',
  ];

  const shipListDesc = [
    'The Canadian Registry List',
    'Canada Steamship Lines - Old Ship Register',
    "'The New Mills' List Registered Canadian Steamships 1817 - 1930 over 75 feet'",
    'Ship Owners List',
    'Fredrick W. Wallace - Record of Canadian Shipping 1786-1920',
    "Snider's Schooner Days Index",
  ];

  const province = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland',
    'Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',

  ];

  const millsReason4Closing = [
    'Not Selected',
    'Abandoned',
    'Beached',
    'Broken',
    'Burn',
    'Condemned',
    'Disappeared',
    'Foundered',
    'Lost',
    'Missing',
    'Rebuilt',
    'Retired',
    'Sank',
    'Scuttled',
    'Seized',
    'Sunk',
    'Sold',
    'To',
    'Torpedoed',
    'War',
    'Wrecked',
  ];

  const wallsReason4Closing = [
    'Abandoned',
    'Blown Up',
    'Broken Up',
    'Burned',
    'Burnt',
    'Capsized',
    'Condemned',
    'Dismantled',
    'Foundered',
    'Lost',
    'Missing',
    'Run Down',
    'Scuttled',
    'Sold',
    'Stranded',
    'Sunk',
    'Vanished',
    'War',
    'Wrecked',
  ]

  const IMGPATH = 'https://marmuseum.ca/mills-list-server/images/';

  const images = [
    { id: 1, url: `${IMGPATH}SteamboatBenCampbellb.jpg`, alt: 'BenCampbellb' },
    { id: 2, url: `${IMGPATH}Lookout.jpg`, alt: 'lookout' },
    { id: 3, url: `${IMGPATH}cayuga.jpg`, alt: 'cayuga' },
    { id: 4, url: `${IMGPATH}cayugacolor.jpg`, alt: 'cayugacolor' },
  ];


  const WallaceDates = [
    '1786', '1787', '1788', '1789', '1790', '1791', '1792', '1793', '1794', '1795', '1796', '1797', '1798', '1799', '1800', '1801', '1802', '1803', '1804', '1805', '1806', '1807', '1808', '1809', '1810', '1811', '1812',
    '1813', '1814', '1815', '1816', '1817', '1818', '1819', '1820', '1821', '1822', '1823', '1824', '1825', '1826', '1827', '1828', '1829', '1830', '1831', '1832', '1833', '1834', '1835', '1836', '1837', '1838', '1839', '1840', '1841', '1842', '1843', '1844', '1845', '1846', '1847', '1848', '1849', '1850', '1851', '1852', '1853', '1854', '1855', '1856', '1857', '1858', '1859', '1860', '1861', '1862', '1863', '1864', '1865', '1866', '1867', '1868', '1869', '1870', '1871', '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885', '1886', '1887', '1888', '1889', '1890', '1891', '1892', '1893', '1894', '1895', '1896', '1897', '1898', '1899', '1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920'
  ];

  const WallaceBuilders = [
    'A.E. ELLIS',
    'A.M. VIDAL',
    'AARON EATON',
    'AbrYoung',
    'Absalom Titus.',
    'Adam Roy.',
    'ALAN GILMOUR',
    'Alex Sime',
    'ALEX SIME.',
    'Alex. & Wm. Campbell',
    'Alex. Anderson',
    'Alex. Lockhart',
    'Alex. Lyle',
    'Alex. Roy',
    'Alex. Roy.',
    'Alex. Sime',
    'Alex. Simes',
    'Alex. Wright',
    'ALLGILMOUR',
    'AllGilmour.',
    'Anderson',
    'AndersonR',
    'Andrew & Wm. Parke',
    'Andrew Neilson',
    'ANT. ST. JEAN',
    'ARCHD. MCKAY',
    'Armstrong',
    'Artlnur McDonald',
    'Atkinson & Hall',
    'AZOR W. T. BETTS',
    'B Smith',
    'B. & Desnoyers',
    'B. & I. Raymond',
    'B. Appleby.',
    'B. SMITH',
    'B. Smith.',
    'Baines & Co.',
    'BALDWIN',
    'Baldwin & Dining',
    'BALDWIN & DINNING',
    'Baldwin & Dinning.',
    'Belliveau',
    'BEN. KILLAM',
    'Benj. Appelby.',
    'Benj. Appleby',
    'Benj. Richards',
    'Benj. Richards.',
    'Bennett',
    'BENNETT SMITH',
    'Benson',
    'Berry',
    'Berteaux',
    'Beveridge',
    '"Bidegare, Jolicoeur & Lachance"',
    'BIGELOW',
    'Bigelow & Loomer',
    'BIGELOW & SON',
    'BIGLOW',
    'Black',
    'BLACKADER & CO.',
    'Blinn',
    'Bollem',
    'Boudreau',
    'BOULTENHOUSE',
    'BOWER & PENCE',
    'Boyd',
    'Bradford',
    'Bradshaw',
    'BREWER & BRIGGS',
    'Briggs',
    'Brown',
    'Brown & Anthony',
    'Brown & Carson.',
    '"Brown 1905, Norwegi Alborga.',
    'Brown.',
    'Bryson.',
    'Burgess & Cox',
    'BURRILL',
    'Burrill & Co.',
    'by John Munn',
    'by Storm & Johnson',
    'C. C. Watt',
    'C. CAMPBELL',
    'C. COX',
    '"C. Cox & Sons',
    'C. Lockhart',
    'C. M. Sellars',
    'C. MCLENNAN',
    'C. McLennan.',
    'C. R. Burgess',
    'C. Russell',
    'C. SOALES',
    'C. Sorell',
    'C. SPECHT',
    'C. White',
    'C.Boultenhouse.',
    'C.Cox & Sons',
    'C.F. & F.R. EATON',
    'C.H. DAKIN & CO.',
    'C.R. BURGESS',
    'Caie',
    'Calhoun',
    'Calhoun.',
    'Cameron',
    'Campbell',
    'CAMPBELL',
    'Campbell.',
    'Cann.',
    'Capt. Fred Curry',
    'Capt. G. McKenzie',
    'Capt. Geo. McKenzie',
    'Capt. McKenzie',
    'CARMICHAEL',
    'Carson',
    'Ch. Sharples',
    'CHAPMAN',
    'Charland',
    'CHARLAND & MARQUIS',
    'Charland & Marquis.',
    '"Charland & Marquis. Allans, Glasgow."',
    'Charland &Marquis',
    'Charland.',
    'Chas. C. Stewart',
    'CHAS. COX',
    'CHAS. DIXON',
    'Chas. Dixon.',
    'CHAS. JOBIN',
    'Chas. Scales',
    'Chas. Sharples',
    'Chas. Wilson',
    'CHAS. WOOD',
    'Chas.Scales.',
    'Chris. Boultenhouse',
    'Chris. Boultenhouse.',
    'Chris. Specht',
    'Chris.Specht.',
    'CHUBBUCK',
    'CHURCHILL',
    'CHURCHILL & SONS',
    'Clark & Rice',
    'Clarke Bros.',
    'Cochrane. North Fleet.',
    'Coffin',
    'Coffin.',
    'CONNEL',
    'Cosman',
    'Cotnam',
    'Cotnam.',
    'Covert.Haws Fleet.',
    'Cox',
    'Cox',
    'CRANDALL',
    'Crandall & Co',
    'Crawley',
    'CROSBY',
    'Cruickshank',
    'Cruickshank & Pitfield',
    'Cruickshanks',
    'Cruickshanks & Pitfield.',
    'Cruickshanks.',
    'CURRIE',
    'D. & Campbell',
    'D. & G. Patterson',
    'D. & H. Campbell',
    'D. Barber & Co.',
    'D. Caldwell',
    'D. Dill',
    'D. Forbes',
    'D. H. Morris',
    'D. Horton.',
    'D. Huntley',
    'D. HUNTLY',
    'D. LYNCH',
    'D. Lynch.',
    'D. Morris',
    'D. P. Soley',
    'D. R. & C. F. Eaton',
    'D. R. & C. F. Eaton.',
    'D. Ross',
    'D. SURRETTE',
    'D. Wright.',
    'D. Young',
    'D.J. DAKIN',
    'D.L. & ANGERS',
    'D.V. ROBERTS',
    'Daly',
    'DAN. J. DAKIN',
    'Daniel Ross',
    'Dan\'l Brennan',
    'DAVID DILL',
    'David Hale',
    'DAVID HILL',
    'DAVID LYNCH',
    'David Lynch. Troop Fleet.',
    'DAVID MUNN',
    'David Smith',
    'David Vaughan.',
    'Davies',
    'Davison',
    'De Long Bros',
    'Delap',
    'Delap.',
    'Dennis Horton',
    'DESMOND',
    'Desmond.',
    'Deveau',
    'Dimock',
    'DINNING',
    'Doane',
    'Dolliver',
    'Dougl& Jas. Westcott',
    'Doull',
    'DROLET & LEBLOND',
    'DUBORD',
    'Duncan',
    'Dunlop',
    'DUNN',
    'Dunn & Sampson',
    'Dunn & Samson',
    '"Dunn & Samson, French Sanv',
    'E. & J. Wilson.',
    'E. BOUDREAU',
    'E. CHURCHILL',
    'E. Churchill & Sons',
    'E. Churchill & Sons. Churchill Fleet.',
    'E. COX',
    'E. Cox.',
    'E. Dolliver',
    'E. J. Budd',
    'E. Julien & Isadore Samson',
    'E. McGuiggan.',
    'E. MICHON',
    'E. Raymond',
    'E. Samson',
    'E. Samson.',
    'E. Sewell',
    'E. T. Samson',
    'E. W. Berry',
    'E. W. Ogden',
    'EATON',
    'Eaton.',
    'Eben Kilborn',
    'Ed. Lee',
    'ED. OLIVER',
    'Ed. Oliver.',
    'Ed. P. Lee.',
    'Ed. Richan.',
    'Ed. Sewell',
    'Ed. Sewell.',
    'Ed. Trahan',
    'Ed. Trahan.',
    'Ed. Wilson',
    'EDMOND DUBORD',
    'Edw. J. Budd',
    'EDW. OLIVER',
    'Edward J. Budd',
    'Ellis',
    'Ely. Dinning',
    'Erd. Trahan',
    'EVERETT',
    'EVERITT',
    'F. & F. Ruddock',
    'F. & F.Ruddock',
    'F. & J. RUDDOCK',
    'F. & J. Ruddock.',
    'F. & S. Smith',
    'F. Bourneuf',
    'F. E. Sayre',
    'F. Pence',
    'F. RUDDOCK & BROS',
    'F. Ruddock.',
    'F. WESTON',
    'F. X. Marquis',
    'F.R. EATON',
    'F.X. MARQUIS',
    'Ferd. Emond',
    'FISHER',
    'Fisher.',
    'FLEWELLING',
    'Foley',
    'FOSTER',
    'FRANCES BOURNEUF',
    'FRANCIS BOURNEUF',
    'FRANCIS BOURNEUFF',
    'FRANCIS SMITH',
    'Francis Smith.',
    'Fraser',
    'Fraser & Son',
    'Fraser.',
    'Fred Smith.',
    'Freeman',
    'Frieze & Roy',
    'Fuller',
    'FULLERTON',
    'G Lamelin',
    'G. & J. Salter',
    'G. Bent.',
    'G. H. Parke',
    'G. Jenkins',
    'G. Leblanc',
    'G. LEMELIN',
    'G. MCKENZIE',
    'G. Merritt',
    'G. P. Oxley',
    'G. Palmer',
    'G. S. Turner',
    'G. T. Davie.',
    'G.CANNON',
    'G.S. TURNER',
    'G.T. DAVIE',
    'GARDNER',
    'GASS',
    'Gass & Stewart',
    'Geddes',
    'Geo.',
    'GEO. ARMSTRONG',
    'GEO. BLACK',
    'Geo. Black, jr',
    'Geo. E. Pettis',
    'Geo. Gilley',
    'Geo. Gilley.',
    'GEO. H. PARKE',
    'Geo. H. Parke.',
    'Geo. Hamilton',
    'Geo. King',
    'Geo. Marr',
    'GEO. MCKENZIE',
    'Geo. McKenzie.',
    'GEO. P. OXLEY',
    'Geo. Salter',
    'Geo. Salter.',
    'Geo. Scoullar',
    'Geo. Smith',
    'GEO. T. DAVIE',
    'GEO. THOMPSON',
    'Geo. Thompson.',
    'Geo. Thomson',
    'Geo. Thomson.',
    'Geo.Smith.',
    'Germain & Co.',
    'GIBBS',
    'Gilbert Bent',
    'Gingr& Martineau',
    'Gingras',
    'Gordon',
    'H. & N. B. Lewis.',
    'H. Atkinson',
    'H. Boudreau.',
    'H. Curzon.',
    'H. D. Partelow.',
    'H. Dinning',
    'H. Dinning.',
    'H. DUBORD',
    'H. Elderkin & Co.',
    'H. H. Greene',
    'H. Hartshorn',
    'H. Irvin & Bros.',
    'H. Irvine & Bros.',
    'H. McBlain',
    'H. N. Jones',
    'H. N. Jones.',
    'H. Sharples.',
    'H. W. Jones',
    'H. Warner',
    'H. Warner.',
    'H.N. JONES',
    'Hall',
    'Hankinson',
    'HARLEY',
    'HARRIS',
    'Harvie',
    'Harvie.',
    'HATFIELD',
    'Hatfield Bros.',
    'HAWS',
    'HAYES & CO.',
    'Henry & Sewell',
    'Henry Cowan.',
    'Henry Dinning',
    'Henry Goodritt.',
    'HENRY O\'LEARY',
    'Henry Sharples',
    'HI. PP. Boudreau',
    'Hickman',
    'Hickman.',
    'Hill',
    'HILYARD',
    'Hilyard & Ruddock',
    'HILYARD BROS',
    'HILYARD BROS.',
    'HIYLARD',
    'Hon. Colin Campbell',
    'Hugh Irvin',
    'Hugh Irvin.',
    'Hugh Irvine',
    'Hugh Irwin',
    'Hy Dinning',
    'Hy. Cumming',
    'HY. DINNING',
    'Hy. Dinning.',
    'Hy. Dubord',
    'HY. EASTMAN',
    'Hy. Lewis.',
    'HYP. DUBORD',
    'Hyp. Dubord.',
    'Hyp. Dubord. Aflo1900.',
    'Hyp.Dubord.',
    'I. & I. SAMPSOM',
    'I. & I. SAMPSON',
    'I. & I. SAMSON',
    'I. & I. SAMSON.',
    'I. & J. SAMSON',
    'I. B. North',
    'I. Fellows',
    'I. H. Doane',
    'I. King',
    'I. Samson & Co',
    'I.J. OLIVE',
    'Ira Raymond',
    'Irvin & Booth',
    'IsaGarston.',
    'ISAIE JULIEN & CO.',
    'IsaOlive.',
    'J. & C. EVERETT',
    'J. & C. Short',
    'J. & R. McLeod',
    'J. & R. Townsend',
    'J. & T.',
    'J. & T. Jardine',
    'J. & T. Jardine.',
    'J. Allen',
    'J. Allen.',
    'J. B. North',
    'J. B. North.',
    'J. Bingay',
    'J. BRADSHAW',
    'J. Bradshaw.',
    'J. Bream',
    'J. Brewer',
    'J. BRIGGS',
    'J. Carson',
    'J. Clark, jr.',
    'J. COUNTER',
    'J. CROWE',
    'J. D. Brown',
    'J. D. Coffin',
    'J. Davidson',
    'J. Davison',
    'J. DEXTER',
    'J. E Gingras',
    'J. E. Burgess',
    'J. E. Gingras',
    'J. E. Gingras.',
    'J. E. Harris',
    'J. E. Oliver',
    'J. E. Oliver',
    'J. E. Reed',
    'J. E. Steele',
    'J. E. Woodworth',
    'J. F. Oliver',
    'J. F. Payne',
    'J. Fisher',
    'J. FOWNES & SONS',
    'J. Fraser',
    'J. FREDERICKSON',
    'J. Fullerton',
    'J. G. Shaw',
    'J. GILMOUR',
    'J. Gilmour.',
    'J. GINGRAS',
    'J. H. Dexter',
    'J. H. Harvie',
    'J. H. Moran',
    'J. H. Moran.',
    'J. H. Zwicker',
    'J. Harvie.',
    'J. Hatfield',
    'J. Hatfield',
    'J. HAWS',
    'J. HILLIS',
    'J. J. & W. J. Olive',
    'J. J. & W. Olive',
    'J. J. Nesbit',
    'J. J. Nesbit.',
    'J. J. Nesbitt',
    'J. J. Yorston',
    'J. J.Nesbit',
    'J. J.Nesbit.',
    'J. JONES',
    'J. K, Dunlop',
    'J. K. Dunlop',
    'J. KITCHEN',
    'J. Kitchin',
    'J. L. Burrill',
    'J. L. McKelpine',
    'J. L. Pye',
    'J. L.Chubbock.',
    'J. Lefurgey.',
    'J. Little',
    'J. Lovitt',
    'J. Lovitt.',
    'J. M. Blaikie',
    'J. M. Brewer',
    'J. MacLellan.',
    'J. MAHONEY',
    'J. MARR',
    'J. McColl.',
    'J. McDonald & Co.',
    'J. McDonald.',
    'J. McFee',
    'J. MCLAUCHL& ROBT. STACKHOUSE',
    'J. McLeod',
    'J. McLeod.',
    'J. McNairn',
    'J. Millard',
    'J. MONTEITH',
    'J. MOSHER',
    'J. Mulcahey',
    'J. MURPHY',
    'J. N. Gardiner',
    'J. N. Gardner',
    'J. N. Gardner.',
    'J. O\'Brien',
    'J. O\'Brien.',
    'J. OWENS & W. LAWTON',
    'J. Parker',
    'J. RAMSAY',
    'J. Raymond',
    'J. Richards',
    'J. Rowan',
    'J. Ruddock',
    'J. S. Barker',
    'J. S. Parker',
    'J. Steele.',
    'J. Stewart',
    'J. Storm',
    'J. SULIS & SONS',
    'J. T. SMITH',
    'J. THOMPSON',
    'J. Titus',
    'J. Townshend',
    'J. Trahey.',
    'J. Urquhart',
    'J. W. Carmichael',
    'J. W. Doane',
    'J. W. Oliver',
    'J. W. Richards',
    'J. W. Smith',
    'J. W. Smith.',
    'J. WETMORE',
    'J. Yeo, jr.',
    'J.B. NORTH',
    'J.B. SMITH',
    'J.Briggs.',
    'J.E. GINGRAS',
    'J.E. GRINGRAS',
    'J.E. OLIVER',
    'J.E.GINGRAS',
    'J.G. SEELY',
    'J.H. HARVIE',
    'J.H. ZWICKER',
    'J.HARVIE',
    'J.HATFIELD',
    'J.J. NESBIT',
    'J.J. Nesbit.',
    'J.J. Nesbitt',
    'J.McDonald',
    'J.McLauchlan',
    'J.S. Parker. Troop Fleet.',
    'J.W. CRAIG',
    'J.W. GARDNER',
    'Jacob Freize',
    'Jacob Frieze',
    'James Duncan',
    'JAMES HAWS',
    'JAMES JEFFERY',
    'JAMES SMITH',
    'James Yeo.',
    'James Young',
    'Jamieson',
    'JARDINE',
    'Jardine Bros',
    'Jarvis & Walton',
    'Jas. Black',
    'JAS. BRIGGS',
    'Jas. Briggs.',
    'JAS. COPPEE',
    'Jas. Cox',
    'Jas. Crowe',
    'JAS. DELAP',
    'Jas. E. Oliver',
    'Jas. E. Oliver.',
    'Jas. Erskine Oliver.',
    'Jas. Fullerton.',
    'Jas. Gardiner',
    'Jas. H. Timpany',
    'JAS. HAMFORD',
    'Jas. Hare',
    'JAS. HAWS',
    'Jas. Haws.',
    'JAS. JEFFERY',
    'Jas. Jeffery.',
    'JAS. JEFFRY',
    'Jas. Johnston',
    'JAS. KITCHEN',
    'Jas. Kitchen.',
    'Jas. Kitchin',
    'Jas. Logan.',
    'Jas. Malcolm',
    'Jas. Malcolm.',
    'JAS. MCFEE',
    'JAS. MOSHER',
    'JAS. NEALES',
    'JAS. NEVINS',
    'JAS. OLIVER',
    'Jas. Oliver.',
    'Jas. P. Payne.',
    'Jas. Parker',
    'Jas. Payne',
    'Jas. Porter',
    'Jas. Rait.',
    'JAS. SMITH',
    'Jas. Smith & Son',
    'Jas. Smith.',
    'Jas. Sulis',
    'JAS. SWIM',
    'Jas. Swim.',
    'Jas. T. Smith',
    'Jas. Tibbitt',
    'JAS. YEO',
    'Jas. Yeo & Son.',
    'Jas. Yeo.',
    'Jas.Jeffery.',
    'Jas.Tibbitts',
    'JEGINGRAS',
    'JELAMELIN',
    'JENKINS',
    'Jenkins.',
    'JeremiEverett.',
    'JKitchin, Sr',
    'John Beatson',
    'John Briggs',
    'John Campbell.',
    'John Chappell.',
    'John Clark',
    'JOHN CLARK, JR.',
    'John Dunn',
    'John Dunn.',
    'JOHN FISHEER',
    'John Fisher',
    'John Fisher.',
    '"John Fisher. ',
    'John Fisher.',
    'John Fraser',
    'JOHN GILMOUR',
    'JOHN GOULDIE',
    'John Harvie',
    'JOHN HAWS',
    'John J. Nesbitt',
    'John Jas. Nesbitt.',
    'JOHN JEFFERY',
    'John Jeffery.',
    'John Lamelin, jr.',
    'John Lane',
    'JOHN LOVITT',
    'JOHN MCDONALD',
    'John McLeod',
    'JOHN MCLURE',
    'John Meahan',
    'JOHN MILNER',
    'JOHN MUNN',
    'JOHN NESBITT',
    'John Nesbitt, Australia Pack',
    'John Nesbitt.',
    'John Nicholson',
    'John Owens & John Duncan',
    'John Owens.',
    'John Richards',
    'John Rowan',
    'John Sharples',
    'JOHN SMITH',
    'JOHN STORM',
    'John Thompson',
    'John Trahey',
    'John Trahey.',
    'JOHN VICKERY',
    'JOHN W. LOVITT',
    'JOHN W. SMITH',
    'JOHN WILSON',
    'JohnMunn',
    'Johnn Munn',
    'Johnn Owens.',
    'Johnson & Mackie',
    'Johnson & Mackie.',
    'Jolm Marr',
    'Jordan',
    'JOS SALTER',
    'JOS. ANGERS',
    'Jos. Milford',
    'Jos. Monteith',
    'Jos. Pope.',
    'Jos. Porter',
    'JOS. SALTER',
    'Jos. Salter.',
    'JOS. WOODWORTH',
    'Joseph Dunlop',
    'Joseph Jeffery',
    'Joseph Sulis & Sons',
    'JULIEN & CO.',
    'JULIEN & FRERES',
    'Julien & Labb',
    'Julien & Labb.',
    'JULIEN & LABBE',
    'Julien Labb',
    'K. McLean',
    'K.WM. LEOD',
    'KELLEY & VAUGHAN',
    'Kent Co.',
    'Killam.',
    'KING',
    'Kitchen',
    'KITCHIN',
    'L. & Letarte',
    'L. Del& Co.',
    'L. Delap',
    'L. Delap.',
    'L. Delap. 1903, NorwegiTelefon',
    'L. HEWITT',
    'L. METHOT',
    'L. Sponagle. 1903, American.',
    'L.W. EATON',
    'LACHANCE & FLANAGAN',
    'Lachl& Stackhouse',
    'Lap. & Letarte',
    'LAUGHLIN',
    'LAUGHTON & PATCHELL',
    'Leage',
    'Leavitt & Parker',
    'LEFURGEY',
    'Lewis & Co. 1894, Nor. Heidrun.',
    'Lewis.',
    'Lockhart & B. Vaughan.',
    'Lom& Sewell',
    'LOOMER',
    'Loomer.',
    'Lovett & Parker',
    'LOVITT',
    'Lovitt & Co',
    'Lovitt & Parker',
    'Lovitt & Parker.',
    'Lowden',
    'LYDIARD',
    'Lyle',
    'Lyle',
    'M. Cochran',
    'M. LAPRISE & CO.',
    'M. S. Harris.',
    'M. Vidal',
    'M. Vidal.',
    'MacDougall',
    'MacLachlan',
    'MAHONEY',
    'MALCOLM',
    'Marr',
    'MARSHALL',
    'Marshall & Hardwick',
    'Marshall.',
    'Marshall. Troop Fleet.',
    'McCollum.',
    'MCCULLUM',
    'McDonald',
    'MCDONALD',
    'McDonald.',
    'McDonald',
    'McDougall',
    'MCDOUGALL',
    'MCDOUGALL',
    'McEwen. 1905, Norwegian.',
    'McFee',
    'McGowan',
    'MCK& WARNER',
    'McK& Warner.',
    'McKay',
    'MCKELPINE',
    'MCKENZIE',
    'MCKENZIE',
    'MCKENZIE & LANDER',
    'McKenzie.',
    'MCLACHL& STACKHOUSE',
    'MCLACHLAN',
    'McLauchl& Stackhouse',
    'MCLAUGHLIN',
    'McLaughlin & Stackhousc',
    'McLell& Blackie',
    'McLell& Blaikie',
    'MCLELLAN',
    'McLennan',
    'McLennan.',
    'MCLEOD',
    'MCMILLAN',
    'McMorr& Dunn',
    'McMorr& Vunn',
    'McQuiggan',
    'McQuiston',
    'MERCIER & PELCHAT',
    'Merritt',
    'MILLEDGE',
    'Miller.',
    'Mills',
    'Mockler',
    'Mockler.',
    'MOR& DUNN',
    'MORAN',
    'Moran.',
    'Morris',
    'MORRISON & SORRELL',
    'Morrison &Sorrell',
    'Morrissey & Shives',
    'Morton',
    'MOSHER',
    'Muir',
    'MUIRHEAD',
    'Murphy',
    'Murphy.',
    'N Rosa',
    'N. & J. Raymond',
    'N. B. Gardner',
    'N. B. Gardner.',
    'N. GARDNER',
    'N. H. & J. C. Pope.',
    'N. MOSHER',
    'N. Mosher, jr.',
    'N. Mosher,jr.',
    'N. ROSA',
    'N. Rosa.',
    'N.M. BENNETT',
    'Nelson Gardner',
    'NEVINS',
    'NEVINS & FRASER',
    'Nevins & Irving',
    'Nevins & Magures',
    'Nevins.',
    'Nicholson & Russell',
    'North',
    'O HINDS',
    'O. Jones.',
    'O. PITTFIELD',
    'O. Pittfield.',
    'O\'BRIEN',
    'Ogden',
    'O\'Leary',
    'OLIVE',
    'Olive.',
    'Oliver',
    'Oliver Chartier',
    'Oliver Jones',
    'Oliver Jones.',
    'Omer Blinn',
    'Osborne',
    'OSMOND O\'BRIEN',
    'OULTON',
    'Owen',
    'Owens & Duncan',
    'Owens & Duncan.',
    'Owens &Duncan',
    'P Baldwin',
    'P. & T. Young',
    'P. Baldwin',
    'P. Baldwin.',
    'P. BRUNELLE',
    'P. Brunelle & Son.',
    'P. BRUNELLE & SONS',
    'P. Brunelle.',
    'P. Crichton. Burgess Fleet',
    'P. G. Labb',
    'P. Maxwell',
    'P. R. Crichton',
    'P. R. Crichton Burgess Fleet.',
    'P. R. Crichton. Burgess Fleet.',
    'P. R. Crichton. Burgess Fleet',
    'P. R. Crichton.Burgess Fleet',
    'P. V. Valin',
    'P. V. Valin.',
    'P. V.Valin',
    'P. V.Valin.',
    'P. VALIN',
    'P. Valin & Co',
    'P. Valin & Co.',
    'P. Valin.',
    'P. YOUNG',
    'P.G. LABBE',
    'P.V. VALIN',
    'P.V.Valin',
    'PALMER',
    'Parke.',
    'PARKER',
    'Parker.',
    'Parkes & Son',
    'Parks & Son',
    'Parks & Urquhart',
    'Patrick Beatson',
    'Peake Bros',
    'PELCH& MERCIER',
    'Pelch& Mercier.',
    'Peter Crerar',
    'Peter Young. 1886, NorwegiVigilant.',
    'Pickersgill, Nesbitt & Co.',
    'Pickles & Mills.',
    'PIERRE BRUNELLE',
    'Pierre Cote',
    'PIERRE LABBE',
    'PIERRE VALIN',
    'Pierre Valin.',
    'PITFIELD',
    'Pope',
    'Potts',
    'Purves',
    'Putnam',
    'Putnam',
    'Pye',
    'QUISTON',
    'R& Dean',
    'R. & J. Townsend',
    'R. C. Haws',
    'R. Chapman',
    'R. Chapman.',
    'R. E. Lovitt',
    'R. ELLIS',
    'R. Fisher',
    'R. Lovitt & John Parker',
    'R. McCord & Sons',
    'R. McDonald',
    'R. Rose',
    'R. TITUS',
    'R. W. Freeman.',
    'R.CHAPMAN',
    'RAYMOND',
    'Raymond & Sons',
    'Regis Roy & Co.',
    'Richard Jeffery',
    'Richard Lovitt',
    'RICHARDS',
    'Richards.',
    'Richardson',
    'Richnard Jeffery',
    'Ritchie',
    'Robert Lewis',
    'ROBERTS FLEET',
    'Robt. Ellis',
    'Robt. Jas. Jenkins',
    'ROBT. LONGWORTH',
    'ROBT. MORAN',
    'ROBT. ORR',
    'Robt. Rankin',
    'Robt. Sims',
    'Robt. Vail.',
    'Roderick Bros.',
    'ROWAN',
    'Rowan.',
    'ROY',
    'RUDDOCK',
    'Russell',
    'Ryerson',
    'S. Burney',
    'S. Denton',
    'S. DIMOCK',
    'S. Dimock.',
    'S. H. Trefrey',
    'S. J. & W. J. Olive',
    'S. J. King',
    'S. Rowan',
    'S. Rowan.',
    'S. SMITH',
    'S. T. & W. Olive.',
    'S. Trefry',
    'S. Vaughan',
    'S.J. KING',
    'Saml. Carson.',
    'SAMPSON',
    'Samson',
    'SANDERSON',
    'SCARSON',
    'Scotland',
    'Scouller & Partelow',
    'Sharples',
    'SHORT',
    'Short Bros',
    'SHORT BROS.',
    'Simms',
    'Sims.',
    'Sinclair',
    'Smith',
    'Smith & Haws',
    'SMITH & SONS',
    'SMuir',
    'Soley',
    'SPENCER\'S IS.CO.',
    'Spencer\'s Island Co.',
    'SSmith',
    'St. Hilaire.',
    'St. Jean',
    'Stephen',
    'Stephen Binney',
    'STEWART & RITCHIE',
    'Stewart & Ritchie.',
    'STORM & KING',
    'Storm & King.',
    'SURETTE',
    'T. & J. Bradshaw',
    'T. & L. Samson',
    'T. 11. Oliver',
    'T. C. Lee',
    'T. C. Lee.',
    'T. Coffin',
    'T. E. Bigelow.',
    'T. E. Gingras.',
    'T. E. Milledge',
    'T. H. MacDonald',
    'T. H. Oliver',
    'T. H. Oliver.',
    'T. H. Oliver',
    'T. Harvie.',
    'T. Killam',
    'T. Langill',
    'T. Milledge',
    'T. MOSHER',
    'T. S. Laurence',
    'T. St. Jean',
    'T. Valin',
    'T. Wilson',
    'T.C. LEE',
    'T.E. MILLEDGE',
    'T.H. OLIVER',
    'T.H. RICE',
    'Tas. Oliver',
    'Th. Curry',
    'Th. Hamilton.',
    'TH. LEE',
    'Th. Lee.',
    'TH. OLIVER',
    'Th. Oliver.',
    'Theo St Jean',
    'Theo. Nichol',
    'THEO. S. JEAN',
    'Theo. St. Jean.',
    'THEOP. ST. JEAN',
    'Theop. St. Jean.',
    'ThomLee',
    'THOMOLIVER',
    'Thompson',
    'THOMPSON & STACKHOUSE',
    'Thompson & Tinker',
    'Thos H. Oliver',
    'THOS. C. LEE',
    'Thos. C. Lee.',
    'Thos. C.Lee',
    'Thos. C.Lee.',
    'Thos. Carson',
    'THOS. CONRLEE',
    'Thos. Frost',
    'THOS. H. OLIVER',
    'Thos. H. Oliver.',
    'THOS. HILYARD',
    'Thos. Hilyard.',
    'THOS. LEE',
    'Thos. Lee.',
    'Thos. McLeod',
    'Thos. Mosher',
    'THOS. MOSHER',
    'THOS. OLIVER',
    'Thos. Oliver.',
    'Thos. Ritchie',
    'Thos. Vaughan',
    'Thos.Hilyard',
    'Thos.Lee.',
    'Thos.Oliver.',
    'Titus',
    'Titus',
    'Tohn Nesbitt',
    'Touissant Valin',
    'Toussaint Valin',
    'Trefry',
    'TristrRing',
    'Turner',
    'V. Leblanc. G. H. Lovitt Fleet.',
    'VAIL & MORAN',
    'VALIN',
    'Valin & Dougal',
    'VALIN & DUGAL',
    'Valin & Dugal.',
    'Valin.',
    'Vaughan',
    'Vaughann',
    'Vickery',
    'W. & I. OLIVE',
    'W. & I. Olive.',
    'W. & J. Lawton',
    'W. & J. Lawton.',
    'W. & J. Olive',
    'W. & R. WALLACE',
    'W. & R. WRIGHT',
    'W. & R. Wright.',
    'W. &R.Wright',
    'W. B. Flewelling',
    'W. Baldwin',
    'W. CHARLAND',
    'W. CHARLAND, JR.',
    'W. Charland.',
    'W. Cotnam.',
    'W. Cox',
    'W. D. Lawrence',
    'W. D. Lawrence. Lawrence Fleet',
    'W. D. Lovitt',
    'W. Douse',
    'W. G. Russell',
    'W. H. & Ed. Sewell',
    'W. H. & R. Hall',
    'W. Hall',
    'W. Hall.',
    'W. Hickman',
    'W. Hogg.',
    'W. J. Lawton',
    'W. J. Rourke',
    'W. L. Flewelling',
    'W. M. Mosher',
    'W. Moore',
    'W. Nelson',
    'W. P. Cameron',
    'W. R& DEAN',
    'W. R. Wright',
    'W. Richards',
    'W. RUSSELL',
    'W. S. Vaughan',
    'W. S. Vaughn',
    'W. Scoullar.',
    'W. T. Kelley',
    'W. V. Cameron',
    'W. Vaughan',
    'W.C. RICHARDSON',
    'W.H. BALDWIN',
    'W.H. MOSHER',
    'W.H. ROURKE',
    'W.P. FLEWELLING',
    'W.R. HUNTLY',
    'Wallace',
    'Wallace Bros',
    'Walter Brown',
    'WALTER GILLIE RAY',
    'Walter Ray',
    'WELCH',
    'Wellington Nelson',
    'Weston Hall',
    'WETMORE',
    'Wetmore & Fraser',
    'Wetmore & Merritt. Registered',
    'WETMORE, TITUS & MERRITT',
    'WETMORE. TITUS & MERRITT',
    'Williams.',
    'WILLILAMPSON',
    'Win. Russell',
    'Wm Henry',
    'Wm.',
    'WM. & I. OLIVE',
    'Wm. & Jas. Lawton',
    'Wm. & Th. Potts',
    'WM. BALDWIN',
    'Wm. Baldwin.',
    'Wm. Baldwin. See Jane Law.',
    'Wm. Bennet & Sons',
    'Wm. Bennett',
    'Wm. Bennett & Bros.',
    'Wm. Benson',
    'Wm. Boultenhouse',
    'WM. CHARLAND',
    'Wm. Charland.',
    'Wm. Clark',
    'WM. COTNAM',
    'Wm. Cotnam.',
    '"Wm. Cotnam. New Zealand Packet, Albion Line, Glasgow."',
    'WM. CRAFT',
    'WM. CRANE',
    'WM. DE BOWE',
    'Wm. Douse.',
    'Wm. Ellis',
    'WM. FLEWELLING',
    'Wm. Fownes',
    'WM. GEO. RUSSELL',
    'Wm. Hall',
    'Wm. Hart',
    'Wm. Heard',
    'Wm. Henderson',
    'Wm. Henry',
    'Wm. Henry.',
    'Wm. Irish.',
    'Wm. Jeffery',
    'Wm. Jeffery.',
    'WM. JEFFREY',
    'Wm. Lampson',
    'Wm. Lawrence',
    'Wm. Lawson.',
    'WM. LAWTON',
    'Wm. McGill.',
    'Wm. Moore',
    'WM. OLIVE',
    'Wm. Olive & Co.',
    'Wm. Olive.',
    'Wm. P. Flewelling',
    'Wm. Porter',
    'Wm. Potts',
    'Wm. Potts & Son',
    'Wm. Power',
    'Wm. Price',
    'WM. RICHARDS',
    'WM. RUSSEL',
    'WM. RUSSELL',
    'Wm. Russell.',
    'WM. SCOULLAR',
    'WM. SMITH',
    'Wm. Soullar',
    'Wm. Stalker',
    'Wm. Stevenson',
    'WM. VAIL',
    'Wm. Vail.',
    'Wm. Vail. Sold Greenock.',
    'Wm. W. Hicks',
    'Wm.Baldwin',
    'Wolff',
    'WOODSWORTH',
    'Woodsworth.',
    'Wrighnt & Co.',
    'WRIGHT',
    'Wrn. Cotnam',
    'YEO',
    'Yeo.',
    'YOUNG',
    'Young',
    'Young.',
    'Young. Troop Fleet.',
    'Zwicker'
  ]


  const MillsDates = [
    '1808', '1809', '1810', '1811', '1812', '1813', '1814', '1815', '1816', '1817', '1818', '1819', '1820', '1821', '1822', '1823', '1824', '1825', '1826', '1827', '1828', '1829', '1830', '1831', '1832', '1833', '1834', '1835', '1836', '1837', '1838', '1839', '1840', '1841', '1842', '1843', '1844', '1845', '1846', '1847', '1848', '1849', '1850', '1851', '1852', '1853', '1854', '1855', '1856', '1857', '1858', '1859', '1860', '1861', '1862', '1863', '1864', '1865', '1866', '1867', '1868', '1869', '1870', '1871', '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885', '1886', '1887', '1888', '1889', '1890', '1891', '1892', '1893', '1894', '1895', '1896', '1897', '1898', '1899', '1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930'];


  const menuItems = [
    { title: 'Ships Registry', icon: 'home', route: '/' },
    { title: 'Forged in Fire', icon: 'folder', route: '/forged' },
    { title: 'Growth', icon: 'folder', route: '/growth' },

  ];



const MillsIntro = `
<h1>Kingston Marine Museum of the Great Lakes</h1>
<h1>is pleased to host the New Mills List</></h1>

<h3>Preface</h3>

<p>John Mills has devoted a good portion of his life towards the documentation of steamships. The result is a unique source of information that will be of use to researchers well into the 21st century. Such a task is not easy. The preparation needed to exercise good judgement and a consistently high standard to the work demands a familiarity with nautical history, reporting conventions and the arcane world of government documentation processes.</p>

<p>This edition adds considerably to the first edition published by the Steamship Historical Society in 1971. All of the entries have been reviewed and there are well over two thousand new additions. I have found the New Mills List an invaluable companion in my work and the provider of answers for the many individuals who make use of our archival and library research facilities.</p>

<p>John was the 'greater equal' in a team of individuals who all provided support in this project. His patience and attention to detail is astounding. Other members of the team include Earl Moorhead, long serving museum registrar; Jonathan Moore who supervised the initial conversion from hard copy to digital format, the priescent Doug Fell who worked closely with John to move the project along and Gene Clevenger who resolved the many problems associated with specialized formatting. Finally a special thank you to Dr. Gordon Shaw, a Patron of the first rank.</p>

<p style='font-weight:bold'> Maurice D. Smith,</p>

<p style='font-weight:bold'>Curator Emeritus,</p>

<p style='font-weight:bold'>Marine Museum of the Great Lakes at Kingston</p>

<h3>Foreword</h3>

<p> The NEW MILLS LIST is the culmination of years’ of work by its author, John M. Mills. It contains the names and data for over 6,000 steam and motor vessels, which were registered in Canada between 1809 and 1930. These names include vessels large and small, from well-known passenger steamers to small tugs and obscure steam barges. Some had long, productive lives while others did not, one having burned on its trial trip. They are all there!</p>

<p>While John obtained some information from others, this work is largely a monument to his own perseverance, energy and outstanding attention to detail. The work started as a lunch-hour hobby while he was working in administration at the University of Toronto and had ready access to their Robarts Library collection of government documents and newspaper files. These, John read diligently and so found names and records of vessels long forgotten, if ever widely known by those not directly concerned. An original, and shorter version of this list was published in 1979 under the title CANADIAN COASTAL AND INLAND STEAM VESSELS 1809 - 1930 by the Steamship Historical Society of America, Inc. That document listed about 3,000 vessels. John’s research, however, continued after his retirement to the point where the present list of 6,000 vessels became possible. Certainly, this list is an outstanding compilation and a great contribution to the history of marine transportation in Canada.</p>

<p>Space constraints limit the data for each vessel to such primary information as its dimensions and tonnage as well as the dates of its building, rebuildings and of any name changes. These latter dates give clues as to when the vessel was diverted from one service to another and, thus clues for future research. John has much more information on each vessel than possible to include in this list. While we compliment him on the massive amount of work done so far, we hope that he will continue with further writings.

<p>The Marine Museum of the Great Lakes at Kingston are also to be complimented for publishing this NEW MILLS LIST, the latest version of earlier lists, and for making it available to the public. As a friend of John’s and as another marine historian, I am pleased to have helped make this list available and I look forward to its availability for future research.</p>



<p style='font-weight:bold'>Gordon C. Shaw, Professor Emeritus,</p>

<p style='font-weight:bold'>Schulich School of Business,</p>

<p style='font-weight:bold'>York University</p>

<p style='font-weight:bold'>Toronto, Ontario, May 12, 1999.</p>
  `;
  return {
    images,
    shipListDesc,
    shipListsTitle,
    province,
    millsReason4Closing,
    wallsReason4Closing,
    menuItems,
    MillsIntro,
    MillsDates,
    WallaceDates,
    WallaceBuilders
  };
}());

export default millsData;
