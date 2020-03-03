const str = `GA1: DISEC 1 (Disarmament & International Security) DSG Jason Lin
Student Officers
Chair- Emma Wu (Taipei American School)
Chair- Jeni Liu (Taipei European School)
Chair- Sabrina Gulotty (Asia American International Academy)
Chair- Max Lin (Taipei American School)
Topics
Combating Organized Crimes to Develop Inclusive and Sustainable Communities (SDG 11)
Establishing Regulations Against the Production of Biological Weapons (SDG 16)
Establishing Stronger Partnerships in the Peaceful Uses of Outer Space (SDG 17)
GA3: SOCHUM 1 (Social, Cultural and Humanitarian) DSG Jason Lin
Student Officers
Chair- Kristin Chang (Taipei American School)
Chair- Ivy Hsiao (Kaohsiung American School)
Chair- Silvia Fang (Taipei European School)
Chair- Jeffery Huang (Pacific American School)
Topics
Addressing the Social, Cultural and Humanitarian Effects of Authoritarianism (SDG 16)
Countering Violence and Discrimination through Global Partnerships (SDG 17)
Improving Social Protection Systems to Reduce Poverty (SDG 1)
HRC (Human Rights Council) DSG Ryan Kuo
Student Officers
Chair- Isaac Wu (Taipei American School)
Chair- Anita Tsai (Taipei American School)
Chair- Michelle Yoon (International Bilingual School of Hsinchu)
Chair- Ethan Hirai (Taipei American School)
Topics
Combating Violence and Discrimination Against Women (SDG 5)
Addressing Human Rights Abuses Against Uighurs in Xinjiang (SDG 16)
Addressing Violence and Human Rights Violations in Hong Kong (SDG 16)

ECOSOC (Economic and Social Council) DSG Ryan Kuo
Student Officers
Chair- Emma Kuok (Taipei American School)
Chair- Darren Tsang (Taipei american School)
Chair- Connie Lee (Taipei American School)
Chair- Hector Liu (Taipei American School)
Topics
Addressing the Social and Economic Impacts of Technological Competition (SDG 16)
Measures to Effectively Distribute Microloans to Women in the Developing World (SDG 5)
Developing Measures to Ensure Food Security and Adequate Nutrition for All (SDG 2)

United Nations Environment Programme (UNEP) (larger one) DSG Dokyong Ryoo
Student Officers
Chair- Heather Park (Taipei American School)
Co-Chair- Alex Huang (Taipei American School)
Co-Chair- Tiffany Li (International Bilingual School at Tainan Science Park)
Topics
Reducing Microplastics in Ecosystems (SDG 14)
Examining the Necessity for a Global Policy Addressing Climate Change (SDG 17)
United Nations Development Programme (UNDP) (double if needed) DSG Dokyong Ryoo
Student Officers
Chair- Kosuke Ito (Taipei American School)
Co-Chair- Yunseo Heo (St. Johnsbury Academy Jeju)
Co-Chair- Esther Duann (Pacific American School)
Topics
Establishing Global Partnerships to Combat Corruption and Promote Transparency (SDG 17)
Ensuring Universal Access to Affordable, Reliable and Modern Energy Services (SDG 7)

United Nations Habitat (UN-Habitat) DSG Dokyong Ryoo
Student Officers
Chair- Megan Tang (Taipei American School)
Co-Chair- Jaida Dean (Hsinchu International School)
Co-Chair- Chloe Lim (Taipei American School)
Topics
Achieving Universal Access to Sexual and Reproductive Care (SDG 3)
Ensuring Universal and Equitable Access to Safe and Affordable Drinking Water for All (SDG 6)
Environmental Crisis Committee (ECC) DSG Derek Chan
Student Officers
Chair- Dylan Sun (Taipei American School)
Co-Chair- Abigail Cho (Taipei American School)
Co-Chair- Stevin Yang (Taipei American School)
Topic
The Burning of the Amazon Rainforest (SDG 15)
Advisory Panel Question (APQ) on Refugees DSG Derek Chan
Student Officers
Chair- Laura Hwa (Taipei American School)
Co-Chair- Dylan Chang (Taipei American School)
Co-Chair- Vivian Chiu (International Bilingual School at Tainan Science Park)
Topics
Countering Toxic Narratives About Refugees and Migrants (SDG 9)
Improving Access to Education for Refugees (SDG 4)
UN4MUN GA2 Economic and Finance (ECOFIN) DSG Kai Yuan Mor
Student Officers
Secretary- Amanda Ding (Taipei American School)
Co-Chair- Erin Stanley Rainbow (Taipei American School)
Co-Chair- Anne Lien (Taipei American School)
Co-Chair- Katie Chu (Taipei American School)
Topic
Harmony With Nature (SDG 13)
UN4MUN Commission on Population and Development (CPD) DSG Kai Yuan Mor
Student Officers
Secretary- Sonia Fan (Taipei American School)
Co-Chair- Jane Lee (Taipei American School)
Co-Chair- Kimi Lin (Taipei American School)
Topic
Sustainable Cities, Human Mobility and International Migration (SDG 12)
UN4MUN Commission on Science and Technology For Development (CSTD) DSG Kai Yuan Mor
Student Officers
Secretary- Lauren Hung (Taipei American School)
Co-Chair- Ivan Wei (Taipei American School)
Co-Chair- Megan Wei (Taipei American School)
Topic
Harnessing Rapid Technological Change for Inclusive and Sustainable Development (SDG 10)

United Nations Security Council (UNSC) DSG Dokyong Ryoo
Student Officers
Chair- Naman Sharma (Taipei American School)
Co-Chair- Mehek Berry (Taipei American School)
Co-Chair- Vivian Weng (Taipei American school)
Topics
The Situation in Afghanistan
The Situation in Syria

Historical Joint Crisis Committee (HJCC) DSG Derek Chan
Student Officers
Chair- Emma Liu (Taipei American School)
Co-Chair- Joseph Chang (Taipei American School)
Co-Chair- Tyler Liu (Taipei American School)
Topic
Cuban Missile Crisis (October 16th, 1962)
`;

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

const getListString = list => {
  let listString = "";
  list.forEach(listItem => {
    listString += `<li>${listItem}</li>\n`;
  });
  return listString;
};

const arr = str.split("\n");
let idx = arr.indexOf("Student Officers");
let count = 0;

while (idx != -1) {
  const title = getShotenedTitle(arr[idx - 1]);
  const chairs = [];
  let i = 1;
  while (arr[idx + i].indexOf("Topic") === -1) {
    chairs.push(getShortenedName(arr[idx + i]));
    i += 1;
  }
  const chairsString = getListString(chairs);
  console.log(`<div class="item">
  <h3 class="item-title">${title}</h3>
  <ul>
    ${chairsString}
  </ul>
  </div>`);
  idx = arr.indexOf("Student Officers", idx + 1);
  count += 1;
}
console.log(count);
