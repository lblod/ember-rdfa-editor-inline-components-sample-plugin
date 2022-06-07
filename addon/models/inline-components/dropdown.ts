import { InlineComponentSpec } from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';

export default class DropdownSpec extends InlineComponentSpec {
  _renderStatic() {
    return `
      <p>Regulatory Attachment</p>
    `;
  }
  constructor() {
    super('inline-components/dropdown', 'span');
  }
}
