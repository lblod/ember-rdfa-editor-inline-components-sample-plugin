import Controller from '@lblod/ember-rdfa-editor/model/controller';
import { InlineComponentSpec } from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';

export default class ImageSpec extends InlineComponentSpec {
  _renderStatic() {
    return `
      <p>Image</p>
    `;
  }
  constructor(controller: Controller) {
    super('inline-components/image', 'span', controller);
  }
}
