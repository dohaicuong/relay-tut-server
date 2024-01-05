import SchemaBuilder from '@pothos/core'
import RelayPlugin from '@pothos/plugin-relay'
import SimpleObjectsPlugin from '@pothos/plugin-simple-objects'
import ErrorsPlugin from '@pothos/plugin-errors'

export const builder = new SchemaBuilder({
  plugins: [RelayPlugin, SimpleObjectsPlugin, ErrorsPlugin],

  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'String',
  },

  errorOptions: {
    defaultTypes: [Error]
  }
})
