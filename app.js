// ==========================================
// 日本語マスター — Application Logic
// ==========================================

// ===== HIRAGANA DATA =====
const HIRAGANA_BASIC = [
    // Vowels
    { char: 'あ', romaji: 'a', row: 'Vocales' },
    { char: 'い', romaji: 'i', row: 'Vocales' },
    { char: 'う', romaji: 'u', row: 'Vocales' },
    { char: 'え', romaji: 'e', row: 'Vocales' },
    { char: 'お', romaji: 'o', row: 'Vocales' },
    // K
    { char: 'か', romaji: 'ka', row: 'K' },
    { char: 'き', romaji: 'ki', row: 'K' },
    { char: 'く', romaji: 'ku', row: 'K' },
    { char: 'け', romaji: 'ke', row: 'K' },
    { char: 'こ', romaji: 'ko', row: 'K' },
    // S
    { char: 'さ', romaji: 'sa', row: 'S' },
    { char: 'し', romaji: 'shi', row: 'S' },
    { char: 'す', romaji: 'su', row: 'S' },
    { char: 'せ', romaji: 'se', row: 'S' },
    { char: 'そ', romaji: 'so', row: 'S' },
    // T
    { char: 'た', romaji: 'ta', row: 'T' },
    { char: 'ち', romaji: 'chi', row: 'T' },
    { char: 'つ', romaji: 'tsu', row: 'T' },
    { char: 'て', romaji: 'te', row: 'T' },
    { char: 'と', romaji: 'to', row: 'T' },
    // N
    { char: 'な', romaji: 'na', row: 'N' },
    { char: 'に', romaji: 'ni', row: 'N' },
    { char: 'ぬ', romaji: 'nu', row: 'N' },
    { char: 'ね', romaji: 'ne', row: 'N' },
    { char: 'の', romaji: 'no', row: 'N' },
    // H
    { char: 'は', romaji: 'ha', row: 'H' },
    { char: 'ひ', romaji: 'hi', row: 'H' },
    { char: 'ふ', romaji: 'fu', row: 'H' },
    { char: 'へ', romaji: 'he', row: 'H' },
    { char: 'ほ', romaji: 'ho', row: 'H' },
    // M
    { char: 'ま', romaji: 'ma', row: 'M' },
    { char: 'み', romaji: 'mi', row: 'M' },
    { char: 'む', romaji: 'mu', row: 'M' },
    { char: 'め', romaji: 'me', row: 'M' },
    { char: 'も', romaji: 'mo', row: 'M' },
    // Y
    { char: 'や', romaji: 'ya', row: 'Y' },
    { char: '', romaji: '', row: 'Y', empty: true },
    { char: 'ゆ', romaji: 'yu', row: 'Y' },
    { char: '', romaji: '', row: 'Y', empty: true },
    { char: 'よ', romaji: 'yo', row: 'Y' },
    // R
    { char: 'ら', romaji: 'ra', row: 'R' },
    { char: 'り', romaji: 'ri', row: 'R' },
    { char: 'る', romaji: 'ru', row: 'R' },
    { char: 'れ', romaji: 're', row: 'R' },
    { char: 'ろ', romaji: 'ro', row: 'R' },
    // W
    { char: 'わ', romaji: 'wa', row: 'W' },
    { char: '', romaji: '', row: 'W', empty: true },
    { char: '', romaji: '', row: 'W', empty: true },
    { char: '', romaji: '', row: 'W', empty: true },
    { char: 'を', romaji: 'wo', row: 'W' },
    // N
    { char: 'ん', romaji: 'n', row: 'Especial' },
];

const HIRAGANA_DAKUTEN = [
    { char: 'が', romaji: 'ga', row: 'G' },
    { char: 'ぎ', romaji: 'gi', row: 'G' },
    { char: 'ぐ', romaji: 'gu', row: 'G' },
    { char: 'げ', romaji: 'ge', row: 'G' },
    { char: 'ご', romaji: 'go', row: 'G' },
    { char: 'ざ', romaji: 'za', row: 'Z' },
    { char: 'じ', romaji: 'ji', row: 'Z' },
    { char: 'ず', romaji: 'zu', row: 'Z' },
    { char: 'ぜ', romaji: 'ze', row: 'Z' },
    { char: 'ぞ', romaji: 'zo', row: 'Z' },
    { char: 'だ', romaji: 'da', row: 'D' },
    { char: 'ぢ', romaji: 'di', row: 'D' },
    { char: 'づ', romaji: 'du', row: 'D' },
    { char: 'で', romaji: 'de', row: 'D' },
    { char: 'ど', romaji: 'do', row: 'D' },
    { char: 'ば', romaji: 'ba', row: 'B' },
    { char: 'び', romaji: 'bi', row: 'B' },
    { char: 'ぶ', romaji: 'bu', row: 'B' },
    { char: 'べ', romaji: 'be', row: 'B' },
    { char: 'ぼ', romaji: 'bo', row: 'B' },
    { char: 'ぱ', romaji: 'pa', row: 'P' },
    { char: 'ぴ', romaji: 'pi', row: 'P' },
    { char: 'ぷ', romaji: 'pu', row: 'P' },
    { char: 'ぺ', romaji: 'pe', row: 'P' },
    { char: 'ぽ', romaji: 'po', row: 'P' },
];

const HIRAGANA_COMBO = [
    { char: 'きゃ', romaji: 'kya', row: 'KY' },
    { char: 'きゅ', romaji: 'kyu', row: 'KY' },
    { char: 'きょ', romaji: 'kyo', row: 'KY' },
    { char: 'しゃ', romaji: 'sha', row: 'SH' },
    { char: 'しゅ', romaji: 'shu', row: 'SH' },
    { char: 'しょ', romaji: 'sho', row: 'SH' },
    { char: 'ちゃ', romaji: 'cha', row: 'CH' },
    { char: 'ちゅ', romaji: 'chu', row: 'CH' },
    { char: 'ちょ', romaji: 'cho', row: 'CH' },
    { char: 'にゃ', romaji: 'nya', row: 'NY' },
    { char: 'にゅ', romaji: 'nyu', row: 'NY' },
    { char: 'にょ', romaji: 'nyo', row: 'NY' },
    { char: 'ひゃ', romaji: 'hya', row: 'HY' },
    { char: 'ひゅ', romaji: 'hyu', row: 'HY' },
    { char: 'ひょ', romaji: 'hyo', row: 'HY' },
    { char: 'みゃ', romaji: 'mya', row: 'MY' },
    { char: 'みゅ', romaji: 'myu', row: 'MY' },
    { char: 'みょ', romaji: 'myo', row: 'MY' },
    { char: 'りゃ', romaji: 'rya', row: 'RY' },
    { char: 'りゅ', romaji: 'ryu', row: 'RY' },
    { char: 'りょ', romaji: 'ryo', row: 'RY' },
    { char: 'ぎゃ', romaji: 'gya', row: 'GY' },
    { char: 'ぎゅ', romaji: 'gyu', row: 'GY' },
    { char: 'ぎょ', romaji: 'gyo', row: 'GY' },
    { char: 'じゃ', romaji: 'ja', row: 'JY' },
    { char: 'じゅ', romaji: 'ju', row: 'JY' },
    { char: 'じょ', romaji: 'jo', row: 'JY' },
    { char: 'びゃ', romaji: 'bya', row: 'BY' },
    { char: 'びゅ', romaji: 'byu', row: 'BY' },
    { char: 'びょ', romaji: 'byo', row: 'BY' },
    { char: 'ぴゃ', romaji: 'pya', row: 'PY' },
    { char: 'ぴゅ', romaji: 'pyu', row: 'PY' },
    { char: 'ぴょ', romaji: 'pyo', row: 'PY' },
];

