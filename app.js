const WORDS = [
  ['w01','안녕하세요','annyeonghaseyo','你好／您好','安妞哈誰唷','問候','안녕하세요! 만나서 반가워요.','你好！很高興認識你。'],
  ['w02','감사합니다','gamsahamnida','謝謝','甘撒哈密達','問候','도와주셔서 감사합니다.','謝謝你的幫忙。'],
  ['w03','미안해요','mianhaeyo','對不起','米安黑唷','問候','늦어서 미안해요.','對不起，我遲到了。'],
  ['w04','괜찮아요','gwaenchanayo','沒關係／還好','關燦那唷','問候','네, 괜찮아요.','嗯，沒關係。'],
  ['w05','네','ne','是／好的','內','基礎','네, 알겠어요.','好的，我知道了。'],
  ['w06','아니요','aniyo','不是／不','啊尼唷','基礎','아니요, 괜찮아요.','不用，沒關係。'],
  ['w07','안녕히 가세요','annyeonghi gaseyo','再見（對方離開）','安妞希 卡誰唷','問候','안녕히 가세요!','再見！（請慢走）'],
  ['w08','잘 지내요','jal jinaeyo','過得好／好好生活','恰兒 支內唷','問候','요즘 잘 지내요?','最近過得好嗎？'],
  ['w09','저','jeo','我（謙稱）','啾','基礎','저는 대만 사람이에요.','我是台灣人。'],
  ['w10','저는','jeoneun','我＋主題助詞','啾嫩','基礎','저는 학생이에요.','我是學生。'],
  ['w11','이름','ireum','名字','伊冷','基礎','이름이 뭐예요?','名字是什麼？'],
  ['w12','뭐예요','mwoyeyo','是什麼？','摸耶唷','基礎','이것은 뭐예요?','這是什麼？'],
  ['w13','한국어','hangugeo','韓語','韓古果','學習','한국어를 공부해요.','學習韓語。'],
  ['w14','공부하다','gongbuhada','學習','共部哈達','學習','매일 한국어를 공부해요.','每天學韓語。'],
  ['w15','학교','hakgyo','學校','哈ㄎ唷','場所','학교에 가요.','去學校。'],
  ['w16','집','jip','家','吉普','場所','집에 있어요.','在家。'],
  ['w17','친구','chingu','朋友','親古','人物','친구를 만나요.','見朋友。'],
  ['w18','사람','saram','人','撒朗','人物','좋은 사람이에요.','是個好人。'],
  ['w19','오늘','oneul','今天','喔嫩','時間','오늘은 바빠요.','今天很忙。'],
  ['w20','내일','naeil','明天','內伊兒','時間','내일 만나요.','明天見。'],
  ['w21','어제','eoje','昨天','喔接','時間','어제 비가 왔어요.','昨天下雨了。'],
  ['w22','지금','jigeum','現在','吉更','時間','지금 뭐 해요?','現在在做什麼？'],
  ['w23','밥','bap','飯／餐','巴普','飲食','밥을 먹어요.','吃飯。'],
  ['w24','물','mul','水','姆兒','飲食','물 주세요.','請給我水。'],
  ['w25','커피','keopi','咖啡','摳批','飲食','커피 한 잔 주세요.','請給我一杯咖啡。'],
  ['w26','맛있어요','masisseoyo','好吃','馬西搜唷','飲食','김치가 맛있어요.','泡菜很好吃。'],
  ['w27','주세요','juseyo','請給我／請做','主誰唷','實用','물 한 병 주세요.','請給我一瓶水。'],
  ['w28','얼마예요','eolmayeyo','多少錢？','喔兒馬耶唷','購物','이거 얼마예요?','這個多少錢？'],
  ['w29','가다','gada','去','卡達','動詞','학교에 가요.','去學校。'],
  ['w30','오다','oda','來','喔達','動詞','친구가 와요.','朋友來了。'],
  ['w31','먹다','meokda','吃','摸達','動詞','같이 먹어요.','一起吃吧。'],
  ['w32','마시다','masida','喝','馬西達','動詞','차를 마셔요.','喝茶。'],
  ['w33','보다','boda','看／見','波達','動詞','영화를 봐요.','看電影。'],
  ['w34','좋아요','joayo','好／喜歡','啾阿唷','形容詞','한국 음식이 좋아요.','喜歡韓國料理。'],
  ['w35','괜찮다','gwaenchantda','沒問題／還可以','關燦達','形容詞','이것도 괜찮아요.','這個也可以。'],
  ['w36','재미있어요','jaemiisseoyo','有趣','宰米伊搜唷','形容詞','한국 드라마가 재미있어요.','韓劇很有趣。'],
  ['w37','어려워요','eoryeowoyo','困難','喔留沃唷','形容詞','한국어가 어려워요.','韓語很難。'],
  ['w38','쉬워요','swiwoyo','簡單','須沃唷','形容詞','이 문법은 쉬워요.','這個文法很簡單。'],
  ['w39','많이','mani','很多／多多地','馬尼','副詞','많이 연습해요.','多多練習。'],
  ['w40','조금','jogeum','一點點','啾更','副詞','조금만 주세요.','請給我一點點。']
].map(([id,word,roman,meaning,phonetic,category,example,exampleZh])=>({id,word,roman,meaning,phonetic,category,example,exampleZh}));

