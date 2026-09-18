/** POST /ann/list_article */

export interface ListAnnouncementArticlesReq {
  title_query?: string;
  page?: string;
  size?: string;
  tags?: string;
  timer?: string;
  cate_name?: string;
  cate_level?: string;
  sub_website_id?: string;
  pinned?: number;
  update_after?: number;
  lang?: string;
  filter_empty_content?: number;
}