// ===== KATAKANA DATA =====
const KATAKANA_BASIC = [
    { char: 'ア', romaji: 'a', row: 'Vocales' },
    { char: 'イ', romaji: 'i', row: 'Vocales' },
    { char: 'ウ', romaji: 'u', row: 'Vocales' },
    { char: 'エ', romaji: 'e', row: 'Vocales' },
    { char: 'オ', romaji: 'o', row: 'Vocales' },
    { char: 'カ', romaji: 'ka', row: 'K' },
    { char: 'キ', romaji: 'ki', row: 'K' },
    { char: 'ク', romaji: 'ku', row: 'K' },
    { char: 'ケ', romaji: 'ke', row: 'K' },
    { char: 'コ', romaji: 'ko', row: 'K' },
    { char: 'サ', romaji: 'sa', row: 'S' },
    { char: 'シ', romaji: 'shi', row: 'S' },
    { char: 'ス', romaji: 'su', row: 'S' },
    { char: 'セ', romaji: 'se', row: 'S' },
    { char: 'ソ', romaji: 'so', row: 'S' },
    { char: 'タ', romaji: 'ta', row: 'T' },
    { char: 'チ', romaji: 'chi', row: 'T' },
    { char: 'ツ', romaji: 'tsu', row: 'T' },
    { char: 'テ', romaji: 'te', row: 'T' },
    { char: 'ト', romaji: 'to', row: 'T' },
    { char: 'ナ', romaji: 'na', row: 'N' },
    { char: 'ニ', romaji: 'ni', row: 'N' },
    { char: 'ヌ', romaji: 'nu', row: 'N' },
    { char: 'ネ', romaji: 'ne', row: 'N' },
    { char: 'ノ', romaji: 'no', row: 'N' },
    { char: 'ハ', romaji: 'ha', row: 'H' },
    { char: 'ヒ', romaji: 'hi', row: 'H' },
    { char: 'フ', romaji: 'fu', row: 'H' },
    { char: 'ヘ', romaji: 'he', row: 'H' },
    { char: 'ホ', romaji: 'ho', row: 'H' },
    { char: 'マ', romaji: 'ma', row: 'M' },
    { char: 'ミ', romaji: 'mi', row: 'M' },
    { char: 'ム', romaji: 'mu', row: 'M' },
    { char: 'メ', romaji: 'me', row: 'M' },
    { char: 'モ', romaji: 'mo', row: 'M' },
    { char: 'ヤ', romaji: 'ya', row: 'Y' },
    { char: '', romaji: '', row: 'Y', empty: true },
    { char: 'ユ', romaji: 'yu', row: 'Y' },
    { char: '', romaji: '', row: 'Y', empty: true },
    { char: 'ヨ', romaji: 'yo', row: 'Y' },
    { char: 'ラ', romaji: 'ra', row: 'R' },
    { char: 'リ', romaji: 'ri', row: 'R' },
    { char: 'ル', romaji: 'ru', row: 'R' },
    { char: 'レ', romaji: 're', row: 'R' },
    { char: 'ロ', romaji: 'ro', row: 'R' },
    { char: 'ワ', romaji: 'wa', row: 'W' },
    { char: '', romaji: '', row: 'W', empty: true },
    { char: '', romaji: '', row: 'W', empty: true },
    { char: '', romaji: '', row: 'W', empty: true },
    { char: 'ヲ', romaji: 'wo', row: 'W' },
    { char: 'ン', romaji: 'n', row: 'Especial' },
];

const KATAKANA_DAKUTEN = [
    { char: 'ガ', romaji: 'ga', row: 'G' },
    { char: 'ギ', romaji: 'gi', row: 'G' },
    { char: 'グ', romaji: 'gu', row: 'G' },
    { char: 'ゲ', romaji: 'ge', row: 'G' },
    { char: 'ゴ', romaji: 'go', row: 'G' },
    { char: 'ザ', romaji: 'za', row: 'Z' },
    { char: 'ジ', romaji: 'ji', row: 'Z' },
    { char: 'ズ', romaji: 'zu', row: 'Z' },
    { char: 'ゼ', romaji: 'ze', row: 'Z' },
    { char: 'ゾ', romaji: 'zo', row: 'Z' },
    { char: 'ダ', romaji: 'da', row: 'D' },
    { char: 'ヂ', romaji: 'di', row: 'D' },
    { char: 'ヅ', romaji: 'du', row: 'D' },
    { char: 'デ', romaji: 'de', row: 'D' },
    { char: 'ド', romaji: 'do', row: 'D' },
    { char: 'バ', romaji: 'ba', row: 'B' },
    { char: 'ビ', romaji: 'bi', row: 'B' },
    { char: 'ブ', romaji: 'bu', row: 'B' },
    { char: 'ベ', romaji: 'be', row: 'B' },
    { char: 'ボ', romaji: 'bo', row: 'B' },
    { char: 'パ', romaji: 'pa', row: 'P' },
    { char: 'ピ', romaji: 'pi', row: 'P' },
    { char: 'プ', romaji: 'pu', row: 'P' },
    { char: 'ペ', romaji: 'pe', row: 'P' },
    { char: 'ポ', romaji: 'po', row: 'P' },
];

const KATAKANA_COMBO = [
    { char: 'キャ', romaji: 'kya', row: 'KY' },
    { char: 'キュ', romaji: 'kyu', row: 'KY' },
    { char: 'キョ', romaji: 'kyo', row: 'KY' },
    { char: 'シャ', romaji: 'sha', row: 'SH' },
    { char: 'シュ', romaji: 'shu', row: 'SH' },
    { char: 'ショ', romaji: 'sho', row: 'SH' },
    { char: 'チャ', romaji: 'cha', row: 'CH' },
    { char: 'チュ', romaji: 'chu', row: 'CH' },
    { char: 'チョ', romaji: 'cho', row: 'CH' },
    { char: 'ニャ', romaji: 'nya', row: 'NY' },
    { char: 'ニュ', romaji: 'nyu', row: 'NY' },
    { char: 'ニョ', romaji: 'nyo', row: 'NY' },
    { char: 'ヒャ', romaji: 'hya', row: 'HY' },
    { char: 'ヒュ', romaji: 'hyu', row: 'HY' },
    { char: 'ヒョ', romaji: 'hyo', row: 'HY' },
    { char: 'ミャ', romaji: 'mya', row: 'MY' },
    { char: 'ミュ', romaji: 'myu', row: 'MY' },
    { char: 'ミョ', romaji: 'myo', row: 'MY' },
    { char: 'リャ', romaji: 'rya', row: 'RY' },
    { char: 'リュ', romaji: 'ryu', row: 'RY' },
    { char: 'リョ', romaji: 'ryo', row: 'RY' },
    { char: 'ギャ', romaji: 'gya', row: 'GY' },
    { char: 'ギュ', romaji: 'gyu', row: 'GY' },
    { char: 'ギョ', romaji: 'gyo', row: 'GY' },
    { char: 'ジャ', romaji: 'ja', row: 'JY' },
    { char: 'ジュ', romaji: 'ju', row: 'JY' },
    { char: 'ジョ', romaji: 'jo', row: 'JY' },
    { char: 'ビャ', romaji: 'bya', row: 'BY' },
    { char: 'ビュ', romaji: 'byu', row: 'BY' },
    { char: 'ビョ', romaji: 'byo', row: 'BY' },
    { char: 'ピャ', romaji: 'pya', row: 'PY' },
    { char: 'ピュ', romaji: 'pyu', row: 'PY' },
    { char: 'ピョ', romaji: 'pyo', row: 'PY' },
];

