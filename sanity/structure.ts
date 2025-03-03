import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Dashboard')
    .items([
      S.documentTypeListItem('car').title('Cars').id('custom-car-id'),
      S.documentTypeListItem('post').title('Posts').id('custom-post-id'),
      S.documentTypeListItem('author').title('Authors').id('custom-author-id'),
      S.divider(),
    ]);
