import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class InlineComponentsCounter extends Component {
  get componentController() {
    return this.args.componentController;
  }

  @action
  click() {
    this.componentController.setStateProperty('count', this.count + 1);
  }

  get count() {
    return this.componentController.getStateProperty('count') || 0;
  }
}