// ===== KANJI DATA =====
const KANJI_DATA = [
    // Numbers
    { char: '一', meaning: 'Uno', onyomi: 'イチ', kunyomi: 'ひと(つ)', example: '一つ (hitotsu) - uno', group: 'numbers' },
    { char: '二', meaning: 'Dos', onyomi: 'ニ', kunyomi: 'ふた(つ)', example: '二つ (futatsu) - dos', group: 'numbers' },
    { char: '三', meaning: 'Tres', onyomi: 'サン', kunyomi: 'みっ(つ)', example: '三月 (sangatsu) - marzo', group: 'numbers' },
    { char: '四', meaning: 'Cuatro', onyomi: 'シ', kunyomi: 'よん', example: '四月 (shigatsu) - abril', group: 'numbers' },
    { char: '五', meaning: 'Cinco', onyomi: 'ゴ', kunyomi: 'いつ(つ)', example: '五月 (gogatsu) - mayo', group: 'numbers' },
    { char: '六', meaning: 'Seis', onyomi: 'ロク', kunyomi: 'む(つ)', example: '六月 (rokugatsu) - junio', group: 'numbers' },
    { char: '七', meaning: 'Siete', onyomi: 'シチ', kunyomi: 'なな', example: '七月 (shichigatsu) - julio', group: 'numbers' },
    { char: '八', meaning: 'Ocho', onyomi: 'ハチ', kunyomi: 'やっ(つ)', example: '八百 (happyaku) - 800', group: 'numbers' },
    { char: '九', meaning: 'Nueve', onyomi: 'キュウ', kunyomi: 'ここの(つ)', example: '九月 (kugatsu) - sept.', group: 'numbers' },
    { char: '十', meaning: 'Diez', onyomi: 'ジュウ', kunyomi: 'とお', example: '十月 (juugatsu) - oct.', group: 'numbers' },
    { char: '百', meaning: 'Cien', onyomi: 'ヒャク', kunyomi: '', example: '百円 (hyakuen) - 100 yen', group: 'numbers' },
    { char: '千', meaning: 'Mil', onyomi: 'セン', kunyomi: 'ち', example: '千円 (senen) - 1000 yen', group: 'numbers' },
    { char: '万', meaning: 'Diez mil', onyomi: 'マン', kunyomi: '', example: '一万 (ichiman) - 10000', group: 'numbers' },

    // Nature
    { char: '日', meaning: 'Día / Sol', onyomi: 'ニチ / ジツ', kunyomi: 'ひ', example: '日曜日 (nichiyoubi) - domingo', group: 'nature' },
    { char: '月', meaning: 'Luna / Mes', onyomi: 'ゲツ / ガツ', kunyomi: 'つき', example: '月曜日 (getsuyoubi) - lunes', group: 'nature' },
    { char: '火', meaning: 'Fuego', onyomi: 'カ', kunyomi: 'ひ', example: '火曜日 (kayoubi) - martes', group: 'nature' },
    { char: '水', meaning: 'Agua', onyomi: 'スイ', kunyomi: 'みず', example: '水曜日 (suiyoubi) - miérc.', group: 'nature' },
    { char: '木', meaning: 'Árbol', onyomi: 'モク / ボク', kunyomi: 'き', example: '木曜日 (mokuyoubi) - jueves', group: 'nature' },
    { char: '金', meaning: 'Oro / Dinero', onyomi: 'キン / コン', kunyomi: 'かね', example: '金曜日 (kinyoubi) - viernes', group: 'nature' },
    { char: '土', meaning: 'Tierra', onyomi: 'ド / ト', kunyomi: 'つち', example: '土曜日 (doyoubi) - sábado', group: 'nature' },
    { char: '山', meaning: 'Montaña', onyomi: 'サン', kunyomi: 'やま', example: '富士山 (fujisan) - Mt. Fuji', group: 'nature' },
    { char: '川', meaning: 'Río', onyomi: 'セン', kunyomi: 'かわ', example: '川 (kawa) - río', group: 'nature' },
    { char: '田', meaning: 'Campo de arroz', onyomi: 'デン', kunyomi: 'た', example: '田中 (tanaka) - apellido', group: 'nature' },
    { char: '天', meaning: 'Cielo', onyomi: 'テン', kunyomi: 'あま', example: '天気 (tenki) - clima', group: 'nature' },
    { char: '花', meaning: 'Flor', onyomi: 'カ', kunyomi: 'はな', example: '花見 (hanami) - ver flores', group: 'nature' },
    { char: '雨', meaning: 'Lluvia', onyomi: 'ウ', kunyomi: 'あめ', example: '大雨 (ooame) - lluvia fuerte', group: 'nature' },

    // People
    { char: '人', meaning: 'Persona', onyomi: 'ジン / ニン', kunyomi: 'ひと', example: '日本人 (nihonjin) - japonés', group: 'people' },
    { char: '女', meaning: 'Mujer', onyomi: 'ジョ', kunyomi: 'おんな', example: '女の子 (onnanoko) - niña', group: 'people' },
    { char: '男', meaning: 'Hombre', onyomi: 'ダン', kunyomi: 'おとこ', example: '男の子 (otokonoko) - niño', group: 'people' },
    { char: '子', meaning: 'Niño/a', onyomi: 'シ / ス', kunyomi: 'こ', example: '子供 (kodomo) - niño', group: 'people' },
    { char: '大', meaning: 'Grande', onyomi: 'ダイ / タイ', kunyomi: 'おお(きい)', example: '大学 (daigaku) - universidad', group: 'people' },
    { char: '小', meaning: 'Pequeño', onyomi: 'ショウ', kunyomi: 'ちい(さい)', example: '小学校 (shougakkou) - primaria', group: 'people' },
    { char: '上', meaning: 'Arriba', onyomi: 'ジョウ', kunyomi: 'うえ', example: '上手 (jouzu) - hábil', group: 'people' },
    { char: '下', meaning: 'Abajo', onyomi: 'カ / ゲ', kunyomi: 'した', example: '下手 (heta) - torpe', group: 'people' },
    { char: '中', meaning: 'Centro / Dentro', onyomi: 'チュウ', kunyomi: 'なか', example: '中国 (chuugoku) - China', group: 'people' },
    { char: '国', meaning: 'País', onyomi: 'コク', kunyomi: 'くに', example: '外国 (gaikoku) - extranjero', group: 'people' },

    // Actions
    { char: '食', meaning: 'Comer', onyomi: 'ショク', kunyomi: 'た(べる)', example: '食べる (taberu) - comer', group: 'actions' },
    { char: '飲', meaning: 'Beber', onyomi: 'イン', kunyomi: 'の(む)', example: '飲む (nomu) - beber', group: 'actions' },
    { char: '見', meaning: 'Ver', onyomi: 'ケン', kunyomi: 'み(る)', example: '見る (miru) - ver', group: 'actions' },
    { char: '聞', meaning: 'Oír / Preguntar', onyomi: 'ブン', kunyomi: 'き(く)', example: '聞く (kiku) - escuchar', group: 'actions' },
    { char: '読', meaning: 'Leer', onyomi: 'ドク', kunyomi: 'よ(む)', example: '読む (yomu) - leer', group: 'actions' },
    { char: '書', meaning: 'Escribir', onyomi: 'ショ', kunyomi: 'か(く)', example: '書く (kaku) - escribir', group: 'actions' },
    { char: '話', meaning: 'Hablar', onyomi: 'ワ', kunyomi: 'はな(す)', example: '話す (hanasu) - hablar', group: 'actions' },
    { char: '学', meaning: 'Estudiar', onyomi: 'ガク', kunyomi: 'まな(ぶ)', example: '学生 (gakusei) - estudiante', group: 'actions' },
    { char: '行', meaning: 'Ir', onyomi: 'コウ', kunyomi: 'い(く)', example: '行く (iku) - ir', group: 'actions' },
    { char: '来', meaning: 'Venir', onyomi: 'ライ', kunyomi: 'く(る)', example: '来る (kuru) - venir', group: 'actions' },

    // Time
    { char: '年', meaning: 'Año', onyomi: 'ネン', kunyomi: 'とし', example: '今年 (kotoshi) - este año', group: 'time' },
    { char: '時', meaning: 'Tiempo / Hora', onyomi: 'ジ', kunyomi: 'とき', example: '時間 (jikan) - tiempo', group: 'time' },
    { char: '今', meaning: 'Ahora', onyomi: 'コン / キン', kunyomi: 'いま', example: '今日 (kyou) - hoy', group: 'time' },
    { char: '前', meaning: 'Antes / Delante', onyomi: 'ゼン', kunyomi: 'まえ', example: '午前 (gozen) - mañana (AM)', group: 'time' },
    { char: '後', meaning: 'Después / Detrás', onyomi: 'ゴ / コウ', kunyomi: 'あと', example: '午後 (gogo) - tarde (PM)', group: 'time' },

    // Other
    { char: '車', meaning: 'Coche', onyomi: 'シャ', kunyomi: 'くるま', example: '電車 (densha) - tren', group: 'other' },
    { char: '電', meaning: 'Electricidad', onyomi: 'デン', kunyomi: '', example: '電話 (denwa) - teléfono', group: 'other' },
    { char: '気', meaning: 'Espíritu / Energía', onyomi: 'キ / ケ', kunyomi: '', example: '元気 (genki) - saludable', group: 'other' },
    { char: '白', meaning: 'Blanco', onyomi: 'ハク', kunyomi: 'しろ(い)', example: '白い (shiroi) - blanco', group: 'other' },
    { char: '赤', meaning: 'Rojo', onyomi: 'セキ', kunyomi: 'あか(い)', example: '赤い (akai) - rojo', group: 'other' },
];

