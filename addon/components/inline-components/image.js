import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class InlineComponentsImage extends Component {
  get componentController() {
    return this.args.componentController;
  }
  get image() {
    return this.componentController.props.imageUrl;
  }

  get selected() {
    return this.componentController.getStateProperty('selected') || false;
  }

  @action
  select() {
    this.componentController.setStateProperty('selected', true);
  }
}
