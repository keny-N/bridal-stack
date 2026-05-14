# Requirements Document (bridal-stack)

## Project Description (Input)
結婚式のゲスト向けBGMセットリスト共有アプリ。新郎新婦の選曲の想いをゲストに伝えることに特化する。

## Introduction
本ドキュメントは、セットリスト共有に特化した「bridal-stack」の要件を定義します。ゲストが迷わずセットリストに辿り着き、披露宴の演出をより深く楽しめるようにします。

## Requirements

### Requirement 1: ホーム画面 (F03)
**Objective:** As a ゲスト, I want アプリを開いた時にすぐにセットリストへアクセスしたい

#### Acceptance Criteria
1. When アプリのルートURL（/）にアクセスする, the システム shall ホーム画面を表示する
2. The ホーム画面 shall セットリスト画面への明確な導線（ボタン）を表示する
3. The システム shall ゲストを歓迎する温かいメッセージを表示する

### Requirement 2: 画面遷移とナビゲーション (F04)
**Objective:** As a ゲスト, I want ホームとセットリストをスムーズに行き来したい

#### Acceptance Criteria
1. The システム shall `/`（ホーム）と `/setlist`（セットリスト）の2画面を提供する
2. The システム shall 全ての画面下部のナビゲーションバー（BottomNav）から「ホーム」と「セットリスト」へ移動できるようにする

### Requirement 3: ネタバレ防止機能付きセットリスト (F06)
**Objective:** As a ゲスト, I want 演出のワクワク感を損なわずにセットリストを楽しみたい

#### Acceptance Criteria
1. The システム shall シーン名のみを表示し、タップして確認ダイアログに同意した後に初めて曲名とメッセージを表示する
2. The システム shall 各楽曲の詳細において「選曲の想い」を表示する
3. The システム shall YouTubeへのリンクを提供し、その場で楽曲を確認できるようにする
4. The システム shall ネタバレ防止の確認ダイアログを、1セッション（ブラウザを閉じるまで）につき1回のみ表示し、利便性を確保する
