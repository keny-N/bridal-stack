# Implementation Plan: bridal-stack (Home Expansion)

## Tasks

### 5. ルーティングの刷新と既存機能の移設
- [ ] 5.1 既存の `src/app/page.tsx` の内容を `src/app/setlist/page.tsx` へ移設
  - セットリスト専用の個別ページとして構成
  - _Requirements: F04_
- [ ] 5.2 共通レイアウト (`src/app/layout.tsx`) の調整
  - 全画面に `BottomNav` を表示し、ホームへのリンクを設ける
  - _Requirements: F04_

### 6. ホーム画面（ポータル）の実装
- [ ] 6.1 新しいホーム画面 (`src/app/page.tsx`) の作成
  - ウェルカムメッセージの表示
  - _Requirements: F03_
- [ ] 6.2 タイル型メニューボタン (`MenuTile`) コンポーネントの作成
  - 押しやすいサイズのグリッド表示
  - 各種アイコンの配置
  - _Requirements: F03_

### 7. 追加コンテンツ画面の実装
- [ ] 7.1 館内図画面 (`src/app/map/page.tsx`) の作成
  - _Requirements: F05_
- [ ] 7.2 スケジュール画面 (`src/app/schedule/page.tsx`) の作成
  - タイムライン形式のリスト表示
  - _Requirements: F05_

### 8. ナビゲーションの改善
- [ ] 8.1 BottomNav の更新
  - 不要な「Profile」ボタンを削除
  - 「Home」「Setlist」の2大メニューに集約
  - 現在のパスに応じたアクティブ状態の表示切り替え
  - _Requirements: F04_
