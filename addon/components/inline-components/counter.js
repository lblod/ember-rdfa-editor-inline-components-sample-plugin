import { action } from '@ember/object';
import InlineComponent from '@lblod/ember-rdfa-editor/components/inline-components/inline-component';
export default class InlineComponentsCounter extends InlineComponent {
  @action
  click() {
    this.setStateProperty('count', this.count + 1);
  }

  get count() {
    return this.getStateProperty('count') || 0;
  }
}
