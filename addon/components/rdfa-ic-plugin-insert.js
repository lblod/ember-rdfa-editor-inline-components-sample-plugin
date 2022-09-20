import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class RdfaIcPluginInsertComponent extends Component {
  @action
  insertCounter() {
    this.args.controller.perform((transaction) => {
      transaction.commands.insertComponent({
        componentName: 'inline-components/counter'
      })
    });
  }

  @action
  insertDropdown() {
    this.args.controller.perform((transaction) => {
      transaction.commands.insertComponent({
        componentName: 'inline-components/dropdown'
      })
    });
  }

  @action
  insertImage() {
    this.args.controller.perform((transaction) => {
      transaction.commands.insertComponent({
        componentName: 'inline-components/image',
        props: { imageUrl: ''},
      })
    });
  }

  @action
  insertCard() {
    this.args.controller.perform((transaction) => {
      transaction.commands.insertComponent({
        componentName: 'inline-components/card',
      })
    });
  }
}