// ===== VOCABULARY DATA =====
const VOCABULARY = [
    // Greetings
    { word: 'こんにちは', romaji: 'konnichiwa', meaning: 'Hola / Buenas tardes', group: 'greetings', example: 'こんにちは、元気ですか？' },
    { word: 'おはようございます', romaji: 'ohayou gozaimasu', meaning: 'Buenos días (formal)', group: 'greetings', example: 'おはようございます、先生！' },
    { word: 'こんばんは', romaji: 'konbanwa', meaning: 'Buenas noches (saludo)', group: 'greetings', example: 'こんばんは、田中さん。' },
    { word: 'さようなら', romaji: 'sayounara', meaning: 'Adiós', group: 'greetings', example: 'さようなら、また明日！' },
    { word: 'ありがとうございます', romaji: 'arigatou gozaimasu', meaning: 'Muchas gracias', group: 'greetings', example: '助けてくれて、ありがとう。' },
    { word: 'すみません', romaji: 'sumimasen', meaning: 'Disculpe / Perdón', group: 'greetings', example: 'すみません、ちょっといいですか？' },
    { word: 'ごめんなさい', romaji: 'gomen nasai', meaning: 'Lo siento', group: 'greetings', example: '遅れてごめんなさい。' },
    { word: 'はい', romaji: 'hai', meaning: 'Sí', group: 'greetings', example: 'はい、そうです。' },
    { word: 'いいえ', romaji: 'iie', meaning: 'No', group: 'greetings', example: 'いいえ、違います。' },
    { word: 'おねがいします', romaji: 'onegaishimasu', meaning: 'Por favor', group: 'greetings', example: 'これ、おねがいします。' },

    // Family
    { word: 'おかあさん', romaji: 'okaasan', meaning: 'Madre', group: 'family', example: 'おかあさんは優しいです。' },
    { word: 'おとうさん', romaji: 'otousan', meaning: 'Padre', group: 'family', example: 'おとうさんは仕事です。' },
    { word: 'おにいさん', romaji: 'oniisan', meaning: 'Hermano mayor', group: 'family', example: 'おにいさんは学生です。' },
    { word: 'おねえさん', romaji: 'oneesan', meaning: 'Hermana mayor', group: 'family', example: 'おねえさんは先生です。' },
    { word: 'いもうと', romaji: 'imouto', meaning: 'Hermana menor', group: 'family', example: 'いもうとはかわいいです。' },
    { word: 'おとうと', romaji: 'otouto', meaning: 'Hermano menor', group: 'family', example: 'おとうとは小学生です。' },
    { word: 'かぞく', romaji: 'kazoku', meaning: 'Familia', group: 'family', example: 'かぞくは五人です。' },
    { word: 'こども', romaji: 'kodomo', meaning: 'Niño/a', group: 'family', example: 'こどもが二人います。' },

    // Food
    { word: 'ごはん', romaji: 'gohan', meaning: 'Arroz / Comida', group: 'food', example: 'ごはんを食べます。' },
    { word: 'みず', romaji: 'mizu', meaning: 'Agua', group: 'food', example: 'みずをください。' },
    { word: 'おちゃ', romaji: 'ocha', meaning: 'Té verde', group: 'food', example: 'おちゃを飲みます。' },
    { word: 'さかな', romaji: 'sakana', meaning: 'Pescado', group: 'food', example: 'さかなが好きです。' },
    { word: 'にく', romaji: 'niku', meaning: 'Carne', group: 'food', example: 'にくを食べたいです。' },
    { word: 'やさい', romaji: 'yasai', meaning: 'Verduras', group: 'food', example: 'やさいが大切です。' },
    { word: 'くだもの', romaji: 'kudamono', meaning: 'Fruta', group: 'food', example: 'くだものを買います。' },
    { word: 'たまご', romaji: 'tamago', meaning: 'Huevo', group: 'food', example: 'たまごが三つあります。' },
    { word: 'パン', romaji: 'pan', meaning: 'Pan', group: 'food', example: 'パンを食べます。' },
    { word: 'りんご', romaji: 'ringo', meaning: 'Manzana', group: 'food', example: 'りんごが好きです。' },

    // Colors
    { word: 'あか', romaji: 'aka', meaning: 'Rojo', group: 'colors', example: 'あかい花です。' },
    { word: 'あお', romaji: 'ao', meaning: 'Azul', group: 'colors', example: 'そらはあおいです。' },
    { word: 'きいろ', romaji: 'kiiro', meaning: 'Amarillo', group: 'colors', example: 'きいろいバナナです。' },
    { word: 'みどり', romaji: 'midori', meaning: 'Verde', group: 'colors', example: 'みどりの木です。' },
    { word: 'しろ', romaji: 'shiro', meaning: 'Blanco', group: 'colors', example: 'しろい雪です。' },
    { word: 'くろ', romaji: 'kuro', meaning: 'Negro', group: 'colors', example: 'くろい猫です。' },
    { word: 'ピンク', romaji: 'pinku', meaning: 'Rosa', group: 'colors', example: 'ピンクの花です。' },
    { word: 'むらさき', romaji: 'murasaki', meaning: 'Morado', group: 'colors', example: 'むらさきの服です。' },

    // Animals
    { word: 'いぬ', romaji: 'inu', meaning: 'Perro', group: 'animals', example: 'いぬが好きです。' },
    { word: 'ねこ', romaji: 'neko', meaning: 'Gato', group: 'animals', example: 'ねこがいます。' },
    { word: 'とり', romaji: 'tori', meaning: 'Pájaro', group: 'animals', example: 'とりが飛んでいます。' },
    { word: 'うま', romaji: 'uma', meaning: 'Caballo', group: 'animals', example: 'うまに乗ります。' },
    { word: 'うし', romaji: 'ushi', meaning: 'Vaca', group: 'animals', example: 'うしがいます。' },
    { word: 'ねずみ', romaji: 'nezumi', meaning: 'Ratón', group: 'animals', example: '小さいねずみです。' },
    { word: 'さる', romaji: 'saru', meaning: 'Mono', group: 'animals', example: 'さるが木にいます。' },
    { word: 'うさぎ', romaji: 'usagi', meaning: 'Conejo', group: 'animals', example: 'うさぎがかわいいです。' },

    // Body
    { word: 'あたま', romaji: 'atama', meaning: 'Cabeza', group: 'body', example: 'あたまが痛いです。' },
    { word: 'め', romaji: 'me', meaning: 'Ojo', group: 'body', example: 'めが大きいです。' },
    { word: 'みみ', romaji: 'mimi', meaning: 'Oreja', group: 'body', example: 'みみで聞きます。' },
    { word: 'はな', romaji: 'hana', meaning: 'Nariz', group: 'body', example: 'はなが高いです。' },
    { word: 'くち', romaji: 'kuchi', meaning: 'Boca', group: 'body', example: 'くちを開けてください。' },
    { word: 'て', romaji: 'te', meaning: 'Mano', group: 'body', example: 'てを洗います。' },
    { word: 'あし', romaji: 'ashi', meaning: 'Pie / Pierna', group: 'body', example: 'あしが速いです。' },
    { word: 'からだ', romaji: 'karada', meaning: 'Cuerpo', group: 'body', example: 'からだに気をつけて。' },

    // Places
    { word: 'がっこう', romaji: 'gakkou', meaning: 'Escuela', group: 'places', example: 'がっこうに行きます。' },
    { word: 'いえ', romaji: 'ie', meaning: 'Casa', group: 'places', example: 'いえに帰ります。' },
    { word: 'えき', romaji: 'eki', meaning: 'Estación', group: 'places', example: 'えきまで歩きます。' },
    { word: 'みせ', romaji: 'mise', meaning: 'Tienda', group: 'places', example: 'みせで買います。' },
    { word: 'びょういん', romaji: 'byouin', meaning: 'Hospital', group: 'places', example: 'びょういんに行きます。' },
    { word: 'こうえん', romaji: 'kouen', meaning: 'Parque', group: 'places', example: 'こうえんで遊びます。' },
    { word: 'レストラン', romaji: 'resutoran', meaning: 'Restaurante', group: 'places', example: 'レストランで食べます。' },

    // Objects
    { word: 'ほん', romaji: 'hon', meaning: 'Libro', group: 'objects', example: 'ほんを読みます。' },
    { word: 'かばん', romaji: 'kaban', meaning: 'Bolsa / Maletín', group: 'objects', example: 'かばんに入れます。' },
    { word: 'くるま', romaji: 'kuruma', meaning: 'Coche', group: 'objects', example: 'くるまで行きます。' },
    { word: 'でんわ', romaji: 'denwa', meaning: 'Teléfono', group: 'objects', example: 'でんわをかけます。' },
    { word: 'かさ', romaji: 'kasa', meaning: 'Paraguas', group: 'objects', example: 'かさを持ちます。' },
    { word: 'いす', romaji: 'isu', meaning: 'Silla', group: 'objects', example: 'いすに座ります。' },
    { word: 'つくえ', romaji: 'tsukue', meaning: 'Escritorio', group: 'objects', example: 'つくえの上にあります。' },
    { word: 'とけい', romaji: 'tokei', meaning: 'Reloj', group: 'objects', example: 'とけいを見ます。' },

    // Adjectives
    { word: 'おおきい', romaji: 'ookii', meaning: 'Grande', group: 'adjectives', example: 'おおきいいえです。' },
    { word: 'ちいさい', romaji: 'chiisai', meaning: 'Pequeño', group: 'adjectives', example: 'ちいさいねこです。' },
    { word: 'あたらしい', romaji: 'atarashii', meaning: 'Nuevo', group: 'adjectives', example: 'あたらしいかばんです。' },
    { word: 'ふるい', romaji: 'furui', meaning: 'Viejo / Antiguo', group: 'adjectives', example: 'ふるい寺です。' },
    { word: 'たかい', romaji: 'takai', meaning: 'Alto / Caro', group: 'adjectives', example: 'たかい山です。' },
    { word: 'やすい', romaji: 'yasui', meaning: 'Barato', group: 'adjectives', example: 'やすいみせです。' },
    { word: 'おいしい', romaji: 'oishii', meaning: 'Delicioso', group: 'adjectives', example: 'このごはんはおいしいです。' },
    { word: 'かわいい', romaji: 'kawaii', meaning: 'Lindo / Tierno', group: 'adjectives', example: 'かわいいねこです。' },

    // Useful phrases
    { word: 'いただきます', romaji: 'itadakimasu', meaning: 'Buen provecho', group: 'phrases', example: 'Se dice antes de comer' },
    { word: 'ごちそうさまでした', romaji: 'gochisousama deshita', meaning: 'Gracias por la comida', group: 'phrases', example: 'Se dice después de comer' },
    { word: 'いってきます', romaji: 'ittekimasu', meaning: 'Ya me voy (de casa)', group: 'phrases', example: 'Al salir de casa' },
    { word: 'ただいま', romaji: 'tadaima', meaning: 'Ya llegué (a casa)', group: 'phrases', example: 'Al llegar a casa' },
    { word: 'おやすみなさい', romaji: 'oyasuminasai', meaning: 'Buenas noches (al dormir)', group: 'phrases', example: 'Se dice antes de dormir' },
    { word: 'おじゃまします', romaji: 'ojama shimasu', meaning: 'Permiso (al entrar)', group: 'phrases', example: 'Al entrar a una casa ajena' },
    { word: 'がんばって', romaji: 'ganbatte', meaning: 'Ánimo / ¡Tú puedes!', group: 'phrases', example: '試験、がんばって！' },
    { word: 'だいじょうぶ', romaji: 'daijoubu', meaning: 'Está bien / No hay problema', group: 'phrases', example: 'だいじょうぶですか？' },
];

