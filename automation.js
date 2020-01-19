const str = `GA1: DISEC 1 (Disarmament & International Security) DSG Jason Lin
Student Officers
Chair- Emma Wu (Taipei American School)
Co-Chair- Sabrina Gulotty (Asia American International Academy)
Co-Chair- Isabel He (Shanghai American School Pudong)
GA1: DISEC 2 (Disarmament & International Security) DSG Jason Lin
Student Officers
Chair- Jeni Liu (Taipei European School)
Co-Chair- Max Lin (Taipei American School)
Co-Chair- Katie Chu (Taipei American School)
GA3: SOCHUM 1 (Social, Cultural and Humanitarian) DSG Jason Lin
Student Officers
Chair- Darren Tsang (Taipei American School)
Co-Chair- Ivy Hsiao (Kaohsiung American School)
Co-Chair- Silvia Fang (Taipei European School)
GA3: SOCHUM 2 (Social, Cultural and Humanitarian) DSG Jason Lin
Student Officers
Chair- Kristin Chang (Taipei American School)
Co-Chair- Jeffrey Huang (Pacific American School)
Co-Chair- Audrey Hsieh (Taipei American School)
HRC 1 (Human Rights Council) DSG Ryan Kuo
Student Officers
Chair- Isaac Wu (Taipei American School)
Co-Chair- Anita Tsai (Taipei American School)
Co-Chair- Seoyoung Ryu (American International School Chennai)
HRC 2 (Human Rights Council) DSG Ryan Kuo
Student Officers
Chair- Vivian Weng (Taipei American School)
Co-Chair- Michelle Yoon (International Bilingual School at Hsinchu Science Park)
Co-Chair- Ethan Hirai (Taipei American School)
ECOSOC 1 (Economic and Social Council) DSG Ryan Kuo
Student Officers
Chair- Hoon Kim (Concordia International School Shanghai)
Co-Chair- Connie Lee (Taipei American School)
Co-Chair- Hector Liu (Taipei American School)
ECOSOC 2 (Economic and Social Council) DSG Ryan Kuo
Student Officers
Chair- Jasmine Huang (Shanghai American School Pudong)
Co-Chair- Che Won Han (St. Johnsbury Academy Jeju)
Co-Chair- Emma Kuok (Taipei American School)
United Nations Environment Programme (UNEP) (larger one) DSG Dokyong Ryoo
Student Officers
Chair- Heather Park (Taipei American School)
Co-Chair- Alex Huang (Taipei American School)
Co-Chair- Tiffany Li (International Bilingual School at Tainan Science Park)
United Nations Development Programme (UNDP) (double if needed) DSG Dokyong Ryoo
Student Officers
Chair- Kosuke Ito (Taipei American School)
Co-Chair- Yunseo Heo (St. Johnsbury Academy Jeju)
Co-Chair- Esther Duann (Pacific American School)
United Nations Habitat (UN-Habitat) DSG Dokyong Ryoo
Student Officers
Chair- Megan Tang (Taipei American School)
Co-Chair- Jaida Dean (Hsinchu International School)
Co-Chair- Chloe Lim (Taipei American School)
Environmental Crisis Committee (ECC) DSG Derek Chan
Student Officers
Chair- Dylan Sun (Taipei American School)
Co-Chair- Abigail Cho (Taipei American School)
Co-Chair- Stevin Yang (Taipei American School)
Student Officers
Chair- Laura Hwa (Taipei American School)
Co-Chair- Dylan Chang (Taipei American School)
Co-Chair- Vivian Chiu (International Bilingual School at Tainan Science Park)
UN4MUN GA2 Economic and Finance (ECOFIN) DSG Kai Yuan Mor
Student Officers
Secretary- Amanda Ding (Taipei American School)
Co-Chair- Erin Stanley Rainbow (Taipei American School)
Co-Chair- Anne Lien (Taipei American School)
UN4MUN Commission on Population and Development (CPD) DSG Kai Yuan Mor
Student Officers
Secretary- Sonia Fan (Taipei American School)
Co-Chair- Jane Lee (Taipei American School)
Co-Chair- Kimi Lin (Taipei American School)
UN4MUN Commission on Science and Technology For Development (CSTD) DSG Kai Yuan Mor
Student Officers
Secretary- Lauren Hung (Taipei American School)
Co-Chair- Ivan Wei (Taipei American School)
Co-Chair- Megan Wei (Taipei American School)
United Nations Security Council (UNSC) DSG Dokyong Ryoo
Student Officers
Chair- Naman Sharma (Taipei American School)
Co-Chair- Mehek Berry (Taipei American School)
Co-Chair- Shanmugam Ganesan (American International School Chennai)
Historical Joint Crisis Committee (HJCC) DSG Derek Chan
Student Officers
Chair- Emma Liu (Taipei American School)
Co-Chair- Joseph Chang (Taipei American School)
Co-Chair- Tyler Liu (Taipei American School)`;

const getShortenedName = name => {
  name = name.substring(name.indexOf("- ") + 2);
  nameIdx = 1;
  while (true) {
    const char = name.charAt(nameIdx);
    if (char == char.toUpperCase()) {
      return name.substring(0, nameIdx + 2);
    }
    nameIdx += 1;
  }
};
const getShotenedTitle = title => {
  return title.substring(0, title.indexOf("DSG") - 1);
};

const arr = str.split("\n");
let idx = arr.indexOf("Student Officers");
let count = 0;

while (idx != -1) {
  const title = getShotenedTitle(arr[idx - 1]);
  const chair = getShortenedName(arr[idx + 1]);
  const cochair1 = getShortenedName(arr[idx + 2]);
  const cochair2 = getShortenedName(arr[idx + 3]);
  console.log(`<div class="item">
  <h3 class="item-title">${title}</h3>
  <ul>
    <li>${chair}</li>
    <li>${cochair1}</li>
    <li>${cochair2}</li>
  </ul>
  </div>`);
  idx = arr.indexOf("Student Officers", idx + 1);
  count += 1;
}
console.log(count);
