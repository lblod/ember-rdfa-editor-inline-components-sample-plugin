import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class RdfaIcPluginInsertComponent extends Component {
  @action
  insertCounter() {
    this.args.controller.executeCommand(
      'insert-component',
      'inline-components/counter'
    );
  }

  @action
  insertDropdown() {
    this.args.controller.executeCommand(
      'insert-component',
      'inline-components/dropdown'
    );
  }

  @action
  insertImage() {
    const props = {
      imageUrl: '',
    };
    this.args.controller.executeCommand(
      'insert-component',
      'inline-components/image',
      props
    );
  }
}