// 從「言趣課程」第一課與發音講義整理出的初學者內容。
// starter 會讓這批課堂字優先出現在每日字卡，不會被較後加入的延伸字沖淡。
const COURSE_WORDS = [
  ['c01','안녕하십니까','annyeongsimnikka','您好（正式）','安妞哈西姆尼嘎','問候','안녕하십니까?','您好！'],
  ['c02','처음','cheoeum','第一次／初次','啾恩','問候','처음 뵙겠습니다.','初次見面。'],
  ['c03','뵙겠습니다','boepgetseumnida','將見面／請多指教','波普給森尼達','問候','처음 뵙겠습니다.','初次見面。'],
  ['c04','만나서 반갑습니다','mannaseo bangapseumnida','很高興見到你','滿那搜 班嘎森尼達','問候','만나서 반갑습니다.','很高興見到你。'],
  ['c05','잘 부탁드립니다','jal butakdeurimnida','請多關照','恰兒 部塔德林尼達','問候','잘 부탁드립니다.','請多關照。'],
  ['c06','안녕','annyeong','你好／再見（平語）','安妞','問候','안녕!','嗨！'],
  ['c07','나','na','我（非敬語）','那','基礎','나는 학생이야.','我是學生。'],
  ['c08','씨','ssi','先生／小姐（接姓名）','西','基礎','민수 씨는 학생입니다.','敏秀先生是學生。'],
  ['c09','입니다','imnida','是（正式陳述）','伊姆尼達','基礎','저는 학생입니다.','我是學生。'],
  ['c10','입니까','imnikka','是嗎？（正式疑問）','伊姆尼嘎','基礎','학생입니까?','是學生嗎？'],
  ['c11','중국','jungguk','中國','中國','國家','저는 중국 사람입니다.','我是中國人。'],
  ['c12','중국 사람','jungguk saram','中國人','中國 撒朗','國家','중국 사람입니다.','是中國人。'],
  ['c13','일본','ilbon','日本','一爾本','國家','일본 사람입니까?','是日本人嗎？'],
  ['c14','일본 사람','ilbon saram','日本人','一爾本 撒朗','國家','일본 사람입니다.','是日本人。'],
  ['c15','한국','hanguk','韓國','韓古','國家','한국 사람입니다.','是韓國人。'],
  ['c16','한국 사람','hanguk saram','韓國人','韓古 撒朗','國家','한국 사람입니다.','是韓國人。'],
  ['c17','캐나다','kaenada','加拿大','開那達','國家','캐나다 사람입니다.','是加拿大人。'],
  ['c18','미국','miguk','美國','米古','國家','미국 사람입니다.','是美國人。'],
  ['c19','독일','dogil','德國','多吉兒','國家','독일 사람입니다.','是德國人。'],
  ['c20','영국','yeongguk','英國','永古','國家','영국 사람입니다.','是英國人。'],
  ['c21','프랑스','peurangseu','法國','普朗斯','國家','프랑스 사람입니다.','是法國人。'],
  ['c22','이탈리아','itallia','義大利','伊塔利亞','國家','이탈리아 사람입니다.','是義大利人。'],
  ['c23','러시아','reosia','俄羅斯','囉西亞','國家','러시아 사람입니다.','是俄羅斯人。'],
  ['c24','태국','taeguk','泰國','太古','國家','태국 사람입니다.','是泰國人。'],
  ['c25','어느 나라','eoneu nara','哪個國家','喔嫩 那拉','國家','어느 나라 사람입니까?','是哪一國人？'],
  ['c26','여러분','yeoreobun','各位／大家','唷囉本','基礎','여러분, 안녕하세요.','各位，大家好。'],
  ['c27','학생','haksaeng','學生','哈生','職業','저는 학생입니다.','我是學生。'],
  ['c28','선생님','seonsaengnim','老師','宣生尼姆','職業','선생님은 중국 사람입니다.','老師是中國人。'],
  ['c29','의사','uisa','醫生','醫撒','職業','저는 의사입니다.','我是醫生。'],
  ['c30','간호사','ganhosa','護士','看護撒','職業','저는 간호사입니다.','我是護士。'],
  ['c31','배우','baeu','演員','白우','職業','이민호는 배우입니다.','李敏鎬是演員。'],
  ['c32','가수','gasu','歌手','卡蘇','職業','수지는 가수입니다.','秀智是歌手。'],
  ['c33','점원','jeomwon','店員','啾姆沃恩','職業','저는 점원입니다.','我是店員。'],
  ['c34','요리사','yorisa','廚師','唷利撒','職業','저는 요리사입니다.','我是廚師。'],
  ['c35','약사','yaksa','藥師','藥撒','職業','마리오는 약사입니까?','Mario 是藥師嗎？'],
  ['c36','비서','biseo','秘書','比搜','職業','마리오는 비서입니다.','Mario 是秘書。'],
  ['c37','은행원','eunhaengwon','銀行員','恩行沃恩','職業','저는 은행원입니다.','我是銀行員。'],
  ['c38','소방관','sobanggwan','消防員','搜邦官','職業','저는 소방관입니다.','我是消防員。'],
  ['c39','경찰관','gyeongchalgwan','警察','景察官','職業','저는 경찰관입니다.','我是警察。'],
  ['c40','스타','seuta','明星','斯達','職業','이동욱은 스타입니다.','李棟旭是明星。'],
  ['c41','바다','bada','大海','巴達','發音練習','바다가 보여요.','看得到大海。'],
  ['c42','자랑','jarang','自豪／炫耀','恰朗','發音練習','한국어를 자랑스럽게 말해요.','自信地說韓語。'],
  ['c43','잘하다','jalhada','做得好','恰兒哈達','發音練習','한국어를 잘해요.','韓語說得很好。'],
  ['c44','웃다','utda','笑','烏達','發音練習','웃어요.','笑。'],
  ['c45','있다','itda','有／在','伊達','發音練習','책이 있어요.','有書。'],
  ['c46','좋아하다','joahada','喜歡','啾阿哈達','發音練習','한국어를 좋아해요.','喜歡韓語。'],
  ['c47','안녕히 주무세요','annyeonghi jumuseyo','晚安（敬語）','安妞希 主目誰唷','發音練習','안녕히 주무세요.','晚安。'],
  ['c48','컵','keop','杯子','摳普','發音練習','컵에 물이 있어요.','杯子裡有水。'],
  ['c49','엄마','eomma','媽媽','喔嘛','發音練習','엄마가 와요.','媽媽來了。'],
  ['c50','몰라','molla','不知道（口語）','莫拉','發音練習','잘 몰라요.','不太知道。'],
  ['c51','빨리','ppalli','快點','巴利','發音練習','빨리 오세요.','請快點來。'],
  ['c52','팥빙수','patbingsu','紅豆冰','帕冰蘇','發音練習','팥빙수를 먹어요.','吃紅豆冰。'],
  ['c53','어떻게','eotteoke','怎麼／如何','喔都可','發音練習','어떻게 읽어요?','怎麼讀？'],
  ['c54','많다','manta','多','曼塔','發音練習','사람이 많아요.','人很多。'],
  ['c55','그렇지요','geureochiyo','是這樣吧','古囉七唷','發音練習','그렇지요?','是這樣吧？'],
  ['c56','백화점','baekhwajeom','百貨店','白夸店','發音練習','백화점에 가요.','去百貨店。'],
  ['c57','졸업하다','joreophada','畢業','啾羅帕達','發音練習','곧 졸업해요.','快要畢業了。'],
  ['c58','작년','jangnyeon','去年','章年','發音練習','작년에 한국에 갔어요.','去年去了韓國。'],
  ['c59','박물관','bangmulgwan','博物館','邦姆關','發音練習','박물관에 가요.','去博物館。'],
  ['c60','거짓말','geojinmal','謊言','勾真馬兒','發音練習','거짓말하지 마세요.','請不要說謊。'],
  ['c61','한라산','hallasan','漢拏山','韓拉山','發音練習','한라산에 가고 싶어요.','想去漢拏山。'],
  ['c62','관리','gwalli','管理','關利','發音練習','시간 관리가 중요해요.','時間管理很重要。'],
  ['c63','열넷','yeolnet','十四','唷兒內','發音練習','열넷이에요.','是十四。']
].map(([id,word,roman,meaning,phonetic,category,example,exampleZh])=>({id,word,roman,meaning,phonetic,category,example,exampleZh,source:'言趣課程',starter:true}));
WORDS.push(...COURSE_WORDS);