// ===== APPLICATION STATE =====
const App = {
    currentPage: 'home',
    flashcards: {
        category: 'hiragana',
        cards: [],
        index: 0,
        flipped: false,
    },
    quiz: {
        category: 'hiragana',
        mode: 'multiple',
        count: 20,
        questions: [],
        currentIndex: 0,
        score: 0,
        streak: 0,
        bestStreak: 0,
        times: [],
        questionStartTime: 0,
        answered: false,
    },
    progress: {
        hiragana: [],
        katakana: [],
        kanji: [],
        vocab: [],
    },
    masteredTab: 'hiragana',
};

// ===== HELPER FUNCTIONS =====
function getHiraganaBasicOnly() {
    return HIRAGANA_BASIC.filter(c => !c.empty);
}

function getKatakanaBasicOnly() {
    return KATAKANA_BASIC.filter(c => !c.empty);
}

function getAllHiragana() {
    return [...HIRAGANA_BASIC, ...HIRAGANA_DAKUTEN, ...HIRAGANA_COMBO].filter(c => !c.empty);
}

function getAllKatakana() {
    return [...KATAKANA_BASIC, ...KATAKANA_DAKUTEN, ...KATAKANA_COMBO].filter(c => !c.empty);
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function isMastered(category, char) {
    return App.progress[category] && App.progress[category].includes(char);
}

function toggleMastered(category, char) {
    if (!App.progress[category]) App.progress[category] = [];
    const idx = App.progress[category].indexOf(char);
    if (idx >= 0) {
        App.progress[category].splice(idx, 1);
    } else {
        App.progress[category].push(char);
    }
    saveProgress();
}

function saveProgress() {
    localStorage.setItem('nihongo-progress', JSON.stringify(App.progress));
}

function loadProgress() {
    const saved = localStorage.getItem('nihongo-progress');
    if (saved) {
        try {
            App.progress = JSON.parse(saved);
        } catch (e) {
            App.progress = { hiragana: [], katakana: [], kanji: [], vocab: [] };
        }
    }
}

// ===== NAVIGATION =====
function navigate(page) {
    App.currentPage = page;
    // Update nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.toggle('active', p.id === `page-${page}`);
    });
    // Initialize page content
    switch (page) {
        case 'home': updateHomeProgress(); break;
        case 'hiragana': renderKanaChart('hiragana', 'basic'); break;
        case 'katakana': renderKanaChart('katakana', 'basic'); break;
        case 'kanji': renderKanjiChart('numbers'); break;
        case 'vocab': renderVocabGrid('greetings'); break;
        case 'flashcards': initFlashcards(); break;
        case 'progress': updateProgressPage(); break;
    }
    window.scrollTo(0, 0);
}

// ===== HOME PAGE =====
function updateHomeProgress() {
    const hiraganaTotal = getHiraganaBasicOnly().length;
    const katakanaTotal = getKatakanaBasicOnly().length;
    const kanjiTotal = KANJI_DATA.length;

    const hiraganaCount = (App.progress.hiragana || []).length;
    const katakanaCount = (App.progress.katakana || []).length;
    const kanjiCount = (App.progress.kanji || []).length;

    const hPct = Math.round((hiraganaCount / hiraganaTotal) * 100);
    const kPct = Math.round((katakanaCount / katakanaTotal) * 100);
    const jPct = Math.round((kanjiCount / kanjiTotal) * 100);

    document.getElementById('home-progress-hiragana').style.width = hPct + '%';
    document.getElementById('home-label-hiragana').textContent = hPct + '%';
    document.getElementById('home-progress-katakana').style.width = kPct + '%';
    document.getElementById('home-label-katakana').textContent = kPct + '%';
    document.getElementById('home-progress-kanji').style.width = jPct + '%';
    document.getElementById('home-label-kanji').textContent = jPct + '%';

    const vocabTotal = VOCABULARY.length;
    const vocabCount = (App.progress.vocab || []).length;
    const vPct = Math.round((vocabCount / vocabTotal) * 100);
    document.getElementById('home-progress-vocab').style.width = vPct + '%';
    document.getElementById('home-label-vocab').textContent = vPct + '%';
}

// ===== KANA CHART =====
function renderKanaChart(type, group) {
    const containerId = type + '-chart';
    const container = document.getElementById(containerId);
    let data;

    if (type === 'hiragana') {
        if (group === 'basic') data = HIRAGANA_BASIC;
        else if (group === 'dakuten') data = HIRAGANA_DAKUTEN;
        else data = HIRAGANA_COMBO;
    } else {
        if (group === 'basic') data = KATAKANA_BASIC;
        else if (group === 'dakuten') data = KATAKANA_DAKUTEN;
        else data = KATAKANA_COMBO;
    }

    const category = type;
    let html = '';
    let currentRow = '';

    // For combo charts, use 3-column grid
    if (group === 'combo') {
        container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
        container.style.gridTemplateColumns = 'repeat(5, 1fr)';
    }

    data.forEach(item => {
        if (item.row !== currentRow) {
            currentRow = item.row;
            html += `<div class="char-row-header">${currentRow}</div>`;
        }

        if (item.empty) {
            html += `<div class="char-cell empty"><span class="char">·</span></div>`;
        } else {
            const masteredClass = isMastered(category, item.char) ? 'mastered' : '';
            html += `<div class="char-cell ${masteredClass}" data-char="${item.char}" data-romaji="${item.romaji}" data-category="${category}">
                <span class="char">${item.char}</span>
                <span class="romaji">${item.romaji}</span>
            </div>`;
        }
    });

    container.innerHTML = html;

    // Attach click listeners
    container.querySelectorAll('.char-cell:not(.empty)').forEach(cell => {
        cell.addEventListener('click', () => {
            openModal(cell.dataset.char, cell.dataset.romaji, cell.dataset.category);
        });
    });
}

