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

  const reason4Closing = [
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

  const IMGPATH = 'https://marmuseum.cat/mills-list-server/images/';

  const images = [
    { id: 1, url: `${IMGPATH}SteamboatBenCampbellb.jpg`, alt: 'BenCampbellb' },
    { id: 2, url: `${IMGPATH}Lookout.jpg`, alt: 'lookout' },
    { id: 3, url: `${IMGPATH}cayuga.jpg`, alt: 'cayuga' },
    { id: 4, url: `${IMGPATH}cayugacolor.jpg`, alt: 'cayugacolor' },
  ];

  const testData = [
    {
      name: '1',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '2',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '3',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '4',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '5',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '6',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '7',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '8',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '9',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '10',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
    {
      name: '11',
      mills: '1234567',
      vesselName: 'Lady Godiva',
      officialNum: '0011111',
      whereBuilt: 'Kingston, Ontario',
      dateBuilt: '1876-01-31',
      reasonClosed: 'Foundered',
    },
  ];

  const MillsDates = [
    '1808', '1809', '1810', '1811', '1812', '1813', '1814', '1815', '1816', '1817', '1818', '1819', '1820', '1821', '1822', '1823', '1824', '1825', '1826', '1827', '1828', '1829', '1830', '1831', '1832', '1833', '1834', '1835', '1836', '1837', '1838', '1839', '1840', '1841', '1842', '1843', '1844', '1845', '1846', '1847', '1848', '1849', '1850', '1851', '1852', '1853', '1854', '1855', '1856', '1857', '1858', '1859', '1860', '1861', '1862', '1863', '1864', '1865', '1866', '1867', '1868', '1869', '1870', '1871', '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885', '1886', '1887', '1888', '1889', '1890', '1891', '1892', '1893', '1894', '1895', '1896', '1897', '1898', '1899', '1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930'];

  const menuItems = [
    { title: 'Ships Registry', icon: 'home', route: '/' },
    { title: 'Forged in Fire', icon: 'folder', route: '/forged' },
    { title: 'Growth', icon: 'folder', route: '/growth' },

  ];

  const detailTestData = [
    {
      vesselName: 'Autolycus',
      vesselDate: '1895',
      MillsNum: '004220',
      Propulsion: 'Screw Propeller',
      OfficialNum: '103156',
      dimensions: '[ 53 x 10 - 25 tons ]',
      whereBuilt: 'Vancouver, British Columbia, Canada ',
      builtDate: '1895',
      dateClosed: '1941',
      reasonClosed: 'Removed From Register - Beached',
      placeClosed: '',
      addendum: 'Autolycus;  53x10x6 Owned by H. C. Nixon, Denman Island B. C. 1895; J. A. McNair, Vancouver 1901; Hastings Shingle Manufacturing Co., Vancouver 1917, 1921; G. E. Wilbur & A. G. Dixon, Vancouver 1927; Autolycus Towing Co., Vancouver 1935. Built by R. Brown, Vancouver 1895. Engine 61/2-15x10 by B. C. Iron Works, Vancouver. Tug.',
    },
    {
      vesselName: 'Autolycus',
      vesselDate: '1895',
      MillsNum: '004221',
      Propulsion: 'Screw Propeller',
      OfficialNum: '103156',
      dimensions: '[ 53 x 10 - 25 tons ]',
      whereBuilt: 'Vancouver, British Columbia, Canada ',
      builtDate: '1895',
      dateClosed: '1941',
      reasonClosed: 'Removed From Register - Beached',
      placeClosed: '',
      addendum: 'Autolycus;  53x10x6 Owned by H. C. Nixon, Denman Island B. C. 1895; J. A. McNair, Vancouver 1901; Hastings Shingle Manufacturing Co., Vancouver 1917, 1921; G. E. Wilbur & A. G. Dixon, Vancouver 1927; Autolycus Towing Co., Vancouver 1935. Built by R. Brown, Vancouver 1895. Engine 61/2-15x10 by B. C. Iron Works, Vancouver. Tug.',
    },
    {
      vesselName: 'Autolycus',
      vesselDate: '1895',
      MillsNum: '004222',
      Propulsion: 'Screw Propeller',
      OfficialNum: '103156',
      dimensions: '[ 53 x 10 - 25 tons ]',
      whereBuilt: 'Vancouver, British Columbia, Canada ',
      builtDate: '1895',
      dateClosed: '1941',
      reasonClosed: 'Removed From Register - Beached',
      placeClosed: '',
      addendum: 'Autolycus;  53x10x6 Owned by H. C. Nixon, Denman Island B. C. 1895; J. A. McNair, Vancouver 1901; Hastings Shingle Manufacturing Co., Vancouver 1917, 1921; G. E. Wilbur & A. G. Dixon, Vancouver 1927; Autolycus Towing Co., Vancouver 1935. Built by R. Brown, Vancouver 1895. Engine 61/2-15x10 by B. C. Iron Works, Vancouver. Tug.',
    },
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
    reason4Closing,
    testData,
    menuItems,
    detailTestData,
    // MillsIntro,
    MillsDates,
  };
}());

export default millsData;
