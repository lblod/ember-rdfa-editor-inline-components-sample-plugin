import { action } from '@ember/object';
import InlineComponent from '@lblod/ember-rdfa-editor/components/inline-components/inline-component';
import { Properties } from '@lblod/ember-rdfa-editor/model/inline-components/model-inline-component';

export interface ImageProps extends Properties {
  imageUrl: string;
}
export default class InlineComponentsImage extends InlineComponent<ImageProps> {
  get image() {
    return this.props.imageUrl;
  }

  get selected() {
    return (this.getStateProperty('selected') as boolean) || false;
  }

  @action
  select() {
    this.setStateProperty('selected', true);
  }
}
