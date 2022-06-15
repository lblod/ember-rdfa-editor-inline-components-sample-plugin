import Controller from '@lblod/ember-rdfa-editor/model/controller';
import { InlineComponentSpec } from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';
import { DomNodeMatcher } from '@lblod/ember-rdfa-editor/model/mark';
import { AttributeSpec } from '@lblod/ember-rdfa-editor/model/util/render-spec';
import { isElement } from '@lblod/ember-rdfa-editor/utils/dom-helpers';

export default class ImageSpec extends InlineComponentSpec {
  matcher: DomNodeMatcher<AttributeSpec> = {
    tag: this.tag,
    attributeBuilder: (node) => {
      if (isElement(node)) {
        if (
          node.classList.contains('inline-component') &&
          node.classList.contains(this.name)
        ) {
          return {};
        }
      }
      return null;
    },
  };
  _renderStatic() {
    return `
      <p>Image</p>
    `;
  }
  constructor(controller: Controller) {
    super('inline-components/image', 'span', controller);
  }
}
