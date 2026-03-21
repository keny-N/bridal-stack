# Implementation Plan: bridal-stack

## Tasks

### 1. プロジェクト初期化と環境構築
- [x] 1.1 Next.js (App Router) + TypeScript プロジェクトのセットアップ
- [x] 1.2 グローバルスタイルとテーマカラーの設定
  - _Requirements: NF01_

### 2. データ層の実装
- [x] 2.1 静的データファイル (setlist.json) の作成
  - _Requirements: F01, F02_
- [x] 2.2 データ型の定義 (TypeScript Interface)
  - _Requirements: F01, F02_

### 3. UIコンポーネントの実装
- [x] 3.1 共通レイアウト (Header, Footer/BottomNav) の作成
- [x] 3.2 セットリスト一覧画面 (SetlistContainer) の実装
- [x] 3.3 アコーディオン形式の詳細表示 (SetlistItem, SongDetail) の実装
  - _Requirements: F01, F02_

### 4. ブラッシュアップと検証
- [x] 4.1 モバイル実機を想定したレスポンシブ・表示確認
  - ビルドテストによる検証完了
- [x] 4.2 GitHub リポジトリへのプッシュ準備
  - `git init` 済み、`README.md` 等の整備
