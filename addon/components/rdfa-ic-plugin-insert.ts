import { action } from '@ember/object';
import Component from '@glimmer/component';
import Controller from '@lblod/ember-rdfa-editor/model/controller';
import { ImageProps } from './inline-components/image';

interface Args {
  controller: Controller;
}
export default class RdfaIcPluginInsertComponent extends Component<Args> {
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
    const props: ImageProps = {
      imageUrl: '',
    };
    this.args.controller.executeCommand(
      'insert-component',
      'inline-components/image',
      props
    );
  }
}
