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
  }
]