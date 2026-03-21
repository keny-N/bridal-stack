# Requirements Document (bridal-stack)

## Project Description (Input)
結婚式のゲスト向けポータルアプリ。ホーム画面を起点とし、セットリスト、結婚式場の公式サイト、館内図、当日のスケジュールへアクセスできるようにする。

## Introduction
本ドキュメントは、機能拡張された「bridal-stack」の要件を定義します。ゲストが最初に目にするホーム画面を「ポータル（玄関口）」とし、直感的なボタン配置によって各情報へ迷わず辿り着けるようにします。

## Requirements

### Requirement 1: ポータル型ホーム画面 (F03)
**Objective:** As a ゲスト, I want アプリを開いた時に全てのメニューを俯瞰したい, so that 必要な情報（セットリストやスケジュール等）をすぐに選べる

#### Acceptance Criteria
1. When アプリのルートURL（/）にアクセスする, the システム shall ホーム画面を表示する
2. The ホーム画面 shall 以下の4つのメインボタン（タイル形式）を表示する
   - **セットリスト**: アプリ内のセットリスト画面へ遷移
   - **式場公式サイト**: ホテルの外部サイトへ遷移（別タブ）
   - **館内図**: 館内図画面へ遷移
   - **本日の予定**: スケジュール画面へ遷移
3. The システム shall 結婚式らしい華やかで落ち着いたウェルカムメッセージを表示する

### Requirement 2: 画面遷移とナビゲーション (F04)
**Objective:** As a ゲスト, I want 各画面からホームに戻ったり、別の画面へ移りたい, so that スムーズに情報を閲覧できる

#### Acceptance Criteria
1. The システム shall `/setlist`, `/map`, `/schedule` の各パスで各機能を提供する
2. The システム shall 全ての画面下部のナビゲーションバー（BottomNav）から「ホーム」へ一タップで戻れるようにする
3. The システム shall 外部サイトへの遷移時、ゲストがアプリを閉じないよう別タブ（target="_blank"）で開く

### Requirement 3: 追加コンテンツ画面 (F05)
**Objective:** As a ゲスト, I want 館内図やスケジュールを確認したい, so that 当日の行動に迷わない

#### Acceptance Criteria
1. The システム shall 館内図画面 (`/map`) において、画像またはテキストで式場案内を表示する
2. The システム shall スケジュール画面 (`/schedule`) において、挙式・披露宴のタイムラインを表示する
