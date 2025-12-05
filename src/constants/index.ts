import type { MetaData } from '@sharedTypes/index';

export const COMMIT_HASH = import.meta.env.COMMIT_HASH;

export const META_COMMON: MetaData = {
  title: 'META_COMMON title',
  description: 'META_COMMON description',
  keywords: '',
};

export const SITE = {
  ROOT: `${import.meta.env.PUBLIC_DOMAIN}${import.meta.env.PUBLIC_BASE}/`,
  DOMAIN: import.meta.env.PUBLIC_DOMAIN,
  BASE: import.meta.env.PUBLIC_BASE,
  SHARE_TEXT: 'シェアテキスト',
  SHARE_HASH: 'ハッシュタグA,ハッシュタグB',
};
