# Implementation Plan: bridal-stack (Home Expansion)

## Tasks

### 5. ルーティングの刷新と既存機能の移設
- [x] 5.1 既存の `src/app/page.tsx` の内容を `src/app/setlist/page.tsx` へ移設
  - セットリスト専用の個別ページとして構成
  - _Requirements: F04_
- [x] 5.2 共通レイアウト (`src/app/layout.tsx`) の調整
  - 全画面に `BottomNav` を表示し、ホームへのリンクを設ける
  - _Requirements: F04_

### 6. ホーム画面（ポータル）の実装
- [x] 6.1 新しいホーム画面 (`src/app/page.tsx`) の作成
  - ウェルカムメッセージの表示
  - _Requirements: F03_
- [x] 6.2 タイル型メニューボタン (`MenuTile`) コンポーネントの作成
  - 押しやすいサイズのグリッド表示
  - 各種アイコンの配置
  - _Requirements: F03_

### 7. 追加コンテンツ画面の実装
- [x] 7.1 館内図画面 (`src/app/map/page.tsx`) の作成
  - _Requirements: F05_
- [x] 7.2 スケジュール画面 (`src/app/schedule/page.tsx`) の作成
  - タイムライン形式のリスト表示
  - _Requirements: F05_

### 8. ナビゲーションの改善
- [x] 8.1 BottomNav の更新
  - 不要な「Profile」ボタンを削除
  - 「Home」「Setlist」の2大メニューに集約
  - 現在のパスに応じたアクティブ状態の表示切り替え
  - _Requirements: F04_

### 9. セットリストの拡充とUIの微調整
- [x] 9.1 セットリストへの楽曲追加（Opening Movie, Profile Movie）
- [x] 9.2 全楽曲の「選曲の想い」の更新
- [x] 9.3 ホーム画面のメッセージ更新とミニマル化（タイトル・サブタイトルの整理）
- [x] 9.4 ネタバレ防止ダイアログの表示頻度改善（1セッション1回）
- [x] 9.5 静的サイトエクスポート設定の有効化

### 10. エンジニア向け公開準備
- [x] 10.1 GitHubリンクコンポーネントの作成
- [x] 10.2 共通レイアウトへの配置と右下固定配置のスタイリング
- [x] 10.3 プロジェクト紹介用README.mdの作成
- [x] 10.4 Gitコミット・プッシュ

### 11. 音楽サブスクリプションリンクの拡張
- [x] 11.1 型定義 (`src/types/setlist.ts`) に Spotify, Apple Music などのURLフィールドを追加
- [x] 11.2 `SongDetail` コンポーネントのUIを更新し、各プラットフォームへのリンクボタンを配置
- [x] 11.3 `setlist.json` の全12曲に対して、各プラットフォームのURLを調査して追記
- [x] 11.4 変更をコミットしてGitへプッシュ

