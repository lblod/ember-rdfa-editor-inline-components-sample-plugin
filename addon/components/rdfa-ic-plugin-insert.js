import Component from '@glimmer/component';
import { action } from '@ember/object';

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
}
