// このファイルを直接編集するか、sync.py で自動生成してください。
// 構造: 1グループ = 1案件タイトル、バナーA/B/C... は banners 配列に格納
const CASES_DATA = [
  {
    groupId: 'G001',
    title: 'エンタメ春の大セール',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A91EN4S4F/p1779363178037939',
    banners: [
      { id: 70, name: 'A', start: '2026/05/01', end: '2026/08/31', images: 'm.png',   saveUrl: '', wpUrl: '', copy: '【大バナー】ゆるっとエンタメ一番ノリ！ 8月31日まで\n【小バナー】豊富なラインナップ！', url: '/feat/2045/' },
      { id: 70, name: 'B', start: '2026/05/01', end: '2026/08/31', images: 'm-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】ゆるっとエンタメ一番ノリ！ 8月31日まで\n【小バナー】豊富なラインナップ！', url: '/feat/2045/' },
      { id: 71, name: 'C', start: '2026/06/01', end: '2026/09/30', images: 'm-2.png', saveUrl: '', wpUrl: 'https://example-wp.com/admin', copy: '【大バナー】ゆるっとエンタメ一番ノリ！\n【小バナー】豊富なラインナップ！', url: '/feat/2046/' }
    ]
  },
  {
    groupId: 'G002',
    title: 'ファッションセール夏',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363099332379',
    banners: [
      { id: 72, name: '', start: '2026/06/01', end: '2026/08/31', images: 'fashion.png, fashion-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】夏コーデを今すぐチェック！\n【小バナー】トレンドアイテム続々入荷', url: '/feat/2047/' }
    ]
  },
  {
    groupId: 'G003',
    title: '旅行・レジャー特集',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363127407169',
    banners: [
      { id: 73, name: '', start: '2026/06/15', end: '2026/09/15', images: 'travel.png, travel-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】夏旅を、もっと自由に。\n【小バナー】国内外プラン多数掲載中', url: '/feat/2048/' }
    ]
  },
  {
    groupId: 'G004',
    title: 'グルメフェスタ2026',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A91EN4S4F/p1779363178037939',
    banners: [
      { id: 74, name: '', start: '2026/07/01', end: '2026/07/31', images: 'food.png, food-1.png, food-2.png', saveUrl: '', wpUrl: '', copy: '【大バナー】食の祭典、開幕！\n【小バナー】全国グルメを食べ比べ', url: '/feat/2049/' }
    ]
  },
  {
    groupId: 'G005',
    title: '美容・コスメキャンペーン',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363099332379',
    banners: [
      { id: 75, name: '', start: '2026/05/15', end: '2026/06/30', images: 'beauty.png, beauty-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】あなたの美を、もっと輝かせる。\n【小バナー】人気コスメが最大50%OFF', url: '/feat/2050/' }
    ]
  },
  {
    groupId: 'G006',
    title: 'スポーツ用品夏特集',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363127407169',
    banners: [
      { id: 76, name: '', start: '2026/06/01', end: '2026/08/15', images: 'sports.png, sports-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】この夏、もっと動け。\n【小バナー】人気ブランド勢揃い', url: '/feat/2051/' }
    ]
  },
  {
    groupId: 'G007',
    title: 'ホーム&リビングフェア',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A91EN4S4F/p1779363178037939',
    banners: [
      { id: 77, name: '', start: '2026/07/10', end: '2026/08/10', images: 'home.png, home-1.png, home-2.png', saveUrl: '', wpUrl: '', copy: '【大バナー】暮らしを、心地よく整える。\n【小バナー】インテリア新作一挙公開', url: '/feat/2052/' }
    ]
  },
  {
    groupId: 'G008',
    title: 'ブック&カルチャー祭',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363099332379',
    banners: [
      { id: 78, name: '', start: '2026/05/20', end: '2026/06/20', images: 'book.png, book-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】知識と感動、ひとつの場所で。\n【小バナー】話題の新刊・ベストセラー特集', url: '/feat/2053/' }
    ]
  },
  {
    groupId: 'G009',
    title: 'テクノロジー新製品発表',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363127407169',
    banners: [
      { id: 79, name: '', start: '2026/08/01', end: '2026/09/30', images: 'tech.png, tech-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】未来を、先取りしよう。\n【小バナー】最新ガジェット一挙紹介', url: '/feat/2054/' }
    ]
  },
  {
    groupId: 'G010',
    title: 'アウトドア夏特集',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A91EN4S4F/p1779363178037939',
    banners: [
      { id: 80, name: '', start: '2026/06/20', end: '2026/08/20', images: 'outdoor.png, outdoor-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】自然と、思い切り遊ぼう。\n【小バナー】キャンプ・登山用品特集', url: '/feat/2055/' }
    ]
  },
  {
    groupId: 'G011',
    title: 'ペット用品フェア',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363099332379',
    banners: [
      { id: 81, name: '', start: '2026/07/01', end: '2026/07/31', images: 'pet.png, pet-1.png, pet-2.png', saveUrl: '', wpUrl: '', copy: '【大バナー】大切な家族に、最高のケアを。\n【小バナー】人気ペット用品が集結', url: '/feat/2056/' }
    ]
  },
  {
    groupId: 'G012',
    title: 'キッズ&ファミリーデー',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363127407169',
    banners: [
      { id: 82, name: '', start: '2026/07/20', end: '2026/08/31', images: 'kids.png, kids-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】家族みんなで楽しもう！\n【小バナー】夏休みを盛り上げるアイテム勢揃い', url: '/feat/2057/' }
    ]
  },
  {
    groupId: 'G013',
    title: 'ゲーム&アニメフェスタ',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A91EN4S4F/p1779363178037939',
    banners: [
      { id: 83, name: '', start: '2026/08/10', end: '2026/09/10', images: 'game.png, game-1.png, game-2.png', saveUrl: '', wpUrl: '', copy: '【大バナー】推しと過ごす、最高の夏。\n【小バナー】限定グッズ・コラボアイテム多数', url: '/feat/2058/' }
    ]
  },
  {
    groupId: 'G014',
    title: '健康&フィットネス特集',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363099332379',
    banners: [
      { id: 84, name: '', start: '2026/05/01', end: '2026/06/30', images: 'health.png, health-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】カラダを、もっと好きになる。\n【小バナー】フィットネス用品・サプリ特集', url: '/feat/2059/' }
    ]
  },
  {
    groupId: 'G015',
    title: '音楽&エンタメ秋の陣',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363127407169',
    banners: [
      { id: 85, name: '', start: '2026/09/01', end: '2026/10/31', images: 'music.png, music-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】秋の夜長は、音楽とともに。\n【小バナー】ライブ・配信チケット先行受付中', url: '/feat/2060/' }
    ]
  },
  {
    groupId: 'G016',
    title: 'フード宅配キャンペーン',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A91EN4S4F/p1779363178037939',
    banners: [
      { id: 86, name: '', start: '2026/06/01', end: '2026/07/31', images: 'delivery.png, delivery-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】おうちで、レストランの味を。\n【小バナー】初回送料無料キャンペーン実施中', url: '/feat/2061/' }
    ]
  },
  {
    groupId: 'G017',
    title: 'ウェルネス週間',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363099332379',
    banners: [
      { id: 87, name: '', start: '2026/07/07', end: '2026/07/13', images: 'wellness.png, wellness-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】心と体を、リセットしよう。\n【小バナー】ヨガ・瞑想・スパ特集', url: '/feat/2062/' }
    ]
  },
  {
    groupId: 'G018',
    title: '学習&教育コンテンツ特集',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A9AGK24SX/p1779363127407169',
    banners: [
      { id: 88, name: '', start: '2026/08/20', end: '2026/09/20', images: 'edu.png, edu-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】学びを、もっと身近に。\n【小バナー】オンライン講座・参考書が勢揃い', url: '/feat/2063/' }
    ]
  },
  {
    groupId: 'G019',
    title: '秋の大感謝祭',
    submitUrl: '',
    slack: 'https://kojohomehq.slack.com/archives/C0A91EN4S4F/p1779363178037939',
    banners: [
      { id: 89, name: '', start: '2026/10/01', end: '2026/10/31', images: 'thanks.png, thanks-1.png', saveUrl: '', wpUrl: '', copy: '【大バナー】ありがとう、を全力でお返しします。\n【小バナー】全ジャンル対象セール開催', url: '/feat/2064/' }
    ]
  }
];
