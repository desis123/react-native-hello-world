export const FETCH_NEWS = "FETCH_NEWS"
//26,
export const CATEGORIES = [26,8,7,18,19,9,13,14,10,11,33,15,22,12,16,29,23,30,24]
export const CATEGORIES_NAME = ["exclusive","politics","national","country","law","business","international","education","sports","tech","miscellaneous","health","lifestyle","entertainment","ltte","islam","weird","recipe","abroad"];
export const CATEGORIES_BN_NAME = ["বিশেষ প্রতিবেদন","রাজনীতি","জাতীয়","সারা দেশ","আইন-আদালত","অর্থনীতি","আন্তজার্তিক","শিক্ষা","খেলাধূলা","তথ্য প্রযুক্তি","বিবিধ","স্বাস্হ্য","লাইফস্টাইল","বিনোদন","মুক্তমত","ইসলাম","ভিন্ন খবর","রেসিপি","প্রবাস"];

//export const CATEGORIES = [26,7,18,13,22,12,19]

//API URL
export const API_URL = 'http://taza-khobor.org/bd/index.php?option=com_hoicoiapi&task=getContents&catid=';
export const API_KEY = '&token=amitumishe';


//API ENDPOINT
export const ALL_NEWS_URL = `${API_URL}${CATEGORIES}${API_KEY}`

