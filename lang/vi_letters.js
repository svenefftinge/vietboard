// [letter (* is Blank/joker), points for letter, number of tiles]
var g_letters = [
  ['a', 1, 6],
  ['á', 1, 2],
  ['à', 1, 2],
  ['ã', 1, 2],
  ['ạ', 1, 2],
  ['ả', 1, 2],
  ['ă', 1, 2],
  ['ắ', 1, 1],
  ['ằ', 1, 1],
  ['ẳ', 1, 1],
  ['ặ', 1, 1],
  ['ẵ', 1, 1],
  ['â', 1, 2],
  ['ấ', 1, 1],
  ['ầ', 1, 1],
  ['ẩ', 1, 1],
  ['ậ', 1, 1],
  ['ẫ', 1, 1],
  ['b', 4, 7],
  ['c', 2, 8],
  ['d', 5, 4],
  ['đ', 4, 5],
  ['e', 4, 4],
  ['é', 1, 1],
  ['è', 1, 1],
  ['ẻ', 1, 1],
  ['ẹ', 1, 1],
  ['ẽ', 1, 1],
  ['ê', 3, 2],
  ['ế', 1, 1],
  ['ề', 1, 1],
  ['ể', 1, 1],
  ['ệ', 1, 1],
  ['ễ', 1, 1],
  ['g', 1, 10],
  ['h', 1, 10],
  ['i', 1, 6],
  ['í', 1, 2],
  ['ì', 1, 2],
  ['ĩ', 1, 2],
  ['ỉ', 1, 2],
  ['ị', 1, 2],
  ['k', 5, 4],
  ['l', 4, 4],
  ['m', 2, 7],
  ['n', 1, 12],
  ['o', 2, 6],
  ['ó', 1, 1],
  ['ò', 1, 1],
  ['ỏ', 1, 1],
  ['ọ', 1, 1],
  ['õ', 1, 1],
  ['ô', 1, 1],
  ['ố', 1, 1],
  ['ồ', 1, 1],
  ['ổ', 1, 1],
  ['ộ', 1, 1],
  ['ỗ', 1, 1],
  ['ơ', 1, 1],
  ['ớ', 1, 1],
  ['ờ', 1, 1],
  ['ở', 1, 1],
  ['ợ', 1, 1],
  ['ỡ', 1, 1],
  ['p', 4, 4],
  ['q', 10, 2],
  ['r', 4, 4],
  ['s', 8, 2],
  ['t', 1, 8],
  ['u', 2, 6],
  ['ú', 1, 1],
  ['ù', 1, 1],
  ['ủ', 1, 1],
  ['ụ', 1, 1],
  ['ũ', 1, 1],
  ['ư', 1, 1],
  ['ứ', 1, 1],
  ['ừ', 1, 1],
  ['ử', 1, 1],
  ['ự', 1, 1],
  ['ữ', 1, 1],
  ['v', 10, 2],
  ['x', 8, 4],
  ['y', 5, 4],
  ['ý', 1, 1],
  ['ỳ', 1, 1],
  ['ỹ', 1, 1],
  ['ỷ', 1, 1],
  ['ỵ', 1, 1],
  [' ', 1, 6],
  ['*', 0, 2]
];

var g_letrange = '[abcdeghiklmnopqrstuvxyáàâăãấầắằẫẵảẩẳạậặđéèêẽếềễẻểẹệíìĩỉịóòôõốồỗỏơổọớờỡộởợúùũưụứừữửựủýỳỹỷỵ ]';