// ===== KANJI CHART =====
function renderKanjiChart(group) {
    const container = document.getElementById('kanji-chart');
    const filtered = KANJI_DATA.filter(k => k.group === group);

    let html = '';
    filtered.forEach(k => {
        const masteredClass = isMastered('kanji', k.char) ? 'mastered' : '';
        html += `<div class="kanji-card ${masteredClass}" data-char="${k.char}" data-group="${k.group}">
            <div class="kanji-char">${k.char}</div>
            <div class="kanji-meaning">${k.meaning}</div>
            <div class="kanji-readings">${k.onyomi}${k.kunyomi ? ' / ' + k.kunyomi : ''}</div>
        </div>`;
    });

    container.innerHTML = html;

    container.querySelectorAll('.kanji-card').forEach(card => {
        card.addEventListener('click', () => {
            const k = KANJI_DATA.find(kj => kj.char === card.dataset.char);
            if (k) openKanjiModal(k);
        });
    });
}

// ===== MODAL =====
function openModal(char, romaji, category) {
    const modal = document.getElementById('char-modal');
    document.getElementById('modal-char').textContent = char;
    document.getElementById('modal-romaji').textContent = romaji;
    document.getElementById('modal-details').innerHTML = `
        <span class="detail-label">Categoría</span>
        <span class="detail-value">${category === 'hiragana' ? 'Hiragana' : 'Katakana'}</span>
        <span class="detail-label">Romanización</span>
        <span class="detail-value">${romaji}</span>
    `;

    const btn = document.getElementById('modal-master-btn');
    btn.classList.toggle('mastered', isMastered(category, char));
    btn.textContent = isMastered(category, char) ? '✓ Dominado' : '⭐ Marcar como dominado';
    btn.onclick = () => {
        toggleMastered(category, char);
        btn.classList.toggle('mastered', isMastered(category, char));
        btn.textContent = isMastered(category, char) ? '✓ Dominado' : '⭐ Marcar como dominado';
        // Refresh chart
        if (App.currentPage === 'hiragana' || App.currentPage === 'katakana') {
            const activeTab = document.querySelector(`#page-${App.currentPage} .chart-tab.active`);
            renderKanaChart(App.currentPage, activeTab ? activeTab.dataset.group : 'basic');
        }
        if (App.currentPage === 'kanji') {
            const activeTab = document.querySelector('#page-kanji .chart-tab.active');
            renderKanjiChart(activeTab ? activeTab.dataset.group : 'numbers');
        }
    };

    modal.style.display = 'flex';
}

function openKanjiModal(k) {
    const modal = document.getElementById('char-modal');
    document.getElementById('modal-char').textContent = k.char;
    document.getElementById('modal-romaji').textContent = k.meaning;
    document.getElementById('modal-details').innerHTML = `
        <span class="detail-label">On'yomi (lectura china)</span>
        <span class="detail-value">${k.onyomi || '—'}</span>
        <span class="detail-label">Kun'yomi (lectura japonesa)</span>
        <span class="detail-value">${k.kunyomi || '—'}</span>
        <span class="detail-label">Ejemplo</span>
        <span class="detail-value">${k.example}</span>
    `;

    const btn = document.getElementById('modal-master-btn');
    btn.classList.toggle('mastered', isMastered('kanji', k.char));
    btn.textContent = isMastered('kanji', k.char) ? '✓ Dominado' : '⭐ Marcar como dominado';
    btn.onclick = () => {
        toggleMastered('kanji', k.char);
        btn.classList.toggle('mastered', isMastered('kanji', k.char));
        btn.textContent = isMastered('kanji', k.char) ? '✓ Dominado' : '⭐ Marcar como dominado';
        const activeTab = document.querySelector('#page-kanji .chart-tab.active');
        renderKanjiChart(activeTab ? activeTab.dataset.group : 'numbers');
    };

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('char-modal').style.display = 'none';
}

// ===== VOCABULARY =====
function renderVocabGrid(group) {
    const container = document.getElementById('vocab-grid');
    const filtered = VOCABULARY.filter(v => v.group === group);

    let html = '';
    filtered.forEach(v => {
        const masteredClass = isMastered('vocab', v.word) ? 'mastered' : '';
        html += `<div class="vocab-card ${masteredClass}" data-word="${v.word}">
            <div class="vocab-word">${v.word}</div>
            <div class="vocab-romaji">${v.romaji}</div>
            <div class="vocab-meaning">${v.meaning}</div>
            ${v.example ? `<div class="vocab-example">${v.example}</div>` : ''}
        </div>`;
    });

    container.innerHTML = html;

    container.querySelectorAll('.vocab-card').forEach(card => {
        card.addEventListener('click', () => {
            const v = VOCABULARY.find(vv => vv.word === card.dataset.word);
            if (v) openVocabModal(v);
        });
    });
}

function openVocabModal(v) {
    const modal = document.getElementById('char-modal');
    document.getElementById('modal-char').textContent = v.word;
    document.getElementById('modal-romaji').textContent = v.romaji;
    document.getElementById('modal-details').innerHTML = `
        <span class="detail-label">Significado</span>
        <span class="detail-value">${v.meaning}</span>
        <span class="detail-label">Categoría</span>
        <span class="detail-value">${v.group}</span>
        ${v.example ? `<span class="detail-label">Ejemplo</span><span class="detail-value">${v.example}</span>` : ''}
    `;

    const btn = document.getElementById('modal-master-btn');
    btn.classList.toggle('mastered', isMastered('vocab', v.word));
    btn.textContent = isMastered('vocab', v.word) ? '✓ Dominado' : '⭐ Marcar como dominado';
    btn.onclick = () => {
        toggleMastered('vocab', v.word);
        btn.classList.toggle('mastered', isMastered('vocab', v.word));
        btn.textContent = isMastered('vocab', v.word) ? '✓ Dominado' : '⭐ Marcar como dominado';
        const activeTab = document.querySelector('#page-vocab .chart-tab.active');
        renderVocabGrid(activeTab ? activeTab.dataset.vgroup : 'greetings');
    };

    modal.style.display = 'flex';
}

// ===== FLASHCARDS =====
function getFlashcardDeck(category) {
    switch (category) {
        case 'hiragana': return getHiraganaBasicOnly().map(c => ({ ...c, type: 'hiragana' }));
        case 'katakana': return getKatakanaBasicOnly().map(c => ({ ...c, type: 'katakana' }));
        case 'kanji': return KANJI_DATA.map(k => ({
            char: k.char, romaji: k.meaning, type: 'kanji',
            extra: `On: ${k.onyomi || '—'}  |  Kun: ${k.kunyomi || '—'}\n${k.example}`
        }));
        case 'vocab': return VOCABULARY.map(v => ({
            char: v.word, romaji: v.romaji, type: 'vocab',
            extra: `${v.meaning}\n${v.example || ''}`
        }));
        default: return [];
    }
}

function initFlashcards() {
    App.flashcards.cards = getFlashcardDeck(App.flashcards.category);
    App.flashcards.index = 0;
    App.flashcards.flipped = false;
    renderFlashcard();
}

function renderFlashcard() {
    const { cards, index, flipped } = App.flashcards;
    if (cards.length === 0) return;

    const card = cards[index];
    const frontChar = document.getElementById('fc-front-char');
    frontChar.textContent = card.char;
    // Adjust font size for longer words (vocab)
    if (card.char.length > 5) frontChar.style.fontSize = '48px';
    else if (card.char.length > 3) frontChar.style.fontSize = '64px';
    else frontChar.style.fontSize = '';

    document.getElementById('fc-back-romaji').textContent = card.romaji;
    document.getElementById('fc-back-meaning').textContent = (card.type === 'kanji' || card.type === 'vocab') ? card.romaji : '';
    document.getElementById('fc-back-extra').textContent = card.extra || '';
    document.getElementById('fc-counter').textContent = `${index + 1} / ${cards.length}`;

    const fcCard = document.getElementById('fc-card');
    fcCard.classList.toggle('flipped', flipped);

    // Update mastered button
    const category = App.flashcards.category;
    const btn = document.getElementById('fc-mark-mastered');
    const mastered = isMastered(category, card.char);
    btn.classList.toggle('mastered', mastered);
    btn.textContent = mastered ? '✓ Dominado' : '⭐ Dominado';
}

function flipFlashcard() {
    App.flashcards.flipped = !App.flashcards.flipped;
    renderFlashcard();
}

function nextFlashcard() {
    const { cards } = App.flashcards;
    App.flashcards.index = (App.flashcards.index + 1) % cards.length;
    App.flashcards.flipped = false;
    renderFlashcard();
}

