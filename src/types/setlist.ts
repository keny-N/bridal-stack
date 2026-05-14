export interface SetlistItem {
  id: string;
  scene_name: string;
  song_title: string;
  artist_name: string;
  album_name?: string;
  performance_notes?: string;
  message: string;
  lyrics: string;
  lyrics_url?: string;
  youtube_url?: string;
}