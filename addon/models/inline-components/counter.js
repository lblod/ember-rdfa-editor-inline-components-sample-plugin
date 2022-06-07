import { InlineComponentSpec } from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';

export default class CounterSpec extends InlineComponentSpec {
  _renderStatic(_props, state) {
    const count = state?.count?.toString() || '0';
    return `
      <p>${count}</p>
    `;
  }
  constructor() {
    super('inline-components/counter', 'span');
  }
}