function prevFlashcard() {
    const { cards } = App.flashcards;
    App.flashcards.index = (App.flashcards.index - 1 + cards.length) % cards.length;
    App.flashcards.flipped = false;
    renderFlashcard();
}

function shuffleFlashcards() {
    App.flashcards.cards = shuffle(App.flashcards.cards);
    App.flashcards.index = 0;
    App.flashcards.flipped = false;
    renderFlashcard();
}

// ===== QUIZ =====
function getQuizPool(category) {
    switch (category) {
        case 'hiragana':
            return getHiraganaBasicOnly().map(c => ({ char: c.char, answer: c.romaji, category: 'hiragana' }));
        case 'katakana':
            return getKatakanaBasicOnly().map(c => ({ char: c.char, answer: c.romaji, category: 'katakana' }));
        case 'kanji':
            return KANJI_DATA.map(k => ({ char: k.char, answer: k.meaning.toLowerCase(), category: 'kanji', display: k.meaning }));
        case 'vocab':
            return VOCABULARY.map(v => ({ char: v.word, answer: v.meaning.toLowerCase(), category: 'vocab', display: v.meaning }));
        case 'mixed': {
            const h = getHiraganaBasicOnly().map(c => ({ char: c.char, answer: c.romaji, category: 'hiragana' }));
            const k = getKatakanaBasicOnly().map(c => ({ char: c.char, answer: c.romaji, category: 'katakana' }));
            const j = KANJI_DATA.map(k => ({ char: k.char, answer: k.meaning.toLowerCase(), category: 'kanji', display: k.meaning }));
            const v = VOCABULARY.map(v => ({ char: v.word, answer: v.meaning.toLowerCase(), category: 'vocab', display: v.meaning }));
            return [...h, ...k, ...j, ...v];
        }
        default: return [];
    }
}

function generateQuizQuestions() {
    const pool = shuffle(getQuizPool(App.quiz.category));
    const count = Math.min(App.quiz.count, pool.length);
    const questions = pool.slice(0, count);

    // For multiple choice, generate wrong answers
    questions.forEach(q => {
        const allAnswers = pool.filter(p => p.answer !== q.answer);
        const wrongOnes = shuffle(allAnswers).slice(0, 3);
        const options = shuffle([
            { text: q.display || q.answer, correct: true },
            ...wrongOnes.map(w => ({ text: w.display || w.answer, correct: false }))
        ]);
        q.options = options;
    });

    return questions;
}

function startQuiz() {
    App.quiz.questions = generateQuizQuestions();
    App.quiz.currentIndex = 0;
    App.quiz.score = 0;
    App.quiz.streak = 0;
    App.quiz.bestStreak = 0;
    App.quiz.times = [];
    App.quiz.answered = false;

    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-active').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const { questions, currentIndex, score, streak, mode } = App.quiz;
    const q = questions[currentIndex];

    document.getElementById('quiz-qnum').textContent = `${currentIndex + 1}/${questions.length}`;
    document.getElementById('quiz-score').textContent = score;
    document.getElementById('quiz-streak').textContent = `🔥 ${streak}`;
    document.getElementById('quiz-progress-fill').style.width = `${((currentIndex) / questions.length) * 100}%`;
    const quizCharEl = document.getElementById('quiz-char');
    quizCharEl.textContent = q.char;
    if (q.char.length > 5) quizCharEl.style.fontSize = '48px';
    else if (q.char.length > 3) quizCharEl.style.fontSize = '64px';
    else quizCharEl.style.fontSize = '';
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-feedback').className = 'quiz-feedback';

    App.quiz.answered = false;
    App.quiz.questionStartTime = Date.now();

    if (mode === 'multiple') {
        document.getElementById('quiz-answers').style.display = 'grid';
        document.getElementById('quiz-typing').style.display = 'none';

        q.options.forEach((opt, i) => {
            const btn = document.getElementById(`quiz-ans-${i}`);
            btn.textContent = opt.text;
            btn.className = 'quiz-answer-btn';
            btn.disabled = false;
            btn.onclick = () => handleMultipleAnswer(i, opt.correct, q);
        });
    } else {
        document.getElementById('quiz-answers').style.display = 'none';
        document.getElementById('quiz-typing').style.display = 'flex';
        const input = document.getElementById('quiz-input');
        input.value = '';
        input.className = 'quiz-input';
        input.disabled = false;
        input.focus();
    }
}

function handleMultipleAnswer(index, isCorrect, question) {
    if (App.quiz.answered) return;
    App.quiz.answered = true;

    const timeTaken = (Date.now() - App.quiz.questionStartTime) / 1000;
    App.quiz.times.push(timeTaken);

    // Disable all buttons
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`quiz-ans-${i}`);
        btn.classList.add('disabled');
        btn.disabled = true;
    }

    const clickedBtn = document.getElementById(`quiz-ans-${index}`);
    const feedback = document.getElementById('quiz-feedback');

    if (isCorrect) {
        clickedBtn.classList.add('correct');
        App.quiz.score++;
        App.quiz.streak++;
        if (App.quiz.streak > App.quiz.bestStreak) App.quiz.bestStreak = App.quiz.streak;
        feedback.textContent = '✓ ¡Correcto!';
        feedback.className = 'quiz-feedback correct';

        // Auto-master after correct answer
        toggleMasteredIfNotAlready(question.category, question.char);
    } else {
        clickedBtn.classList.add('wrong');
        // Show correct answer
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`quiz-ans-${i}`);
            const opt = question.options[i];
            if (opt.correct) btn.classList.add('correct');
        }
        App.quiz.streak = 0;
        const correct = question.display || question.answer;
        feedback.textContent = `✕ La respuesta correcta es: ${correct}`;
        feedback.className = 'quiz-feedback wrong';
    }

    document.getElementById('quiz-score').textContent = App.quiz.score;
    document.getElementById('quiz-streak').textContent = `🔥 ${App.quiz.streak}`;

    setTimeout(nextQuizQuestion, 1500);
}

function handleTypingAnswer() {
    if (App.quiz.answered) return;
    App.quiz.answered = true;

    const input = document.getElementById('quiz-input');
    const userAnswer = input.value.trim().toLowerCase();
    const question = App.quiz.questions[App.quiz.currentIndex];
    const correctAnswer = question.answer.toLowerCase();

    const timeTaken = (Date.now() - App.quiz.questionStartTime) / 1000;
    App.quiz.times.push(timeTaken);

    const feedback = document.getElementById('quiz-feedback');
    input.disabled = true;

    if (userAnswer === correctAnswer) {
        input.className = 'quiz-input correct';
        App.quiz.score++;
        App.quiz.streak++;
        if (App.quiz.streak > App.quiz.bestStreak) App.quiz.bestStreak = App.quiz.streak;
        feedback.textContent = '✓ ¡Correcto!';
        feedback.className = 'quiz-feedback correct';
        toggleMasteredIfNotAlready(question.category, question.char);
    } else {
        input.className = 'quiz-input wrong';
        App.quiz.streak = 0;
        feedback.textContent = `✕ La respuesta correcta es: ${question.display || question.answer}`;
        feedback.className = 'quiz-feedback wrong';
    }

    document.getElementById('quiz-score').textContent = App.quiz.score;
    document.getElementById('quiz-streak').textContent = `🔥 ${App.quiz.streak}`;

    setTimeout(nextQuizQuestion, 1800);
}

function toggleMasteredIfNotAlready(category, char) {
    if (!isMastered(category, char)) {
        toggleMastered(category, char);
    }
}

function nextQuizQuestion() {
    App.quiz.currentIndex++;
    if (App.quiz.currentIndex >= App.quiz.questions.length) {
        showQuizResults();
    } else {
        renderQuizQuestion();
    }
}

function showQuizResults() {
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'flex';

    const { score, questions, bestStreak, times } = App.quiz;
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const avgTime = times.length > 0 ? (times.reduce((a, b) => a + b, 0) / times.length).toFixed(1) : '0';

    let emoji, title;
    if (pct === 100) { emoji = '🏆'; title = '¡Perfecto!'; }
    else if (pct >= 80) { emoji = '🎉'; title = '¡Excelente!'; }
    else if (pct >= 60) { emoji = '👍'; title = '¡Buen trabajo!'; }
    else if (pct >= 40) { emoji = '📚'; title = 'Sigue practicando'; }
    else { emoji = '💪'; title = '¡No te rindas!'; }

    document.getElementById('quiz-results-emoji').textContent = emoji;
    document.getElementById('quiz-results-title').textContent = title;
    document.getElementById('quiz-results-score').textContent = score;
    document.getElementById('quiz-results-total').textContent = total;
    document.getElementById('quiz-results-pct').textContent = pct + '%';
    document.getElementById('quiz-results-best-streak').textContent = bestStreak;
    document.getElementById('quiz-results-avg-time').textContent = avgTime + 's';

    document.getElementById('quiz-progress-fill').style.width = '100%';
}

