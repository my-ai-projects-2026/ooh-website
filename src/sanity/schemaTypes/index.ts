import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { businessInfoType } from './businessInfoType'
import { heroSlideType } from './heroSlideType'
import { serviceType } from './serviceType'
import { testimonialType } from './testimonialType'
import { teamMemberType } from './teamMemberType'
import { milestoneType } from './milestoneType'
import { projectType } from './projectType'
import { partnerType } from './partnerType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    businessInfoType,
    heroSlideType,
    serviceType,
    testimonialType,
    teamMemberType,
    milestoneType,
    projectType,
    partnerType,
  ],
}
