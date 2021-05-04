const MillsData = (function test () {
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

  const countriesBuilt = [
    'Canada',
    'Denmark',
    'England',
    'France',
    'Germany',
    'Hong Kong',
    'Ireland',
    'Netherlands',
    'Newfoundland',
    'Northern Ireland',
    'Norway',
    'Poland',
    'Scotland',
    'Sweden',
    'U.S.A.',
    'United Kingdom',
    'Wales',

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

  const years = [
    '1808', '1809', '1810', '1811', '1812', '1813', '1814', '1815', '1816', '1817', '1818', '1819', '1820', '1821', '1822', '1823', '1824', '1825', '1826', '1827', '1828', '1829', '1830', '1831', '1832', '1833', '1834', '1835', '1836', '1837', '1838', '1839', '1840', '1841', '1842', '1843', '1844', '1845', '1846', '1847', '1848', '1849', '1850', '1851', '1852', '1853', '1854', '1855', '1856', '1857', '1858', '1859', '1860', '1861', '1862', '1863', '1864', '1865', '1866', '1867', '1868', '1869', '1870', '1871', '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885', '1886', '1887', '1888', '1889', '1890', '1891', '1892', '1893', '1894', '1895', '1896', '1897', '1898', '1899', '1900', '1901', '1902', '1903', '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915', '1916', '1917', '1918', '1919', '1920', '1921', '1922', '1923', '1924', '1925', '1926', '1927', '1928', '1929', '1930'];

  return {
    years,
    reason4Closing,
    province,
    countriesBuilt
  }
}());

export default MillsData
