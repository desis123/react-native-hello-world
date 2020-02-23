export const FETCH_NEWS = "FETCH_NEWS"
//26,
export const CATEGORIES = [26,8,7,18,19,9,13,14,10,11,33,15,22,12,16,29,23,30,24]
export const CATEGORIES_NAME = ["latest","exclusive","politics","national","country","law","business","international","education","sports","tech","miscellaneous","health","lifestyle","entertainment","ltte","islam","weird","recipe","abroad"];
export const CATEGORIES_BN_NAME_FULL = ["বিশেষ প্রতিবেদন","রাজনীতি","জাতীয়","সারা দেশ","আইন-আদালত","অর্থনীতি","আন্তজার্তিক","শিক্ষা","খেলাধূলা","তথ্য প্রযুক্তি","বিবিধ","স্বাস্হ্য","লাইফস্টাইল","বিনোদন","মুক্তমত","ইসলাম","ভিন্ন খবর","রেসিপি","প্রবাস"];
export const CATEGORIES_BN_NAME_LESS = ["বিশেষ প্রতিবেদন","রাজনীতি","জাতীয়","সারা দেশ","আইন-আদালত","অর্থনীতি","আন্তজার্তিক","শিক্ষা"];



export const TAB_CATEGOIRES =
{
"বিশেষ প্রতিবেদন" : 26,
"রাজনীতি" : 8,
"জাতীয়": 7,
"সারা দেশ" : 18,
"আইন-আদালত" : 19,
"অর্থনীতি" : 9,
"আন্তজার্তিক" : 13,
"শিক্ষা" : 14

}


export const TAB_CATEGOIRES_BN_TO_EN =
{
"বিশেষ প্রতিবেদন" : "exclusive",
"রাজনীতি" : "politics",
"জাতীয়": "national",
"সারা দেশ" : "country",
"আইন-আদালত" : "law",
"অর্থনীতি" : "business",
"আন্তজার্তিক" : "international",
"শিক্ষা" : "education"

}


//export const CATEGORIES_BN_NAME = ["বিশেষ প্রতিবেদন","রাজনীতি","জাতীয়","সারা দেশ","আইন-আদালত","বিবিধ","ইসলাম","ভিন্ন খবর","রেসিপি","প্রবাস"];

//export const CATEGORIES = [26,7,18,13,22,12,19]

//API URL
export const API_URL = 'http://taza-khobor.org/bd/index.php?option=com_hoicoiapi&task=getContents&catid=';
export const API_INDIVIDUAL_ARTICLE_URL = 'http://taza-khobor.org/bd/index.php?option=com_hoicoiapi&task=getItem&id=';
export const API_LATEST_URL = 'http://taza-khobor.org/bd/index.php?option=com_hoicoiapi&task=getLatest';
export const API_IP_ADDRESS ='http://taza-khobor.org/bd/index.php?option=com_hoicoiapi&task=getIpAddress';
export const API_KEY = '&token=amitumishe';
//API ENDPOINT
export const ALL_NEWS_URL = `${API_URL}${CATEGORIES}${API_KEY}`

