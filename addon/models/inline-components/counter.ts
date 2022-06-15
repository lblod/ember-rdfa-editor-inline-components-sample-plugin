import Controller from '@lblod/ember-rdfa-editor/model/controller';
import {
  InlineComponentSpec,
  Properties,
  State,
} from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';
import { DomNodeMatcher } from '@lblod/ember-rdfa-editor/model/mark';
import { AttributeSpec } from '@lblod/ember-rdfa-editor/model/util/render-spec';
import { isElement } from '@lblod/ember-rdfa-editor/utils/dom-helpers';

export interface CounterState extends State {
  count: number | undefined;
}

export default class CounterSpec extends InlineComponentSpec {
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
  _renderStatic(_props?: Properties, state?: State): string {
    const count = state?.count?.toString() || '0';
    return `
      <p>${count}</p>
    `;
  }
  constructor(controller: Controller) {
    super('inline-components/counter', 'span', controller);
  }
}
