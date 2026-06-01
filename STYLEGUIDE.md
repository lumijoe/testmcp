# Style Guide

pattern8.html をベースにしたカラー・余白・タイポグラフィの構成です。
Tailwind CSS の **Slate** カラースケールをベースに構成しています。

---

## Color Palette

### Background

| 用途 | HEX | 説明 |
|---|---|---|
| ページ背景 | `#f1f5f9` | slate-100 |
| カード・テーブル | `#ffffff` | white |
| テーブルヘッダー | `#f8fafc` | slate-50 |
| テーブル行 hover | `#f8fafc` | slate-50 |
| ポップアップ内アイテム背景 | `#f8fafc` | slate-50 |
| ポップアップオーバーレイ | `rgba(0,0,0,.4)` | 黒40% |

### Text

| 用途 | HEX | 説明 |
|---|---|---|
| メインテキスト | `#1e293b` | slate-800 |
| テーブルセル | `#334155` | slate-700 |
| ヘッダーラベル・補助テキスト | `#64748b` | slate-500 |
| サブテキスト（ID・ラベル） | `#94a3b8` | slate-400 |
| 無効・空欄 | `#cbd5e1` | slate-300 |

### Border / Divider

| 用途 | HEX | 説明 |
|---|---|---|
| メイン罫線 | `#e2e8f0` | slate-200 |
| グループ区切り（太め） | `#e8ecf0` | slate-200 寄り |
| 細かい区切り | `#f1f5f9` | slate-100 |
| テーブル行下線 | `#f8fafc` | slate-50 |

### Button

| 用途 | HEX | 説明 |
|---|---|---|
| 背景（通常） | `#f1f5f9` | slate-100 |
| 背景（hover） | `#e2e8f0` | slate-200 |
| テキスト | `#475569` | slate-600 |

### Status Badge

| ステータス | 背景 | テキスト |
|---|---|---|
| 掲載予定 | `#dbeafe` | `#1d4ed8`（blue-700） |
| 掲載中 | `#dcfce7` | `#15803d`（green-700） |
| 終了間近 | `#fef9c3` | `#a16207`（yellow-700） |

### Special

| 用途 | HEX / 値 |
|---|---|
| Slackボタン背景 | `#4a154b`（Slack purple） |
| コピー完了チェック色 | `#16a34a`（green-600） |

---

## Shadow

| 用途 | 値 |
|---|---|
| カード | `0 1px 3px rgba(0,0,0,.08)` |
| ポップアップ | `0 20px 60px rgba(0,0,0,.2)` |

---

## Border Radius

| 用途 | 値 |
|---|---|
| カード | `12px` |
| ポップアップ | `16px` |
| ボタン（通常） | `5px` |
| ボタン（小） | `4px` |
| バナータグ | `4px` |
| バッジ | `20px`（pill） |
| アイコンボタン（丸め） | `6px` |
| ポップアップ内アイテム | `8px` |

---

## Spacing

### Padding

| 用途 | 値 |
|---|---|
| ページ余白（PC） | `24px` |
| カード内（SP case） | `14px 16px` |
| テーブルヘッダーセル | `10px 16px` |
| テーブルデータセル | `12px 16px` |
| ボタン（通常） | `4px 8px` |
| ボタン（小） | `3px 8px` |
| アイコンボタン | `28px × 28px`（固定） |
| ポップアップヘッダー | `18px 24px` |
| ポップアップボディ | `16px 24px` |
| ポップアップ行 | `10px 12px` |

### Gap

| 用途 | 値 |
|---|---|
| バナーアイテム間 | `8px` |
| ファイル名とタグ間 | `6px` |
| アイコン横並び間 | `4px` |
| ボタン群間 | `6px` |
| SP case 右エリア間 | `6px` |
| ポップアップ行内 | `8px` |

---

## Typography

### Font Family

```
-apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Yu Gothic UI', sans-serif
```

### Font Size

| 用途 | サイズ | weight |
|---|---|---|
| SP案件タイトル | `14px` | 600 |
| PC案件タイトル | `13px` | 600 |
| テーブルセル・ボタン | `12px` / `11px` | 400 |
| テーブルヘッダー | `11px` | 600 |
| サブテキスト（ID・ラベル） | `11px` | 600 |
| バッジ | `11px` | 600 |
| コピーボタン・小ラベル | `10px` | 400 / 700 |

---

## Breakpoint

| 名称 | 値 | 説明 |
|---|---|---|
| SP | `≤ 768px` | カード縦スタックレイアウト |
| PC | `> 768px` | 3列テーブルレイアウト |

---

## Component Summary

```
ページ背景    #f1f5f9
  └ カード    #ffffff  shadow: 0 1px 3px rgba(0,0,0,.08)  radius: 12px
       ├ テーブルヘッダー  #f8fafc  border-bottom: #e2e8f0
       ├ テーブル行       #ffffff  border-bottom: #f8fafc  hover: #f8fafc
       │   ├ メインテキスト  #1e293b
       │   ├ 補助テキスト   #94a3b8
       │   ├ ボタン         bg:#f1f5f9  text:#475569  radius:5px
       │   └ バッジ         色はステータスによる  radius:20px
       └ グループ区切り  border-top: 2px solid #e8ecf0
```