const CATEGORIES = ['全部', '言趣課程', ...new Set(WORDS.map(w=>w.category))];
const CATEGORY_ZH = {問候:'問候',基礎:'基礎',學習:'學習',場所:'場所',人物:'人物',時間:'時間',飲食:'飲食',實用:'實用',購物:'購物',動詞:'動詞',形容詞:'形容詞',副詞:'副詞',國家:'國家',職業:'職業',發音練習:'發音練習'};
const COURSE_MODULES = [
  {id:'intro',label:'第 1 單元',title:'問候與自我介紹',description:'先學會打招呼、正式介紹自己與對方。',icon:'안',categories:['問候','基礎'],tone:'coral'},
  {id:'identity',label:'第 2 單元',title:'國家與職業',description:'練習「我是誰、來自哪裡、做什麼」。',icon:'국',categories:['國家','職業'],tone:'gold'},
  {id:'pronunciation',label:'發音課',title:'發音規則複習',description:'把收音、連音與音變放回單字裡練習。',icon:'받',categories:['發音練習'],tone:'mint'}
];
function courseWords(module){return WORDS.filter(w=>w.source==='言趣課程'&&(!module||module.categories.includes(w.category)))}
// 韓文子音不是固定一個音：要看它在初聲（字首）還是終聲（받침）。
// ㅇ 的初聲是「零聲母」，只有放在 받침 才發 [ng]；這是舊版最容易誤導的地方。
const CONSONANTS = [
  ['ㄱ','기역','g / k','k','字首較輕，收尾變成不爆破的 k'],['ㄴ','니은','n','n','字首、收尾都接近 n'],
  ['ㄷ','디귿','d / t','t','字首較像 d，收尾變成不爆破的 t'],['ㄹ','리을','r / l','l','字首是短 r，收尾或子音前接近 l'],
  ['ㅁ','미음','m','m','字首、收尾都接近 m'],['ㅂ','비읍','b / p','p','字首較像 b，收尾變成不爆破的 p'],
  ['ㅅ','시옷','s','t','ㅣ系列前有較柔的 sh 感；받침歸到 [t]'],['ㅇ','이응','—','ng','字首不發音；받침才是 ng'],
  ['ㅈ','지읒','j','t','字首 j，收尾歸到 [t]'],['ㅊ','치읓','ch','t','字首送氣 ch，收尾歸到 [t]'],
  ['ㅋ','키읔','k','k','強送氣 k'],['ㅌ','티읕','t','t','強送氣 t'],['ㅍ','피읖','p','p','強送氣 p'],
  ['ㅎ','히읗','h','—','받침的 ㅎ 常與後音合併或脫落'],['ㄲ','쌍기역','kk','k','緊音；不可當作送氣音'],
  ['ㄸ','쌍디귿','tt','—','緊音；不作一般 받침'],['ㅃ','쌍비읍','pp','—','緊音；不作一般 받침'],
  ['ㅆ','쌍시옷','ss','t','ㅣ系列前有較明顯的 sh 感；받침歸到 [t]'],['ㅉ','쌍지읒','jj','—','緊音；不作一般 받침']
];
const CONSONANT_GROUPS = [
  ['松音','ㄱ ㄷ ㅂ ㅅ ㅈ','教材常見：g/k · d/t · b/p · s/s · z/c'],
  ['緊音','ㄲ ㄸ ㅃ ㅆ ㅉ','教材常見：gg · dd · bb · ss · zz'],
  ['送氣音','ㅋ ㅌ ㅍ ㅎ ㅊ','教材常見：kk · tt · pp · hh · cc'],
  ['鼻音／流音','ㄴ ㅁ ㄹ ㅇ','n · m · r/l · 初聲無音／받침 ng']
];
const VOWELS = [['ㅏ','a'],['ㅑ','ya'],['ㅓ','eo'],['ㅕ','yeo'],['ㅗ','o'],['ㅛ','yo'],['ㅜ','u'],['ㅠ','yu'],['ㅡ','eu'],['ㅣ','i'],['ㅐ','ae'],['ㅔ','e'],['ㅚ','oe'],['ㅟ','wi'],['ㅢ','ui'],['ㅘ','wa'],['ㅝ','wo'],['ㅙ','wae'],['ㅞ','we'],['ㅖ','ye']];
const GRAMMAR = [
  ['01','이에요／예요','名詞＋「是」','名詞最後有收音用 이에요，沒有收音用 예요。','학생이에요.','是學生。'],
  ['02','은／는','主題助詞','把「誰／什麼」提出來當主題。저는 是「至於我」。','저는 대만 사람이에요.','我是台灣人。'],
  ['03','이／가','主格助詞','標記句子的主詞，想強調「誰」時很常用。','친구가 와요.','朋友來了。'],
  ['04','을／를','受詞助詞','放在動作的對象後面：밥을 먹어요（吃飯）。','한국어를 공부해요.','學習韓語。'],
  ['05','에 가요','去某個地方','地點＋에＋가요，表示「去某地」。','학교에 가요.','去學校。'],
  ['06','아／어요','禮貌現在式','日常對話最常用的禮貌結尾，動詞與形容詞都能使用。','매일 연습해요.','每天練習。']
];
const PRONUNCIATION_RULES = [
  ['P01','받침七個代表音','音節末簡化','韓文在音節末實際只保留七個代表音：ㄱ、ㄴ、ㄷ、ㄹ、ㅁ、ㅂ、ㅇ。ㅅ、ㅈ、ㅊ、ㅌ、ㅎ 等在收尾位置常會先變成其中之一。','옷 [옫] · 꽃 [꼳] · 앞 [압]','衣服 · 花 · 前面'],
  ['P02','連音化｜연음','받침＋母音開頭的助詞／語尾','單一 받침 接上以母音開頭的助詞、語尾或接尾詞時，通常把原本的收尾音移到下一個音節當初聲。','옷이 → [오시] · 밭에 → [바테]','衣服＋主格 · 田地＋在'],
  ['P03','겹받침 連音','雙收尾只移動後一個子音','겹받침 接母音開頭的語法成分時，前一個子音留在前音節，後一個移到下一音節；ㄳ、ㄽ、ㅄ 的 ㅅ 會讀成緊音。','앉아 → [안자] · 닭을 → [달글] · 없어 → [업써]','坐著 · 雞＋受詞 · 沒有'],
  ['P04','送氣化｜거센소리되기','ㅎ 和 ㄱ／ㄷ／ㅈ 合併','ㅎ 和相鄰的 ㄱ、ㄷ、ㅈ（或反過來的 받침＋ㅎ）相遇時，常合成送氣音 ㅋ、ㅌ、ㅊ。','놓고 → [노코] · 좋다 → [조타] · 먹히다 → [머키다]','放下＋連接 · 好＋現在式 · 被吃'],
  ['P05','鼻音化｜비음화','받침＋ㄴ／ㅁ','받침的 ㄱ、ㄷ、ㅂ 遇到鼻音 ㄴ、ㅁ 時，分別變成 ㅇ、ㄴ、ㅁ，讓兩個音更容易連續發出。','국물 → [궁물] · 밥만 → [밤만] · 먹는 → [멍는]','湯 · 只有飯 · 正在吃'],
  ['P06','硬音化｜된소리되기','받침後的平音變緊音','前一音節以 ㄱ、ㄷ、ㅂ 等代表音收尾時，後面的 ㄱ、ㄷ、ㅂ、ㅅ、ㅈ 常變成 ㄲ、ㄸ、ㅃ、ㅆ、ㅉ。','국밥 → [국빱] · 꽃다발 → [꼳따발]','湯飯 · 花束'],
  ['P07','顎音化｜구개음화','ㄷ／ㅌ＋이','ㄷ、ㅌ 接以 ㅣ 開頭的助詞或接尾詞時，分別變成 ㅈ、ㅊ；ㄷ＋히 也會先送氣化再讀成 ㅊ。','굳이 → [구지] · 밭이 → [바치] · 묻히다 → [무치다]','偏要 · 田地＋主格 · 被埋'],
  ['P08','ㄴ／ㄹ 音變','ㄴ 和 ㄹ 相鄰','ㄴ、ㄹ相鄰時常互相同化成 ㄹ；但部分漢字詞會出現 ㄹ→ㄴ，要以單字的標準發音為準。','신라 → [실라] · 설날 → [설랄]','新羅 · 春節'],
  ['P09','ㄴ 添加｜ㄴ 첨가','合成詞＋이／야／여／요／유','合成詞或派生詞前面以子音結尾、後面以 이／야／여／요／유 開頭時，常在後音節前加 ㄴ；若前面是 ㄹ，新增的 ㄴ 常同化成 ㄹ。','꽃잎 → [꼰닙] · 물약 → [물략]','花瓣 · 藥水']
];
const COURSE_PRONUNCIATION_REVIEW = [
  {no:'補', title:'雙收音補充', point:'右邊音：ㄺ、ㄿ、ㄻ。特殊單字：ㄼ 在 밟다（踩）讀右邊音 [밥]。', examples:[['밟다','[밥따]']]},
  {no:'1', title:'關於 ㅇ', point:'放在上面或左邊不發音；放在下面讀 ng；不放右邊。', examples:[['오빠','ㅇ 不發音'],['아빠','ㅇ 不發音'],['사랑','ㅇ = ng']]},
  {no:'2', title:'略送氣', point:'ㄱ、ㄷ、ㅂ、ㅈ 在詞首或句首時略送氣，像 k / t / p / c；其他位置發原音。', examples:[['가다','走'],['다','全部'],['바다','大海'],['자랑','自豪']]},
  {no:'3', title:'母音 ㅡ', point:'ㅇ + ㅡ 發本音；ㅂ、ㅃ、ㅍ、ㅁ + ㅡ 帶小 u 音；其他輔音 + ㅡ 跟著輔音發。', examples:[['스티브','Steve'],['바쁘다','忙'],['예쁘다','漂亮'],['쓰다','寫']]},
  {no:'4', title:'ㅢ 的讀法', point:'의 在詞首讀本音；表示「的」常讀 에；非詞首或接輔音後常讀 이。', examples:[['의사','醫生'],['의자','椅子'],['너의','你的'],['회의','會議']]},
  {no:'5', title:'遇到 ㅣ', point:'ㅈ、ㅊ、ㅅ、ㅆ 遇到 ㅣ(i) 時，分別變成 ji / qi / xi / xxi 的感覺。', examples:[['지','ji'],['치','qi'],['시','xi'],['씨','xxi']]},
  {no:'6', title:'ㅎ 弱化', point:'ㅎ 在句中會弱化；慢讀時可讀，快讀時常不讀或變輕。', examples:[['사랑해요','愛你喔'],['좋아해요','喜歡'],['안녕히 주무세요','晚安']]},
  {no:'7', title:'連音化', point:'收音遇 ㅇ / ㅎ 開頭時連上去；收音 ㅇ 不連；收音 ㅎ 遇 ㅇ 常脫落；雙收音左留右上。', examples:[['있어요','[이써요]'],['웃어요','[우서요]'],['좋아요','[조아요]'],['앉으세요','[안즈세요]']]},
  {no:'8', title:'送氣化', point:'ㄱ、ㄷ、ㅂ、ㅈ 遇到 ㅎ 時，變成 ㅋ、ㅌ、ㅍ、ㅊ。', examples:[['어떻게','[어떠케]'],['많다','[만타]'],['그렇지요','[그러치요]']]},
  {no:'9', title:'鼻音化', point:'收音 ㄱ / ㅂ / ㄷ 遇到 ㄴ / ㅁ 時，變成 ㅇ / ㅁ / ㄴ。', examples:[['작년','[장년]'],['받는다','[반는다]'],['입니다','[임니다]']]},
  {no:'10', title:'流音化', point:'ㄴ + ㄹ 或 ㄹ + ㄴ 會變成 ㄹ + ㄹ。', examples:[['한라산','[할라산]'],['관리','[괄리]'],['열넷','[열렛]']]}
];
const PATTERNS = [
  ['問候','안녕하세요?','annyeonghaseyo?','你好嗎？','▶ 안녕하세요?'],
  ['自我介紹','저는 ___예요.','jeoneun ___yeyo.','我是＿＿。','저는 대만 사람이에요.'],
  ['詢問名稱','이름이 뭐예요?','ireumi mwoyeyo?','名字是什麼？','이름이 뭐예요?'],
  ['點餐','___ 주세요.','___ juseyo.','請給我＿＿。','커피 한 잔 주세요.'],
  ['詢價','이거 얼마예요?','igeo eolmayeyo?','這個多少錢？','이거 얼마예요?'],
  ['邀請','같이 ___요.','gachi ___yo.','一起＿＿吧。','같이 먹어요.'],
  ['表達喜好','___이／가 좋아요.','___i/ga joayo.','喜歡＿＿。','한국 음식이 좋아요.'],
  ['聽不懂','잘 모르겠어요.','jal moreugesseoyo.','不太清楚／不太懂。','죄송해요. 잘 모르겠어요.']
];

