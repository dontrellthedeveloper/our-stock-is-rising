import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  name: 'default',
  title: 'Our Stock Is Rising | Admin',

  projectId: 'vv968gc9',
  dataset: 'production',

  plugins: [markdownSchema(), deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
