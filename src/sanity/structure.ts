import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Management')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.documentTypeListItem('businessInfo').title('Business Info'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Home')
        .child(
          S.list()
            .title('Home')
            .items([
              S.documentTypeListItem('heroSlide').title('Hero Slides'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
            ])
        ),
      S.listItem()
        .title('Services')
        .child(
          S.list()
            .title('Services')
            .items([
              S.documentTypeListItem('service').title('Services'),
            ])
        ),
      S.listItem()
        .title('About')
        .child(
          S.list()
            .title('About')
            .items([
              S.documentTypeListItem('teamMember').title('Team Members'),
              S.documentTypeListItem('milestone').title('Milestones'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),
    ])