const state = { screen:'home', category:'全部', query:'', queue:[], index:0, revealed:false, sound:true, starred:new Set(JSON.parse(localStorage.getItem('korean_starred')||'[]')), progress:JSON.parse(localStorage.getItem('korean_progress')||'{}'), settings:JSON.parse(localStorage.getItem('korean_settings')||'{}') };
const $ = id => document.getElementById(id);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save(){localStorage.setItem('korean_progress',JSON.stringify(state.progress));localStorage.setItem('korean_starred',JSON.stringify([...state.starred]));localStorage.setItem('korean_settings',JSON.stringify(state.settings));}
function today(){return new Date().toISOString().slice(0,10)}
let koreanVoices = [];
function voiceScore(voice){const lang=voice.lang?.toLowerCase()||'';const name=voice.name?.toLowerCase()||'';return (lang==='ko-kr'?100:0)+(voice.localService?20:0)+(/korean|한국|yuna|sora|seoyeon|korea/.test(name)?10:0)}
function bestKoreanVoice(){const chosen=state.settings.voiceName;return koreanVoices.find(v=>v.name===chosen)||[...koreanVoices].sort((a,b)=>voiceScore(b)-voiceScore(a))[0]||null}
function renderVoiceOptions(){const select=$('voice-select');const status=$('voice-status');if(!select||!status)return;const current=state.settings.voiceName||'';select.innerHTML='<option value="">自動選擇最佳韓語語音</option>'+koreanVoices.map(v=>`<option value="${esc(v.name)}">${esc(v.name)}${v.localService?'（裝置內建）':''}</option>`).join('');select.value=koreanVoices.some(v=>v.name===current)?current:'';select.disabled=koreanVoices.length===0;const voice=bestKoreanVoice();status.textContent=voice?`目前使用：${voice.name}${voice.localService?'（裝置內建）':''}。可用喇叭播放韓語，不要用中文近似音判斷準確度。`:'裝置尚未提供韓語語音；請到手機的語音／朗讀設定安裝韓語（ko-KR）。'}
function refreshKoreanVoices(){const voices=window.speechSynthesis?.getVoices?.()??[];koreanVoices=voices.filter(v=>/^ko(?:-|_)/i.test(v.lang||''));renderVoiceOptions()}
function speak(text){if(!state.sound||!window.speechSynthesis)return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='ko-KR';u.rate=Number(state.settings.rate||.78);const voice=bestKoreanVoice();if(voice)u.voice=voice;window.speechSynthesis.speak(u)}
function toast(message){const el=$('toast');el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1800)}
function navigate(screen){state.screen=screen;document.querySelectorAll('.screen').forEach(el=>el.classList.toggle('active',el.id===`screen-${screen}`));document.querySelectorAll('.nav-item').forEach(el=>el.classList.toggle('active',el.dataset.screen===screen));if(screen==='home')renderHome();if(screen==='course')renderCourse();if(screen==='pronunciation')renderPronunciation();if(screen==='words')renderWords();if(screen==='alphabet')renderAlphabet();if(screen==='grammar')renderGrammar();if(screen==='patterns')renderPatterns();window.scrollTo({top:0,behavior:'smooth'})}
function renderHome(){const done=Object.values(state.progress).filter(p=>p>=2).length;const studied=Object.values(state.progress).filter(p=>p>0).length;const pct=Math.round((studied/WORDS.length)*100);$('today-progress').textContent=`${pct}%`;$('today-progress-label').textContent=studied?`已認識 ${studied} 個單字`:'開始第一張字卡';$('today-progress-bar').style.width=`${pct}%`;$('mastery-label').textContent=`${done} / ${WORDS.length} 已掌握`;$('streak-count').textContent=state.settings.streak||0;$('next-summary').textContent=studied?`已經學會 ${studied} 個，繼續完成今天的練習吧。`:'準備好認識幾個實用的韓文單字了嗎？'}
function renderCourse(){const total=courseWords().length;const studied=courseWords().filter(w=>(state.progress[w.id]||0)>0).length;const mastered=courseWords().filter(w=>(state.progress[w.id]||0)>=2).length;$('course-total').textContent=`${mastered} / ${total} 已掌握`;$('course-progress').textContent=`${studied} / ${total} 個單字已開始`;$('course-progress-bar').style.width=`${total?Math.round(studied/total*100):0}%`;$('course-modules').innerHTML=COURSE_MODULES.map(module=>{const words=courseWords(module);const done=words.filter(w=>(state.progress[w.id]||0)>=2).length;const pct=words.length?Math.round(done/words.length*100):0;return `<article class="course-module ${module.tone}"><div class="course-module-top"><span class="course-icon">${module.icon}</span><div><span class="eyebrow">${module.label}</span><h2>${module.title}</h2></div><strong>${done}/${words.length}</strong></div><p>${module.description}</p><div class="course-module-progress"><i style="width:${pct}%"></i></div><div class="course-module-actions"><small>${pct}% 完成</small><button class="primary-button" data-course-study="${module.id}" type="button">開始複習 <span>→</span></button></div></article>`}).join('')}
function renderWords(){const tabs=$('category-tabs');tabs.innerHTML=CATEGORIES.map(c=>`<button class="chip ${c===state.category?'active':''}" data-category="${esc(c)}">${esc(CATEGORY_ZH[c]||c)}</button>`).join('');const q=state.query.toLowerCase();const list=WORDS.filter(w=>(state.category==='全部'||(state.category==='言趣課程'?w.source==='言趣課程':w.category===state.category))&&(!q||`${w.word} ${w.roman} ${w.meaning}`.toLowerCase().includes(q)));$('word-list').innerHTML=list.length?list.map(w=>`<article class="word-row"><div class="word-main"><strong>${esc(w.word)}</strong><small>${esc(w.roman)} · ${esc(w.phonetic)}</small>${w.source?'<i class="source-pill">言趣課程</i>':''}</div><span class="word-meaning">${esc(w.meaning)}</span><button class="speak-small" data-speak="${esc(w.word)}" type="button">🔊</button><button class="star-small" data-star="${w.id}" type="button">${state.starred.has(w.id)?'★':'☆'}</button></article>`).join(''):'<div class="word-row"><span class="word-meaning">找不到符合的單字</span></div>'}
function renderAlphabet(){const groups=`<div class="consonant-groups">${CONSONANT_GROUPS.map(([name,letters,roman])=>`<div class="consonant-group"><strong>${name}</strong><b>${letters}</b><small>${roman}</small></div>`).join('')}</div><p class="romanization-note">上面是課堂的分類記憶法；下面表格改用「初聲／받침」看實際位置。教材中的 z/c、kk 等是幫助辨識的近似標記，不需要和英文拼字規則硬套。</p>`;const consonants=`<article class="alphabet-group"><h2>子音｜자음 <small>字首初聲 / 받침收尾</small></h2><div class="alphabet-grid">${CONSONANTS.map(([char,name,initial,final,note])=>`<button class="alpha" data-speak="${esc(name)}" type="button"><b>${char}</b><strong>${name}</strong><small>初聲 ${initial}</small><small>收尾 ${final}</small><em>${note}</em></button>`).join('')}</div></article>`;const vowels=`<article class="alphabet-group"><h2>母音｜모음</h2><div class="alphabet-grid vowel-grid">${VOWELS.map(([char,sound])=>`<button class="alpha" data-speak="${char}" type="button"><b>${char}</b><strong>${sound}</strong></button>`).join('')}</div></article>`;$('alphabet-list').innerHTML=groups+consonants+vowels}
function renderGrammar(){const basics=GRAMMAR.map(([num,title,sub,desc,ex,zh])=>`<article class="grammar-card"><header><span class="grammar-num">${num}</span><div><h2>${title}</h2><small>${sub}</small></div></header><p>${desc}</p><div class="grammar-example"><b>${ex}</b><span>${zh}</span></div></article>`).join('');const rules=PRONUNCIATION_RULES.map(([num,title,sub,desc,ex,zh])=>`<article class="grammar-card pronunciation-card"><header><span class="grammar-num rule-num">${num.replace('P','')}</span><div><h2>${title}</h2><small>${sub}</small></div></header><p>${desc}</p><div class="grammar-example"><b>${ex}</b><span>${zh}</span></div></article>`).join('');$('grammar-list').innerHTML=`<div class="grammar-section-label"><span class="eyebrow">CORE GRAMMAR</span><h2>句子的骨架</h2></div>${basics}<div class="grammar-section-label rule-section-label"><span class="eyebrow">SOUND CHANGES</span><h2>받침連接與發音變化</h2><p>先看字的寫法，再練習括號裡的實際讀音。這些是「規則整理」，單字仍以辭典標示的標準發音為準。</p></div>${rules}<p class="source-note">本區依韓國國立國語院《標準發音法》整理：<a href="https://www.korean.go.kr/kornorms/regltn/regltnView.do?regltn_code=0002&regltn_no=345" target="_blank" rel="noreferrer">查看官方規則 ↗</a></p>`}
function renderPronunciation(){$('pronunciation-review-list').innerHTML=COURSE_PRONUNCIATION_REVIEW.map(rule=>`<article class="review-rule-card ${rule.no==='補'?'supplement':''}"><header><span class="review-rule-num">${rule.no}</span><div><small>${rule.no==='補'?'DOUBLE FINAL':'RULE '+rule.no}</small><h2>${esc(rule.title)}</h2></div></header><p>${esc(rule.point)}</p><div class="review-examples">${rule.examples.map(([word,note])=>`<button class="review-example" data-speak="${esc(word)}" type="button"><b>${esc(word)}</b><span>${esc(note)}</span><i>🔊</i></button>`).join('')}</div></article>`).join('')}
function renderPatterns(){$('pattern-list').innerHTML=PATTERNS.map(([tag,kr,roman,zh,example])=>`<article class="pattern-card"><span class="pattern-tag">${tag}</span><button class="speak-small" data-speak="${esc(kr.replace('___',''))}" type="button">🔊</button><h2>${kr}</h2><div class="roman">${roman}</div><p>${zh}<br><strong>${example}</strong></p></article>`).join('')}
function startStudy(source=WORDS){const list=Array.isArray(source)?source:WORDS;state.queue=[...list].sort((a,b)=>Number(!a.starter)-Number(!b.starter)||(state.progress[a.id]||0)-(state.progress[b.id]||0)).slice(0,10);state.index=0;state.revealed=false;navigate('study');renderCard()}
function startCourseStudy(moduleId){const module=COURSE_MODULES.find(item=>item.id===moduleId);if(module)startStudy(courseWords(module))}
function openCourseWords(){state.category='言趣課程';state.query='';navigate('words')}
function renderCard(){const w=state.queue[state.index];if(!w)return finishStudy();$('study-complete').classList.add('hidden');$('study-counter').textContent=`${state.index+1} / ${state.queue.length}`;$('study-progress-bar').style.width=`${(state.index/state.queue.length)*100}%`;$('card-category').textContent=w.category;$('card-word').textContent=w.word;$('card-roman').textContent=w.roman;$('card-meaning').textContent=w.meaning;$('card-phonetic').textContent=`中文近似音：${w.phonetic}`;$('card-example').innerHTML=`<b>${esc(w.example)}</b><span>${esc(w.exampleZh)}</span>`;$('card-answer').classList.add('hidden');$('reveal-card').classList.remove('hidden');$('rating-actions').classList.add('hidden');$('flashcard').classList.remove('hidden');$('study-sound').onclick=()=>speak(w.word);$('star-card').textContent=state.starred.has(w.id)?'★':'☆';$('star-card').onclick=()=>{state.starred.has(w.id)?state.starred.delete(w.id):state.starred.add(w.id);save();$('star-card').textContent=state.starred.has(w.id)?'★':'☆';toast(state.starred.has(w.id)?'已加入收藏':'已取消收藏')};}
function reveal(){state.revealed=true;$('card-answer').classList.remove('hidden');$('reveal-card').classList.add('hidden');$('rating-actions').classList.remove('hidden');const w=state.queue[state.index];speak(w.word)}
function rate(rating){const w=state.queue[state.index];const value=rating==='easy'?2:rating==='hard'?1:0;state.progress[w.id]=Math.max(state.progress[w.id]||0,value);if(value>0){const day=today();if(state.settings.lastStudy!==day){state.settings.streak=(state.settings.streak||0)+1;state.settings.lastStudy=day}}save();state.index++;state.revealed=false;renderCard()}
function finishStudy(){$('flashcard').classList.add('hidden');$('rating-actions').classList.add('hidden');$('study-complete').classList.remove('hidden');$('study-progress-bar').style.width='100%';$('completion-copy').textContent=`你完成了 ${state.queue.length} 張字卡，明天再來走一小步。`}
document.addEventListener('click',e=>{const nav=e.target.closest('[data-screen]');if(nav)navigate(nav.dataset.screen);const courseStudy=e.target.closest('[data-course-study]');if(courseStudy)startCourseStudy(courseStudy.dataset.courseStudy);const courseWordsButton=e.target.closest('[data-course-words]');if(courseWordsButton)openCourseWords();const speakButton=e.target.closest('[data-speak]');if(speakButton)speak(speakButton.dataset.speak);const star=e.target.closest('[data-star]');if(star){const id=star.dataset.star;state.starred.has(id)?state.starred.delete(id):state.starred.add(id);save();renderWords()}const category=e.target.closest('[data-category]');if(category){state.category=category.dataset.category;renderWords()}});
$('start-study').onclick=()=>startStudy();$('back-home').onclick=()=>navigate('home');$('exit-study').onclick=()=>navigate('home');$('reveal-card').onclick=reveal;document.querySelectorAll('.rating').forEach(btn=>btn.onclick=()=>rate(btn.dataset.rating));$('word-search').addEventListener('input',e=>{state.query=e.target.value;renderWords()});$('sound-toggle').onclick=()=>{state.sound=!state.sound;$('sound-toggle').textContent=state.sound?'🔊':'🔇';toast(state.sound?'已開啟發音':'已關閉發音')};$('voice-select').addEventListener('change',e=>{state.settings.voiceName=e.target.value;save();renderVoiceOptions();toast(e.target.value?'已切換韓語語音':'已恢復自動選擇語音')});$('rate-select').value=String(state.settings.rate||.78);$('rate-select').addEventListener('change',e=>{state.settings.rate=Number(e.target.value);save();toast(`播放速度：${e.target.options[e.target.selectedIndex].text}`)});$('voice-test').onclick=()=>speak('안녕하세요. 처음 뵙겠습니다.');
renderHome();renderCourse();renderPronunciation();renderWords();renderAlphabet();renderGrammar();renderPatterns();refreshKoreanVoices();if(window.speechSynthesis)window.speechSynthesis.addEventListener?.('voiceschanged',refreshKoreanVoices);if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
