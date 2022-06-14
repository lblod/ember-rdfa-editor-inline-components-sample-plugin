import Controller from '@lblod/ember-rdfa-editor/model/controller';
import { InlineComponentSpec } from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';

export default class DropdownSpec extends InlineComponentSpec {
  _renderStatic() {
    return `
      <p>Dropdown</p>
    `;
  }
  constructor(controller: Controller) {
    super('inline-components/dropdown', 'span', controller);
  }
}
