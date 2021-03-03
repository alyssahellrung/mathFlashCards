const questions = [
  {
    "question": "Afghanistan", 
    "answer": "Kabul"
  },
  {
    "question": "Albania", 
    "answer": "Tirana"
  },
  {
    "question": "Algeria", 
    "answer": "Algiers"
  },
  {
    "question": "Andorra", 
    "answer": "Andorra la Vella"
  },
  {
    "question": "Angola", 
    "answer": "Luanda"
  },
  {
    "question": "Antigua and Barbuda", 
    "answer": "St. John's"
  },
  {
    "question": "Argentina", 
    "answer": "Buenos Aires"
  },
  {
    "question": "Armenia", 
    "answer": "Yerevan"
  },
  {
    "question": "Australia", 
    "answer": "Canberra"
  },
  {
    "question": "Austria", 
    "answer": "Vienna"
  },
  {
    "question": "Azerbaijan", 
    "answer": "Baku"
  },
  {
    "question": "The Bahamas", 
    "answer": "Nassau"
  },
  {
    "question": "Bahrain", 
    "answer": "Manama"
  },
  {
    "question": "Bangladesh", 
    "answer": "Dhaka"
  },
  {
    "question": "Barbados", 
    "answer": "Bridgetown"
  },
  {
    "question": "Belarus", 
    "answer": "Minsk"
  },
  {
    "question": "Belgium", 
    "answer": "Brussels"
  },
  {
    "question": "Belize", 
    "answer": "Belmopan"
  },
  {
    "question": "Benin", 
    "answer": "Porto-Novo"
  },
  {
    "question": "Bhutan", 
    "answer": "Thimphu"
  },
  {
    "question": "Bolivia", 
    "answer": "Sucre"
  },
  {
    "question": "Bosnia and Herzegovina", 
    "answer": "Sarajevo"
  },
  {
    "question": "Botswana", 
    "answer": "Gaborone"
  },
  {
    "question": "Brazil", 
    "answer": "Brasilia"
  },
  {
    "question": "Brunei", 
    "answer": "Bandar Seri Begawan"
  },
  {
    "question": "Bulgaria", 
    "answer": "Sofia"
  },
  {
    "question": "Burkina Faso", 
    "answer": "Ouagadougou"
  },
  {
    "question": "Burundi", 
    "answer": "Bujumbura"
  },
  {
    "question": "Cabo Verde", 
    "answer": "Praia"
  },
  {
    "question": "Cambodia", 
    "answer": "Phnom Penh"
  },
  {
    "question": "Cameroon", 
    "answer": "Yaounde"
  },
  {
    "question": "Canada", 
    "answer": "Ottawa"
  },
  {
    "question": "Central African Republic", 
    "answer": "Bangui"
  },
  {
    "question": "Chad", 
    "answer": "N'Djamena"
  },
  {
    "question": "Chile", 
    "answer": "Santiago"
  },
  {
    "question": "China", 
    "answer": "Beijing"
  },
  {
    "question": "Colombia", 
    "answer": "Bogota"
  },
  {
    "question": "Comoros", 
    "answer": "Moroni"
  },
  {
    "question": "Democratic Republic of the Congo", 
    "answer": "Kinshasa"
  },
  {
    "question": "Republic of the Congo", 
    "answer": "Brazzaville"
  },
  {
    "question": "Costa Rica", 
    "answer": "San Jose"
  },
  {
    "question": "Cote d'Ivoire", 
    "answer": "Yamoussoukro"
  },
  {
    "question": "Croatia", 
    "answer": "Zagreb"
  },
  {
    "question": "Cuba", 
    "answer": "Havana"
  },
  {
    "question": "Cyprus", 
    "answer": "Nicosia"
  },
  {
    "question": "Czechia", 
    "answer": "Prague"
  },
  {
    "question": "Denmark", 
    "answer": "Copenhagen"
  },
  {
    "question": "Djibouti", 
    "answer": "Djibouti (City)"
  },
  {
    "question": "Dominica", 
    "answer": "Roseau"
  },
  {
    "question": "Dominican Republic", 
    "answer": "Santo Domingo"
  },
  {
    "question": "Ecuador", 
    "answer": "Quito"
  },
  {
    "question": "Egypt", 
    "answer": "Cairo"
  },
  {
    "question": "El Salvador", 
    "answer": "San Salvador"
  },
  {
    "question": "Equatorial Guinea", 
    "answer": "Malabo"
  },
  {
    "question": "Eritrea", 
    "answer": "Asmara"
  },
  {
    "question": "Estonia", 
    "answer": "Tallinn"
  },
  {
    "question": "Eswatini", 
    "answer": "Mbabane"
  },
  {
    "question": "Ethiopia", 
    "answer": "Addis Ababa"
  },
  {
    "question": "Fiji", 
    "answer": "Suva"
  },
  {
    "question": "Finland", 
    "answer": "Helsinki"
  },
  {
    "question": "France", 
    "answer": "Paris"
  },
  {
    "question": "Gabon", 
    "answer": "Libreville"
  },
  {
    "question": "The Gambia", 
    "answer": "Banjul"
  },
  {
    "question": "Georgia", 
    "answer": "Tbilisi"
  },
  {
    "question": "Germany", 
    "answer": "Berlin"
  },
  {
    "question": "Ghana", 
    "answer": "Accra"
  },
  {
    "question": "Greece", 
    "answer": "Athens"
  },
  {
    "question": "Grenada", 
    "answer": "St. George's"
  },
  {
    "question": "Guatemala", 
    "answer": "Guatemala City"
  },
  {
    "question": "Guinea", 
    "answer": "Conakry"
  },
  {
    "question": "Guinea-Bissau", 
    "answer": "Bissau"
  },
  {
    "question": "Guyana", 
    "answer": "Georgetown"
  },
  {
    "question": "Haiti", 
    "answer": "Port-au-Prince"
  },
  {
    "question": "Honduras", 
    "answer": "Tegucigalpa"
  },
  {
    "question": "Hungary", 
    "answer": "Budapest"
  },
  {
    "question": "Iceland", 
    "answer": "Reykjavik"
  },
  {
    "question": "India", 
    "answer": "New Delhi"
  },
  {
    "question": "Indonesia", 
    "answer": "Jakarta"
  },
  {
    "question": "Iran", 
    "answer": "Tehran"
  },
  {
    "question": "Iraq", 
    "answer": "Baghdad"
  },
  {
    "question": "Ireland", 
    "answer": "Dublin"
  },
  {
    "question": "Israel", 
    "answer": "Jerusalem"
  },
  {
    "question": "Italy", 
    "answer": "Rome"
  },
  {
    "question": "Jamaica", 
    "answer": "Kingston"
  },
  {
    "question": "Japan", 
    "answer": "Tokyo"
  },
  {
    "question": "Jordan", 
    "answer": "Amman"
  },
  {
    "question": "Kazakhstan", 
    "answer": "Nur-Sultan"
  },
  {
    "question": "Kenya", 
    "answer": "Nairobi"
  },
  {
    "question": "Kiribati", 
    "answer": "Tarawa"
  },
  {
    "question": "Kosovo", 
    "answer": "Pristina"
  },
  {
    "question": "Kuwait", 
    "answer": "Kuwait City"
  },
  {
    "question": "Kyrgyzstan", 
    "answer": "Bishkek"
  },
  {
    "question": "Laos", 
    "answer": "Vientiane"
  },
  {
    "question": "Latvia", 
    "answer": "Riga"
  },
  {
    "question": "Lebanon", 
    "answer": "Beirut"
  },
  {
    "question": "Lesotho", 
    "answer": "Maseru"
  },
  {
    "question": "Liberia", 
    "answer": "Monrovia"
  },
  {
    "question": "Libya", 
    "answer": "Tripoli"
  },
  {
    "question": "Leichtenstein", 
    "answer": "Vaduz"
  },
  {
    "question": "Lithuania", 
    "answer": "Vilnius"
  },
  {
    "question": "Luxembourg", 
    "answer": "Luxembourg"
  },
  {
    "question": "Madagascar", 
    "answer": "Antananarivo"
  },
  {
    "question": "Malawi", 
    "answer": "Lilongwe"
  },
  {
    "question": "Malaysia", 
    "answer": "Kuala Lumpur"
  },
  {
    "question": "Maldives", 
    "answer": "Male"
  },
  {
    "question": "Mali", 
    "answer": "Bamako"
  },
  {
    "question": "Malta", 
    "answer": "Valletta"
  },
  {
    "question": "Marshall Islands", 
    "answer": "Majuro"
  },
  {
    "question": "Mauritania", 
    "answer": "Nouakchott"
  },
  {
    "question": "Mauritius", 
    "answer": "Port Louis"
  },
  {
    "question": "Mexico", 
    "answer": "Mexico City"
  },
  {
    "question": "Micronesia", 
    "answer": "Palikir"
  },
  {
    "question": "Moldova", 
    "answer": "Chisinau"
  },
  {
    "question": "Monaco", 
    "answer": "Monaco"
  },
  {
    "question": "Mongolia", 
    "answer": "Ulaanbaatar"
  },
  {
    "question": "Montenegro", 
    "answer": "Podgorica"
  },
  {
    "question": "Morocco", 
    "answer": "Rabat"
  },
  {
    "question": "Mozambique", 
    "answer": "Maputo"
  },
  {
    "question": "Myanmar", 
    "answer": "Naypyitaw"
  },
  {
    "question": "Namibia", 
    "answer": "Windhoek"
  },
  {
    "question": "Nauru", 
    "answer": "Yaren"
  },
  {
    "question": "Nepal", 
    "answer": "Kathmandu"
  },
  {
    "question": "Netherlands", 
    "answer": "Amsterdam"
  },
  {
    "question": "New Zealand", 
    "answer": "Wellington"
  },
  {
    "question": "Nicaragua", 
    "answer": "Managua"
  },
  {
    "question": "Niger", 
    "answer": "Niamey"
  },
  {
    "question": "Nigeria", 
    "answer": "Abuja"
  },
  {
    "question": "North Korea", 
    "answer": "Pyongyang"
  },
  {
    "question": "North Macedonia", 
    "answer": "Skopje"
  },
  {
    "question": "Norway", 
    "answer": "Oslo"
  },
  {
    "question": "Oman", 
    "answer": "Muscat"
  },
  {
    "question": "Pakistan", 
    "answer": "Islamabad"
  },
  {
    "question": "Palau", 
    "answer": "Ngerulmud"
  },
  {
    "question": "Palestine", 
    "answer": "Ramallah"
  },
  {
    "question": "Panama", 
    "answer": "Panama City"
  },
  {
    "question": "Papua New Guinea", 
    "answer": "Port Moresby"
  },
  {
    "question": "Paraguay", 
    "answer": "Asuncion"
  },
  {
    "question": "Peru", 
    "answer": "Lima"
  },
  {
    "question": "Philippines", 
    "answer": "Manila"
  },
  {
    "question": "Poland", 
    "answer": "Warsaw"
  },
  {
    "question": "Portugal", 
    "answer": "Lisbon"
  },
  {
    "question": "Qatar", 
    "answer": "Doha"
  },
  {
    "question": "Romania", 
    "answer": "Bucharest"
  },
  {
    "question": "Russia", 
    "answer": "Moscow"
  },
  {
    "question": "Rwanda", 
    "answer": "Kigali"
  },
  {
    "question": "Saint Kitts and Nevis", 
    "answer": "Basseterre"
  },
  {
    "question": "Saint Lucia", 
    "answer": "Castries"
  },
  {
    "question": "Saint Vincent and the Grenadines", 
    "answer": "Kingstown"
  },
  {
    "question": "Samoa", 
    "answer": "Apia"
  },
  {
    "question": "San Marino", 
    "answer": "San Marino"
  },
  {
    "question": "Sao Tome and Principe", 
    "answer": "Sao Tome"
  },
  {
    "question": "Saudi Arabia", 
    "answer": "Riyadh"
  },
  {
    "question": "Senegal", 
    "answer": "Dakar"
  },
  {
    "question": "Serbia", 
    "answer": "Belgrade"
  },
  {
    "question": "Seychelles", 
    "answer": "Victoria"
  },
  {
    "question": "Sierra Leone", 
    "answer": "Freetown"
  },
  {
    "question": "Singapore", 
    "answer": "Singapore"
  },
  {
    "question": "Slovakia", 
    "answer": "Bratislava"
  },
  {
    "question": "Slovenia", 
    "answer": "Ljubljana"
  },
  {
    "question": "Solomon Islands", 
    "answer": "Honiara"
  },
  {
    "question": "Somalia", 
    "answer": "Mogadishu"
  },
  {
    "question": "South Africa", 
    "answer": "Pretoria"
  },
  {
    "question": "South Korea", 
    "answer": "Seoul"
  },
  {
    "question": "South Sudan", 
    "answer": "Juba"
  },
  {
    "question": "Spain", 
    "answer": "Madrid"
  },
  {
    "question": "Sri Lanka", 
    "answer": "Sri Jayawardenepura Kotte"
  },
  {
    "question": "Sudan", 
    "answer": "Khartoum"
  },
  {
    "question": "Suriname", 
    "answer": "Paramaribo"
  },
  {
    "question": "Sweden", 
    "answer": "Stockholm"
  },
  {
    "question": "Switzerland", 
    "answer": "Bern"
  },
  {
    "question": "Syria", 
    "answer": "Damascus"
  },
  {
    "question": "Tajikistan", 
    "answer": "Dushanbe"
  },
  {
    "question": "Tanzania", 
    "answer": "Dodoma"
  },
  {
    "question": "Thailand", 
    "answer": "Bangkok"
  },
  {
    "question": "Timor-Leste", 
    "answer": "Dili"
  },
  {
    "question": "Togo", 
    "answer": "Lome"
  },
  {
    "question": "Tonga", 
    "answer": "Nuku'alofa"
  },
  {
    "question": "Trinidad and Tobago", 
    "answer": "Port of Spain"
  },
  {
    "question": "Tunisia", 
    "answer": "Tunis"
  },
  {
    "question": "Turkey", 
    "answer": "Ankara"
  },
  {
    "question": "Turkmenistan", 
    "answer": "Ashgabat"
  },
  {
    "question": "Tuvalu", 
    "answer": "Funafuti"
  },
  {
    "question": "Uganda", 
    "answer": "Kampala"
  },
  {
    "question": "Ukraine", 
    "answer": "Kyiv"
  },
  {
    "question": "United Arab Emirates", 
    "answer": "Abu Dhabi"
  },
  {
    "question": "United Kingdom", 
    "answer": "London"
  },
  {
    "question": "United States of America", 
    "answer": "Washington, D.C."
  },
  {
    "question": "Uruguay", 
    "answer": "Montevideo"
  },
  {
    "question": "Uzbekistan", 
    "answer": "Tashkent"
  },
  {
    "question": "Vanuatu", 
    "answer": "Port Vila"
  },
  {
    "question": "Vatican City", 
    "answer": "Vatican City"
  },
  {
    "question": "Venezuela", 
    "answer": "Caracas"
  },
  {
    "question": "Vietnam", 
    "answer": "Hanoi"
  },
  {
    "question": "Yemen", 
    "answer": "Sana'a"
  },
  {
    "question": "Zambia", 
    "answer": "Lusaka"
  },
  {
    "question": "Zimbabwe", 
    "answer": "Harare"
  }
]