function resetQuizUI() {
    document.getElementById('quiz-setup').style.display = 'block';
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
}

// ===== PROGRESS PAGE =====
function updateProgressPage() {
    const hiraganaTotal = getHiraganaBasicOnly().length;
    const katakanaTotal = getKatakanaBasicOnly().length;
    const kanjiTotal = KANJI_DATA.length;
    const vocabTotal = VOCABULARY.length;
    const total = hiraganaTotal + katakanaTotal + kanjiTotal + vocabTotal;

    const hCount = (App.progress.hiragana || []).length;
    const kCount = (App.progress.katakana || []).length;
    const jCount = (App.progress.kanji || []).length;
    const vCount = (App.progress.vocab || []).length;
    const tCount = hCount + kCount + jCount + vCount;

    const circumference = 2 * Math.PI * 52; // ~326.73

    function setRing(id, labelId, detailId, count, max, suffix) {
        const pct = max > 0 ? count / max : 0;
        const offset = circumference * (1 - pct);
        document.getElementById(id).style.strokeDashoffset = offset;
        document.getElementById(labelId).textContent = Math.round(pct * 100) + '%';
        document.getElementById(detailId).textContent = `${count} / ${max} ${suffix}`;
    }

    setRing('ring-total', 'ring-label-total', 'progress-total-detail', tCount, total, 'caracteres');
    setRing('ring-hiragana', 'ring-label-hiragana', 'progress-hiragana-detail', hCount, hiraganaTotal, 'caracteres');
    setRing('ring-katakana', 'ring-label-katakana', 'progress-katakana-detail', kCount, katakanaTotal, 'caracteres');
    setRing('ring-kanji', 'ring-label-kanji', 'progress-kanji-detail', jCount, kanjiTotal, 'caracteres');
    setRing('ring-vocab', 'ring-label-vocab', 'progress-vocab-detail', vCount, vocabTotal, 'palabras');

    renderMasteredGrid(App.masteredTab);
}

function renderMasteredGrid(category) {
    const container = document.getElementById('mastered-grid');
    const mastered = App.progress[category] || [];

    if (mastered.length === 0) {
        container.innerHTML = `<p class="mastered-empty">Aún no has dominado ningún carácter de esta categoría. ¡Usa las flashcards o el quiz para empezar!</p>`;
        return;
    }

    let allData;
    if (category === 'hiragana') allData = getHiraganaBasicOnly();
    else if (category === 'katakana') allData = getKatakanaBasicOnly();
    else if (category === 'vocab') allData = VOCABULARY.map(v => ({ char: v.word, romaji: v.romaji, meaning: v.meaning }));
    else allData = KANJI_DATA;

    let html = '';
    mastered.forEach(char => {
        const data = allData.find(d => d.char === char);
        if (data) {
            const label = (category === 'kanji') ? data.meaning : (category === 'vocab' ? data.meaning : data.romaji);
            html += `<div class="mastered-char" data-char="${char}" data-category="${category}">
                <span class="mc-char">${char}</span>
                <span class="mc-romaji">${label}</span>
            </div>`;
        }
    });

    container.innerHTML = html;

    container.querySelectorAll('.mastered-char').forEach(el => {
        el.addEventListener('click', () => {
            const ch = el.dataset.char;
            const cat = el.dataset.category;
            if (cat === 'kanji') {
                const k = KANJI_DATA.find(kj => kj.char === ch);
                if (k) openKanjiModal(k);
            } else if (cat === 'vocab') {
                const v = VOCABULARY.find(vv => vv.word === ch);
                if (v) openVocabModal(v);
            } else {
                const data = (cat === 'hiragana' ? getHiraganaBasicOnly() : getKatakanaBasicOnly()).find(d => d.char === ch);
                if (data) openModal(data.char, data.romaji, cat);
            }
        });
    });
}

// ===== SAKURA PARTICLES =====
function initSakura() {
    const canvas = document.getElementById('sakura-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 35;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Petal {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * 1 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.03;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.swing = Math.random() * 2;
            this.swingSpeed = Math.random() * 0.02 + 0.01;
            this.swingOffset = Math.random() * Math.PI * 2;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.swingOffset) * this.swing * 0.3;
            this.rotation += this.rotSpeed;
            this.swingOffset += this.swingSpeed;

            if (this.y > canvas.height + 20) this.reset();
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.opacity;

            // Draw petal shape
            ctx.beginPath();
            ctx.fillStyle = '#f9a8d4';
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(
                this.size * 0.3, -this.size * 0.5,
                this.size, -this.size * 0.3,
                this.size, 0
            );
            ctx.bezierCurveTo(
                this.size, this.size * 0.3,
                this.size * 0.3, this.size * 0.5,
                0, 0
            );
            ctx.fill();

            ctx.restore();
        }
    }

    for (let i = 0; i < maxParticles; i++) {
        const p = new Petal();
        p.y = Math.random() * canvas.height;
        particles.push(p);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    // Navigation
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', () => navigate(el.dataset.page));
    });

    // Chart tabs for hiragana/katakana
    document.querySelectorAll('#page-hiragana .chart-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#page-hiragana .chart-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderKanaChart('hiragana', tab.dataset.group);
        });
    });

    document.querySelectorAll('#page-katakana .chart-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#page-katakana .chart-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderKanaChart('katakana', tab.dataset.group);
        });
    });

    // Kanji tabs
    document.querySelectorAll('#page-kanji .chart-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#page-kanji .chart-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderKanjiChart(tab.dataset.group);
        });
    });

    // Vocabulary tabs
    document.querySelectorAll('#page-vocab .chart-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#page-vocab .chart-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderVocabGrid(tab.dataset.vgroup);
        });
    });

    // Flashcard category
    document.querySelectorAll('.fc-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.fc-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            App.flashcards.category = btn.dataset.cat;
            initFlashcards();
        });
    });

    // Flashcard controls
    document.getElementById('fc-card-container').addEventListener('click', flipFlashcard);
    document.getElementById('fc-next').addEventListener('click', nextFlashcard);
    document.getElementById('fc-prev').addEventListener('click', prevFlashcard);
    document.getElementById('fc-shuffle').addEventListener('click', shuffleFlashcards);
    document.getElementById('fc-mark-mastered').addEventListener('click', () => {
        const card = App.flashcards.cards[App.flashcards.index];
        if (card) {
            toggleMastered(App.flashcards.category, card.char);
            renderFlashcard();
        }
    });

    // Keyboard for flashcards
    document.addEventListener('keydown', (e) => {
        if (App.currentPage !== 'flashcards') return;
        if (e.key === 'ArrowRight') nextFlashcard();
        else if (e.key === 'ArrowLeft') prevFlashcard();
        else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flipFlashcard();
        }
    });

    // Quiz setup options
    document.querySelectorAll('[data-qcat]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-qcat]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            App.quiz.category = btn.dataset.qcat;
        });
    });

    document.querySelectorAll('[data-qmode]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-qmode]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            App.quiz.mode = btn.dataset.qmode;
        });
    });

    document.querySelectorAll('[data-qcount]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-qcount]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            App.quiz.count = parseInt(btn.dataset.qcount);
        });
    });

    // Quiz start
    document.getElementById('quiz-start-btn').addEventListener('click', startQuiz);
    document.getElementById('quiz-retry-btn').addEventListener('click', startQuiz);
    document.getElementById('quiz-back-btn').addEventListener('click', resetQuizUI);

    // Quiz typing submit
    document.getElementById('quiz-submit').addEventListener('click', handleTypingAnswer);
    document.getElementById('quiz-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleTypingAnswer();
    });

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('char-modal').addEventListener('click', (e) => {
        if (e.target.id === 'char-modal') closeModal();
    });

    // Mastered tabs
    document.querySelectorAll('.mastered-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.mastered-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            App.masteredTab = tab.dataset.mtab;
            renderMasteredGrid(tab.dataset.mtab);
        });
    });

    // Reset progress
    document.getElementById('reset-progress-btn').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
            App.progress = { hiragana: [], katakana: [], kanji: [], vocab: [] };
            saveProgress();
            updateProgressPage();
        }
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initEventListeners();
    initSakura();
    navigate('home');
});
