export interface AnnouncementArticleLanguage {
  code?: string;
  name?: string;
}

export interface AnnouncementArticle {
  id?: number;
  title?: string;
  brief?: string;
  created?: string;
  updated?: string;
  release_time?: string;
  views?: number;
  author?: string;
  author_id?: number;
  tags?: string;
  cate?: string;
  is_top?: number;
  cate_id?: number;
  source?: string;
  content_lang_list?: AnnouncementArticleLanguage[];
}

export interface AnnouncementArticleListData {
  list?: AnnouncementArticle[];
  total?: number;
}

export interface AnnouncementArticleListResponse {
  code?: number;
  data?: AnnouncementArticleListData;
  message?: string;
  version?: string;
}
